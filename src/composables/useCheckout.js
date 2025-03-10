import { computed } from "vue";
import { useCheckoutStore } from "../store/checkout";

export default function useCheckout(checkoutStore = useCheckoutStore()) {
  const isLoading = computed(() => checkoutStore.isLoading);

  const createOrder = async (payload) => {
    try {
      const response = await checkoutStore.createOrder(payload);
      return response;
    } catch (error) {
      console.error("Failed to create order", error);
    }
  };

  const uploadImage = async (file) => {
    try {
      const response = await checkoutStore.uploadImage(file);
      return response;
    } catch (error) {
      console.error("Failed to upload image", error);
    }
  };

  return {
    isLoading,
    createOrder,
    uploadImage,
  };
}
