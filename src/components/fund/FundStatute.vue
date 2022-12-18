<template>
    <PdfPreviewer :src="src" />
</template>

<script>
    
    import PdfPreviewer from '@/components/shared/PdfPreviewer.vue'
    export default {
        name: 'FundStatut',
        components: {
            PdfPreviewer,
        },
        data() {
            return {
                src: 'StatutFWiRE112022.pdf',
            }
        },
    }
</script>
