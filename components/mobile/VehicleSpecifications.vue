<template>
  <router-link class="router-link" :to="'/specifications'">
    <div class="category">
      <div class="opt">
        <p>Спецификации</p>
        <p class="selected-category">{{ selectedSpecString }}</p>
      </div>
      <!-- <i v-if="selectedSpec.length == 0" class="fas fa-angle-right fa-2x"></i> -->
      <font-awesome-icon
        v-if="selectedSpec.length == 0"
        far
        icon="angle-right"
      />
      <font-awesome-icon
        @click.prevent="removeSpecifications"
        v-if="selectedSpec.length > 0"
        far
        icon="times-circle"
      />

      <!-- <i
        v-if="selectedSpec.length > 0"
        class="fas fa-times-circle"
        @click.prevent="removeSpecifications"
      ></i> -->
    </div>
  </router-link>
</template>

<script>
import VehicleSpecifications from "~/Specifications.json";
export default {
  data() {
    return {
      specifications: [],
      selectedSpec: [],
      isCreatingPost: ""
    };
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    this.specifications = VehicleSpecifications;

    let specs = [];
    for (let cat of this.specifications) {
      for (let spec of cat.Specifications) {
        specs.push(spec);
      }
    }
    this.specifications = specs;
    if (!this.isCreatingPost) {
      this.selectedSpec = this.$store.getters["filter/getSpecs"];
    } else {
      this.selectedSpec = this.$store.getters["create/getVehicleSpecs"];
    }
  },
  computed: {
    selectedSpecString() {
      if (this.selectedSpec.length == 0) {
        return "";
      } else {
        let specString = "";
        for (let spec of this.selectedSpec) {
          //const check = this.specifications;
          const specName = this.specifications
            .find(c => c.Id == spec)
            .Name.trim();
          specString += specName + ", ";
        }
        specString = specString.slice(0, -2);
        if (specString.length > 35 && this.selectedSpec.length > 1) {
          specString = specString.substring(0, 25);
          specString += "...";
        }
        return specString;
      }
    }
  },
  methods: {
    removeSpecifications() {
      if (this.isCreatingPost) {
        this.selectedSpec = [];
        this.$store.commit("create/updateVehicleSpecs", []);
      } else {
        this.selectedSpec = [];
        this.$store.commit("filter/updateSpecs", []);
      }
    }
  }
};
</script>
