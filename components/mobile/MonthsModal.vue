<template>
  <div class="year-container">
    <div class="year-selector">
      <div
        v-for="month of months"
        :key="month"
        class="year"
        @click="selectMonth(month)"
      >
        <p>{{ month }}</p>
        <i
          :class="
            selectedMonth == month ? 'fas fa-check-circle' : 'far fa-circle'
          "
        ></i>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["closeMonthsPopUp"],
  created() {
    this.selectedMonth = this.$store.getters[
      "create/getVehicleManufactureMonth"
    ];
  },

  methods: {
    selectMonth(month) {
      this.$store.commit("create/updateVehicleMonth", month);
      this.selectedMonth = month;
      this.closeMonthsPopUp();
    },
  },
  data() {
    return {
      selectedMonth: "",
      months: [
        "Јануари",
        "Февруари",
        "Март",
        "Април",
        "Мај",
        "Јуни",
        "Јули",
        "Август",
        "Септември",
        "Октомври",
        "Ноември",
        "Декември",
      ],
    };
  },
};
</script>

<style scoped>
.year-container {
  height: 78%;
  top: 10%;
  width: 94%;
  position: absolute;
  z-index: 10;
  background-color: grey;
  left: 3%;
  overflow-y: auto;
}

.year {
  height: 7vh;
  color: white;
  display: flex;
  align-items: center;
  font-size: 20px !important;
  position: relative;
}

.year p {
  margin: 0;
  padding-left: 2vh;
}

.year i {
  position: absolute;
  right: 2vh;
}

.year-selector hr {
  color: white;
  margin: 0;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.year.disabled {
  color: #615f5f;
}
</style>
