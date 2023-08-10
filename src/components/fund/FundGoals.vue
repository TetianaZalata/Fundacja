<template>
    <main class="fund-goals-container white">
        <div
          v-if="isAuth"
          class="edit-btn"
        >
          <v-btn
            class="ma-2"
            color="primary"
            @click="dialog=true"
          >
            {{ goals?.value ? 'Edit' : 'add' }}
          </v-btn>
        </div>
        <div
          class="text-container"
          :style="noContentStyles"
        >
          <div
            v-if="goals?.value"
            v-html="goals?.value"
            class="text-value"
          />
          <div
              v-else-if="!goals?.value && loading"
              class="d-flex justify-center ma-5"
          >
            <v-progress-circular
                indeterminate
                color="primary"
            />
          </div>
          <div
            v-if="!goals?.value && !loading"
            class="no-data"
          >
            brak dostępnych danych
          </div>
        </div>
        <HTMLEditor
          :dialog="dialog"
          :calendarType="goalsType"
          @close="dialog=false"
        />
    </main>
</template>
<script>
  import { getDatabase, ref, onValue } from "firebase/database";
  import { mapGetters } from 'vuex';
  import HTMLEditor from '@/components/shared/HTMLEditor.vue';

  export default {
      name: 'FundGoals',
      components: {
        HTMLEditor,
      },
      data() {
        return {
          goals: null,
          goalsType: 'fund-goals',
          dialog: false,
          loading: false,
        }
      },
      created() {
        this.getFundGoals();
      },
      computed: {
        ...mapGetters('authUser', ['isAuth']),
        noContentStyles() {
          if(!this.goals || !this.goals.value) {
            return {
              'justify-content': 'center',
              'align-items': 'center'
            };
          }
          return {};
        },
      },
      methods: {
        async getFundGoals() {
          this.loading = true;
          const db = getDatabase();
          const dbRef = ref(db, this.goalsType);

          await onValue(dbRef, (snapshot) => {
            this.goals = snapshot.val() || '';
          }, {
            onlyOnce: false,
          });
          this.loading = false;
        }
      },
  }
</script>

<style lang="scss" scoped>
    .fund-goals-container {
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