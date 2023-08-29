<template>
    <main class="school-textbooks-container">
        <v-btn
          v-if="isAuth"
          class="mt-2 mb-5 align-self-end"
          color="primary"
          @click="openModal(null, null, 'create')"
        >
          Dodaj klasa
        </v-btn>
        
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="basil"
          grow
        >
          <v-tab
            v-for="(item, key) in schoolClasses"
            :key="key"
          >
            <span class="mr-3">{{ item.name }}</span>
            <template v-if="isAuth">
              <v-btn
                  icon
                  @click="openModal(item, key, 'Edit')"
              >
                  <svg-icon :style="{color: '#0D47A1'}" type="mdi" :path="mdiPencilOutline"></svg-icon>
              </v-btn>
              <v-btn
                  icon
                  @click="openModal(item, key, 'Delete')"
              >
                  <svg-icon :style="{color: '#EF5350'}" type="mdi" :path="mdiTrashCanOutline"></svg-icon>
              </v-btn>
            </template>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="(item, key) in schoolClasses"
            :key="key"
          >
            <div
              v-if="isAuth && computedSchoolClasses.length"
              class="edit-btn"
            >
              <v-btn
                class="ma-2 align-self-end"
                color="primary"
                @click="editorDialog=true"
              >
                {{ textbooksList?.value ? 'Edit' : 'add' }}
              </v-btn>
            </div>
            <div
              class="text-container"
              :style="noContentStyles"
            >
              <div
                v-if="textbooksList?.value"
                v-html="textbooksList?.value"
                class="text-value"
              />
              <div
                  v-else-if="!textbooksList?.value && loading"
                  class="d-flex justify-center ma-5"
              >
                <v-progress-circular
                    indeterminate
                    color="primary"
                />
              </div>
              <div
                v-if="!textbooksList?.value && !loading"
                class="no-data"
              >
                brak dostępnych danych
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>
        <HTMLEditor
          :dialog="editorDialog"
          :calendarType="currentTextbooksListType"
          @close="editorDialog=false"
        />
        <v-dialog
            v-model="classDialog"
            max-width="400"
        >
            <v-card class="pa-5">
                <v-card-title class="text-h5">{{ modalTitle || '' }}</v-card-title>
                <v-card-text v-if="isDelete">
                    Czy na pewno chcesz usunąć te zajęcia?
                </v-card-text>
                <v-card-text>
                    <v-text-field
                        ref="className"
                        v-model="form.name"
                        class="field"
                        label="Nazwa klasy"
                        type="text"
                        :rules="rules"
                        :error-messages="errorMessages"
                        hide-details="auto"
                        :disabled="isDelete"
                        required
                    />
                </v-card-text>
                <v-card-actions class="d-flex justify-end mt-5">
                    <v-btn
                        tile
                        text
                        @click="closeDialog"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        tile
                        @click="handleSchoolClass"
                        text
                    >
                        {{ action }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </main>
</template>
<script>
  import { getDatabase, ref, onValue, push, set, update, remove } from "firebase/database";
  import { v4 as uuidv4 } from 'uuid';
  import { mapGetters } from 'vuex';
  import HTMLEditor from '@/components/shared/HTMLEditor.vue';
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";

  export default {
      name: 'SchoolTextbooks',
      components: {
        HTMLEditor,
        SvgIcon,
      },
      data() {
        return {
          mdiPencilOutline,
          mdiTrashCanOutline,
          textbooksList: null,
          currentTextbooksListType: '',
          schoolClasses: [],
          tab: null,
          schoolClassesType: 'school-classes',
          editorDialog: false,
          classDialog: false,
          loading: false,
          form: {
            name: '',
            id: '',
            key: '',
          },
          error: false,
          errorMessages: '',
          modalTitle: '',
          action: '',
          rules: [
              value => !!value || 'Required',
              value => value.length > 3 || 'Must be more then 3',
          ],
        }
      },
      created() {
        this.getSchoolClasses();
      },
      computed: {
        ...mapGetters('authUser', ['isAuth', 'isLoading']),
        noContentStyles() {
          if(!this.textbooksList || !this.textbooksList.value) {
            return {
              'justify-content': 'center',
              'align-items': 'center'
            };
          }
          return {};
        },
        isDelete() {
            return this.action.toLowerCase() === 'delete';
        },
        computedSchoolClasses() {
          return Object.values(this.schoolClasses);
        },
      },
      watch: {
        tab(newVal) {
          if (this.computedSchoolClasses.length) {
            this.currentTextbooksListType = this.computedSchoolClasses[newVal].id;
            this.getSchoolTextbooksList();
          } else {
            this.currentTextbooksListType = '';
          }
        },
      },
      methods: {
        getSchoolClasses() {
            const db = getDatabase();
            const dbRef = ref(db, this.schoolClassesType);
            
            onValue(dbRef, (snapshot) => {
                this.schoolClasses = snapshot.val() || [];
            }, {
                onlyOnce: false
            });
            
        },
        addNewClass() {
            this.error = false;
            if(!this.$refs.className.value) {
                this.$refs.className.validate(true);
                this.error = true;
            }
            if(this.error) {
                return;
            }

            const db = getDatabase();
            const list = ref(db, this.schoolClassesType);
            const newListItem = push(list);
            set(newListItem, {
                name: this.form.name,
                createdAt: new Date().toString(),
                id: uuidv4(),
            }).then(() => {
                this.closeDialog();
            }).catch((err) => {
                console.error(err);
            })
        },
        editClass() {
            const db = getDatabase();
            const dbRef = ref(db, `${this.schoolClassesType}/${this.form.key}`);
            const data = {
                name: this.form.name,
            }

            update(dbRef, data)
            .then(() => {
                this.closeDialog();
            }).catch((err) => {
                console.error(err);
            })
        },
        deleteClass() {
            const db = getDatabase();
            const dbRef = ref(db, `${this.schoolClassesType}/${this.form.key}`);

            remove(dbRef)
            .then(() => {
                this.closeDialog();
            })
            .catch((err) => {
                console.error(err);
            })
            this.deleteSchoolTextbookList();
        },
        openModal(item, key, action) {
            this.classDialog = true;

            if(action.toLowerCase() === 'edit' || action.toLowerCase() === 'delete') {
                this.form.name = item.name;
                this.form.key = key;
                this.currentTextbooksListType = item.id;
            }
            
            this.modalTitle = `${action} klas`;
            this.action = action.toLowerCase();
        },
        closeDialog() {
            this.classDialog = false;
            this.form.name = '';
            this.form.id = '';
        },
        handleSchoolClass() {
            if (this.action.toLowerCase() === 'create') {
                this.addNewClass();
            } else if (this.action.toLowerCase() === 'edit') {
                this.editClass();
            } else if (this.action.toLowerCase() === 'delete') {
                this.deleteClass();
            }
        },
        getSchoolTextbooksList() {
          this.loading = true;
          const db = getDatabase();
          const dbRef = ref(db, this.currentTextbooksListType);

          onValue(dbRef, (snapshot) => {
            this.textbooksList = snapshot.val() || '';
          }, {
            onlyOnce: false,
          });
          this.loading = false;
        },
        deleteSchoolTextbookList() {
          const db = getDatabase();
          const dbRef = ref(db, this.currentTextbooksListType);

          remove(dbRef)
          .then(() => {
              console.log('deleted');
          }).catch((err) => {
              console.error(err);
          })
        },
      },
  }
</script>

<style lang="scss" scoped>
    .school-textbooks-container {
        width: 100%;
        margin-top: 15px;
        margin-bottom: 15px;
        font-family: 'Source Sans Pro', sans-serif;
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        
        .edit-btn {
          display: flex;
          flex-direction: column;
          align-self: flex-end;
        }

        .text-container {
          display: flex;
          height: 100%;

          .text-value {
            padding: 12px;
            width: 100%;
            text-align: start;
          }

          .no-data {
            font-size: 44px;
            color: lightgray;
            text-transform: uppercase;
          }
        }
    }
</style>