<template>
    <PdfPreviewer :documentType="documentType" />
</template>

<script>    
    import PdfPreviewer from '@/components/shared/PdfPreviewer.vue'
    export default {
        name: 'LiceumDocumentation',
        components: {
            PdfPreviewer,
        },
        data() {
            return {
                documentType: 'liceum-statute',
            }
        },
    }
</script>