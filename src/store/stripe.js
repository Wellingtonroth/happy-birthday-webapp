import { defineStore } from 'pinia';
import api from '../services/api/checkout';

export const stripeStore = defineStore('stripe', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    async exampple() {
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
