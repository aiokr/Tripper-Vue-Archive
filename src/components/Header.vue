<script setup>
</script>

<template>
  <div class="header w-screen h-[58px]shadow-sm">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0px;
  left: 0px;
  background-color: rgba(255,255,255,.7098039216);
  backdrop-filter: saturate(180%) blur(18px)!important;
  z-index: 9999;
}

.header a {
  height: 58px;
  display: inline-block;
  line-height: 58px;
  padding: 0 12px;
}
</style>
