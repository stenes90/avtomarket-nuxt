<template>
  <div class="overlay-layer">
    <div class="modal-mobile">
      <h4 class="modal-title-mob">{{ title }}</h4>
      <div class="modal-content-mob">{{ content }}</div>
      <div class="modal-footer-mob">
        <button class="btn btn-secondary" @click="handleCancel">Откажи</button>
        <button class="btn btn-primary" @click="handleConfirm">Ok</button>
      </div>
      <font-awesome-icon
        @click="handleClose"
        class="close-icon"
        far
        icon="times-circle"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "content",
    "handleConfirm",
    "handleCancel",
    "okBtn",
    "cancelBtn",
    "handleClose"
  ],
  methods: {}
};
</script>

<style scoped>
.overlay-layer {
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 30vh;
  width: 100%;
  height: 100%;
}
.modal-mobile {
  position: relative;
  height: 30vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 10px;
}

.modal-title-mob {
  margin-bottom: 10px !important;
}

.close-icon {
  position: absolute;
  right: 3%;
  top: 5%;
}

.modal-content-mob {
  margin-bottom: 10px !important;
}

.modal-footer-mob {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 2vh !important;
}
.btn {
  width: 40%;
}
</style>
