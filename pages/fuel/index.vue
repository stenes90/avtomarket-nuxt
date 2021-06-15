<template>
  <div class="engine-fuel-page">
    <Header title="Тип на мотор" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div
        v-if="!isCreatingPost"
        id="0"
        :class="selectedEngine('0')"
        @click="selectEngineType('0')"
      >
        <p>Сите</p>
      </div>
      <div
        v-for="type of engineTypes"
        :id="type.id"
        :key="type.id"
        :class="selectedEngine(type.id)"
        @click="selectEngineType(type.id)"
      >
        <p>{{ type.name }}</p>
      </div>
    </content-slot>

    <BottomButtons :handleConfirm="submitEngine" :handleCancel="cancel" />
  </div>
</template>

<script>
import EngineTypes from "~/EngineTypes.json";
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";

export default {
  components: { ContentSlot },
  data() {
    return {
      engineTypes: "",
      selectedEngineType: "",
      isCreatingPost: ""
    };
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    this.engineTypes = EngineTypes;

    if (!this.isCreatingPost) {
      this.selectedEngineType = this.$store.getters[
        "filter/selectedEngineTypeId"
      ];
    } else {
      this.selectedEngineType = this.$store.getters[
        "create/getVehicleEngineType"
      ];
    }
  },
  // mounted() {
  //   console.log(EngineTypes);
  //   this.engineTypes = EngineTypes;
  //   console.log(this.engineTypes);
  // },
  methods: {
    selectEngineType(id) {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateselectedEngineTypeId", id);
        this.selectedEngineType = id;
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateEngineType", id);
        this.selectedEngineType = id;
        this.$router.push("/create");
      }
    },
    selectedEngine(id) {
      if (id == this.selectedEngineType) {
        return "engine-type selected";
      } else return "engine-type";
    },
    submitEngine() {
      if (!this.isCreatingPost) {
        this.$router.push("/");
      } else {
        this.$router.push("/create");
      }
    },
    cancel() {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateselectedEngineTypeId", "");
        this.selectedEngineType = "";
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateEngineType", "");
        this.selectedEngineType = "";
        this.$router.push("/create");
      }
    }
  }
};
</script>

<style scoped>
.engine-type {
  width: 100%;
  background-color: white;
  margin-bottom: 1vh !important;
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

.engine-type hr {
  margin-left: 0;
  color: white;
}

.engine-type p {
  margin: 0;
}

.content-slot {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
</style>
