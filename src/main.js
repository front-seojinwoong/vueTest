import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// assets
import "@/assets/css/main.css"

async function start() {
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
}

start()