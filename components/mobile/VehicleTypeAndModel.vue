<template>
  <router-link class="router-link" :to="'/vehicles'">
    <div @click="selectAllTypes" class="category">
      <div class="opt">
        <p>
          Тип и Модел<span style="color: red" v-if="isCreatingPost"> *</span>
        </p>
        <p class="selected-category">{{ selectedVehicleTypeAndModels }}</p>
        <p
          v-if="validationMsg"
          style="color: red; font-size: 14px"
          class="validation-msg"
        >
          <i class="fas fa-exclamation-circle"></i
          ><span> одберете модел на возилото</span>
        </p>
      </div>
      <!-- <i v-if="selectedTypeId == ''" class="fas fa-angle-right fa-2x"></i> -->
      <font-awesome-icon v-if="selectedTypeId == ''" far icon="angle-right" />
      <font-awesome-icon
        v-if="selectedTypeId != '' && selectedModelIds != ''"
        far
        icon="times-circle"
        @click.stop="removeAllTypesAndModels"
      />
    </div>
  </router-link>
</template>

<script>
import Vehicles from "../../../../Vehicles.json";
export default {
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (this.isCreatingPost == false) {
      this.selectedTypeId = this.$store.getters["filter/selectedVehicleTypeId"];
      this.selectedModelIds = this.$store.getters[
        "filter/selectedVehicleModels"
      ];
    } else {
      this.selectedTypeId = this.$store.getters["create/getVehicleType"];
      this.selectedModelIds = this.$store.getters["create/getVehicleModel"];
    }
    console.log(this.selectedModelIds);
    this.vehicleTypes = Vehicles.carTypes;
    this.vehicleModels = Vehicles.carModels;
    this.showValidationMsg = this.$store.getters[
      "create/getShowValidationMsgs"
    ];
  },
  computed: {
    validationMsg() {
      if (this.showValidationMsg && this.selectedModelIds == "") {
        return true;
      } else return false;
    },
    selectedVehicleTypeAndModels() {
      let typeAndModels = "";
      if (this.isCreatingPost == false) {
        if (this.selectedTypeId == "") {
          return;
        }
        if (this.selectedTypeId == "0") {
          return "Сите";
        }

        const type = this.vehicleTypes.find(c => c.id == this.selectedTypeId);

        typeAndModels = type.name + ": ";
        if (this.selectedModelIds.includes("0")) {
          typeAndModels += "Сите модели";
          return typeAndModels;
        }

        for (let modelId of this.selectedModelIds) {
          console.log(this.vehicleModels);
          console.log(this.selectedModelIds);
          console.log(modelId);

          const model = this.vehicleModels.find(c => c.id == modelId);

          typeAndModels += model.name + ", ";
        }
        typeAndModels = typeAndModels.slice(0, -2);
        if (typeAndModels.length > 35) {
          typeAndModels = typeAndModels.substring(0, 35);
          while (
            typeAndModels[typeAndModels.length - 1] == "," ||
            typeAndModels[typeAndModels.length - 1] == " "
          ) {
            typeAndModels = typeAndModels.slice(0, -1);
          }
          typeAndModels += "...";
        }
      } else {
        if (this.selectedTypeId == "" || this.selectedModelIds == "") {
          return;
        }
        const type = this.vehicleTypes.find(c => c.id == this.selectedTypeId);
        console.log(type);
        typeAndModels = type.name + ": ";
        const model = this.vehicleModels.find(
          c => c.id == this.selectedModelIds
        );
        console.log(model);
        typeAndModels += model.name;
        console.log(typeAndModels);
      }
      return typeAndModels;
    }
  },
  data() {
    return {
      isCreatingPost: null,
      selectedTypeId: "",
      selectedModelIds: "",
      vehicleTypes: "",
      vehicleModels: "",
      showValidationMsg: false
    };
  },
  methods: {
    selectAllTypes() {
      if (this.isCreatingPost == false) {
        if (this.selectedTypeId == "") {
          this.$store.commit("filter/updateselectedVehicleTypeId", "0");
          this.selectedTypeId = "0";
        } else {
          return;
        }
      } else return;
    },
    removeAllTypesAndModels(e) {
      if (this.isCreatingPost == false) {
        debugger;
        e.preventDefault();
        this.$store.commit("filter/updateselectedVehicleTypeId", "");
        this.$store.commit("filter/updateselectedVehicleModelIds", ["0"]);
        this.selectedTypeId = "";
        this.selectedModelIds = ["0"];
      } else {
        e.preventDefault();
        this.$store.commit("create/updateVehicleType", "");
        this.$store.commit("create/updateVehicleModel", "");
        this.selectedTypeId = "";
        this.selectedModelIds = "";
      }
    }
  }
};
</script>
