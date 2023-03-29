import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import moment from 'moment'
import { inject } from '@vercel/analytics';
//Markdown
import MarkdownIt from 'markdown-it'
import tocAndAnchor from 'markdown-it-toc-and-anchor'
import emoji from 'markdown-it-emoji'
import footnote from 'markdown-it-footnote'
//Style
import "./assets/main.css";
import "/src/tailwind.css";
import "./assets/itypen-md.css";

const app = createApp(App);

var md = new MarkdownIt({
  breaks: true,
  langPrefix: 'language-',
  linkify: true,
})
md.use(emoji).use(footnote).use(tocAndAnchor)

inject();

const apiUrl = 'https://strapicms.tripper.press/';
app.config.globalProperties.$apiUrl = apiUrl;
app.config.globalProperties.$http = axios
app.config.globalProperties.$md = md
app.config.globalProperties.$moment = moment

app.use(router)
app.mount("#app");