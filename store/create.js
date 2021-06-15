// import Vuex from "vuex";

// const create = {
//   namespaced: true,
//   state: {
//     vehicleCategory: "1",
//     vehicleType: "",
//     vehicleModel: "",
//     modification: "",
//     price: "",
//     agreeOnPrice: false,
//     currency: "1",
//     manufactureYear: "",
//     manufactureMonth: "",
//     engineType: "",
//     transmissionType: "",
//     horsePower: "",
//     euroStandard: "",
//     mileage: "",
//     color: "",
//     region: "",
//     city: "",
//     extraInfo: "",
//     vehicleSpecs: [],
//     contact: "",
//     showValidationMsgs: false,
//     files: []
//   },

//   mutations: {
//     updateVehicleCategory(state, id) {
//       state.vehicleCategory = id;
//     },
//     updateVehicleType(state, id) {
//       state.vehicleType = id;
//     },
//     updateVehicleModel(state, id) {
//       state.vehicleModel = id;
//     },
//     updateVehicleModification(state, modification) {
//       state.modification = modification;
//     },
//     updateVehiclePrice(state, price) {
//       state.price = price;
//     },
//     updateAgreeOnPrice(state, agreeOnPrice) {
//       state.agreeOnPrice = agreeOnPrice;
//     },
//     updateCurrency(state, currency) {
//       state.currency = currency;
//     },
//     updateVehicleYear(state, manufactureYear) {
//       state.manufactureYear = manufactureYear;
//     },
//     updateVehicleMonth(state, manufactureMonth) {
//       state.manufactureMonth = manufactureMonth;
//     },
//     updateEngineType(state, id) {
//       state.engineType = id;
//     },
//     updateTransmissionType(state, id) {
//       state.transmissionType = id;
//     },
//     updateHorsePower(state, hp) {
//       state.horsePower = hp;
//     },
//     updateEuroStandard(state, id) {
//       state.euroStandard = id;
//     },
//     updateMileage(state, mileage) {
//       state.mileage = mileage;
//     },
//     updateColor(state, color) {
//       state.color = color;
//     },
//     updateRegion(state, region) {
//       state.region = region;
//     },
//     updateCity(state, city) {
//       state.city = city;
//     },
//     updateExtraInfo(state, extraInfo) {
//       state.extraInfo = extraInfo;
//     },
//     updateVehicleSpecs(state, vehicleSpecs) {
//       state.vehicleSpecs = vehicleSpecs;
//     },
//     updateContact(state, contact) {
//       state.contact = contact;
//     },
//     updateShowValidationMsgs(state, status) {
//       state.showValidationMsgs = status;
//     },
//     updateFiles(state, files) {
//       state.files = files;
//     }
//   },

//   getters: {
//     getVehicleCategory(state) {
//       return state.vehicleCategory;
//     },
//     getVehicleType(state) {
//       return state.vehicleType;
//     },
//     getVehicleModel(state) {
//       return state.vehicleModel;
//     },
//     getVehicleModification(state) {
//       return state.modification;
//     },
//     getVehiclePrice(state) {
//       return state.price;
//     },
//     getAgreeOnPrice(state) {
//       return state.agreeOnPrice;
//     },
//     getCurrency(state) {
//       return state.currency;
//     },
//     getVehicleManufactureYear(state) {
//       return state.manufactureYear;
//     },
//     getVehicleManufactureMonth(state) {
//       return state.manufactureMonth;
//     },
//     getVehicleEngineType(state) {
//       return state.engineType;
//     },
//     getVehicleTransmissionType(state) {
//       return state.transmissionType;
//     },
//     getVehicleHorsePower(state) {
//       return state.horsePower;
//     },
//     getVehicleEuroStandard(state) {
//       return state.euroStandard;
//     },
//     getVehicleMileage(state) {
//       return state.mileage;
//     },
//     getVehicleColor(state) {
//       return state.color;
//     },
//     getVehicleRegion(state) {
//       return state.region;
//     },
//     getVehicleCity(state) {
//       return state.city;
//     },
//     getVehicleExtraInfo(state) {
//       return state.extraInfo;
//     },
//     getVehicleSpecs(state) {
//       return state.vehicleSpecs;
//     },
//     getVehicleContact(state) {
//       return state.contact;
//     },
//     getShowValidationMsgs(state) {
//       return state.showValidationMsgs;
//     },
//     getFiles(state) {
//       return state.files;
//     }
//   },
//   actions: {}
// };

