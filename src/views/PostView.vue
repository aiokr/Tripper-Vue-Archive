<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import markdownItTocAndAnchor from 'markdown-it-toc-and-anchor'
import emoji from 'markdown-it-emoji'
import footnote from 'markdown-it-footnote'
import moment from 'moment'

let route = useRoute()
let id = ref(null)
let article = ref(null)
let author = ref(null)
let category = ref(null)
let text = ref(null)
let cover = ref(null)
let tags = ref(null)
let pubDate = ref(null)

const markdownContent = ref('')
var md = new MarkdownIt({
  breaks: true,
  langPrefix: 'language-',
  linkify: true,
})
md.use(emoji).use(footnote)

id = route.params.id

async function getArticleById(id) {
  try {
    const response = await axios.get(`https://strapi-production-f22a.up.railway.app/api/articles/${id}?populate=Author,category,cover,tags`);
    article.value = response.data;
    text.value = article.value.data.attributes.Text
    pubDate.value = article.value.data.attributes.Date
    author.value = article.value.data.attributes.Author.data
    category.value = article.value.data.attributes.category.data
    //cover.value = article.value.data.attributes.cover.data.attributes.link
    pubDate = moment(pubDate.value).format('YYYY-MM-DD')
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
  <div class="container pt-12 max-w-[92%] md:max-w-2xl xl:max-w-3xl">
    <div v-if="article">
      <div>
        <div v-if="article.data.attributes.cover.data?.attributes.link" class="post-cover aspect-video bg-slate-200" :style="{ 'background-image': 'url(' + (article.data.attributes.cover.data?.attributes.link) + ')' }"></div>
        <div class="post-title font-semibold text-3xl pt-12">{{ article.data.attributes.Title }}</div>
        <div class="post-subtitle opacity-80 pt-4">
          <span v-if="author" v-for="items in author" :key="items.id">
            {{ items.attributes.username }} / 
          </span>
          <span v-if="category">
            {{ category.attributes.Name }} / </span>
          <span>
            {{ pubDate }}
          </span>
        </div>
        <article>
          <div v-html="markdownContent" />
        </article>
      </div>
    </div>
  </div>
</template>

<style>
.post-cover {
  background-position: center;
  background-size: cover;
  border-radius: var(--radius);
}
</style>