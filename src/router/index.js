import { createRouter, createWebHistory } from "vue-router";

/* 공통 컴포넌트 예시 */
// import Black from "@/components/Black.vue";
import White from "@/components/White.vue";

const routes = [
  {
    path: '/',
    component: White,
    children: [
      {
        path: "/",
        component: () => import("@/views/Main/index.vue"),
      },
      {
        path: "/cardDeck",
        component: () => import("@/views/CardDeck/index.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;