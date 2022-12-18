<template>
    <PdfPreviewer :src="src" />
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
                src: 'Statut-SP-TJ-1-09-2022.pdf',
            }
        },
    }
</script>