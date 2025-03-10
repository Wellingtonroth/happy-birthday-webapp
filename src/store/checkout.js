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

    async uploadImage(file) {
      try {
        this.isLoading = true;
        const formData = new FormData();
        formData.append("image", file);

        const response = await api.uploadImage(formData);
        return response.data;
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
