<script setup>
</script>

<template>
  <div class="header w-screen h-[58px]shadow-sm">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/article/1">文章</RouterLink>
    <RouterLink to="/about">关于</RouterLink>
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
  color: var(--main-black);
}

.header a {
  height: 58px;
  display: inline-block;
  line-height: 58px;
  padding: 0 12px;
}
</style>
