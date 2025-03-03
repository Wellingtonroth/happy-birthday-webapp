import { defineStore } from "pinia";
import api from "../services/api/checkout";

export const useCheckoutStore = defineStore("checkout", {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    async createOrder(payload) {
      try {
        this.isLoading = true;
        const response = await api.createOrder(payload);
        return response.data;
      } catch (error) {
        console.error("Error creating order:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
