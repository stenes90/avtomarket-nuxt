<template>
  <div class="engine-power-page">
    <Header :backBtn="true" :emptyRight="true" />
    <content-slot>
      <!-- <input type="number" v-model="hp" /> -->
      <div class="input-group mb-3">
        <input
          type="number"
          v-model="hp"
          class="form-control"
          placeholder="Внесете моќност на возилото"
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">kw</span>
        </div>
      </div>
    </content-slot>
    <BottomButtons :handleCancel="cancel" :handleConfirm="confirm" />
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
      this.hp = this.$store.getters["filter/getHP"];
    } else {
      this.hp = this.$store.getters["create/getVehicleHorsePower"];
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
      hp: "",
      isCreatingPost: ""
    };
  },
  methods: {
    confirm() {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateHp", this.hp);
        this.$router.push("/");
      }
      this.$store.commit("create/updateHorsePower", this.hp);
      this.$router.push("/create");
    },
    cancel() {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateHp", "");
        this.$router.push("/");
      }
      this.$store.commit("create/updateHorsePower", "");
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
