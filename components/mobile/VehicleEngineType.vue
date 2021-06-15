<template>
  <router-link class="router-link" :to="'/fuel'">
    <div class="category" @click="selectAllEngineTypes">
      <div class="opt">
        <p>
          Тип на мотор<span style="color: red" v-if="isCreatingPost"> *</span>
        </p>
        <p class="selected-category">{{ engineTypeString }}</p>
        <p
          v-if="validationMsg"
          style="color: red; font-size: 14px"
          class="validation-msg"
        >
          <i class="fas fa-exclamation-circle"></i
          ><span> одберете тип на мотор</span>
        </p>
      </div>
      <!-- <i v-if="!removeEngineIconShown" class="fas fa-angle-right fa-2x"></i> -->
      <font-awesome-icon v-if="!removeEngineIconShown" far icon="angle-right" />
      <font-awesome-icon
        @click.stop="removeEngine"
        v-if="removeEngineIconShown"
        far
        icon="times-circle"
      />

      <!-- <i
        v-if="removeEngineIconShown"
        class="fas fa-times-circle"
        @click.stop="removeEngine"
      ></i> -->
    </div>
  </router-link>
</template>

<script>
import EngineTypes from "~/EngineTypes.json";

export default {
  data() {
    return {
      engineType: "",
      isCreatingPost: "",
      showValidationMsg: false
    };
  },
  created() {
    this.showValidationMsg = this.$store.getters[
      "create/getShowValidationMsgs"
    ];
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (!this.isCreatingPost) {
      this.engineType = this.$store.getters["filter/selectedEngineTypeId"];
    } else {
      this.engineType = this.$store.getters["create/getVehicleEngineType"];
    }
  },
  computed: {
    validationMsg() {
      if (this.showValidationMsg && this.engineType == "") {
        return true;
      } else return false;
    },
    engineTypeString() {
      if (this.engineType == "0") {
        return "Сите";
      } else if (this.engineType == "") {
        return;
      } else return EngineTypes.find(c => c.id == this.engineType).name;
    },
    removeEngineIconShown() {
      //const id = this.$store.getters["filter/selectedEngineTypeId"];
      if (this.engineType != "") {
        return true;
      } else return false;
    }
  },
  methods: {
    selectAllEngineTypes() {
      if (this.engineType == "") {
        if (!this.isCreatingPost) {
          this.$store.commit("filter/updateselectedEngineTypeId", "0");
          this.engineType = "0";
        } else {
          // this.$store.commit("create/updateEngineType", "0");
          // this.engineType = "0";
          return;
        }
      }
    },
    removeEngine(e) {
      if (!this.isCreatingPost) {
        e.preventDefault();
        this.$store.commit("filter/updateselectedEngineTypeId", "");
        this.engineType = "";
      } else {
        e.preventDefault();
        this.$store.commit("create/updateEngineType", "");
        this.engineType = "";
      }
    }
  }
};
</script>
