import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layouts/index.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: "/1",
      children: [
        {
          path: "1",
          name: "first",
          component: () => import("@/views/First.vue"),
        },
        {
          path: "2",
          name: "second",
          component: () => import("@/views/Second.vue"),
        },
        {
          path: "3",
          name: "third",
          component: () => import("@/views/Third.vue"),
        },
        {
          path: "4",
          name: "fourth",
          component: () => import("@/views/Fourth.vue"),
        },
      ],
    },
  ],
});

export default router;
