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
                <v-icon>
                    mdi-skip-previous
                </v-icon>
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
                <v-icon>
                    mdi-skip-next
                </v-icon>
            </v-btn>
        </div>
        <pdf
            class="pdf-viewer"
            src="StatutFWiRE112022.pdf"
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
                <v-icon>
                    mdi-skip-previous
                </v-icon>
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
                <v-icon>
                    mdi-skip-next
                </v-icon>
            </v-btn>
        </div>
    </section>
     
</template>

<script>
    
    import pdf from 'vue-pdf'
    export default {
        components: {
            pdf,
        },
        data() {
            return {
                page: 1,
                pages: 0,
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
                background-color: lightgray;
                padding: 0 10px;
                border-radius: 10px;
            }
        }

        .pdf-viewer {
            width: 100%;
        }
    }
</style>