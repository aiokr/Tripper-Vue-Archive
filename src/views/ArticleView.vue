<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import markdownItTocAndAnchor from 'markdown-it-toc-and-anchor'
import emoji from 'markdown-it-emoji'
import footnote from 'markdown-it-footnote'

let route = useRoute()
let id = ref(null)
let ArticleId = ref(null)
let article = ref(null)
let author = ref(null)
let catagory = ref(null)
let text = ref(null)
const markdownContent = ref('')

var md = new MarkdownIt({
  breaks: true,
  langPrefix:   'language-',
  linkify: true,  
})
md.use(emoji).use(footnote)

id = route.params.id
async function getArticleById(id) {
  try {
    const response = await axios.get(`https://strapi-production-f22a.up.railway.app/api/articles/${id}?populate=Author,category`);
    article.value = response.data;
    author.value = article.value.data.attributes.Author.data
    catagory.value = article.value.data.attributes.category.data
    text.value = article.value.data.attributes.Text
    markdownContent.value = md.render(text.value)
  } catch (error) {
    console.error(error);
  }
}
onMounted(() => {
  id = route.params.id
  getArticleById(id)
})


</script>

<template>
  <div class="container pt-12 max-w-3xl">
    <div v-if="article">
      <div>
        <div class="post-title font-semibold text-3xl">{{ article.data.attributes.Title }}</div>
        <div class="post-subtitle opacity-80 pt-2">
          <span v-for="items in author" :key="items.id">
            {{ items.attributes.username }}&#20;/&#20;
          </span>
          <span>
            {{ catagory.attributes.Name }}
          </span>
        </div>
        <article>
          <div v-html="markdownContent" />
        </article>
      </div>
    </div>
  </div>
</template>
