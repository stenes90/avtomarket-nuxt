<template>
  <div class="post-category">
    <Header title="Основна категорија" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div class="options">
        <div
          v-for="category in vehicleCategories"
          :key="category.id"
          :id="category.id"
          @click.prevent="setCategory(category.id)"
          :class="
            category.id == selectedCategoryId
              ? 'category selected-category'
              : 'category'
          "
        >
          <p>{{ category.name }}</p>
          <!-- <i :class="category.optionSign"></i> -->
          <font-awesome-icon
            v-if="category.id != 10"
            far
            :icon="category.icon"
          />
          <i v-else class="tire-logo logo"> </i>
        </div>
      </div>
    </content-slot>

    <BottomButtons :handleConfirm="submitCategory" :handleCancel="cancel" />
  </div>
</template>

<script>
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
import HomecardSlot from "~/components/mobile/slots/homeCardSlot.vue";
import VehicleCategories from "~/VehicleCategories.json";

export default {
  components: {
    ContentSlot,
    HomecardSlot
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
  },
  mounted() {
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

  methods: {
    setCategory(id) {
      console.log(this.prevRoute);
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateSelectedVehicleCategoryId", id);
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateVehicleCategory", id);
        this.$router.push("/create");
      }
    },
    submitCategory() {
      if (!this.isCreatingPos) {
        this.$router.push("/");
      } else {
        this.$router.push("/create");
      }
    },
    cancel() {
      if (!this.isCreatingPos) {
        this.$router.push("/");
      } else {
        this.$router.push("/create");
      }
    }
  },

  data() {
    return {
      vehicleCategories: [],
      selectedCategoryId: "",
      prevRoute: "",
      isCreatingPost: null
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

.tire-logo {
  background: url("~/assets/images/wheel.png");
  background-size: cover;
  width: 1.5rem;
  height: 1.5rem;
}

.category {
  margin-bottom: 2% !important;
}
</style>
