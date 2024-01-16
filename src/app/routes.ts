import { createRouter, createWebHashHistory } from "vue-router";
import { mainRoutes } from "../pages";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: mainRoutes,
});
