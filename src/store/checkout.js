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
      } finally {
        this.isLoading = false;
      }
    },

    async uploadImages(orderId, files) {
      try {
        this.isLoading = true;
        const formData = new FormData();
        formData.append("orderId", orderId);
        files.forEach((file) => formData.append("images", file));

        const response = await api.uploadImages(formData);
        return response.data;
      } catch (error) {
        console.error("Error uploading images:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
