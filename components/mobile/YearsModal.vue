<template>
  <div class="year-container">
    <div class="year-selector">
      <div
        v-for="year of years"
        :key="year"
        :class="'year ' + disabled(year)"
        @click="disabled(year) == '' ? selectYear(year) : prevent"
      >
        <p>{{ year }}</p>
        <i
          :class="
            selectedYear == year ? 'fas fa-check-circle' : 'far fa-circle'
          "
        ></i>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["from", "to", "create", "closeYearsPopUp"],
  created() {
    this.yearFrom = this.$store.getters["filter/yearFrom"];
    this.yearTo = this.$store.getters["filter/yearTo"];
  },
  computed: {
    selectedYear() {
      if (this.from == true) {
        return this.yearFrom;
      } else {
        return this.yearTo;
      }
    },
  },
  methods: {
    disabled(year) {
      if (this.from == true) {
        if (this.yearTo != "") {
          if (parseInt(year) > parseInt(this.yearTo)) {
            return "disabled";
          } else return "";
        } else return "";
      } else {
        if (this.yearFrom != "") {
          if (parseInt(year) < parseInt(this.yearFrom)) {
            return "disabled";
          } else return "";
        } else return "";
      }
    },
    selectYear(year) {
      if (this.from == true) {
        this.$store.commit("filter/updateYear", {
          from: year,
          to: this.yearTo,
        });
      } else if (this.to == true) {
        this.$store.commit("filter/updateYear", {
          from: this.yearFrom,
          to: year,
        });
        //this.yearTo = year;
      } else if (this.create == true) {
        this.$store.commit("create/updateVehicleYear", year);
      }
      this.closeYearsPopUp();
    },
  },
  data() {
    return {
      isCreatingPost: "",
      yearFrom: "",
      yearTo: "",
      years: [
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
        "2007",
        "2006",
        "2005",
        "2004",
        "2003",
        "2002",
        "2001",
        "2000",
        "1999",
        "1998",
        "1997",
        "1996",
        "1995",
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
