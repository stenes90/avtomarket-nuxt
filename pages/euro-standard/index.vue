<template>
  <div class="euro-standard-page">
    <Header title="Еуро стандард" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div
        v-for="type of euroStandardTypes"
        :id="type.id"
        :key="type.id"
        :class="selectedEuroStandard(type.id)"
        @click="selectEuroStandard(type.id)"
      >
        <p>{{ type.name }}</p>
      </div>
      <!-- <div class="buttons">
    <button @click="cancel" type="button" class="btn btn-secondary cancel">
      Откажи
    </button>
    <button
      @click="submitEuroStandard"
      type="button"
      :class="'btn btn-primary confirm '"
    >
      ОК
    </button>
  </div> -->
    </content-slot>
    <BottomButtons :handleConfirm="submitEuroStandard" :handleCancel="cancel" />
  </div>
</template>

<script>
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
export default {
  components: {
    ContentSlot
  },
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

  methods: {
    selectEuroStandard(id) {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateEuroStandard", id);
        this.euroStandard = id;
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateEuroStandard", id);
        this.euroStandard = id;
        this.$router.push("/create");
      }
    },
    selectedEuroStandard(id) {
      if (id == this.euroStandard) {
        return "euro-standard-type selected";
      } else return "euro-standard-type";
    },
    submitEuroStandard() {
      if (!this.isCreatingPost) {
        this.$router.push("/");
      } else {
        this.$router.push("/create");
      }
    },
    cancel() {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateEuroStandard", "");
        this.euroStandard = "";
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateEuroStandard", "");
        this.euroStandard = "";
        this.$router.push("/create");
      }
    }
  }
};
</script>

<style scoped>
.euro-standard-type {
  width: 100%;
  background-color: white;
  margin-bottom: 1vh;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  font-size: 18px;
}

.selected {
  border: 1px black solid;
  background-color: #5b9dff;
  font-weight: bold;
}

.euro-standard-type hr {
  margin-left: 0;
  color: white;
}

.euro-standard-type p {
  margin: 0;
}

.content-slot {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
</style>
