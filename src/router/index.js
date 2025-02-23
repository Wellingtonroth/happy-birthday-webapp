import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPageView.vue";
import Checkout from "../views/CheckoutView.vue";
import Birthday from "../views/BirthdayView.vue";

const routes = [
  { 
    path: "/", 
    component: LandingPage
  },
  { 
    path: "/checkout", 
    component: Checkout
  },
  { 
    path: "/birthday/:id", 
    component: Birthday
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
