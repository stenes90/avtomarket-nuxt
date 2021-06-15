<template>
  <router-link class="router-link" :to="'/year'">
    <div class="category">
      <div class="opt">
        <p>
          Година на производство<span style="color: red" v-if="isCreatingPost">
            *</span
          >
        </p>
        <p class="selected-category">{{ selectedYear }}</p>
        <p
          v-if="validationMsg"
          style="color: red; font-size: 14px"
          class="validation-msg"
        >
          <!-- <i class="fas fa-exclamation-circle"></i> -->
          <font-awesome-icon far icon="exclamation-circle" />

          <span> внесете година на производство</span>
        </p>
      </div>
      <!-- <i
        v-if="removeYearIconShown == false"
        class="fas fa-angle-right fa-2x"
      ></i> -->
      <font-awesome-icon v-if="!removeYearIconShown" far icon="angle-right" />
      <font-awesome-icon v-if="removeYearIconShown" far icon="times-circle" />

      <!-- <i
        v-if="removeYearIconShown"
        class="fas fa-times-circle"
        @click.stop="removeYear"
      ></i> -->
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      isCreatingPost: "",
      from: "",
      to: ",",
      createYear: "",
      month: "",
      showValidationMsg: false
    };
  },
  created() {
    this.showValidationMsg = this.$store.getters[
      "create/getShowValidationMsgs"
    ];
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (!this.isCreatingPost) {
      this.from = this.$store.getters["filter/yearFrom"];
      this.to = this.$store.getters["filter/yearTo"];
    } else {
      this.createYear = this.$store.getters["create/getVehicleManufactureYear"];
      this.month = this.$store.getters["create/getVehicleManufactureMonth"];
    }
  },
  computed: {
    validationMsg() {
      if (this.showValidationMsg && this.createYear == "") {
        return true;
      } else return false;
    },
    selectedYear() {
      if (!this.isCreatingPost) {
        const from = this.from;
        const to = this.to;
        if (from == "" && to != "") {
          return "до " + to + "г.";
        } else if (to == "" && from != "") {
          return "од " + from + " г.";
        } else if (from == "" && to == "") {
          return "";
        } else {
          return "од " + from + "г." + " до " + to + "г.";
        }
      } else {
        if (this.createYear != "") {
          return this.month + ", " + this.createYear + "г.";
        } else {
          return "";
        }
      }
    },
    removeYearIconShown() {
      if (!this.isCreatingPost) {
        const from = this.from;
        const to = this.to;
        if (from != "" || to != "") {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.createYear != "") {
          return true;
        } else return false;
      }
    }
  },
  methods: {
    removeYear(e) {
      if (!this.isCreatingPost) {
        e.preventDefault();
        this.$store.commit("filter/updateYear", {
          from: "",
          to: ""
        });
        this.from = "";
        this.to = "";
      } else {
        e.preventDefault();
        this.$store.commit("create/updateVehicleYear", "");
        this.$store.commit("create/updateVehicleMonth", "");
        this.createYear = "";
        this.month = "";
      }
    }
  }
};
</script>
