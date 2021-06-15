<template>
  <div class="post-additional-info-page">
    <Header :backBtn="true" :emptyRight="true" title="Инфо" />
    <content-slot>
      <textarea
        placeholder="Внесете дополнителни информации за вашето возило"
        class="description"
        cols="30"
        rows="10"
        v-model="description"
      ></textarea>
    </content-slot>
    <BottomButtons :handleConfirm="confirm" :handleCancel="cancel" />
  </div>
</template>

<script>
import ContentSlot from "~/components/mobile/slots/contentSlot.vue";
export default {
  components: {
    ContentSlot
  },
  data() {
    return {
      description: ""
    };
  },
  created() {
    this.description = this.$store.getters["create/getVehicleExtraInfo"];
  },
  methods: {
    confirm() {
      this.$store.commit("create/updateExtraInfo", this.description);
      this.$router.push("/create");
    },
    cancel() {
      this.$store.commit("create/updateExtraInfo", "");
      this.$router.push("/create");
    }
  }
};
</script>

<style scoped>
.description {
  width: 100%;
  height: max(150px, 40%);
}

.content-slot {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

textarea {
  margin-bottom: 2vh;
}
</style>
