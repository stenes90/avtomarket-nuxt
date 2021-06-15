<template>
  <div class="buttons">
    <button @click="cancel" type="button" class="btn btn-secondary cancel">
      {{ leftBtnNameString }}
    </button>
    <button @click="confirm" type="button" :class="'btn btn-primary confirm '">
      {{ rightBtnNameString }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["handleCancel", "handleConfirm", "leftBtnName", "rightBtnName"],
  computed: {
    leftBtnNameString() {
      return this.leftBtnName == null ? "Откажи" : this.leftBtnName;
    },
    rightBtnNameString() {
      return this.rightBtnName == null ? "Ок" : this.rightBtnName;
    }
  },
  methods: {
    cancel() {
      this.handleCancel();
    },
    confirm() {
      this.handleConfirm();
    }
  }
};
</script>

<style scoped>
.confirm {
  width: 48%;
  height: 80%;

  margin-left: 1%;
}
.cancel {
  width: 48%;
  height: 80%;
}

.buttons {
  padding: 1%;
  height: 10vh;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  background-color: white;
}
</style>
