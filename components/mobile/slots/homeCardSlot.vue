<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.opt {
  width: 100%;
}

.category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  min-height: 50px;
  font-size: 18px;
  background-color: white;
  border-radius: 25px;
  margin-bottom: 2%;
  padding: 0 5%;
  color: black;
}
a.router-link {
  display: block;
  width: 100%;
  height: 8vh;
  min-height: 50px;
  margin-bottom: 2%;
  text-decoration: none;
}

.selected-category {
  color: #0d6efd;
}
</style>
