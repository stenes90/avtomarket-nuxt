<template>
  <router-link class="router-link" :to="'/euro-standard'">
    <div class="category">
      <div class="opt">
        <p>Еуро стндард</p>
        <p class="selected-category">{{ euroStandardString }}</p>
      </div>
      <!-- <i
        v-if="!removeEuroStandardIconShown"
        class="fas fa-angle-right fa-2x"
      ></i> -->
      <font-awesome-icon
        v-if="!removeEuroStandardIconShown"
        far
        icon="angle-right"
      />
      <font-awesome-icon
        v-if="removeEuroStandardIconShown"
        far
        icon="times-circle"
        @click.stop="removeEuroStandard"
      />
      <!-- <i
        v-if="removeEuroStandardIconShown"
        class="fas fa-times-circle"
        @click.stop="removeEuroStandard"
      ></i> -->
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      euroStandard: "",
      euroStandardTypes: [
        { id: "1", name: "1" },
        { id: "2", name: "2" },
        { id: "3", name: "3" },
        { id: "4", name: "4" },
        { id: "5", name: "5" },
        { id: "6", name: "6" }
      ],
      isCreatingPost: ""
    };
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (!this.isCreatingPost) {
      this.euroStandard = this.$store.getters["filter/getEuroStandard"];
    } else {
      this.euroStandard = this.$store.getters["create/getVehicleEuroStandard"];
    }
  },
  computed: {
    euroStandardString() {
      return this.euroStandard;
    },
    removeEuroStandardIconShown() {
      if (this.euroStandard != "") {
        return true;
      } else return false;
    }
  },
  methods: {
    removeEuroStandard(e) {
      if (!this.isCreatingPost) {
        e.preventDefault();
        this.$store.commit("filter/updateEuroStandard", "");
        this.euroStandard = "";
      } else {
        e.preventDefault();
        this.$store.commit("create/updateEuroStandard", "");
        this.euroStandard = "";
      }
    }
  }
};
</script>
