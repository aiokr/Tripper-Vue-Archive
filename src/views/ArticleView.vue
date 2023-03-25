<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

let route = useRoute()
let id = ref(null)
let ArticleId = ref(null)
let article = ref(null)


ArticleId.value = route.params.id
id = ArticleId.value
console.log(id)
async function getArticleById(id) {
  try {
    const response = await axios.get(`https://strapi-production-f22a.up.railway.app/api/articles/${id}`);
    article.value = response.data;
  } catch (error) {
    console.error(error);
  }
}
onMounted(() => {
  ArticleId.value = route.params.id
  id = ArticleId.value
  console.log(id)
  getArticleById(id)
})

</script>

<template>
  <div v-if="article">
    <div>
      <h1>{{ article.data.id }}</h1>
    </div>
  </div>
</template>
