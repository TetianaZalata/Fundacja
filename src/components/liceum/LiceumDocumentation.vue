<template>
    <PdfPreviewer :src="src" />
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
                src: 'Statut-LO-TJ-1-09-2022.pdf',
            }
        },
    }
</script>