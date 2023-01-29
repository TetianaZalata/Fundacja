<template>
    <section class="pdf-container">
        <div class="counter-container">
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
            :src="src"
            :page="page"
            @num-pages="pagesSumm"
        />
        <div class="counter-container">
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
    </section>
     
</template>

<script>
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiSkipPrevious, mdiSkipNext } from "@mdi/js";
    import pdf from 'vue-pdf'
    export default {
        name: 'PdfPreviewer',
        props: {
            src: {
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
            }
        },
        created() {
            window.addEventListener('keypress', this.pageTogler, false);
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
            }
        },

}
</script>
<style lang="scss" scoped>
    .pdf-container {
        width: 100%;

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
</style>