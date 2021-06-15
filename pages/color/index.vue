<template>
  <div class="vehicle-color-page">
    <Header title="Боја" :backBtn="true" :emptyRight="true" />
    <content-slot>
      <div class="content">
        <div class="colors">
          <div
            v-for="color in colors"
            :key="color.id"
            :class="className(color.id)"
            @click="updateColor(color.id)"
          >
            <p>{{ color.name }}</p>
            <hr />
          </div>
        </div>
      </div>
    </content-slot>

    <BottomButtons :handleConfirm="submitColor" :handleCancel="cancel" />
  </div>
</template>

<script>
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
export default {
  components: {
    ContentSlot
  },
  created() {
    this.isCreatingPost = this.$store.getters["isCreatingPost"];
    if (!this.isCreatingPost) {
      this.color = this.$store.getters["filter/getColor"];
    } else {
      this.color = this.$store.getters["create/getVehicleColor"];
    }
  },

  data() {
    return {
      color: "",
      colors: [
        { id: "1", name: "Боја1" },
        { id: "2", name: "Боја2" },
        { id: "3", name: "Боја3" },
        { id: "4", name: "Боја4" },
        { id: "5", name: "Боја5" },
        { id: "6", name: "Боја6" },
        { id: "7", name: "Боја7" },
        { id: "8", name: "Боја8" },
        { id: "9", name: "Боја9" },
        { id: "10", name: "Боја10" },
        { id: "11", name: "Боја11" },
        { id: "12", name: "Боја12" },
        { id: "13", name: "Боја13" },
        { id: "14", name: "Боја14" },
        { id: "15", name: "Боја15" },
        { id: "16", name: "Боја16" },
        { id: "17", name: "Боја17" },
        { id: "18", name: "Боја18" }
      ],
      isCreatingPost: ""
    };
  },
  methods: {
    // submitCarModels() {
    //   this.$store.commit(
    //     "filter/updateselectedVehicleModelIds",
    //     this.selectedCarModels
    //   );
    // },
    submitColor() {
      if (this.isCreatingPost == false) {
        this.$router.push("/home");
      } else {
        this.$router.push("/create");
      }
    },
    cancel() {
      if (this.isCreatingPost == false) {
        this.$store.commit("filter/updateColor", "");
        this.$router.push("/home");
      } else {
        this.$store.commit("create/updateColor", "");
        this.$router.push("/create");
      }
    },
    className(id) {
      if (this.color == id) {
        return "color-option selected";
      } else return "color-option";
    },

    updateColor(id) {
      if (!this.isCreatingPost) {
        this.$store.commit("filter/updateColor", id);
        this.color = id;
        this.$router.push("/home");
      } else {
        this.$store.commit("create/updateColor", id);
        this.color = id;
        this.$router.push("/create");
      }
    }
  }
};
</script>

<style scoped>
.colors {
  width: 100%;
  overflow-y: auto;
}

label {
  width: 100%;
}

.color-option {
  background-color: white;
  height: 8vh;
  display: flex;
  align-items: center;
  font-size: 18px;
  position: relative;
  justify-content: space-between;
  padding: 3%;
}

.color-option p {
  margin-bottom: 0px;
}

.color-option.selected {
  color: #00a2ed;
}
/* // */
hr {
  position: absolute;
  bottom: 0;
  margin: auto;
  height: 1px;
  width: 100%;
  left: 0;
}
.checkbox {
  padding-left: 8%;
}

div.car-label {
  height: 4vh;
  width: 100%;
  background: #6d6a6a;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-left: 3%;
  margin-bottom: 2%;
}

.car-label p {
  margin: 0;
}

.content {
  height: 100%;
  overflow-y: auto;
}
</style>
