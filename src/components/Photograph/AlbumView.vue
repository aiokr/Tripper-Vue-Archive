<!--相册内页-->
<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

const currentInstance = getCurrentInstance()
const { $http, $apiUrl, $md, $moment } = currentInstance.appContext.config.globalProperties

let route = useRoute()
let id = ref(null)
let album = ref(null)
let author = ref(null)
let category = ref(null)
let text = ref(null)
let cover = ref(null)
let tags = ref(null)
let pubDate = ref(null)
let title = ref(null)
let imageItem = ref(null)
const markdownContent = ref('')

async function getAlbumById(id) {
  try {
    const albumDataUrl = $apiUrl + 'api/albums/' + id + '?populate=cover,images'
    const response = await $http.get(albumDataUrl);
    album.value = response.data;
    title.value = album.value.data.attributes.Title
    document.title = title.value + ' | Tripper Press'
    pubDate.value = album.value.data.attributes.Date
    pubDate = $moment(pubDate.value).format('YYYY-MM-DD')
    imageItem = album.value.data.attributes.images.data
    if (album.value.data.attributes.Text !== null) {
      text.value = album.value.data.attributes.Text
      markdownContent.value = $md.render(text.value)
    }
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  id = route.params.id
  getAlbumById(id).then(() => {
    const container = document.getElementById('myCarousel');
    const options = {
      Dots: false,
      Navigation: false,
      infinite: false,
      Thumbs: {
        type: "modern",
      },
    };
    new Carousel(container, options, { Thumbs });
  })
})



</script>
<template>
  <div class="container pt-12 max-w-[92%] md:max-w-2xl xl:max-w-3xl">
    <div v-if="album" class="f-carousel" id="myCarousel">
      <div class="f-carousel__viewport ">
        <div class="f-carousel__track">
          <div class="f-carousel__slide" v-for="item in imageItem" :key="item.id"
            :data-thumb-src="item.attributes.link + '_itp/fw/300'">
            <img :data-lazy-src="item.attributes.link + '_bloggallery'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>