<template>
  <div class="input-group  mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <font-awesome-icon far icon="phone-square"
      /></span>
    </div>
    <input
      v-model="contact"
      type="number"
      :class="`form-control` + validationMsg"
      placeholder="07x xxx xxx*"
    />
  </div>
</template>

<script>
export default {
  created() {
    this.contact = this.$store.getters["create/getVehicleContact"];
    this.showValidationMsg = this.$store.getters[
      "create/getShowValidationMsgs"
    ];
  },
  data() {
    return {
      contact: "",
      showValidationMsg: false
    };
  },
  watch: {
    contact() {
      this.$store.commit("create/updateContact", this.contact);
    }
  },
  computed: {
    validationMsg() {
      if (this.showValidationMsg && this.contact == "") {
        return " validate";
      } else return "";
    }
  }
};
</script>

<style scoped>
.input-group.mb-3 {
  margin-bottom: 0 !important;
}
.validate {
  border: 1px solid red;
}
</style>
