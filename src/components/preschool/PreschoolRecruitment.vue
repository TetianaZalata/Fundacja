<template>
    <div>
      <ComingSoon />
      <v-card>
        <v-tabs
          v-model="tab"
          color="deep-purple-accent-4"
          align-tabs="end"
        >
          <v-tab value="Landscape">Landscape</v-tab>
          <v-tab value="City">City</v-tab>
          <v-tab value="Abstract">Abstract</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="i in items"
            :key="i"
            :value="i"
          >
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="k in 6"
                  :key="k"
                  cols="12"
                  md="4"
                >
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${i * k * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${i * k * 5 + 10}`"
                    aspect-ratio="1"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>    
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