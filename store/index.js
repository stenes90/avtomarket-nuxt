// import Vuex from "vuex";
// import filter from "~/store/filter.js";
// import create from "~/store/create.js";
// //import auth from "~/store/auth.js";

// const createStore = () => {
//   return new Vuex.Store({
//     modules: {
//       filter: filter,
//       create: create
//       // auth
//     },
//     state: {
//       burgerMenuOpened: true,
//       isMobile: null,
//       isCreatingPost: false,
//       favourites: []
//     },
//     mutations: {
//       openBurgerMenu(state) {
//         state.burgerMenuOpened = true;
//       },
//       closeBurgerMenu(state) {
//         state.burgerMenuOpened = false;
//       },
//       updateIsMobile(state, isMobile) {
//         state.isMobile = isMobile;
//       },

//       isCreatingPost(state, val) {
//         state.isCreatingPost = val;
//       },
//       updateFavourites(state, val) {
//         state.favourites = val;
//       }
//     },
//     getters: {
//       isBurgerMenuOpened(state) {
//         return state.burgerMenuOpened;
//       },
//       isMobile(state) {
//         return state.isMobile;
//       },
//       isCreatingPost(state) {
//         return state.isCreatingPost;
//       },
//       getFavourites(state) {
//         return state.favourites;
//       }
//     },
//     actions: {}
//   });
// };

// export default createStore;

export const state = () => ({
  burgerMenuOpened: true,
  isMobile: null,
  isCreatingPost: false,
  favourites: []
});

export const mutations = {
  openBurgerMenu(state) {
    state.burgerMenuOpened = true;
  },
  closeBurgerMenu(state) {
    state.burgerMenuOpened = false;
  },
  updateIsMobile(state, isMobile) {
    state.isMobile = isMobile;
  },

  isCreatingPost(state, val) {
    state.isCreatingPost = val;
  },
  updateFavourites(state, val) {
    state.favourites = val;
  }
};

export const actions = {};

export const getters = {
  isBurgerMenuOpened(state) {
    return state.burgerMenuOpened;
  },
  isMobile(state) {
    return state.isMobile;
  },
  isCreatingPost(state) {
    return state.isCreatingPost;
  },
  getFavourites(state) {
    return state.favourites;
  }
};
