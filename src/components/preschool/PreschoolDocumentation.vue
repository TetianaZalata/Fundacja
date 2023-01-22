<template>
    <v-container fluid>
        <v-row class="files-wrapper mt-3 mb-3" align-content="start">
            <v-col xs="12" md="2" align-self="start">
                <div class="file-wrapper" @click="currentDoc = docs.src1">
                    <v-icon color="red darken-4" x-large>mdi-file-pdf-box</v-icon>
                    <span>{{docs.src1 }}</span>
                </div>
            </v-col>
        </v-row>
        <PdfPreviewer :src="currentDoc" />
    </v-container>
</template>

<script>
import PdfPreviewer from "@/components/shared/PdfPreviewer.vue";
export default {
    name: "PreSchoolDocumentation",
    components: {
        PdfPreviewer,
    },
    data() {
        return {
            docs: {
                src1: 'podstawa-programowa-przedszkole.pdf',
            },
            currentDoc: 'podstawa-programowa-przedszkole.pdf',
        };
    },
};
</script>
<style lang="scss" scoped>
    .files-wrapper {
        // display: flex;
        // justify-content: space-around;

        .file-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .file-wrapper:hover {
            background: lightgray;
        }
    }
</style>