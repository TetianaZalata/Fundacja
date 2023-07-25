<template>
    <PdfPreviewer :documentType="documentType" />
</template>

<script>
    import PdfPreviewer from '@/components/shared/PdfPreviewer.vue';

    export default {
        name: 'FundStatut',
        components: {
            PdfPreviewer,
        },
        data() {
            return {
                documentType: 'fund-statute',
            }
        },
    }
</script>

<style lang="scss" scoped>
  .fund-statute {
      width: 100%;
      height: 100%;
      margin-top: 15px;
      margin-bottom: 15px;
      font-family: "Source Sans Pro", sans-serif;
      display: flex;
      flex-direction: column;

      .file-upload {
          display: none;
      }
  }
</style>