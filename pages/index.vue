<template>
  <div class="home-page">
    <!-- <MobileHomePage /> -->

    <MobileHomePage />
  </div>
</template>

<script>
import MobileHomePage from "~/components/pages/mobile/home.vue";
export default {
  components: { MobileHomePage },
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
.home-page {
  height: 100vh;
}
</style>
