<template>
  <div class="region-page">
    <Header title="Регион" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div class="regions">
        <div class="region-options">
          <div @click="selectRegion('0')" class="region-opt">
            {{ cityName }}
          </div>
          <div
            @click="selectRegion(region.Id)"
            class="region-opt"
            v-for="region in regions"
            :key="region.Id"
          >
            {{ region.Name }}
          </div>
        </div>
      </div>
    </content-slot>
  </div>
</template>

<script>
import Cities from "~/Cities.json";
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
export default {
  components: {
    ContentSlot
  },
  data() {
    return {
      cities: [],
      regions: [],
      isCreatingPost: "",
      cityId: "",
      selectedRegions: []
    };
  },
  created() {
    this.cities = Cities;
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    this.cityId = this.$route.params.cityId;
    this.regions = this.cities.find(c => c.Id == this.cityId).Regions;
    console.log(this.regions);
  },
  computed: {
    cityName() {
      return this.cities.find(c => c.Id == this.cityId).Name;
    }
  },
  methods: {
    selectRegion(id) {
      this.$store.commit("create/updateCity", this.cityId);
      this.$store.commit("create/updateRegion", id);
      this.$router.push("/create");
    }
  }
};
</script>

<style scoped>
.region-options {
  width: 100%;
  height: 100%;
}

.region-opt {
  height: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  background: white;
  border-radius: 25px;
  margin-bottom: 2%;
}

.regions {
  overflow-y: auto;
  height: 100%;
}
</style>
