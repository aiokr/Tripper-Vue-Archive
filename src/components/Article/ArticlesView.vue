<!--文章列表-->
<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

const currentInstance = getCurrentInstance()
const { $http, $apiUrl } = currentInstance.appContext.config.globalProperties

let articleList = ref(null);
let category = ref(null)
let route = useRoute()
let pageid = ref(null)

async function getArticleList(pageid) {
  try {
    const ArticleListUrl = $apiUrl + 'api/articles?sort[0]=Date%3Adesc&populate=Author,category,cover&pagination[page]=' + pageid + '&pagination[pageSize]=10'
    const response = await $http.get(ArticleListUrl);
    articleList.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  pageid = route.params.p
  getArticleList(pageid);
})

</script>

<template>
  <div class="index-post-area container px-6 lg:px-8 max-w-[1280px]">
    <div class="article-header pt-8 pb-4">
      <div class="left inline">
        <div class="text-2xl font-bold">文章</div>
      </div>
      <div class="right inline">
        <img class="article-avatar" src="https://imgur.lzmun.com/picgo/after2022/tripper2whitefull.png_avatar">
      </div>
    </div>
    <hr />
    <div class="pt-8 grid lg:grid-cols-3">
      <div v-if="articleList" class="post-list col-span-3 lg:col-span-2">
        <div v-for="item in articleList" :key="item.id">
          <router-link :to="{ path: `/post/` + item.id }">
            <div class="post-entry flex">
              <div v-if="item.attributes.cover.data?.attributes.link" class="post-cover aspect-square"
                :style="{ 'background-image': 'url(' + (item.attributes.cover.data?.attributes.link) + ')' }">
              </div>
              <div v-else class="post-cover "
                style="background-image: url('//imgur.lzmun.com/picgo/after2022/6DD1FBC3-AD8A-4340-842D-6ACF531F8291_1_105_c.jpeg_itp')">
              </div>
              <div class="post-info pt-[8px] ">
                <span class="post-time">{{ item.attributes.Date }}</span>
                <div class="post-title text-xl">{{ item.attributes.Title }}</div>
                <div>
                  <span v-if="item.attributes.describe" class="post-describe">{{ item.attributes.describe }}</span>
                  <span v-else class="post-describe"></span>
                </div>
                <div class="post-catagory-con">
                  <span v-if="item.attributes.category.data?.attributes.Name" class="post-category">{{
                    item.attributes.category.data?.attributes.Name }}</span>
                </div>
              </div>
            </div>
            <div class="mb-[65px]">
            </div>
          </router-link>
        </div>
      </div>
      <div v-else class="post-list col-span-3 lg:col-span-2"></div>
      <div>

      </div>
    </div>
  </div>
</template>
<style scoped>
@media screen and (min-width: 1024px) {
  .post-info {
    padding: 22px;
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .post-cover {
    min-height: 233px;
    width: 50%;
  }
}

@media screen and (max-width: 1022px) {
  .post-entry {
    flex-direction: column;
  }

  .post-info {
    padding: 12px 22px 122px;
    width: 100%;
  }

  .post-cover {
    height: 233px;
    width: 100%;
  }
}

.article-header {
  color: var(--main-black);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-avatar {
  height: 32px;
}

.post-cover {
  background-position: center;
  background-size: cover;
  border-bottom-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}

.post-title {
  padding-bottom: 12px;
}

.post-catagory-con {
  position: absolute;
  bottom: 0;
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
  margin-top: 50px;
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
  padding-bottom: 12px;
}

.post-describe {
  opacity: 0.4;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 20px;
}
</style>