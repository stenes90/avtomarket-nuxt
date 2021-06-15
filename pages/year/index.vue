<template>
  <div class="manufacture-year-page">
    <YearsModal
      v-if="yearsModalShown == true"
      :from="from"
      :to="to"
      :create="create"
      :closeYearsPopUp="closeYearsPopUp"
    />
    <MonthsModal
      v-if="monthsModalShown == true"
      :from="from"
      :to="to"
      :create="create"
      :closeMonthsPopUp="closeMonthsPopUp"
    />
    <Header title="Дата" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div class="container">
        <div v-if="!isCreatingPost" class="from-to-prices">
          <div class="input-group mb-3" @click="showFromYearPupUp">
            <div class="input-group-prepend">
              <span class="input-group-text">Од</span>
            </div>
            <input
              :value="yearFrom"
              class="form-control"
              readonly="readonly"
              style="background-color: white;"
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <font-awesome-icon far icon="caret-down" />
              </span>
            </div>
          </div>
          <div class="input-group mb-3" @click="showToYearPupUp">
            <div class="input-group-prepend">
              <span class="input-group-text">До</span>
            </div>
            <input
              :value="yearTo"
              type=" "
              class="form-control"
              readonly="readonly"
              style="background-color: white;"
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <font-awesome-icon far icon="caret-down" />
              </span>
            </div>
          </div>
        </div>
        <div v-if="isCreatingPost" class="create-year">
          <div class="input-group mb-3" @click="showMonthsPopUp">
            <div class="input-group-prepend">
              <span class="input-group-text">Месец : </span>
            </div>
            <input
              :value="month"
              type=" "
              :class="monthValidationsClass"
              readonly="readonly"
              style="background-color: white;"
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <font-awesome-icon far icon="caret-down" />
              </span>
            </div>
          </div>
          <div class="input-group mb-3" @click="showCreateYearPupUp">
            <div class="input-group-prepend">
              <span class="input-group-text">Година: </span>
            </div>
            <input
              :value="createYear"
              type=" "
              :class="yearValidationsClass"
              readonly="readonly"
              style="background-color: white;"
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <font-awesome-icon far icon="caret-down" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </content-slot>

    <BottomButtons :handleConfirm="submitYear" :handleCancel="cancel" />
  </div>
</template>

<script>
import YearsModal from "~/components/mobile/YearsModal.vue";
import MonthsModal from "~/components/mobile/MonthsModal.vue";
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";

export default {
  components: {
    YearsModal,
    MonthsModal,
    ContentSlot
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (!this.isCreatingPost) {
      this.yearFrom = this.$store.getters["filter/yearFrom"];
      this.yearTo = this.$store.getters["filter/yearTo"];
    } else {
      this.createYear = this.$store.getters["create/getVehicleManufactureYear"];
      this.month = this.$store.getters["create/getVehicleManufactureMonth"];
    }
  },
  updated() {
    this.yearFrom = this.$store.getters["filter/yearFrom"];
    this.yearTo = this.$store.getters["filter/yearTo"];
    this.createYear = this.$store.getters["create/getVehicleManufactureYear"];
    this.month = this.$store.getters["create/getVehicleManufactureMonth"];
  },
  computed: {
    yearValidationsClass() {
      if (this.showValidations == false) {
        return "form-control";
      } else {
        if (this.createYear == "") {
          return "form-control validation-border";
        } else return "form-control";
      }
    },
    monthValidationsClass() {
      if (this.showValidations == false) {
        return "form-control";
      } else {
        if (this.month == "") {
          return "form-control validation-border";
        } else return "form-control";
      }
    }
  },
  data() {
    return {
      isCreatingPost: "",
      createYear: "",
      month: "",
      yearsModalShown: false,
      monthsModalShown: false,
      from: false,
      to: false,
      create: false,
      yearFrom: "",
      yearTo: "",
      showValidations: false
    };
  },
  methods: {
    showFromYearPupUp() {
      this.from = true;
      this.to = false;
      this.create = false;
      this.yearsModalShown = true;
    },
    showToYearPupUp() {
      this.from = false;
      this.to = true;
      this.create = false;
      this.yearsModalShown = true;
    },
    showCreateYearPupUp() {
      this.from = false;
      this.to = false;
      this.create = true;
      this.yearsModalShown = true;
    },
    closeYearsPopUp() {
      this.yearsModalShown = false;
    },
    showMonthsPopUp() {
      this.monthsModalShown = true;
    },
    closeMonthsPopUp() {
      this.monthsModalShown = false;
    },
    cancel() {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateYear", {
          from: "",
          to: ""
        });
        this.$router.push("/");
      } else {
        this.$store.commit("create/updateVehicleYear", "");
        this.$store.commit("create/updateVehicleMonth", "");
        this.$router.push("/create");
      }
    },
    showValidationsMsg() {
      this.showValidations = true;
    },
    submitYear() {
      if (!this.isCreatingPost) {
        this.$router.push("/");
      } else {
        if (this.createYear == "" || this.month == "") {
          this.showValidationsMsg();
        } else {
          this.$router.push("/create");
        }
      }
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
.year-selector {
  position: absolute;
  top: 9vh;
  width: 92%;
  height: 79vh;
  left: 4%;
  background-color: #484444;
  z-index: 10;
  opacity: 0.8;
}

.year {
  height: 5vh;
  color: white;
  display: flex;
  align-items: center;
}

.year p {
  margin: 0;
  padding-left: 5px;
}

.year-selector hr {
  color: white;
  margin: 0;
}

.input-group-append span {
  height: 100%;
}

.from-to-prices,
.create-year {
  width: 100%;
}

.validation-border {
  border: 1px solid red;
}
</style>
