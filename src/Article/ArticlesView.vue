<!--文章列表-->
<script setup>
import { ref, onMounted,inject } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

let articleList = ref(null);
let category = ref(null)
let route = useRoute()
let pageid = ref(null)

async function getArticleList(pageid) {
  try {
    const ArticleListUrl = 'https://strapicms.tripper.press/api/articles?sort[0]=Date%3Adesc&populate=Author,category,cover&pagination[page]='+pageid+'&pagination[pageSize]=10'
    const response = await axios.get(ArticleListUrl);
    articleList.value = response.data.data;
    console.log(articleList.value)
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
  <div class="index-post-area container px-6 lg:px-8">
    <h2 class="text-2xl font-bold pt-8 pb-4">文章</h2>
    <div v-if="articleList" class="post-list">
      <div v-for="item in articleList" :key="item.id">
        <router-link :to="{ path: `/post/` + item.id }">
          <div class="post-entry mb-[65px]">
            <div v-if="item.attributes.cover.data?.attributes.link" class="post-cover"
              :style="{ 'background-image': 'url(' + (item.attributes.cover.data?.attributes.link) + ')' }">
            </div>
            <div v-else class="post-cover"
              style="background-image: url('//imgur.lzmun.com/picgo/after2022/6DD1FBC3-AD8A-4340-842D-6ACF531F8291_1_105_c.jpeg_itp')">
            </div>
            <div class="post-info pt-[8px]">
              <span class="post-time">{{ item.attributes.Date }}</span>
              <div class="text-xl pt-[12px]">{{ item.attributes.Title }}</div>

              <span v-if="item.attributes.describe" class="post-describe">{{ item.attributes.describe }}</span>
              <span v-else class="post-describe"></span>

              <span v-if="item.attributes.category.data?.attributes.Name" class="post-category">{{
                item.attributes.category.data?.attributes.Name }}</span>
            </div>
            <!--<div v-for="author in item.attributes.Author.data" :key="author.id">
                                {{ author.attributes.username }}
                              </div>-->
          </div>

        </router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>

.post-list {
  max-width: 800px;
  margin: 0 auto;
}
.post-entry {
  box-shadow: 1px 1px 5px 0 rgba(0,0,0,.02), 1px 1px 15px 0 rgba(0,0,0,.03);
  transition: transform .3s,background-color .3s,box-shadow .6s;
  border-radius: var(--radius);
}

.post-entry:hover {
  transform: translateY(-5px);
  box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, .1);
  transition: transform .3s, background-color .3s, box-shadow .6s;
}

.post-info {
  padding: 42px 54px 54px;
}

.post-category {
  opacity: .8;
  border-radius: 5px;
  padding: 6px 12px;
  line-height: 20px;
  font-size: 14px;
  display: inline-block;
  background-color: #f4f4f4;
  color: #222831;
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
  padding-top: 22px;
}

.post-describe {
  opacity: 0.4;
  font-size: 12px;
  line-height: 18px;
  height: 54px;
  margin-top: 16px;
  display: -webkit-box;
  /*将对象作为弹性伸缩盒子模型显示  必要*/
  -webkit-box-orient: vertical;
  /*设置或检索伸缩盒对象的子元素的排列方式  必要*/
  -webkit-line-clamp: 3;
  /*指定第几行溢出省略  必要*/
  overflow: hidden;
  /*溢出隐藏  必要*/
}

.post-cover {
  background-position: center;
  background-size: cover;
  height: 322px;
  border-bottom-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}
</style>