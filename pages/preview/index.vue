<template>
  <div class="preview-page">
    <Header title="Објава" :backBtn="true" :emptyRight="true" />
    <div class="post-container">
      <div class="container-content">
        <ClientOnly>
          <Carousel>
            <Slide v-for="slide in images" :key="slide">
              <div class="carousel__item"><img :src="slide" alt="" /></div>
            </Slide>
          </Carousel>
        </ClientOnly>
        <div class="main-info section-container">
          <h4>{{ vehicleTitle }}</h4>
          <p class="short-description">
            {{ shortInfo }}
          </p>
          <p class="price">Цена: {{ vehiclePriceString }}</p>
          <div class="buttons">
            <a class="btn btn-primary" :href="`tel:+ ${contact}`">
              <span><i class="fas fa-phone-alt"></i></span>
              <span style="padding-left: 3%;">{{ contact }}</span>
            </a>

            <button
              @click="shareViaWebShare"
              type="button"
              class="btn btn-secondary"
            >
              <span><i class="fas fa-share-alt"></i></span>
              <span style="padding-left: 3%;">Сподели</span>
            </button>
          </div>
        </div>

        <div class="secondary-info section-container">
          <p>
            Дата на производство:
            <span> {{ dateString }}</span>
          </p>
          <p>
            Тип на мотор: <span> {{ engineTypeString }}</span>
          </p>
          <p>
            Моќност: <span>{{ enginePower }} k.w.</span>
          </p>
          <p v-if="euroStandard != ''">
            Еуростандард: <span>{{ euroStandard }}</span>
          </p>
          <p>
            Тип на менувач: <span>{{ vehicleTransmissionString }}</span>
          </p>
          <p>
            Километража: <span> {{ vehicleMileage }} км.</span>
          </p>
          <p v-if="color != ''">Боја: <span> Бела</span></p>
        </div>

        <div
          v-if="fullAditionalInfo != ''"
          class="aditional-info section-container"
        >
          <h4 class="aditional-title">
            Дополнителни информации
          </h4>
          <p>
            {{ aditionalInfo }}
          </p>
          <button @click="toggleExtraInfo" type="button" class="btn btn-link">
            {{ toggleFullInfoBtn }}
          </button>
        </div>
        <div class="vehicle-specs section-container">
          <div class="specification">
            <h4>
              Безопасност
            </h4>
            <div class="spec-name">
              <i class="fas fa-check"></i>
              <p>Автоматска контрола на стабилноста</p>
            </div>
            <div class="spec-name">
              <i class="fas fa-check"></i>
              <p>Автоматска контрола на стабилноста</p>
            </div>
            <div class="spec-name">
              <i class="fas fa-check"></i>
              <p>Автоматска контрола на стабилноста</p>
            </div>
            <div class="spec-name">
              <i class="fas fa-check"></i>
              <p>Автоматска контрола на стабилноста</p>
            </div>
          </div>

          <div class="specification">
            <h4>
              Комфорт
            </h4>
            <div class="spec-name">
              <i class="fas fa-check"></i>
              <p>Автоматска контрола на стабилноста</p>
            </div>
            <div class="spec-name">
              <i class="fas fa-check"></i>
              <p>Автоматска контрола на стабилноста</p>
            </div>
            <div class="spec-name">
              <i class="fas fa-check"></i>
              <p>Автоматска контрола на стабилноста</p>
            </div>
            <div class="spec-name">
              <i class="fas fa-check"></i>
              <p>Автоматска контрола на стабилноста</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from "vue";
// import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
//import { Carousel, Slide } from "vue-carousel";
import Vehicles from "~/Vehicles.json";
import EngineTypes from "~/EngineTypes.json";
import TransmissionTypes from "~/TransmissionTypes.json";

