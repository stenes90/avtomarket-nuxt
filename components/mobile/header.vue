<template>
  <div class="header">
    <div class="header-icons">
      <font-awesome-icon
        far
        icon="bars"
        class="burger-icon"
        style="display: none;"
      />
      <div v-if="backBtn == true" class="back_btn nav-item">
        <font-awesome-icon @click="goBack" far icon="angle-left" class="back" />

        <!-- <i @click="goBack" class="fas fa-angle-left back"></i> -->
      </div>
      <div v-if="burgerBtn == true" class="menu nav-item burger">
        <ClientOnly>
          <SlideMenu>
            <a id="home" href="#">
              <span>Home</span>
            </a>
          </SlideMenu>
        </ClientOnly>
      </div>

      <div class="logo">
        <img src="~/assets/images/car-logo3.png" alt="avtomarket.mk" />
      </div>

      <div
        v-if="
          isCreatingPost == false && bmenuOpened == false && burgerBtn == true
        "
        @click="createPost"
        class="create-post nav-item"
      >
        <font-awesome-icon far icon="plus-square" class="create-post-icon" />
        <!-- <i class="fas fa-plus-square nav-icon"></i> -->
        <p class="nav-info-text">Нов оглас</p>
      </div>

      <div v-if="emptyRight || bmenuOpened" class="nav-item"></div>
      <font-awesome-icon v-if="favBtn" far icon="star" class="fav-header" />

      <!-- <i v-if="favBtn" class="far fa-star fav-header"></i> -->
    </div>
  </div>
</template>

//
<script scoped>
export default {
  components: {},
  computed: {},
  props: [
    "title",
    "isBurgerOpened",
    "post",
    "burgerBtn",
    "createBtn",
    "backBtn",
    "favBtn",
    "emptyRight"
  ],
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
  },

  updated() {
    let parentEl = document.querySelector(".bm-burger-button");
    let burgerEl = document.querySelector(".burger-icon");
    let burgerTextEl = document.createElement("p");
    burgerTextEl.className = "nav-info-text";
    burgerTextEl.innerHTML = "Мени";
    if (parentEl != null) {
      burgerEl.style.display = "inline-block";
      parentEl.appendChild(burgerEl);
      parentEl.appendChild(burgerTextEl);
    }
  },

  data() {
    return {
      bmenuOpened: false,
      isCreatingPost: ""
    };
  },

  methods: {
    //check if this works
    goBack() {
      this.$router.back();
    },
    handleOpenMenu() {
      this.$store.commit("openBurgerMenu", true, { root: true });
      this.bmenuOpened = true;
      this.isBurgerOpened(true);
    },
    handleCloseMenu() {
      this.$store.commit("closeBurgerMenu", false, { root: true });
      this.bmenuOpened = false;

      this.isBurgerOpened(false);
    },
    newSearch() {
      this.$router.push("/");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    },
    createPost() {
      this.$router.push("create");
    }
  }
};
</script>

<style>
.header h4 {
  color: #0a9ce0;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  min-height: 50px;
  width: 100%;
  text-align: center;
  background-color: white;
  z-index: 99999;
}

.plus {
  font-size: 6vw;
  position: absolute;
  top: 2vh;
  right: 3vw;
  color: #0d6efd;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.header-content h4 {
  width: 80%;
}

.fav-header {
  font-size: 3vh;
}

.burger-header {
  height: 7vh;
  position: absolute;
  top: 0;
  width: 300px;
  left: 0;
  background: #f1ecec;
  align-items: center;
  justify-content: center;
  color: black;
}

.bm-cross-button {
  top: 2vh;
}

.bm-burger-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative !important;
  height: 100%;
  width: 100%;
  height: 1.4rem;
  width: 1.6rem;
  top: unset !important;
  left: unset !important;
}

.bm-menu {
  padding-top: 7vh;
  background-color: white;
}

.bm-item-list {
  margin-left: 0;
}

.burger-item {
  height: 8vh;
  padding: 0;
  color: black;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3vw;
}

.burger-item p {
  width: 240px;
  margin: 0;
  text-align: left;
  margin-left: 8px;
  font-size: 18px;
}

.bm-burger-bars {
  display: none;
}

hr {
  margin: 0;
  padding: 0 !important;
  color: black;
}

.icon {
  color: #0d6efd;
}
.fa-angle-right {
  color: grey;
}

.burger-icon {
  width: 15vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 30%;
  height: 100%;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12vw;
  font-size: 1.8rem;
}

.nav-item p {
  margin-bottom: 0;
}

.nav-icon {
  font-size: 2rem;
  color: #cccccc;
}

.nav-info-text {
  font-size: 0.55rem;
}

.header-icons {
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 2%;
}
.back_btn {
  color: #cccccc;
  font-size: 2rem;
}
.menu-item {
  display: flex;
  color: black;
  align-items: center;
  width: 100%;
}
</style>
