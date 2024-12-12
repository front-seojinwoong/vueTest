import { createRouter, createWebHistory } from "vue-router";
import Start from "@/components/StartView.vue";
import CardDeck from "@/components/CardDeck.vue";
// import GameButton from './components/GameButton.vue';

const routes = [
  {
    path: "/",
    component: Start,
  },
  {
    path: "/cardDeck",
    component: CardDeck,
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;