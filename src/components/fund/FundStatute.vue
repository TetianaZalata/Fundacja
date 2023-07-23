<template>
    <div class="fund-statute">
      <v-row v-if="isAuth">
          <v-col>
              <v-btn
                  color="primary"
                  @click="saveDocument"
                  type="file"
                  :disabled="!document"
              >
                  save
              </v-btn>
              <v-btn
                  color="error"
                  class="ml-5"
                  @click="deleteDocument"
                  :disabled="!document"
              >
                  delete
              </v-btn>
              <v-btn
                  color="primary"
                  class="ml-5"
                  @click="chooseFile"
                  type="file"
              >
                  upload
              </v-btn>
              <input
                  ref="document"
                  class="file-upload"
                  type="file"
                  accept="application/pdf"
                  @change="uploadFile"
              >
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <PdfPreviewer :src="document" />
          </v-col>
      </v-row>
    </div>
</template>

<script>
    import PdfPreviewer from '@/components/shared/PdfPreviewer.vue'
    import { getDatabase, ref, onValue, set, remove } from 'firebase/database';
    import { mapGetters } from 'vuex';

    export default {
        name: 'FundStatut',
        components: {
            PdfPreviewer,
        },
        data() {
            return {
                documentType: 'fund-statute',
                document: '',
                fileName: '',
                base64String: '',
            }
        },
        created() {
            this.getDocument();
        },
        computed: {
            ...mapGetters('authUser', ['isAuth']),
        },
        methods: {
            getDocument() {
                const db = getDatabase();
                const dbRef = ref(db, this.documentType);

                onValue(dbRef, async (snapshot) => {
                    if (snapshot.val()) {
                      this.document = await this.base64ToPDF(snapshot.val().fileData);
                    }                    
                }, {
                    onlyOnce: false
                });
            },
            chooseFile() {
                this.$refs.document.click();
            },
            convertFileToBase64(file) {
              const reader = new FileReader();
              reader.onload = (event) => {
                this.base64String =  event.target.result.split(',')[1];
              }
              reader.readAsDataURL(file);
            },
            uploadFile() {
                const typeFromName = this.$refs.document.files[0].name.split('.')[this.$refs.document.files[0].name.split('.').length - 1];
                if (typeFromName === 'pdf' && this.$refs.document.files[0].type === "application/pdf") {
                    this.document = URL.createObjectURL(this.$refs.document.files[0]);
                    this.convertFileToBase64(this.$refs.document.files[0]);
                    this.fileName = this.$refs.document.files[0].name;
                }                
            },
            async base64ToPDF(base64Data) {
                const byteCharacters = await  window.atob(base64Data);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: 'application/pdf' });
                
                return URL.createObjectURL(blob);
            },
            saveDocument() {
                if (this.document) {
                    const db = getDatabase();
                    const fileNodeRef = ref(db, this.documentType);
                
                    set(fileNodeRef, {
                        fileData: this.base64String,
                        fileName: this.fileName,
                    }).then(() => {
                      console.log('File data saved to Realtime Database!');
                    }).catch((error) => {
                      console.error(error);
                    });
                }                
            },
            deleteDocument() {
                if (this.document) {
                    const db = getDatabase();
                    const fileNodeRef = ref(db, this.documentType);
                
                    remove(fileNodeRef).then(() => {
                      console.log('File data removed from Realtime Database!');
                    })
                    .then(() => {
                      this.document = '';
                      this.base64String = '';
                      this.fileName = '';
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }   
            },
        },
    }
</script>

<style lang="scss" scoped>
  .fund-statute {
      width: 100%;
      height: 100%;
      margin-top: 15px;
      margin-bottom: 15px;
      font-family: "Source Sans Pro", sans-serif;
      display: flex;
      flex-direction: column;

      .file-upload {
          display: none;
      }
  }
</style>