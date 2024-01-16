import AboutPage from "./AboutPage.vue";
import HomePage from "./HomePage.vue";

export const mainRoutes = [
  { path: "/", component: HomePage },
  {
    path: "/about",
    component: AboutPage,
  },
];
