import { 
  ref, 
  computed
} from 'vue';
import { useCheckoutStore } from '../store/checkout';

export default function useCheckout(checkoutStore = useCheckoutStore()) {

  const checkoutStripe = async (payload) => {
    try {
      const response = await checkoutStore.example(payload);
      return response;
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  return {
    checkoutStripe,
  }
};