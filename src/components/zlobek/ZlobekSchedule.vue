<template>
    <main class="zlobek-calendar-container white" app>
        <div
          v-if="isAuth"
          class="edit-btn"
        >
          <v-btn
            class="ma-2"
            color="primary"
            @click="dialog=true"
          >
            {{ calendar?.value ? 'Edit' : 'add' }}
          </v-btn>
        </div>
        <div
          class="text-container"
          :style="noContentStyles"
        >
          <div
            v-if="calendar?.value"
            v-html="calendar?.value"
            class="text-value"
          />
          <div
              v-else-if="!calendar?.value && loading"
              class="d-flex justify-center ma-5"
          >
            <v-progress-circular
                indeterminate
                color="primary"
            />
          </div>
          <div
            v-if="!calendar?.value && !loading"
            class="no-data"
          >
            brak dostępnych danych
          </div>
        </div>
        <HTMLEditor
          :dialog="dialog"
          :calendarType="calendarType"
          @close="dialog=false"
        />
    </main>
</template>

<script>
  import { getDatabase, ref, onValue } from "firebase/database";
  import { mapGetters } from 'vuex';
  import HTMLEditor from '@/components/shared/HTMLEditor.vue';

  export default {
    name: "ZlobekCalendar",
    components: {
      HTMLEditor,
    },
    data() {
      return {
        calendar: null,
        calendarType: 'zlobek-calendar',
        dialog: false,
        loading: false,
      }
    },
    created() {
      this.getZlobekCalendar();
    },
    computed: {
      ...mapGetters('authUser', ['isAuth']),
      noContentStyles() {
        if(!this.calendar || !this.calendar.value) {
          return {
            'justify-content': 'center',
            'align-items': 'center'
          };
        }
        return {};
      },
    },
    methods: {
      async getZlobekCalendar() {
        this.loading = true;
        const db = getDatabase();
        const dbRef = ref(db, this.calendarType);

        await onValue(dbRef, (snapshot) => {
          this.calendar = snapshot.val() || '';
        }, {
          onlyOnce: false,
        });
        this.loading = false;
      }
    },
  }
</script>

<style lang="scss" scoped>
    .zlobek-calendar-container {
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