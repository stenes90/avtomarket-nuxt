<template>
  <div class="city-page">
    <Header title="Град" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div class="city-options" v-if="isCreatingPost">
        <div
          @click="selectRegion(city.Id)"
          class="city-opt"
          v-for="city in cities"
          :key="city.Id"
        >
          <p>{{ city.Name }}</p>

          <font-awesome-icon
            v-if="city.Regions.length > 0"
            far
            icon="angle-right"
          />
        </div>
      </div>
      <div class="city-options" v-if="!isCreatingPost">
        <div
          class="city-opt"
          v-for="city in cities"
          :key="city.Id"
          @click="addOrRemoveFromSelectedCities(city.Id)"
        >
          <p>{{ city.Name }}</p>
          <!-- <i v-if="!optionMarked(city.Id)" class="far fa-square"></i>
          <i v-if="optionMarked(city.Id)" class="fas fa-check-square"></i> -->
          <font-awesome-icon
            v-show="optionMarked(city.Id)"
            far
            icon="check-circle"
          />

          <!-- <font-awesome-icon v-if="!optionMarked(city.Id)" far icon="square" />

          <font-awesome-icon
            v-if="optionMarked(city.Id)"
            far
            icon="check-square"
          /> -->
        </div>
      </div>
    </content-slot>

    <BottomButtons :handleConfirm="submitCities" :handleCancel="cancel" />
  </div>
</template>

<script>
import Cities from "~/Cities.json";
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
export default {
  components: {
    ContentSlot
  },
  data() {
    return {
      cities: [],
      isCreatingPost: "",
      city: "",
      region: "",
      selectedCities: []
    };
  },
  created() {
    this.cities = Cities;
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (!this.isCreatingPost) {
      this.selectedCities = [...this.$store.getters["filter/getCities"]];
    } else {
      this.city = this.$store.getters["create/getVehicleCity"];
      this.region = this.$store.getters["create/getVehicleRegion"];
    }
  },
  methods: {
    selectRegion(id) {
      if (this.isCreatingPost) {
        const cityRegions = this.cities.find(c => c.Id == id).Regions;
        if (cityRegions.length == 0) {
          this.$store.commit("create/updateCity", id);
          this.city = id;
          this.$router.push("/create");
        } else {
          this.$store.commit("create/updateCity", id);
          this.city = id;
          this.$router.push("/city/" + id);
        }
      }
    },

    addOrRemoveFromSelectedCities(id) {
      console.log(
        this.selectedCities === this.$store.getters["filter/getCities"]
      );
      debugger;
      if (this.selectedCities.includes(id)) {
        this.selectedCities = this.selectedCities.filter(c => c != id);
        this.$store.commit("filter/updateCities", this.selectedCities);
      } else {
        this.selectedCities.push(id);
        this.$store.commit("filter/updateCities", [...this.selectedCities]);
        console.log(
          this.selectedCities === this.$store.getters["filter/getCities"]
        );
        debugger;
      }
      console.log(this.selectedCities);
    },
    optionMarked(id) {
      return this.selectedCities.includes(id) ? true : false;
    },
    submitCities() {
      this.$router.push("./");
    },
    cancel() {
      this.$store.commit("filter/updateCities", []);
      this.$router.push("./");
    }
  }
};
</script>

<style scoped>
.city-options {
  height: 100%;
  width: 100%;
  overflow-y: auto;
}

.city-options p {
  margin-bottom: 0px;
}

.city-opt {
  height: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  background: white;
  border-radius: 25px;
  margin-bottom: 2% !important;
}
</style>
