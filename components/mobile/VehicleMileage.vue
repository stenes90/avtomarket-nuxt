<template>
  <router-link class="router-link" :to="'/mileage'">
    <div class="category">
      <div class="opt">
        <p>
          Километража<span style="color: red" v-if="isCreatingPost"> *</span>
        </p>
        <p class="selected-category">{{ mileageString }}</p>
        <p
          v-if="validationMsg"
          style="color: red; font-size: 14px"
          class="validation-msg"
        >
          <font-awesome-icon far icon="exclamation-circle" />
          <span> внесете километража на возилото</span>
        </p>
      </div>
      <font-awesome-icon v-if="!removeMileageBtnShown" far icon="angle-right" />
      <font-awesome-icon
        v-if="removeMileageBtnShown"
        far
        icon="times-circle"
        @click.stop="removeMileage"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      mileage: "",
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
      this.mileage = this.$store.getters["filter/getMileage"];
    } else {
      this.mileage = this.$store.getters["create/getVehicleMileage"];
    }
  },
  computed: {
    validationMsg() {
      if (this.showValidationMsg && this.mileage == "") {
        return true;
      } else return false;
    },
    mileageString() {
      if (this.mileage == "") {
        return;
      }
      if (!this.isCreatingPost) {
        return this.$store.getters["filter/getMileage"] + " км.";
      } else {
        return this.$store.getters["create/getVehicleMileage"] + " км.";
      }
    },
    removeMileageBtnShown() {
      return this.mileage == "" ? false : true;
    }
  },
  methods: {
    removeMileage(e) {
      if (!this.isCreatingPost) {
        e.preventDefault();
        this.$store.commit("filter/updateMileage", "");
        this.mileage = "";
      } else {
        e.preventDefault();
        this.$store.commit("create/updateMileage", "");
        this.mileage = "";
      }
    }
  }
};
</script>
