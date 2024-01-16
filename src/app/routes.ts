import { createRouter, createWebHashHistory } from "vue-router";
import { mainRoutes } from "@pages/routes.main.ts";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: mainRoutes,
});
