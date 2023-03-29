<script setup>
import Hero from "../components/Hero.vue";
import HomeArticle from "../components/Article/HomeArticle.vue";
import HomeAlbum from "../components/Photograph/HomeAlbum.vue";
document.title = title.value + ' | Tripper Press'
</script>
<template>
  <Hero />
  <HomeArticle />
  <HomeAlbum />
  <div style="height: 120px;"></div>
</template>