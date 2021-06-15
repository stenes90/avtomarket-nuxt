<template>
  <div class="vehicle-type">
    <Header title="Марка и Модел" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div class="options">
        <CarTypeOption
          v-if="isCreatingPost == false"
          optionName="Сите"
          id="0"
          path="home"
        />
        <div class="car-label">
          <p>Нај популарни</p>
        </div>
        <CarTypeOption
          v-for="option in popularOptions"
          :key="option.id + option.optionName"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />

        <div class="car-label">
          <p>А</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('a')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />

        <div class="car-label">
          <p>B</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('b')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />

        <div class="car-label">
          <p>C</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('c')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>D</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('d')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />

        <div class="car-label">
          <p>F</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('f')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>G</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('g')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>H</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('h')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>I</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('i')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>J</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('j')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>K</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('k')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>L</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('l')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>M</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('m')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>N</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('n')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>O</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('o')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>P</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('p')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />

        <div class="car-label">
          <p>R</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('r')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>S</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('s')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>T</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('t')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />

        <div class="car-label">
          <p>U</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('u')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>V</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('v')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>W</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('w')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
        <div class="car-label">
          <p>X</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('x')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />

        <div class="car-label">
          <p>Z</p>
        </div>
        <CarTypeOption
          v-for="option in filteredOptions('z')"
          :key="option.id"
          :id="option.id"
          :optionName="option.optionName"
          optionSign="fas fa-angle-right fa-2x"
        />
      </div>
    </content-slot>

    <BottomButtons :handleConfirm="submitType" :handleCancel="cancel" />
  </div>
</template>

<script>
import Vehicles from "~/Vehicles.json";
import CarTypeOption from "~/components/mobile/CarTypeOption.vue";
import ContentSlot from "~/components/mobile/slots/contentSlot";

export default {
  components: {
    CarTypeOption,
    ContentSlot
  },
  created() {
    const opop = [];
    for (let i = 0; i < 103; i++) {
      const vehicle = {};
      vehicle.car = true;
      vehicle.id = Vehicles.carTypes[i].id;
      vehicle.selected = false;
      vehicle.singleOption = true;
      vehicle.optionName = Vehicles.carTypes[i].name;
      vehicle.optionSign = "fas fa-angle-right fa-2x";
      vehicle.path = "cars/" + Vehicles.carTypes[i].id;
      vehicle.type = opop.push(vehicle);

      this.options.push(vehicle);
      this.isCreatingPost = this.$store.getters["isCreatingPost"];
    }
    // console.log(this.options[0]);
    const popularCars = [
      "audi",
      "mercedes-benz",
      "bmw",
      "vw",
      "peugeot",
      "opel",
      "mazda",
      "toyota",
      "honda",
      "renault",
      "citroen"
    ];
    const popularCarObjects = [];
    for (const car of popularCars) {
      const carFromList = opop.filter(c => c.optionName.toLowerCase() == car);
      popularCarObjects.push(carFromList[0]);
    }
    this.popularOptions = popularCarObjects;
  },

  methods: {
    filteredOptions(filterChar) {
      return this.options.filter(
        c => c.optionName[0].toLowerCase() == filterChar.toLowerCase()
      );
    },
    submitType() {
      if (this.isCreatingPost == false) {
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateVehicleType", "");
        this.$router.push("/create");
      }
    },
    cancel() {
      if (this.isCreatingPost == false) {
        this.$store.commit("filter/updateselectedVehicleTypeId", "");
        this.$store.commit("filter/updateselectedVehicleModelIds", ["0"]);
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateVehicleType", "");
        this.$store.commit("create/updateVehicleModel", "");
        this.$router.push("/create");
      }
    }
  },

  data() {
    return {
      popularOptions: [],

      options: [
        {
          id: "1",
          car: true,
          selected: true,
          singleOption: true,
          optionName: "Сите",
          optionSign: "fas fa-angle-right fa-2x",
          isCreatingPost: null
        }
      ]
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

div.car-label {
  height: 5vh;
  min-height: 25px;
  width: 100%;
  background: #6d6a6a;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-left: 5%;
  margin-bottom: 1%;
}

.car-label {
  margin-bottom: 2% !important;
}
</style>
