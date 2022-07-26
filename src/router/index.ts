import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: "first",
      children: [
        {
          path: "first",
          name: "first",
          component: () => import("@/views/First.vue"),
        },
        {
          path: "second",
          name: "second",
          component: () => import("@/views/Second.vue"),
        },
      ],
    },
  ],
});

export default router;
