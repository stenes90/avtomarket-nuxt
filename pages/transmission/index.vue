<template>
  <div class="transmission-page">
    <Header title="Тип на менувач" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div
        v-if="!isCreatingPost"
        id="0"
        :class="selectedTransmission('0')"
        @click="selectTransmissionType('0')"
      >
        <p>Сите</p>
      </div>
      <div
        v-for="type of transmisssionTypes"
        :id="type.id"
        :key="type.id"
        :class="selectedTransmission(type.id)"
        @click="selectTransmissionType(type.id)"
      >
        <p>{{ type.name }}</p>
      </div>
    </content-slot>

    <BottomButtons :handleConfirm="submitTranssmition" :handleCancel="cancel" />
  </div>
</template>

<script>
import TransmisssionTypes from "~/TransmissionTypes.json";
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";

export default {
  components: {
    ContentSlot
  },
  data() {
    return {
      transmisssionType: "",
      isCreatingPost: "",
      transmisssionTypes: ""
    };
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    this.transmisssionTypes = TransmisssionTypes;
    if (!this.isCreatingPost) {
      this.transmisssionType = this.$store.getters[
        "filter/selectedTransmissionTypeId"
      ];
    } else {
      this.transmisssionType = this.$store.getters[
        "create/getVehicleTransmissionType"
      ];
    }
  },

  methods: {
    selectTransmissionType(id) {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateselectedTransmissionTypeId", id);
        this.transmisssionType = id;
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateTransmissionType", id);
        this.transmisssionType = id;
        this.$router.push("/create");
      }
    },
    selectedTransmission(id) {
      if (id == this.transmisssionType) {
        return "transmission-type selected";
      } else return "transmission-type";
    },
    submitTranssmition() {
      if (!this.isCreatingPost) {
        this.$router.push("/");
      } else {
        this.$router.push("/create");
      }
    },
    cancel() {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateselectedTransmissionTypeId", "");
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateTransmissionType", "");
        this.$router.push("/create");
      }
    }
  }
};
</script>

<style scoped>
.transmission-type {
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

.transmission-type hr {
  margin-left: 0;
  color: white;
}

.transmission-type p {
  margin: 0;
}

.content-slot {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
</style>
