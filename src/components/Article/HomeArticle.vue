<!--首页文章-->
<script setup>
import { ref, getCurrentInstance } from 'vue'

const currentInstance = getCurrentInstance()
const { $http, $apiUrl } = currentInstance.appContext.config.globalProperties

let articleData = ref(null);

async function fetchData() {
  try {
    const ArticleUrl = $apiUrl + 'api/articles?sort[0]=Date%3Adesc&populate=Author,category,cover&pagination[limit]=3'
    const response = await $http.get(ArticleUrl);
    articleData.value = response.data.data;
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
  <div class="index-post-area container max-w-7xl px-6 lg:px-8">
    <div class="home-title pt-8 pb-2">
      <div class="text-2xl font-bold">文章</div>
      <RouterLink to="/article/1" class="all-article">所有文章</RouterLink>
    </div>
    <div class="text-sm opacity-50 mb-6">放下相机，认真思考</div>
    <div v-if="articleData" class="grid gap-8 grid-cols-1 md:grid-cols-3 place-items-stretch">
      <div class="post-entry" v-for="item in articleData" :key="item.id">
        <router-link :to="{ path: `/post/` + item.id }">
          <div v-if="item.attributes.cover.data?.attributes.link" class="post-cover"
            :style="{ 'background-image': 'url(' + (item.attributes.cover.data?.attributes.link) + ')' }">
          </div>
          <div v-else class="post-cover"
            style="background-image: url('//imgur.lzmun.com/picgo/after2022/6DD1FBC3-AD8A-4340-842D-6ACF531F8291_1_105_c.jpeg_itp')">
          </div>
          <div class="post-info pt-[8px]">
            <span class="post-time">{{ item.attributes.Date }}</span>
            <div class="post-title text-lg pt-[12px]">{{ item.attributes.Title }}</div>

            <span v-if="item.attributes.describe" class="post-describe">{{ item.attributes.describe }}</span>
            <span v-else class="post-describe"></span>

            <span v-if="item.attributes.category.data?.attributes.Name" class="post-category">{{
              item.attributes.category.data?.attributes.Name }}</span>
            <span v-else class="post-category nocategory">No Category</span>
          </div>
          <!--<div v-for="author in item.attributes.Author.data" :key="author.id">
                                        {{ author.attributes.username }}
                                      </div>-->
        </router-link>
      </div>
    </div>
    <div v-else style="height: 405px;">
      Loading……
    </div>
  </div>
</template>

<style scoped>
.post-entry {
  transition: transform .3s, background-color .3s, box-shadow .6s ease-in-out;
  border-radius: var(--radius);
  color: var(--main-black);
}

.post-entry:hover {
  transform: translateY(-5px);
  box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, .1);
  transition: transform .3s, background-color .3s, box-shadow .6s ease-in-out;
}

.post-info {
  margin: 0 1em;
}

.post-category {
  opacity: .8;
  border-radius: 5px;
  padding: 6px 12px;
  line-height: 20px;
  font-size: 14px;
  display: inline-block;
  background-color: #f4f4f4;
  color: var(--main-black);
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 16px;
}

.nocategory {
  opacity: 0.1;
}

.post-time {
  opacity: 0.4;
  display: block;
  font-size: 12px;
  line-height: 18px;
  padding-top: 12px;
}

.post-describe {
  opacity: 0.4;
  display: block;
  font-size: 12px;
  line-height: 18px;
  height: 36px;
  padding-top: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.post-title {
  line-height: 22px;
}

.post-cover {
  background-position: center;
  background-size: cover;
  height: 233px;
  border-radius: var(--radius);
}
</style>