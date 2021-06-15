<template>
  <div @click.prevent="setSelectedVehicleTypeId" class="router-link car-type">
    <div class="category-single car-option">
      <p :class="selected">{{ optionName }}</p>
      <!-- <i class="fas fa-angle-right fa-2x"></i> -->
      <font-awesome-icon far icon="angle-right" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    selected() {
      return this.id == this.selectedVehicleTypeId ? "selected-category" : "";
    }
  },

  mounted() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (this.isCreatingPost == false) {
      this.selectedVehicleTypeId = this.$store.getters[
        "filter/selectedVehicleTypeId"
      ];
    } else {
      this.selectedVehicleTypeId = this.$store.getters["create/getVehicleType"];
    }
  },

  methods: {
    setSelectedVehicleTypeId() {
      if (this.isCreatingPost == false) {
        if (this.id == 0) {
          this.$store.commit("filter/updateselectedVehicleTypeId", this.id);
          this.$store.commit("filter/updateselectedVehicleModelIds", ["0"]);
          this.$router.push("/");
        } else if (this.selectedVehicleTypeId != this.id) {
          this.$store.commit("filter/updateselectedVehicleModelIds", ["0"]);
          this.$store.commit("filter/updateselectedVehicleTypeId", this.id);
          this.$router.push("/vehicles/" + this.id);
        } else {
          this.$router.push("/vehicles/" + this.id);
        }
      } else {
        this.$store.commit("create/updateVehicleType", this.id);
        this.$router.push("/vehicles/" + this.id);
      }
    }
  },
  data() {
    return {
      selectedVehicleTypeId: "",
      isCreatingPost: null
    };
  },
  props: ["optionName", "optionSign", "vehicleCategoryId", "id"]
};
</script>

<style scoped>
.router-link {
  display: block;
  width: 100%;
  height: 5vh;
  margin-bottom: 2%;
}

a {
  text-decoration: none !important;
}

.category-single {
  height: 100%;
  font-size: 18px;
  background-color: white;
  border-radius: 25px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.selected-category {
  color: #0da2ea !important;
}

.car-option i {
  color: grey;
  font-size: 30px;
  padding-right: 5%;
}
</style>
