<template>
    <PdfPreviewer :documentType="documentType" />
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
                documentType: 'preschool-statute',
            };
        },
    };
</script>