<template>
    <PdfPreviewer :documentType="documentType" />
</template>
<script>
  import PdfPreviewer from '@/components/shared/PdfPreviewer.vue';
  export default {
      name: 'ZlobekDocumentation',
      components: {
          PdfPreviewer,
      },
      data() {
          return {
              documentType: 'zlobek-statute',
          }
      },
  }
</script>