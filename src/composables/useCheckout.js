import { computed } from "vue";
import { useCheckoutStore } from "../store/checkout";

export default function useCheckout(checkoutStore = useCheckoutStore()) {
  const isLoading = computed(() => checkoutStore.isLoading);
  const templates = computed(() => checkoutStore.templates);

  const selectedTemplate = computed(() => checkoutStore.selectedTemplate);
  const setSelectedTemplate = (template) => checkoutStore.setSelectedTemplate(template);

  const order = computed(() => checkoutStore.order);
  const setOrder = (payload) => checkoutStore.setOrder(payload);

  const createOrder = async (payload) => {
    return await checkoutStore.createOrder(payload);
  };

  const uploadImages = async (orderId, files) => {
    return await checkoutStore.uploadImages(orderId, files);
  };

  const getTemplateImages = async () => {
    return await checkoutStore.getTemplateImages();
  };

  return {
    isLoading,
    templates,
    selectedTemplate,
    order,

    createOrder,
    uploadImages,
    getTemplateImages,
    setSelectedTemplate,
    setOrder,
  };
}
