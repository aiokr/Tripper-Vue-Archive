import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

import "./assets/main.css";
import "/src/tailwind.css";
import "./assets/itypen-md.css";


// 使用 provide 将全局变量作为响应式对象


const app = createApp(App);
app.config.globalProperties.$axios = axios

app.use(router).mount("#app");

// 全局变量
const apiUrl = 'https://strapicms.tripper.press/';
app.provide('apiUrl', apiUrl); //便于在js部分可直接用
app.config.globalProperties.$apiUrl = apiUrl;  //便于在模板部分可直接用
