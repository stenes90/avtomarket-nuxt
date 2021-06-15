<template>
  <router-link class="router-link" :to="'/color'">
    <div class="category">
      <div class="opt">
        <p>Боја</p>
        <p class="selected-category">{{ colorString }}</p>
      </div>
      <!-- <i v-if="!removeColorIconShown" class="fas fa-angle-right fa-2x"></i> -->
      <font-awesome-icon v-if="!removeColorIconShown" far icon="angle-right" />

      <font-awesome-icon
        v-if="removeColorIconShown"
        @click.stop="removeColor"
        far
        icon="times-circle"
      />
      <!-- <i
        v-if="removeColorIconShown"
        class="fas fa-times-circle"
        @click.stop="removeColor"
      ></i> -->
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      color: "",
      colors: [
        { id: "1", name: "Боја1" },
        { id: "2", name: "Боја2" },
        { id: "3", name: "Боја3" },
        { id: "4", name: "Боја4" },
        { id: "5", name: "Боја5" },
        { id: "6", name: "Боја6" },
        { id: "7", name: "Боја7" },
        { id: "8", name: "Боја8" },
        { id: "9", name: "Боја9" },
        { id: "10", name: "Боја10" },
        { id: "11", name: "Боја11" },
        { id: "12", name: "Боја12" },
        { id: "13", name: "Боја13" },
        { id: "14", name: "Боја14" },
        { id: "15", name: "Боја15" },
        { id: "16", name: "Боја16" },
        { id: "17", name: "Боја17" },
        { id: "18", name: "Боја18" }
      ],
      isCreatingPost: ""
    };
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (!this.isCreatingPost) {
      this.color = this.$store.getters["filter/getColor"];
    } else {
      this.color = this.$store.getters["create/getVehicleColor"];
    }
  },
  computed: {
    colorString() {
      if (this.color == "") {
        return "";
      } else {
        return this.colors.find(c => c.id == this.color).name;
      }
    },
    removeColorIconShown() {
      if (this.color != "") {
        return true;
      } else return false;
    }
  },
  methods: {
    removeColor(e) {
      if (!this.isCreatingPost) {
        e.preventDefault();
        this.$store.commit("filter/updateColor", "");
        this.color = "";
      } else {
        e.preventDefault();
        this.$store.commit("create/updateColor", "");
        this.color = "";
      }
    }
  }
};
</script>
