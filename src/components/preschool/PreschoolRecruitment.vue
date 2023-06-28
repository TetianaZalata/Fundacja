<template>
    <ComingSoon />
</template>
<script>
import ComingSoon from "@/components/shared/ComingSoon.vue";
export default {
    name: 'PreschoolRecruitment',
    components: {
        ComingSoon,
    },
    data() {
      return {
        tab: null,
        items: []
      }
    }
}
</script>