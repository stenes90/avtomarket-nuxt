<template>
  <router-link class="router-link" :to="'/modification'">
    <div class="category">
      <div class="opt">
        <p>Модификација</p>
        <p class="selected-category">{{ modificationString }}</p>
      </div>
      <font-awesome-icon
        v-if="!removeModificationsBtnShown"
        far
        icon="angle-right"
      />

      <font-awesome-icon
        v-if="removeModificationsBtnShown"
        far
        icon="times-circle"
        @click.stop="removeModification"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      modification: ""
    };
  },
  created() {
    this.modification = this.$store.getters["create/getVehicleModification"];
  },
  computed: {
    modificationString() {
      return this.$store.getters["create/getVehicleModification"];
    },
    removeModificationsBtnShown() {
      return this.modification == "" ? false : true;
    }
  },
  methods: {
    removeModification(e) {
      e.preventDefault();
      this.$store.commit("create/updateVehicleModification", "");
      this.modification = "";
    }
  }
};
</script>
