<template>
    <PdfPreviewer :documentType="documentType" />
</template>

<script>
    import PdfPreviewer from '@/components/shared/PdfPreviewer.vue'
    export default {
        name: 'SchoolDocumentation',
        components: {
            PdfPreviewer,
        },
        data() {
            return {
                documentType: 'school-statute',
            }
        },
    }
</script>