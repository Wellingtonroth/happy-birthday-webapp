import { defineStore } from 'pinia';
import api from '../services/api/checkout';

export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    async example() {
      try {
        this.isLoading = true;
        console.log('entrei store');
        const response = await api.example();
        return response;
      } catch (error) {
        console.error('exampple error:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
