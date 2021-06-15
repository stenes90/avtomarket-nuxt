<template>
  <div class="price-page">
    <Modal
      v-show="showModal"
      :handleConfirm="confirmModal"
      :handleCancel="cancelModal"
      :handleClose="cancelModal"
      title="ВНИМАНИЕ!!!"
      content=" Доколку изберете цена По договор,
      вашата објава ќе биде прикажана после сите објави со вклучена цена!"
    />
    <Header title="Цена" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div v-if="!isCreatingPost" class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Од</span>
        </div>
        <input
          type="number"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          v-model="priceFrom"
        />
        <div class="input-group-append">
          <span class="input-group-text">€</span>
        </div>
      </div>

      <div v-if="!isCreatingPost" class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">До</span>
        </div>
        <input
          type="number"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          v-model="priceTo"
        />
        <div class="input-group-append">
          <span class="input-group-text">€</span>
        </div>
      </div>

      <div v-if="isCreatingPost" class="price-container">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01"
              >Цена</label
            >
          </div>
          <input
            id="price"
            type="number"
            v-model="createPrice"
            class="form-control"
            aria-label="Text input with dropdown button"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ selectedCurrency }}
            </button>
            <div class="dropdown-menu">
              <a @click="setCurrency('1')" class="dropdown-item">Еур</a>
              <hr />
              <a @click="setCurrency('2')" class="dropdown-item" href="#"
                >МКД</a
              >
            </div>
          </div>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            :checked="agreeOnPrice"
            id="exampleCheck1"
            @click="agreeOnPriceMethod"
          />
          <label class="form-check-label" for="exampleCheck1">По договор</label>
        </div>
      </div>

      <p style="color: red" v-if="errorMsg">Невалидни вредности</p>
    </content-slot>

    <BottomButtons :handleConfirm="submitPrice" :handleCancel="cancel" />
  </div>
</template>

<script>
import Currency from "~/Currency.json";
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
export default {
  components: { ContentSlot },
  created() {
    // this.priceFrom = this.$store.getters.priceFrom;
    // this.priceTo = this.$store.getters.priceTo;
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (!this.isCreatingPost) {
      this.priceFrom = this.$store.getters["filter/priceFrom"];
      this.priceTo = this.$store.getters["filter/priceTo"];
    } else {
      this.createPrice = this.$store.getters["create/getVehiclePrice"];
      this.currency = this.$store.getters["create/getCurrency"];
      this.agreeOnPrice = this.$store.getters["create/getAgreeOnPrice"];
    }
  },
  mounted() {
    const header = document.querySelector(".header");
    const container = document.querySelector(".container");
    if (header.offsetHeight == 50) {
      container.style.top = "50px";
    }
  },
  watch: {
    createPrice() {
      if (this.createPrice == "") {
        return;
      } else {
        this.$store.commit("create/updateVehiclePrice", this.createPrice);
        this.$store.commit("create/updateAgreeOnPrice", false);
        this.agreeOnPrice = false;
      }
    }
  },

  computed: {
    errorMsg() {
      const bothPricesEntered = this.priceFrom != "" && this.priceTo != "";
      const fromBiggerThanTo =
        parseInt(this.priceFrom) > parseInt(this.priceTo);
      return fromBiggerThanTo && bothPricesEntered ? true : false;
    },
    disabled() {
      if (this.priceFrom == "" || this.priceTo == "") {
        return "";
      }
      return this.priceFrom > this.priceTo ? "disabled" : "";
    },
    selectedCurrency() {
      return Currency.find(c => c.id == this.currency).name;
    }
  },
  data() {
    return {
      priceFrom: "",
      priceTo: "",
      createPrice: "",
      agreeOnPrice: "",
      isCreatingPost: "",
      currency: "",
      showModal: false
    };
  },
  methods: {
    agreeOnPriceMethod() {
      if (!this.agreeOnPrice) {
        this.agreeOnPrice = true;
        this.$store.commit("create/updateVehiclePrice", "");
        this.$store.commit("create/updateAgreeOnPrice", true);
        this.createPrice = "";
        this.showModal = true;
      } else {
        this.agreeOnPrice = false;
        this.$store.commit("create/updateAgreeOnPrice", false);
      }
    },
    setCurrency(id) {
      if (this.isCreatingPost) {
        this.currency = id;
        this.$store.commit("create/updateCurrency", this.currency);
      }
    },
    submitPrice() {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updatePrice", {
          from: this.priceFrom,
          to: this.priceTo
        });
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateVehiclePrice", this.createPrice);
        this.$router.push("/create");
      }
    },
    cancel() {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updatePrice", {
          from: "",
          to: ""
        });
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateVehiclePrice", "");
        this.$store.commit("create/updateAgreeOnPrice", false);
        this.$router.push("/create");
      }
    },
    confirmModal() {
      this.showModal = false;
    },
    cancelModal() {
      this.$store.commit("create/updateAgreeOnPrice", false);
      this.agreeOnPrice = false;
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.content-slot {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.price-container {
  margin-bottom: 3%;
}

.price-container .input-group {
  padding-bottom: 2%;
}
</style>
