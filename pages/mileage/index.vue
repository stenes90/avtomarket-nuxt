<template>
  <div class="mileage-page">
    <Header title="Километража" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div class="input-group mb-3">
        <input
          type="number"
          v-model="mileage"
          class="form-control"
          placeholder="Внесете километража на возилото"
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">км.</span>
        </div>
      </div>
    </content-slot>
    <BottomButtons :handleConfirm="submitMileage" :handleCancel="cancel" />
  </div>
</template>

<script>
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
export default {
  components: {
    ContentSlot
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (!this.isCreatingPost) {
      this.mileage = this.$store.getters["filter/getMileage"];
    } else {
      this.mileage = this.$store.getters["create/getVehicleMileage"];
    }
  },

  mounted() {
    const header = document.querySelector(".header");
    const container = document.querySelector(".container");
    if (header.offsetHeight == 50) {
      container.style.top = "50px";
    }
  },
  data() {
    return {
      mileage: "",
      isCreatingPost: ""
    };
  },
  methods: {
    submitMileage() {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateMileage", this.mileage);
        this.$router.push("/home");
      }
      this.$store.commit("create/updateMileage", this.mileage);
      this.$router.push("/create");
    },
    cancel() {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateMileage", "");
        this.$router.push("/home");
      }
      this.$store.commit("create/updateMileage", "");
      this.$router.push("/create");
    }
  }
};
</script>

<style scoped>
.power-input {
  width: 100%;
  height: 10%;
  min-height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.power-input input {
  width: 90%;
}

.content-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
</style>
