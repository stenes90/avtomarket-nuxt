// const filter = {
//   namespaced: true,
//   state: {
//     selectedVehicleCategoryId: "1",
//     selectedVehicleTypeId: "",
//     selectedVehicleModels: ["0"],
//     price: {
//       from: "",
//       to: ""
//     },

//     manufactureYear: {
//       from: "",
//       to: ""
//     },
//     engineType: "",
//     transmissionType: "",
//     horsePower: "",
//     euroStandard: "",
//     region: "",
//     cities: [],
//     color: "",
//     vehicleCategory: "",
//     mileage: "",
//     vehicleSpecs: [],
//     storedVehicleCategories: [
//       {
//         id: "1",
//         parentCategoryId: "1",
//         selected: true,
//         singleOption: true,
//         optionName: "Автомобили",
//         optionSign: "car-side"
//       },
//       {
//         id: "2",
//         parentCategoryId: "1",
//         selected: false,
//         singleOption: true,
//         optionName: "Камиони",
//         optionSign: "truck"
//       },
//       {
//         id: "3",
//         parentCategoryId: "1",
//         selected: false,
//         singleOption: true,
//         optionName: "Автобуси",
//         optionSign: "bus",
//         selectedOption: ""
//       },
//       {
//         id: "4",
//         parentCategoryId: "1",
//         selected: false,
//         singleOption: true,
//         optionName: "Мотори",
//         optionSign: "motorcycle",
//         selectedOption: ""
//       },
//       {
//         id: "5",
//         parentCategoryId: "1",
//         selected: false,
//         singleOption: true,
//         optionName: "Приколки",
//         optionSign: "caravan",
//         selectedOption: ""
//       },
//       {
//         id: "6",
//         parentCategoryId: "1",
//         selected: false,
//         singleOption: true,
//         optionName: "Трејлери",
//         optionSign: "shuttle-van",
//         selectedOption: ""
//       },
//       {
//         id: "7",
//         parentCategoryId: "1",
//         selected: false,
//         singleOption: true,
//         optionName: "Индустриски возила",
//         optionSign: "snowplow",
//         selectedOption: ""
//       },
//       {
//         id: "8",
//         parentCategoryId: "1",
//         selected: false,
//         singleOption: true,
//         optionName: "Велосипеди",
//         optionSign: "bicycle",
//         selectedOption: ""
//       },
//       {
//         id: "9",
//         parentCategoryId: "1",
//         selected: false,
//         singleOption: true,
//         optionName: "Делови",
//         optionSign: "cogs",
//         selectedOption: ""
//       },
//       {
//         id: "10",
//         parentCategoryId: "1",
//         selected: false,
//         singleOption: true,
//         optionName: "Гуми и Бандажи",
//         optionSign: "tire-logo logo",
//         selectedOption: ""
//       },
//       {
//         id: "11",
//         parentCategoryId: "1",
//         selected: false,

//         singleOption: true,
//         optionName: "Услуги",
//         optionSign: "tools",
//         selectedOption: ""
//       }
//     ]
//   },

//   mutations: {
//     updateSelectedVehicleCategoryId(state, id) {
//       state.selectedVehicleCategoryId = id;
//     },
//     updateselectedVehicleTypeId(state, id) {
//       state.selectedVehicleTypeId = id;
//     },
//     updateselectedVehicleModelIds(state, ids) {
//       state.selectedVehicleModels = ids;
//     },
//     updatePrice(state, price) {
//       state.price.from = price.from;
//       state.price.to = price.to;
//     },
//     updateYear(state, year) {
//       state.manufactureYear.from = year.from;
//       state.manufactureYear.to = year.to;
//     },
//     updateselectedEngineTypeId(state, id) {
//       state.engineType = id;
//     },
//     updateselectedTransmissionTypeId(state, id) {
//       state.transmissionType = id;
//     },
//     updateHp(state, hp) {
//       state.horsePower = hp;
//     },
//     updateEuroStandard(state, standard) {
//       state.euroStandard = standard;
//     },
//     updateMileage(state, mileage) {
//       state.mileAge = mileage;
//     },
//     updateColor(state, color) {
//       state.color = color;
//     },

