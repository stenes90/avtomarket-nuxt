<template>
  <div class="home-page-mobile">
    <div v-if="burgerOpened" class="overlay-layer"></div>
    <Header
      :burgerBtn="true"
      :isBurgerOpened="isBurgerOpened"
      :createBtn="true"
    />
    <content-slot>
      <VehicleCategoryCard />
      <VehicleTypeAndModelCard />
      <VehiclePrice />
      <VehicleManufactureDate />
      <VehicleEngineType />
      <VehicleTransmissionType />
      <VehicleRegion />
      <VehicleSpecifications />
    </content-slot>
    <BottomButtons />
  </div>
</template>

<script>
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
import VehicleCategoryCard from "~/components/mobile/VehicleCategory.vue";
import VehicleTypeAndModelCard from "~/components/mobile/VehicleTypeAndModel.vue";
import VehiclePrice from "~/components/mobile/VehiclePrice.vue";
import VehicleManufactureDate from "~/components/mobile/VehicleManufactureDate.vue";
import VehicleEngineType from "~/components/mobile/VehicleEngineType.vue";
import VehicleTransmissionType from "~/components/mobile/VehicleTransmissionType.vue";
import VehicleRegion from "~/components/mobile/VehicleRegion.vue";
import VehicleSpecifications from "~/components/mobile/VehicleSpecifications.vue";

export default {
  components: {
    VehicleCategoryCard,
    ContentSlot,
    VehicleTypeAndModelCard,
    VehiclePrice,
    VehicleManufactureDate,
    VehicleEngineType,
    VehicleTransmissionType,
    VehicleRegion,
    VehicleSpecifications
  },
  created() {},
  data() {
    return {
      burgerOpened: false
    };
  },
  methods: {
    isBurgerOpened(state) {
      this.burgerOpened = state;
    }
  }
};
</script>

<style scoped>
.home-page-mobile {
  height: 100%;
}
</style>
