<template>
  <homecard-slot>
    <nuxt-link class="router-link" :to="'/category'">
      <div class="category">
        <div class="opt">
          <p>
            Основна категорија
            <span style="color: red" v-if="isCreatingPost"> *</span>
          </p>
          <p class="selected-category">{{ selectedVehicleCategory }}</p>
        </div>
        <!-- <i class="fas fa-angle-right fa-2x"></i> -->
        <font-awesome-icon far icon="angle-right" />
      </div>
    </nuxt-link>
  </homecard-slot>
</template>

<script>
import HomecardSlot from "~/components/mobile/slots/homeCardSlot.vue";
import VehicleCategories from "~/VehicleCategories.json";
export default {
  components: { HomecardSlot },
  computed: {
    selectedVehicleCategory() {
      const category = this.vehicleCategories.find(
        c => c.id == this.selectedCategoryId
      );
      return category.name;
    }
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    this.vehicleCategories = VehicleCategories;
    if (!this.isCreatingPost) {
      this.selectedCategoryId = this.$store.getters[
        "filter/selectedVehicleCategoryId"
      ];
    } else {
      this.selectedCategoryId = this.$store.getters[
        "create/getVehicleCategory"
      ];
    }
  },

  data() {
    return {
      isCreatingPost: null,
      vehicleCategories: [],
      selectedCategoryId: "",
      route: ""
    };
  }
};
</script>
