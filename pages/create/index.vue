<template>
  <div class="create-post-page">
    <div v-if="burgerOpened" class="overlay-layer"></div>
    <Header
      :isBurgerOpened="isBurgerOpened"
      :burgerBtn="true"
      title="Креирај објава"
      :emptyRight="true"
    />
    <content-slot>
      <div class="options">
        <ClientOnly>
          <UploadPhoto />
        </ClientOnly>

        <VehicleCategory />
        <VehicleTypeAndModel :key="componentKey + 1" />
        <VehiclePrice :key="componentKey + 2" />
        <VehicleManufactureDate :key="componentKey + 3" />
        <VehicleEngineType :key="componentKey + 4" />
        <VehicleTransmissionType :key="componentKey + 5" />
        <VehicleEnginePower :key="componentKey + 6" />
        <EuroStandard />
        <VehicleMileage :key="componentKey + 7" />
        <VehicleColor />
        <VehicleRegion :key="componentKey + 8" />
        <VehicleModification />
        <AdditionalInformation />
        <Contact :key="componentKey + 9" />

        <div class="validation-info" style="margin-top: 2%">
          <p><span style="color: red">*</span> задолжителни информации</p>
        </div>
      </div>
    </content-slot>
    <BottomButtons
      :handleCancel="previewPost"
      leftBtnName="Преглед"
      rightBtnName="Објави"
    />
  </div>
</template>

<script>
import VehicleCategory from "~/components/mobile/VehicleCategory.vue";
import VehicleTypeAndModel from "~/components/mobile/VehicleTypeAndModel.vue";
import VehiclePrice from "~/components/mobile/VehiclePrice";
import VehicleManufactureDate from "~/components/mobile/VehicleManufactureDate.vue";
import VehicleEngineType from "~/components/mobile/VehicleEngineType.vue";
import VehicleTransmissionType from "~/components/mobile/VehicleTransmissionType.vue";
import VehicleRegion from "~/components/mobile/VehicleRegion.vue";
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
import VehicleEnginePower from "~/components/mobile/VehicleEnginePower.vue";
import EuroStandard from "~/components/mobile/EuroStandard.vue";
import VehicleMileage from "~/components/mobile/VehicleMileage.vue";
import VehicleColor from "~/components/mobile/VehicleColor.vue";
import VehicleModification from "~/components/mobile/VehicleModification.vue";
import AdditionalInformation from "~/components/mobile/AdditionalInfo.vue";
import Contact from "~/components/mobile/Contact.vue";
import UploadPhoto from "~/components/mobile/UploadPhoto.vue";

export default {
  components: {
    VehicleCategory,
    VehicleTypeAndModel,
    VehiclePrice,
    VehicleManufactureDate,
    VehicleEngineType,
    VehicleTransmissionType,
    VehicleRegion,
    ContentSlot,
    VehicleEnginePower,
    EuroStandard,
    VehicleMileage,
    VehicleColor,
    VehicleModification,
    AdditionalInformation,
    Contact,
    UploadPhoto
  },
  created() {
    this.$store.commit("isCreatingPost", true);
  },
  data() {
    return {
      burgerOpened: false,
      componentKey: 0
    };
  },
  methods: {
    isBurgerOpened(state) {
      this.burgerOpened = state;
    },
    previewPost() {
      const model = this.$store.getters["create/getVehicleModel"];
      const price = this.$store.getters["create/getVehiclePrice"];
      const agreeOnPrice = this.$store.getters["create/getAgreeOnPrice"];
      const year = this.$store.getters["create/getVehicleManufactureYear"];
      const engineType = this.$store.getters["create/getVehicleEngineType"];
      const transmission = this.$store.getters[
        "create/getVehicleTransmissionType"
      ];
      const power = this.$store.getters["create/getVehicleHorsePower"];
      const mileage = this.$store.getters["create/getVehicleMileage"];
      const region = this.$store.getters["create/getVehicleRegion"];
      const contact = this.$store.getters["create/getVehicleContact"];

      if (
        model == "" ||
        (price == "" && agreeOnPrice == false) ||
        year == "" ||
        engineType == "" ||
        transmission == "" ||
        power == "" ||
        mileage == "" ||
        region == "" ||
        contact == ""
      ) {
        this.$store.commit("create/updateShowValidationMsgs", true);
        this.componentKey++;
      } else {
        this.$router.push("/preview");
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

.options {
  width: 100%;
  overflow-y: auto;
}

.upload-info {
  background-color: #ffffd0;
  padding: 2%;
  margin: 2% 0;
}

div.validation-info {
  background-color: #ffffd0;
  margin-bottom: 2%;
}

.overlay-layer {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: black;
  opacity: 0.3;
  z-index: 1000;
}
</style>
