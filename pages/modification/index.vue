<template>
  <div class="modification-page">
    <Header title="Модификација" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div class="container">
        <div class="modification-input">
          <input type="text" v-model="modification" />
        </div>
      </div>
    </content-slot>

    <BottomButtons :handleConfirm="submitModification" :handleCancel="cancel" />
  </div>
</template>

<script>
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
export default {
  components: { ContentSlot },
  created() {
    this.modification = this.$store.getters["create/getVehicleModification"];
  },
  watch: {
    modification() {
      if (this.modification.length > 30) {
        this.modification = this.modification.substring(0, 30);
      }
    }
  },
  // mounted() {
  //   const header = document.querySelector(".header");
  //   const container = document.querySelector(".container");
  //   if (header.offsetHeight == 50) {
  //     container.style.top = "50px";
  //   }
  // },
  data() {
    return {
      modification: ""
    };
  },
  methods: {
    submitModification() {
      this.$store.commit("create/updateVehicleModification", this.modification);
      this.$router.push("/create");
    },
    cancel() {
      this.$store.commit("create/updateVehicleModification", "");
      this.$router.push("/create");
    }
  }
};
</script>

<style scoped>
.modification-input {
  width: 100%;
  height: 10%;
  min-height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
}

.modification-input input {
  width: 90%;
}

.content-slot {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
</style>
