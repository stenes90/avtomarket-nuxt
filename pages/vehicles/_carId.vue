<template>
  <div class="vehicle-models">
    <Header title="Модел" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div class="models-content">
        <div class="car-label">
          <p>{{ carTypeName }}</p>
        </div>
        <div class="models">
          <div
            @click="allModels"
            v-if="isCreatingPost == false"
            class="model-option"
          >
            <p>Сите</p>
            <i v-show="allMarked" class="fas fa-check-circle"></i>
            <font-awesome-icon v-show="allMarked" far icon="check-circle" />

            <hr />
          </div>

          <div
            v-for="model in models"
            :key="model.id"
            class="model-option"
            @click="updateModel(model.id)"
          >
            <p>{{ model.name }}</p>
            <!-- <i v-show="optionMarked(model.id)" class="fas fa-check-circle"></i> -->
            <font-awesome-icon
              v-show="optionMarked(model.id)"
              far
              icon="check-circle"
            />

            <hr />
          </div>
        </div>
      </div>
    </content-slot>
    <BottomButtons :handleConfirm="submitModel" :handleCancel="cancel" />
  </div>
</template>

<script>
import Vehicles from "~/Vehicles.json";
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
export default {
  components: {
    ContentSlot
  },
  computed: {
    allMarked() {
      if (this.isCreatingPost == false) {
        return this.selectedCarModels.includes("0");
      } else return false;
    }
  },

  created() {
    const typeId = this.$route.params.carId;
    this.isCreatingPost = this.$store.getters["isCreatingPost"];

    const carTypeName = Vehicles.carTypes.find(c => c.id == typeId).name;
    this.carTypeName = carTypeName;
    const carModels = Vehicles.carModels.filter(c => c.carTypeId == typeId);
    const modelss = this.$store.getters["filter/selectedVehicleModels"];
    if (this.isCreatingPost == false) {
      for (let model of modelss) {
        this.selectedCarModels.push(model);
      }
    } else {
      this.selectedCarModels = [
        ...this.$store.getters["create/getVehicleModel"]
      ];
    }
    this.models = carModels;
  },

  data() {
    return {
      models: [],
      selectedCarModels: [],
      isCreatingPost: null
    };
  },
  methods: {
    // submitCarModels() {
    //   this.$store.commit(
    //     "filter/updateselectedVehicleModelIds",
    //     this.selectedCarModels
    //   );
    // },
    submitModel() {
      if (this.isCreatingPost == false) {
        this.$router.push("/");
      } else {
        this.$router.push("/create");
      }
    },
    cancel() {
      if (this.isCreatingPost == false) {
        this.$store.commit("filter/updateselectedVehicleTypeId", "");
        this.$store.commit("filter/updateselectedVehicleModelIds", ["0"]);
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateVehicleType", "");
        this.$store.commit("create/updateVehicleModel", "");
        this.$router.push("/create");
      }
    },
    optionMarked(id) {
      if (!this.isCreatingPost) {
        return this.selectedCarModels.includes(id);
      } else return this.selectedCarModels == id;
    },
    allModels() {
      if (this.selectedCarModels.includes("0")) {
        return;
      } else {
        this.selectedCarModels = ["0"];
        this.$store.commit(
          "filter/updateselectedVehicleModelIds",
          this.selectedCarModels
        );
      }
    },
    updateModel(id) {
      if (this.isCreatingPost == false) {
        if (this.selectedCarModels.includes(id)) {
          this.selectedCarModels = this.selectedCarModels.filter(c => c != id);

          this.$store.commit("filter/updateselectedVehicleModelIds", [
            ...this.selectedCarModels
          ]);
          if (this.selectedCarModels.length == 0) {
            this.selectedCarModels.push("0");
            this.$store.commit("filter/updateselectedVehicleModelIds", [
              ...this.selectedCarModels
            ]);
          }
        } else {
          this.selectedCarModels.push(id);
          this.selectedCarModels = this.selectedCarModels.filter(c => c != "0");
          // let models = [];
          // models.push(this.selectedCarModels);
          this.$store.commit("filter/updateselectedVehicleModelIds", [
            ...this.selectedCarModels
          ]);
        }
      } else {
        this.$store.commit("create/updateVehicleModel", id);
        this.$router.push("/create");
      }
    }
  }
};
</script>

<style scoped>
.models {
  width: 100%;
  overflow-y: auto;
}

label {
  width: 100%;
}

.model-option {
  background-color: white;
  height: 10%;
  display: flex;
  align-items: center;
  font-size: 18px;
  position: relative;
  justify-content: space-between;
  padding: 3%;
}

.model-option p {
  margin-bottom: 0px;
}
/* // */
hr {
  position: absolute;
  bottom: 0;
  margin: auto;
  height: 1px;
  width: 100%;
  left: 0;
}
.checkbox {
  padding-left: 8%;
}

div.car-label {
  height: 4vh;
  width: 100%;
  background: #6d6a6a;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-left: 3%;
  margin-bottom: 2%;
}

.car-label p {
  margin: 0;
}

.models-content {
  overflow-y: auto;
  height: 100%;
}
</style>
