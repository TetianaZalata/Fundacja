<template>
    <main class="volunteering-container white">
        <div
          v-if="isAuth"
          class="edit-btn"
        >
          <v-btn
            class="ma-2"
            color="primary"
            @click="dialog=true"
          >
            {{ volunteering?.value ? 'Edit' : 'add' }}
          </v-btn>
        </div>
        <div
          class="text-container"
          :style="noContentStyles"
        >
          <div
            v-if="volunteering?.value"
            v-html="volunteering?.value"
            class="text-value"
          />
          <div
              v-else-if="!volunteering?.value && loading"
              class="d-flex justify-center ma-5"
          >
            <v-progress-circular
                indeterminate
                color="primary"
            />
          </div>
          <div
            v-if="!volunteering?.value && !loading"
            class="no-data"
          >
            brak dostępnych danych
          </div>
        </div>
        <HTMLEditor
          :dialog="dialog"
          :calendarType="pageType"
          @close="dialog=false"
        />
    </main>
</template>

<script>
  import { getDatabase, ref, onValue } from "firebase/database";
  import { mapGetters } from 'vuex';
  import HTMLEditor from '@/components/shared/HTMLEditor.vue';
  export default {
      name: 'Volunteering',
      components: {
          HTMLEditor,
      },
      data() {
        return {
          volunteering: null,
          pageType: 'volunteering',
          dialog: false,
          loading: false,
        }
      },
      created() {
        this.getVolunteering();
      },
      computed: {
        ...mapGetters('authUser', ['isAuth']),
        noContentStyles() {
          if(!this.volunteering || !this.volunteering.value) {
            return {
              'justify-content': 'center',
              'align-items': 'center'
            };
          }
          return {};
        },
      },
      methods: {
        async getVolunteering() {
          this.loading = true;
          const db = getDatabase();
          const dbRef = ref(db, this.pageType);

          await onValue(dbRef, (snapshot) => {
            this.volunteering = snapshot.val() || '';
          }, {
            onlyOnce: false,
          });
          this.loading = false;
        }
      },
  }
</script>
<style lang="scss" scoped>
    .volunteering-container {
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