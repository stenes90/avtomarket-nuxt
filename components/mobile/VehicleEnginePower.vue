<template>
  <router-link class="router-link" :to="'/engine-power'">
    <div class="category">
      <div class="opt">
        <p>Моќност<span style="color: red" v-if="isCreatingPost"> *</span></p>
        <p class="selected-category">{{ hpString }}</p>
        <p
          v-if="validationMsg"
          style="color: red; font-size: 14px"
          class="validation-msg"
        >
          <font-awesome-icon far icon="exclamation-circle" />

          <!-- <i class="fas fa-exclamation-circle"></i> -->
          <span> внесете моќност на возилото</span>
        </p>
      </div>
      <font-awesome-icon v-if="!removeHpBtnShown" far icon="angle-right" />

      <!-- <i v-if="!removeHpBtnShown" class="fas fa-angle-right fa-2x"></i> -->
      <!-- <i
        v-if="removeHpBtnShown"
        class="fas fa-times-circle"
        @click.stop="removeHp"
      ></i> -->
      <font-awesome-icon
        v-if="removeHpBtnShown"
        @click.stop="removeHp"
        far
        icon="times-circle"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      hp: "",
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
      this.hp = this.$store.getters["filter/getHP"];
    } else {
      this.hp = this.$store.getters["create/getVehicleHorsePower"];
    }
  },
  computed: {
    validationMsg() {
      if (this.showValidationMsg && this.hp == "") {
        return true;
      } else return false;
    },
    hpString() {
      if (this.hp == "") {
        return;
      }
      if (!this.isCreatingPost) {
        return this.$store.getters["filter/getHP"] + " kw";
      } else {
        return this.$store.getters["create/getVehicleHorsePower"] + " kw";
      }
    },
    removeHpBtnShown() {
      return this.hp == "" ? false : true;
    }
  },
  methods: {
    removeHp(e) {
      if (!this.isCreatingPost) {
        e.preventDefault();
        this.$store.commit("filter/updateHp", "");
        this.hp = "";
      } else {
        e.preventDefault();
        this.$store.commit("create/updateHorsePower", "");
        this.hp = "";
      }
    }
  }
};
</script>
