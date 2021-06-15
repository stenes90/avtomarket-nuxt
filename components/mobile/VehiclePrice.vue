<template>
  <router-link class="router-link" :to="'/price'">
    <div class="category">
      <div class="opt">
        <p>Цена<span style="color: red" v-if="isCreatingPost"> *</span></p>
        <p class="selected-category">{{ selectedPrice }}</p>
        <p
          v-if="validationMsg"
          style="color: red; font-size: 14px"
          class="validation-msg"
        >
          <i class="fas fa-exclamation-circle"></i><span> внесете цена</span>
        </p>
      </div>
      <!-- <i
        v-if="removePriceIconShown == false"
        class="fas fa-angle-right fa-2x"
      ></i> -->
      <font-awesome-icon v-if="!removePriceIconShown" far icon="angle-right" />
      <font-awesome-icon v-if="removePriceIconShown" far icon="times-circle" />

      <!-- <i
        v-if="removePriceIconShown"
        class="fas fa-times-circle"
        @click.prevent="removePrice"
      ></i> -->
    </div>
  </router-link>
</template>

<script>
import Currency from "~/Currency.json";

export default {
  data() {
    return {
      isCreatingPost: null,
      createCurrency: "",
      isAgreedPrice: "",
      createPrice: "",
      showValidationMsg: false
    };
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (this.isCreatingPost) {
      this.createCurrency = this.$store.getters["create/getCurrency"];
      this.isAgreedPrice = this.$store.getters["create/getAgreeOnPrice"];
      this.createPrice = this.$store.getters["create/getVehiclePrice"];
      this.showValidationMsg = this.$store.getters[
        "create/getShowValidationMsgs"
      ];
    }
  },
  computed: {
    currency() {
      const currId = Currency.find(c => c.id == this.createCurrency).id;

      return currId == "1" ? " еур" : " мкд";
    },
    validationMsg() {
      if (
        this.showValidationMsg &&
        this.createPrice == "" &&
        !this.isAgreedPrice
      ) {
        return true;
      } else return false;
    },
    selectedPrice() {
      if (this.isCreatingPost == false) {
        const from = this.$store.getters["filter/priceFrom"];
        const to = this.$store.getters["filter/priceTo"];
        if (from == "" && to != "") {
          return "до " + to + "eur";
        } else if (to == "" && from != "") {
          return "од " + from + " eur";
        } else if (from == "" && to == "") {
          return "";
        } else {
          return "од " + from + "€" + " до " + to + "€";
        }
      } else {
        if (this.isAgreedPrice) {
          return "По договор";
        } else if (this.$store.getters["create/getVehiclePrice"] != "") {
          return this.$store.getters["create/getVehiclePrice"] + this.currency;
        } else return "";
      }
    },
    removePriceIconShown() {
      if (this.isCreatingPost == false) {
        const from = this.$store.getters["filter/priceFrom"];
        const to = this.$store.getters["filter/priceTo"];
        if (from != "" || to != "") {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.createPrice != "" || this.isAgreedPrice) {
          return true;
        } else return false;
      }
    }
  },
  methods: {
    removePrice() {
      if (this.isCreatingPost == false) {
        this.$store.commit("filter/updatePrice", {
          from: "",
          to: ""
        });
      } else {
        this.$store.commit("create/updateVehiclePrice", "");
        this.$store.commit("create/updateAgreeOnPrice", false);
        this.isAgreedPrice = false;
        this.createPrice = "";
      }
    }
  }
};
</script>
