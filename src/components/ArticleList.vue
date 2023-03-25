<script setup>
import { ref } from 'vue'
import axios from 'axios'

let articleData = ref(null);
let category = ref(null)
async function fetchData() {
  try {
    const response = await axios.get('https://strapi-production-f22a.up.railway.app/api/articles?sort[0]=Date%3Adesc&populate=Author,category,cover');
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
  <div class="index-post-area container max-w-7xl px-6 lg:px-8">
  <h2 class="text-2xl font-bold pt-8 pb-4">文章</h2>
    <div v-if="articleData" class="grid gap-8 grid-cols-1 md:grid-cols-3">
      <div v-for="item in articleData" :key="item.id">
        <router-link :to="{ path: `/post/` + item.id }">
          <div class="post-entry">
            <div v-if="item.attributes.cover.data?.attributes.link" class="post-cover"
              :style="{ 'background-image': 'url(' + (item.attributes.cover.data?.attributes.link) + ')' }">
            </div>
            <div v-else class="post-cover"
              style="background-image: url('//imgur.lzmun.com/picgo/after2022/6DD1FBC3-AD8A-4340-842D-6ACF531F8291_1_105_c.jpeg_itp')">
            </div>
            <div class="post-info pt-[8px]">
              <span class="post-time">{{ item.attributes.Date }}</span>
              <div class="text-lg pt-[12px]">{{ item.attributes.Title }}</div>

              <span v-if="item.attributes.describe" class="post-describe">{{ item.attributes.describe }}</span>
              <span v-else class="post-describe"></span>

              <span v-if="item.attributes.category.data?.attributes.Name" class="post-category">{{
                item.attributes.category.data?.attributes.Name }}</span>
              <span v-else class="post-category nocategory">No Category</span>
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
.post-entry {
  transition: transform .3s, background-color .3s, box-shadow .6s;
  border-radius: var(--radius);
}

.post-entry:hover {
  transform: translateY(-5px);
  box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, .1);
  transition: transform .3s, background-color .3s, box-shadow .6s;
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
  padding-top: 12px;
}

.post-describe {
  opacity: 0.4;
  display: block;
  font-size: 12px;
  line-height: 18px;
  height: 54px;
  margin-top: 10px;
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
  height: 233px;
  border-radius: var(--radius);
}
</style>