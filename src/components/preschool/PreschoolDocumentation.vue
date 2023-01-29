<template>
    <v-container fluid>
        <v-row class="files-wrapper mt-3 mb-3" align-content="start">
            <v-col xs="12" md="2" align-self="start">
                <div class="file-wrapper" @click="currentDoc = docs.src1">
                    <svg-icon class="pdf-icon" size="40px" type="mdi" :path="pdfIcon"></svg-icon>
                    <span>{{docs.src1 }}</span>
                </div>
            </v-col>
        </v-row>
        <PdfPreviewer :src="currentDoc" />
    </v-container>
</template>

<script>
import PdfPreviewer from "@/components/shared/PdfPreviewer.vue";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFilePdfBox } from '@mdi/js';
export default {
    name: "PreSchoolDocumentation",
    components: {
        PdfPreviewer,
        SvgIcon,
    },
    data() {
        return {
            docs: {
                src1: 'podstawa-programowa-przedszkole.pdf',
            },
            currentDoc: 'podstawa-programowa-przedszkole.pdf',
            pdfIcon: mdiFilePdfBox,
        };
    },
};
</script>
<style lang="scss">
    .files-wrapper {
        .file-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            svg.pdf-icon {
                path {
                    fill: #B71C1C;
                }
            }
        }

        .file-wrapper:hover {
            background: lightgray;
        }
    }
</style>