<template>
  <router-link class="router-link" :to="'/additional-info'">
    <div class="category">
      <div class="opt">
        <p>Дополнителни информации</p>
        <p class="selected-category">{{ additionalInfo }}</p>
      </div>
      <font-awesome-icon
        v-if="!removeDescriptionIconShown"
        far
        icon="angle-right"
      />
      <!-- <i
        v-if="!removeDescriptionIconShown"
        class="fas fa-angle-right fa-2x"
      ></i> -->
      <font-awesome-icon
        v-if="removeDescriptionIconShown"
        far
        icon="times-circle"
        @click.stop="removeDescription"
      />
      <!-- <i
        v-if="removeDescriptionIconShown"
        class="fas fa-times-circle"
        @click.stop="removeDescription"
      ></i> -->
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      description: ""
    };
  },
  created() {
    this.description = this.$store.getters["create/getVehicleExtraInfo"];
  },
  computed: {
    additionalInfo() {
      let descriptionString = this.description;
      if (descriptionString.length > 25) {
        descriptionString = descriptionString.substring(0, 25) + "...";
      }
      return descriptionString;
    },
    removeDescriptionIconShown() {
      return this.description == "" ? false : true;
    }
  },
  methods: {
    removeDescription(e) {
      e.preventDefault();
      this.$store.commit("create/updateExtraInfo", "");
      this.description = "";
    }
  }
};
</script>
