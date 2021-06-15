<template>
  <router-link class="router-link" :to="'/city'">
    <div class="category">
      <div class="opt">
        <p>Регион<span style="color: red" v-if="isCreatingPost"> *</span></p>
        <p class="selected-category">{{ selectedRegion }}</p>
        <p
          v-if="validationMsg"
          style="color: red; font-size: 14px"
          class="validation-msg"
        >
          <i class="fas fa-exclamation-circle"></i><span> одберете регион</span>
        </p>
      </div>
      <!-- <i v-if="!removeRegionIconShown" class="fas fa-angle-right fa-2x"></i> -->
      <font-awesome-icon v-if="!removeRegionIconShown" far icon="angle-right" />

      <font-awesome-icon
        @click.prevent="removeRegion"
        v-if="removeRegionIconShown"
        far
        icon="times-circle"
      />

      <!-- <i
        v-if="removeRegionIconShown"
        class="fas fa-times-circle"
        @click.prevent="removeRegion"
      ></i> -->
    </div>
  </router-link>
</template>

<script>
import Cities from "~/Cities.json";
export default {
  data() {
    return {
      isCreatingPost: "",
      city: "",
      region: "",
      cities: [],
      selectedCities: [],
      showValidationMsg: false
    };
  },
  created() {
    this.showValidationMsg = this.$store.getters[
      "create/getShowValidationMsgs"
    ];
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    this.cities = Cities;
    if (this.isCreatingPost) {
      this.city = this.$store.getters["create/getVehicleCity"];
      this.region = this.$store.getters["create/getVehicleRegion"];
    } else {
      this.selectedCities = this.$store.getters["filter/getCities"];
    }
  },
  computed: {
    validationMsg() {
      if (this.showValidationMsg && this.city == "") {
        return true;
      } else return false;
    },
    selectedRegion() {
      if (this.isCreatingPost) {
        if (this.city == "") {
          return "";
        }
        let cityName = this.cities.find(c => c.Id == this.city).Name;
        let regionName = "";
        if (this.region == "0" || this.region == "") {
          regionName = "";
        } else {
          let regions = this.cities.find(c => c.Id == this.city).Regions;
          regionName = regions.find(c => c.Id == this.region).Name;
        }
        if (regionName == "") {
          return cityName;
        } else {
          return cityName + ", " + regionName;
        }
      } else {
        let citiesString = "";
        for (let item of this.selectedCities) {
          const name = this.cities.find(c => c.Id == item).Name;
          citiesString += name + ", ";
        }

        citiesString = citiesString.slice(0, -2);
        if (citiesString.length > 25 && this.selectedCities.length > 1) {
          citiesString = citiesString.substring(0, 25);
          citiesString += "...";
        }
        return citiesString;
      }
    },
    removeRegionIconShown() {
      if (this.isCreatingPost) {
        if (this.city == "") {
          return false;
        } else return true;
      } else {
        if (this.selectedCities.length == 0) {
          return false;
        } else return true;
      }
    }
  },
  methods: {
    removeRegion() {
      if (this.isCreatingPost) {
        this.$store.commit("create/updateRegion", "");
        this.$store.commit("create/updateCity", "");
        this.city = "";
        this.region = "";
      } else {
        this.$store.commit("filter/updateCities", []);
        this.selectedCities = [];
      }
    }
  }
};
</script>
