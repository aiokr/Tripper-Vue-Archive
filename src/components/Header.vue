<script setup>
</script>

<template>
  <div class="header w-screen h-[58px] bg-white shadow-sm">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0px;
  left: 0px;
}

.header a {
  height: 58px;
  display: inline-block;
  line-height: 58px;
  padding: 0 12px;
}
</style>
