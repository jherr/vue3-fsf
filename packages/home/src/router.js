import { createWebHistory, createRouter } from "vue-router";
import HomeContent from "home/HomeContent";
import ProfileContent from "profile/ProfileContent";
import ProductContent from "product/ProductContent";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeContent,
  },
  {
    path: "/product",
    name: "Product",
    component: ProductContent,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileContent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
