<template>
    <main class="zlobek-recruitment-container white">
        <div
          v-if="isAuth"
          class="edit-btn"
        >
          <v-btn
            class="ma-2"
            color="primary"
            @click="dialog=true"
          >
            {{ recruitment?.value ? 'Edit' : 'add' }}
          </v-btn>
        </div>
        <div
          class="text-container"
          :style="noContentStyles"
        >
          <div
            v-if="recruitment?.value"
            v-html="recruitment?.value"
            class="text-value"
          />
          <div
              v-else-if="!recruitment?.value && loading"
              class="d-flex justify-center ma-5"
          >
            <v-progress-circular
                indeterminate
                color="primary"
            />
          </div>
          <div
            v-if="!recruitment?.value && !loading"
            class="no-data"
          >
            brak dostępnych danych
          </div>
        </div>
        <HTMLEditor
          :dialog="dialog"
          :calendarType="recruitmentType"
          @close="dialog=false"
        />
    </main>
</template>
<script>
import { getDatabase, ref, onValue } from "firebase/database";
  import { mapGetters } from 'vuex';
  import HTMLEditor from '@/components/shared/HTMLEditor.vue';
export default {
    name: 'NaughtyRecruitment',
 components: {
        HTMLEditor,
      },
      data() {
        return {
          recruitment: null,
          recruitmentType: 'zlobek-recruitment',
          dialog: false,
          loading: false,
        }
      },
      created() {
        this.getZlobekRecruitment();
      },
      computed: {
        ...mapGetters('authUser', ['isAuth']),
        noContentStyles() {
          if(!this.recruitment || !this.recruitment.value) {
            return {
              'justify-content': 'center',
              'align-items': 'center'
            };
          }
          return {};
        },
      },
      methods: {
        async getZlobekRecruitment() {
          this.loading = true;
          const db = getDatabase();
          const dbRef = ref(db, this.recruitmentType);

          await onValue(dbRef, (snapshot) => {
            this.recruitment = snapshot.val() || '';
          }, {
            onlyOnce: false,
          });
          this.loading = false;
        }
      },
  }
</script>

<style lang="scss" scoped>
    .zlobek-recruitment-container {
        width: 100%;
        height: 100%;
        margin-top: 15px;
        margin-bottom: 15px;
        font-family: 'Source Sans Pro', sans-serif;
        display: flex;
        flex-direction: column;
        
        .edit-btn {
          display: flex;
          flex-direction: column;
          align-self: flex-end;
        }

        .text-container {
          display: flex;
          height: 100%;

          .text-value {
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