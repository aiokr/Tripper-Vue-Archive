<script setup>
import { ref } from 'vue'
import axios from 'axios'

let articleData = ref(null);

async function fetchData() {
  try {
    const response = await axios.get('https://strapi-production-f22a.up.railway.app/api/articles');
    articleData.value = response.data.data;
    console.log(articleData.value)
  } catch (error) {
    console.error(error);
  }
}

fetchData();

const state = {
  articleData,
};

</script>

<template>
  <div class="index-post-area container">
    <h2 class="text-2xl font-bold pt-8 pb-4">文章</h2>
    <div v-if="articleData">
      <div v-for="item in articleData" :key="item.id">
        <router-link :to="{ path: `/article/`+item.id }">{{ item.attributes.Title }}</router-link>
      </div>
    </div>
  </div>
</template>


<style scoped></style>