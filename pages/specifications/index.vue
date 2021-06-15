<template>
  <div class="specifications-page">
    <Header :backBtn="true" title="Спецификации" :emptyRight="true" />
    <content-slot>
      <div class="specifications">
        <div class="spec-category" v-for="cat in specifications" :key="cat.Id">
          <div class="spec-title">
            <p class="spec-title">{{ cat.Name }}</p>
          </div>
          <div
            @click="addSpec(spec.Id)"
            class="spec"
            v-for="spec in cat.Specifications"
            :key="spec.Id"
          >
            <p class="spec-name">{{ spec.Name }}</p>
            <!-- <i v-if="!specMarked(spec.Id)" class="far fa-square"></i>
            <i v-if="specMarked(spec.Id)" class="fas fa-check-square"></i> -->
            <font-awesome-icon
              v-show="specMarked(spec.Id)"
              far
              icon="check-circle"
            />
          </div>
        </div>
      </div>
    </content-slot>
    <BottomButtons :handleCancel="cancel" :handleConfirm="confirm" />
  </div>
</template>

<script>
import VehicleSpecifications from "~/Specifications.json";
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
export default {
  components: {
    ContentSlot
  },
  data() {
    return {
      isCreatingPost: "",
      specifications: [],
      selectedSpec: []
    };
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    this.specifications = VehicleSpecifications;

    if (this.isCreatingPost) {
      this.selectedSpec = this.$store.getters["create/getVehicleSpecs"];
    } else {
      this.selectedSpec = this.$store.getters["filter/getSpecs"];
    }
  },
  methods: {
    addSpec(id) {
      if (!this.isCreatingPost) {
        if (this.selectedSpec.includes(id)) {
          this.selectedSpec = this.selectedSpec.filter(c => c != id);
          this.$store.commit("filter/updateSpecs", this.selectedSpec);
        } else {
          this.selectedSpec.push(id);
          this.$store.commit("filter/updateSpecs", this.selectedSpec);
        }
      } else {
        if (this.selectedSpec.includes(id)) {
          this.selectedSpec = this.selectedSpec.filter(c => c != id);
          this.$store.commit("create/updateVehicleSpecs", this.selectedSpec);
        } else {
          this.selectedSpec.push(id);
          this.$store.commit("create/updateVehicleSpecs", this.selectedSpec);
        }
      }
    },
    specMarked(id) {
      return this.selectedSpec.includes(id);
    },
    cancel() {
      if (this.isCreatingPost) {
        this.selectedSpec = [];
        this.$store.commit("create/updateVehicleSpecs", []);
        this.$router.push("/create");
      } else {
        this.selectedSpec = [];
        this.$store.commit("filter/updateSpecs", []);
        this.$router.push("/");
      }
    },
    confirm() {
      if (this.isCreatingPost) {
        this.$router.push("/create");
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
.specifications {
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-y: auto;
}
div.spec-title {
  height: 5vh;
  background-color: #bbb;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  padding-left: 2%;
  display: flex;
  align-items: center;
  margin: 3%;
}

.spec {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 3%;
  border-bottom: 1px #d2cdcd solid;
  height: 6vh;
}
</style>
