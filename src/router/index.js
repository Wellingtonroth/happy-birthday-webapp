import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPageView.vue";
import Checkout from "../views/CheckoutView.vue";
import CheckoutPending from "../views/CheckoutPendingView.vue";
import Birthday from "../views/BirthdayView.vue";
import PrivacyPolicyView from "../views/PrivacyPolicyView.vue";
import TermsOfUseView from "../views/TermsOfUseView.vue";
import useBirthday from "../composables/useBirthday";

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
    path: "/checkout/pending",
    component: CheckoutPending
  },
  { 
    path: "/birthday/:id", 
    component: Birthday,
    beforeEnter: async (to, from, next) => {
      const { getOrderById } = useBirthday();
      
      const orderId = to.params.id; 
      if (!orderId) {
        console.error("Order ID is missing in route parameters.");
        return next("/checkout/pending");
      }

      const order = await getOrderById(orderId);
      if (order && order?.data?.status === "paid") {
        return next();
      }
      return next("/checkout/pending");
    },
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicyView,
  },
  {
    path: "/terms-of-use",
    component: TermsOfUseView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
