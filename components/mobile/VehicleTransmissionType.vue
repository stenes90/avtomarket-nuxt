<template>
  <router-link class="router-link" :to="'/transmission'">
    <div class="category" @click="selectAllTransmissionTypes">
      <div class="opt">
        <p>
          Тип на менувач<span style="color: red" v-if="isCreatingPost"> *</span>
        </p>
        <p class="selected-category">{{ transmissionTypeString }}</p>
        <p
          v-if="validationMsg"
          style="color: red; font-size: 14px"
          class="validation-msg"
        >
          <i class="fas fa-exclamation-circle"></i
          ><span> одберете тип на менувач</span>
        </p>
      </div>
      <!-- <i
        v-if="removeTransmisssionIconShown == false"
        class="fas fa-angle-right fa-2x"
      ></i> -->
      <font-awesome-icon
        v-if="!removeTransmisssionIconShown"
        far
        icon="angle-right"
      />
      <font-awesome-icon
        @click.stop="removeTransmission"
        v-if="removeTransmisssionIconShown"
        far
        icon="times-circle"
      />

      <!-- <i
        v-if="removeTransmisssionIconShown"
        class="fas fa-times-circle"
        @click.stop="removeTransmission"
      ></i> -->
    </div>
  </router-link>
</template>

<script>
import TransmissionTypes from "~/TransmissionTypes.json";

export default {
  data() {
    return {
      isCreatingPost: "",
      transmissionType: "",
      showValidationMsg: false
    };
  },
  created() {
    this.showValidationMsg = this.$store.getters[
      "create/getShowValidationMsgs"
    ];
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (!this.isCreatingPost) {
      this.transmissionType = this.$store.getters[
        "filter/selectedTransmissionTypeId"
      ];
    } else {
      this.transmissionType = this.$store.getters[
        "create/getVehicleTransmissionType"
      ];
    }
  },
  computed: {
    validationMsg() {
      if (this.showValidationMsg && this.transmissionType == "") {
        return true;
      } else return false;
    },
    transmissionTypeString() {
      if (this.transmissionType == "0") {
        return "Сите";
      } else if (this.transmissionType == "") {
        return;
      } else
        return TransmissionTypes.find(c => c.id == this.transmissionType).name;
    },
    removeTransmisssionIconShown() {
      if (this.transmissionType != "") {
        return true;
      } else return false;
    }
  },
  methods: {
    selectAllTransmissionTypes() {
      if (!this.isCreatingPost) {
        if (this.transmissionType == "") {
          this.$store.commit("filter/updateselectedTransmissionTypeId", "0");
          this.transmissionType = "0";
        }
      } else {
        if (this.transmissionType == "") {
          // this.$store.commit("create/updateTransmissionType", "0");
          // this.transmissionType = "0";
          return;
        }
      }
    },
    removeTransmission(e) {
      if (!this.isCreatingPost) {
        e.preventDefault();
        this.$store.commit("filter/updateselectedTransmissionTypeId", "");
        this.transmissionType = "";
      } else {
        e.preventDefault();
        this.$store.commit("create/updateTransmissionType", "");
        this.transmissionType = "";
      }
    }
  }
};
</script>
