import { useCheckoutStore } from "../store/checkout";

export default function useCheckout(checkoutStore = useCheckoutStore()) {
  const createOrder = async (payload) => {
    try {
      const response = await checkoutStore.createOrder(payload);
      return response;
    } catch (error) {
      console.error("Failed to create order", error);
    }
  };

  return {
    createOrder,
  };
}
