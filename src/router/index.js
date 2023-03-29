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
      component: ArticlesView
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostView,
    },
    {
      path: "/album/:id",
      name: "album",
      component: AlbumView,
    },
  ],
});

export default router;