//     updateRegion(state, region) {
//       state.region = region;
//     },
//     updateCities(state, cities) {
//       state.cities = cities;
//     },
//     updateSpecs(state, specs) {
//       state.vehicleSpecs = specs;
//     }
//   },
//   getters: {
//     selectedVehicleModels(state) {
//       return state.selectedVehicleModels;
//     },
//     storedVehicleCategories(state) {
//       return state.storedVehicleCategories;
//     },
//     selectedVehicleCategoryId(state) {
//       return state.selectedVehicleCategoryId;
//     },
//     selectedVehicleTypeId(state) {
//       return state.selectedVehicleTypeId;
//     },
//     priceFrom(state) {
//       return state.price.from;
//     },
//     priceTo(state) {
//       return state.price.to;
//     },
//     yearFrom(state) {
//       return state.manufactureYear.from;
//     },
//     yearTo(state) {
//       return state.manufactureYear.to;
//     },
//     selectedEngineTypeId(state) {
//       return state.engineType;
//     },
//     selectedTransmissionTypeId(state) {
//       return state.transmissionType;
//     },
//     getHP(state) {
//       return state.horsePower;
//     },
//     getEuroStandard(state) {
//       return state.euroStandard;
//     },
//     getMileage(state) {
//       return state.mileage;
//     },
//     getColor(state) {
//       return state.color;
//     },
//     getRegion(state) {
//       return state.region;
//     },
//     getCities(state) {
//       return state.cities;
//     },
//     getSpecs(state) {
//       return state.vehicleSpecs;
//     }
//   },
//   actions: {}
// };

// export default filter;

export const state = () => ({
  selectedVehicleCategoryId: "1",
  selectedVehicleTypeId: "",
  selectedVehicleModels: ["0"],
  price: {
    from: "",
    to: ""
  },

  manufactureYear: {
    from: "",
    to: ""
  },
  engineType: "",
  transmissionType: "",
  horsePower: "",
  euroStandard: "",
  region: "",
  cities: [],
  color: "",
  vehicleCategory: "",
  mileage: "",
  vehicleSpecs: []
});

export const mutations = {
  updateSelectedVehicleCategoryId(state, id) {
    state.selectedVehicleCategoryId = id;
  },
  updateselectedVehicleTypeId(state, id) {
    state.selectedVehicleTypeId = id;
  },
  updateselectedVehicleModelIds(state, ids) {
    state.selectedVehicleModels = ids;
  },
  updatePrice(state, price) {
    state.price.from = price.from;
    state.price.to = price.to;
  },
  updateYear(state, year) {
    state.manufactureYear.from = year.from;
    state.manufactureYear.to = year.to;
  },
  updateselectedEngineTypeId(state, id) {
    state.engineType = id;
  },
  updateselectedTransmissionTypeId(state, id) {
    state.transmissionType = id;
  },
  updateHp(state, hp) {
    state.horsePower = hp;
  },
  updateEuroStandard(state, standard) {
    state.euroStandard = standard;
  },
  updateMileage(state, mileage) {
    state.mileAge = mileage;
  },
  updateColor(state, color) {
    state.color = color;
  },

  updateRegion(state, region) {
    state.region = region;
  },
  updateCities(state, cities) {
    state.cities = cities;
  },
  updateSpecs(state, specs) {
    state.vehicleSpecs = specs;
  }
};

export const actions = {};

export const getters = {
  selectedVehicleModels(state) {
    return state.selectedVehicleModels;
  },
  storedVehicleCategories(state) {
    return state.storedVehicleCategories;
  },
  selectedVehicleCategoryId(state) {
    return state.selectedVehicleCategoryId;
  },
  selectedVehicleTypeId(state) {
    return state.selectedVehicleTypeId;
  },
  priceFrom(state) {
    return state.price.from;
  },
  priceTo(state) {
    return state.price.to;
  },
  yearFrom(state) {
    return state.manufactureYear.from;
  },
  yearTo(state) {
    return state.manufactureYear.to;
  },
  selectedEngineTypeId(state) {
    return state.engineType;
  },
  selectedTransmissionTypeId(state) {
    return state.transmissionType;
  },
  getHP(state) {
    return state.horsePower;
  },
  getEuroStandard(state) {
    return state.euroStandard;
  },
  getMileage(state) {
    return state.mileage;
  },
  getColor(state) {
    return state.color;
  },
  getRegion(state) {
    return state.region;
  },
  getCities(state) {
    return state.cities;
  },
  getSpecs(state) {
    return state.vehicleSpecs;
  }
};
