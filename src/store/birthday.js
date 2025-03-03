import { defineStore } from 'pinia';
import api from '../services/api/birthday';

export const useBirthdayStore = defineStore('birthday', {
  state: () => ({
    isLoading: false,
    order: {},
  }),
  actions: {
    async disptachGetOrderById(id) {
      try {
        this.isLoading = true;
        const response = await api.getOrderById(id);
        this.order = response.data;
        return response;
      } catch (error) {
        console.error('disptachGetOrderById error:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
