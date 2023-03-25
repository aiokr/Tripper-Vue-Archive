<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>


