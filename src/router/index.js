import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue"
import PostView from "../components/Article/PostView.vue"
import ArticlesView from "../components/Article/ArticlesView.vue"
import AlbumView from "../components/Photograph/AlbumView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      title: 'Tripper Press',
      meta: {
        keepAlive: true,
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: "/article/:p",
      name: "article_page",
      component: ArticlesView,
      meta: {
        keepAlive: false,
      },
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostView,
      meta: {
        keepAlive: false,
      },
    },
    {
      path: "/album/:id",
      name: "album",
      component: AlbumView,
      meta: {
        keepAlive: false,
      },
    },
  ],
});

export default router;
