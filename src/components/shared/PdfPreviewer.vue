<template>
    <section class="pdf-container">
        <v-row
          v-if="isAuth"
          class="pdf-admin-pannel"
        >
          <v-col>
              <v-btn
                  color="primary"
                  @click="saveDocument"
                  type="file"
                  :disabled="!document || pageMounting"
              >
                  save
              </v-btn>
              <v-btn
                  color="error"
                  class="ml-5"
                  @click="deleteDocument"
                  :disabled="!document || pageMounting"
              >
                  delete
              </v-btn>
              <v-btn
                  color="primary"
                  class="ml-5"
                  @click="chooseFile"
                  :disabled="pageMounting"
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
        <div class="pdf-view">
          <div
              v-if="pages"
              class="counter-container"
          >
              <v-btn
                  class="prev"
                  elevation="2"
                  fab
                  raised
                  x-small
                  :disabled="page === 1"
                  @click="prev"
              >
                  <svg-icon type="mdi" :path="mdiSkipPrevious"></svg-icon>
              </v-btn>
              <div class="page-counter">
                  {{ `${page} / ${pages}` }}
              </div>
              <v-btn
                  class="next"
                  elevation="2"
                  fab
                  raised
                  x-small
                  :disabled="page === pages"
                  @click="next"
              >
                  <svg-icon type="mdi" :path="mdiSkipNext"></svg-icon>
              </v-btn>
              <label
                  class="to-page-input-label"
                  for="pageInput"
              >
                  strona:
                  <input
                      ref="pageInput"
                      id="pageInput"
                      type="numder"
                      class="to-page-input"
                      placeholder="strona"
                      :value="page"
                  />
              </label>
          
          </div>
          <pdf
              class="pdf-viewer"
              :src="document"
              :page="page"
              @num-pages="pagesSumm"
          />
          <div
              v-if="pages"
              class="counter-container"
          >
              <v-btn
                  class="prev"
                  elevation="2"
                  fab
                  raised
                  x-small
                  :disabled="page === 1"
                  @click="prev"
              >
                  <svg-icon type="mdi" :path="mdiSkipPrevious"></svg-icon>
              </v-btn>
              <div class="page-counter">
                  {{ `${page} / ${pages}` }}
              </div>
              <v-btn
                  class="next"
                  elevation="2"
                  fab
                  raised
                  x-small
                  :disabled="page === pages"
                  @click="next"
              >
                  <svg-icon type="mdi" :path="mdiSkipNext"></svg-icon>
              </v-btn>
              <label
                  class="to-page-input-label"
                  for="pageInput"
              >
                  strona:
                  <input
                      ref="pageInput"
                      id="pageInput"
                      type="numder"
                      class="to-page-input"
                      placeholder="strona"
                      :value="page"
                  />
              </label>
          </div>
        </div>
        <div class="pdf-file-download">
            <svg-icon
              v-if="document"
              class="mr-5 red--text"
              type="mdi"
              :path="mdiFilePdfBox"
              :style="{width: '34px', height: '34px'}" />
            <a :href="document" target="_blank">
              {{ fileName }}
            </a>
        </div>
    </section>
     
</template>

<script>
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiSkipPrevious, mdiSkipNext, mdiFilePdfBox } from "@mdi/js";
    import pdf from 'vue-pdf'
    import { getDatabase, ref, onValue, set, remove } from 'firebase/database';
    import { mapGetters } from 'vuex';

    export default {
        name: 'PdfPreviewer',
        props: {
            documentType: {
                type: String,
                required: true,
            },
        },
        components: {
            pdf,
            SvgIcon,
        },

        data() {
            return {
                page: 1,
                pages: 0,
                mdiSkipPrevious,
                mdiSkipNext,
                mdiFilePdfBox,
                document: '',
                documentName: '',
                fileName: '',
                base64String: '',
                pageMounting: true,
            }
        },
        created() {
            window.addEventListener('keypress', this.pageTogler, false);
            this.getDocument();
        },
        computed: {
            ...mapGetters('authUser', ['isAuth']),
        },
        mounted() {
            this.pageMounting = false;
        },
        destroyed() {
            window.removeEventListener('keypress', this.pageTogler, false);
        },
        watch: {
            page(newVal) {
                if(!newVal) {
                    this.page = 1;
                }
            }
        },
        methods: {
            pagesSumm(pages) {
                this.pages = pages
            },
            prev() {
                if(this.page !== 1) {
                    this.page--
                }
            },
            next() {
                if(this.page !== this.pages) {
                    this.page++
                }
            },
            pageTogler(e) {
                const key = e.key;
                const page = Number(e.target.value);
                if(key === 'Enter') {
                    if(page > this.pages) {
                        this.page = this.pages;
                    } else if(page < 1) {
                        this.page = 1;
                    } else {
                        this.page = page;
                    }
                    
                }
            },
            getDocument() {
                const db = getDatabase();
                const dbRef = ref(db, this.documentType);

                onValue(dbRef, async (snapshot) => {
                    if (snapshot.val()) {
                      this.document = await this.base64ToPDF(snapshot.val().fileData);
                      this.fileName = await snapshot.val().fileName;
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
                    this.pageMounting = true;
                    const db = getDatabase();
                    const fileNodeRef = ref(db, this.documentType);
                
                    remove(fileNodeRef).then(() => {
                      console.log('File data removed from Realtime Database!');
                    })
                    .then(() => {
                      this.document = '';
                      this.base64String = '';
                      this.fileName = '';
                      window.location.reload();
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
    .pdf-container {
        width: 100%;
        margin-top: 15px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        height: 100%;

        .pdf-view {
            height: 100%;

            .counter-container {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 10px auto;

                .page-counter {
                    margin: 3px 15px 0;
                    background-color: #eeeeee;
                    padding: 0 10px;
                    border-radius: 10px;
                    color: grey;
                }

                .to-page {
                    &-input {
                        border-radius: 10px;
                        width: 50px;
                        background-color: #eeeeee;
                        margin-top: 4px;
                        padding: 0 10px;
                        outline: none;
                        border: 1px solid lightblue;

                        &-label {
                            margin-left: 20px;
                        }
                    }
                    
                }
            }

            .pdf-viewer {
                width: 100%;
            }
        }

        .pdf-file-download {
            display: none;
        }

        .file-upload {
            display: none;
        }

        @media screen and (max-width: 600px) {
          align-items: center;
          
          .pdf-view {
              display: none;
          }
          .pdf-file-download {
              display: flex;
              align-items: center;
          }
        }
    }
</style>