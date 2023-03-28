<!--首页照片-->
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

let albumData = ref(null);

async function fetchAlbumData() {
  try {
    const response = await axios.get('https://strapicms.tripper.press/api/albums?populate=cover');
    albumData.value = response.data.data;
    console.log(albumData.value)
  } catch (error) {
    console.error(error);
  }
}


fetchAlbumData()
const state = {
  albumData,
};
</script>

<template>
  <div class="index-album-area container max-w-7xl px-6 lg:px-8">
    <div class="home-title pt-24 pb-2">
      <div class="text-2xl font-bold">摄影</div>
      <RouterLink to="/article/1" class="all-article">所有影集</RouterLink>
    </div>
    <div class="text-sm opacity-50 pb-6">当我按下快门的瞬间，瞬间即是永恒</div>
    <div v-if="albumData !== null" class="grid gap-8 grid-cols-1 md:grid-cols-2 place-items-stretch">

      <div class="col-span-1 album-entry" v-for="item in albumData" :key="item.id"
        :style="{ 'background-image': 'url(' + (item.attributes.cover.data?.attributes.link) + ')' }">
        <router-link :to="{ path: `/album/` + item.id }">
          <div class="album-info">
            <div class="album-title">
              {{ item.attributes.Title }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>
.album-entry {
  background-position: center;
  background-size: cover;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius);
  transition: transform .3s, background-color .3s, box-shadow .6s ease-in-out;

}

.album-entry:hover {
  box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, .1);
  transform: scale(1.02);
  transition: transform .3s, background-color .3s, box-shadow .6s ease-in-out;
}

.album-info {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1.2em;
  display: flex;
  align-items: flex-end;
  transition: all .3s, ease-in-out;
  opacity: 1;
  background: linear-gradient(#00000000 50%, #00000055 100%);
}

.album-info:hover {
  opacity: 0;
  transition: all .15s ease-in-out;
}

.album-title {
  font-weight: 500;
  font-size: 24px;
  color: #fff;
}
</style>