// export default create;

export const state = () => ({
  vehicleCategory: "1",
  vehicleType: "",
  vehicleModel: "",
  modification: "",
  price: "",
  agreeOnPrice: false,
  currency: "1",
  manufactureYear: "",
  manufactureMonth: "",
  engineType: "",
  transmissionType: "",
  horsePower: "",
  euroStandard: "",
  mileage: "",
  color: "",
  region: "",
  city: "",
  extraInfo: "",
  vehicleSpecs: [],
  contact: "",
  showValidationMsgs: false,
  files: []
});

export const mutations = {
  updateVehicleCategory(state, id) {
    state.vehicleCategory = id;
  },
  updateVehicleType(state, id) {
    state.vehicleType = id;
  },
  updateVehicleModel(state, id) {
    state.vehicleModel = id;
  },
  updateVehicleModification(state, modification) {
    state.modification = modification;
  },
  updateVehiclePrice(state, price) {
    state.price = price;
  },
  updateAgreeOnPrice(state, agreeOnPrice) {
    state.agreeOnPrice = agreeOnPrice;
  },
  updateCurrency(state, currency) {
    state.currency = currency;
  },
  updateVehicleYear(state, manufactureYear) {
    state.manufactureYear = manufactureYear;
  },
  updateVehicleMonth(state, manufactureMonth) {
    state.manufactureMonth = manufactureMonth;
  },
  updateEngineType(state, id) {
    state.engineType = id;
  },
  updateTransmissionType(state, id) {
    state.transmissionType = id;
  },
  updateHorsePower(state, hp) {
    state.horsePower = hp;
  },
  updateEuroStandard(state, id) {
    state.euroStandard = id;
  },
  updateMileage(state, mileage) {
    state.mileage = mileage;
  },
  updateColor(state, color) {
    state.color = color;
  },
  updateRegion(state, region) {
    state.region = region;
  },
  updateCity(state, city) {
    state.city = city;
  },
  updateExtraInfo(state, extraInfo) {
    state.extraInfo = extraInfo;
  },
  updateVehicleSpecs(state, vehicleSpecs) {
    state.vehicleSpecs = vehicleSpecs;
  },
  updateContact(state, contact) {
    state.contact = contact;
  },
  updateShowValidationMsgs(state, status) {
    state.showValidationMsgs = status;
  },
  updateFiles(state, files) {
    state.files = files;
  }
};

export const actions = {};

export const getters = {
  getVehicleCategory(state) {
    return state.vehicleCategory;
  },
  getVehicleType(state) {
    return state.vehicleType;
  },
  getVehicleModel(state) {
    return state.vehicleModel;
  },
  getVehicleModification(state) {
    return state.modification;
  },
  getVehiclePrice(state) {
    return state.price;
  },
  getAgreeOnPrice(state) {
    return state.agreeOnPrice;
  },
  getCurrency(state) {
    return state.currency;
  },
  getVehicleManufactureYear(state) {
    return state.manufactureYear;
  },
  getVehicleManufactureMonth(state) {
    return state.manufactureMonth;
  },
  getVehicleEngineType(state) {
    return state.engineType;
  },
  getVehicleTransmissionType(state) {
    return state.transmissionType;
  },
  getVehicleHorsePower(state) {
    return state.horsePower;
  },
  getVehicleEuroStandard(state) {
    return state.euroStandard;
  },
  getVehicleMileage(state) {
    return state.mileage;
  },
  getVehicleColor(state) {
    return state.color;
  },
  getVehicleRegion(state) {
    return state.region;
  },
  getVehicleCity(state) {
    return state.city;
  },
  getVehicleExtraInfo(state) {
    return state.extraInfo;
  },
  getVehicleSpecs(state) {
    return state.vehicleSpecs;
  },
  getVehicleContact(state) {
    return state.contact;
  },
  getShowValidationMsgs(state) {
    return state.showValidationMsgs;
  },
  getFiles(state) {
    return state.files;
  }
};
