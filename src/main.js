import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

import "./assets/main.css";
import "/src/tailwind.css";

const app = createApp(App);
app.config.globalProperties.$axios = axios

app.use(router).mount("#app");
