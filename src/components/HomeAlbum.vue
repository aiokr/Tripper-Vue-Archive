<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

let albumData = ref(null);

async function fetchAlbumData() {
  try {
    const response = await axios.get('https://strapicms.tripper.press/api/albums/');
    albumData.value = response.data.data;
    console.log(albumData.value)
  } catch (error) {
    console.error(error);
  }
}

fetchAlbumData()

</script>
<template>
  <div class="index-post-area container max-w-7xl px-6 lg:px-8">
    <div class="home-title pt-24 pb-2">
      <div class="text-2xl font-bold">摄影</div>
      <RouterLink to="/article/1" class="all-article">所有影集</RouterLink>
    </div>
    <div class="text-sm opacity-50 pb-6">当我按下快门的瞬间，瞬间即是永恒</div>
  </div>
</template>
<style>
.home-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--main-black);
}
</style>