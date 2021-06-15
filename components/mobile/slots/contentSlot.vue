<template>
  <div class="content-slot">
    <slot></slot>
  </div>
</template>

<style>
/* * {
  margin: 0 !important;
} */

.content-slot {
  height: 82vh;
  background-color: #ccc;
  overflow-y: auto;
  padding: 2%;
}

.router-link {
  margin-bottom: 2% !important;
}

.router-link p {
  margin-bottom: 0px;
}
</style>
