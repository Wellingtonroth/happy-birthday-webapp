import { computed } from "vue";
import { useCheckoutStore } from "../store/checkout";

export default function useCheckout(checkoutStore = useCheckoutStore()) {
  const isLoading = computed(() => checkoutStore.isLoading);

  const createOrder = async (payload) => {
    return await checkoutStore.createOrder(payload);
  };

  const uploadImages = async (orderId, files) => {
    return await checkoutStore.uploadImages(orderId, files);
  };

  return {
    isLoading,
    createOrder,
    uploadImages,
  };
}