// import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      images: [],
      vehigleType: "",
      vehicleModel: "",
      vehicleYear: "",
      vehicleMonth: "",
      vehiclePrice: "",
      agreedOnPrice: null,
      vehicleTransmission: "",
      enginePower: "",
      vehicleMileage: "",
      region: "",
      contact: "",
      engineType: "",
      euroStandard: "",
      color: "",
      shortInfo: "",

      aditionalInfo: "",
      fullAditionalInfo: "",
      shortAditionalInfo: "",
      additionalInfoExpanded: false
    };
  },
  computed: {
    toggleFullInfoBtn() {
      if (this.additionalInfoExpanded) {
        return "Прикажи скратена информација";
      } else {
        return "Прикажи целосна информација";
      }
    },
    vehicleTitle() {
      const type = Vehicles.carTypes.find(c => c.id == this.vehigleType).name;
      const model = Vehicles.carModels.find(c => c.id == this.vehicleModel)
        .name;
      return type + " " + model;
    },
    dateString() {
      return this.vehicleMonth + " " + this.vehicleYear;
    },
    engineTypeString() {
      return EngineTypes.find(c => c.id == this.engineType).name;
    },
    vehicleTransmissionString() {
      return TransmissionTypes.find(c => c.id == this.vehicleTransmission).name;
    },
    vehiclePriceString() {
      if (this.agreedOnPrice) {
        return "По договор";
      } else {
        return this.vehiclePrice + "еур";
      }
    }
  },
  created() {
    console.log(Vehicles);
    // this.shortAditionalInfo = this.fullAditionalInfo.substring(0, 150) + "...";
    // this.aditionalInfo = this.shortAditionalInfo;
    const blobs = this.$store.getters["create/getFiles"];
    for (let blob of blobs) {
      this.images.push(blob.url);
    }

    this.vehigleType = this.$store.getters["create/getVehicleType"];
    this.vehicleModel = this.$store.getters["create/getVehicleModel"];
    this.vehiclePrice = this.$store.getters["create/getVehiclePrice"];
    this.agreedOnPrice = this.$store.getters["create/getAgreeOnPrice"];
    this.vehicleYear = this.$store.getters["create/getVehicleManufactureYear"];
    this.vehicleMonth = this.$store.getters[
      "create/getVehicleManufactureMonth"
    ];
    this.engineType = this.$store.getters["create/getVehicleEngineType"];
    this.vehicleTransmission = this.$store.getters[
      "create/getVehicleTransmissionType"
    ];
    this.enginePower = this.$store.getters["create/getVehicleHorsePower"];
    this.vehicleMileage = this.$store.getters["create/getVehicleMileage"];
    this.region = this.$store.getters["create/getVehicleRegion"];
    this.contact = this.$store.getters["create/getVehicleContact"];
    this.euroStandard = this.$store.getters["create/getVehicleEuroStandard"];
    this.color = this.$store.getters["create/getVehicleColor"];
    this.fullAditionalInfo = this.$store.getters["create/getVehicleExtraInfo"];
    this.shortAditionalInfo = this.fullAditionalInfo.substring(0, 150) + "...";
    this.aditionalInfo = this.shortAditionalInfo;

    this.shortInfo = this.$store.getters["create/getVehicleModification"];
  },
  methods: {
    toggleExtraInfo() {
      if (!this.additionalInfoExpanded) {
        this.additionalInfoExpanded = true;
        this.aditionalInfo = this.fullAditionalInfo;
      } else {
        this.additionalInfoExpanded = false;
        this.aditionalInfo = this.shortAditionalInfo;
      }
    },
    shareViaWebShare() {
      navigator.share({
        title: "Title to be shared",
        text: "Text to be shared",
        url: "URL to be shared"
      });
    }
  }
});
</script>

<style>
.carousel__item {
  height: 45vh;
  width: 100%;
  background-color: var(--carousel-color-primary);
  color: var(--carousel-color-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .carousel__slide {
  padding: 10px;
} */

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.carousel {
  width: 100%;
  margin: auto;
  padding-top: 2vh;
}

.carousel__prev {
  left: 6vw;
  top: 100% !important;
  background-color: #00a2ed;
  display: none;
}
.carousel__next {
  right: 6vw;
  top: 100% !important;
  background-color: #00a2ed;
  display: none;
}
.carousel__pagination-button {
  background-color: #99d5f0;
}
.carousel__pagination-button--active {
  background-color: #00a2ed;
}

.container-content {
  height: 100%;
}

.post-container {
  background-color: #e1e1e1;
  height: 92%;
  overflow-y: auto;
}

p {
  margin: 0;
}

p.price {
  font-size: 20px;
  font-weight: bold;
  color: #00a2ed;
}

.secondary-info {
  font-size: 18px;
}

.secondary-info p {
  margin: 0;
}

.secondary-info span {
  font-weight: bold;
}

.aditional-info p {
  margin: 0;
}

.aditional-info .btn-link {
  padding: 0;
}

.section-container {
  background-color: white;
  border-radius: 5px;
  padding: 2%;
  margin: 3%;
}

div.spec-name {
  display: flex;
  align-items: center;
}

div.spec-name p {
  padding-left: 2%;
}

div.spec-name i {
  color: #00a2ed;
}

.specification {
  margin-bottom: 5%;
}

.share button {
  width: 100%;
}

.buttons .btn {
  width: 48%;
  margin: 1%;
}

p.price {
  padding-bottom: 5px;
}
</style>
