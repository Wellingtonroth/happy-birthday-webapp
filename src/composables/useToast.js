import { ref } from 'vue';

const toastMessage = ref('');
const toastVisible = ref(false);
const toastType = ref('success');

export const useToast = () => {
  const toast = (message, type = 'success', duration = 3000) => {
    toastMessage.value = message;
    toastType.value = type;
    toastVisible.value = true;

    setTimeout(() => {
      toastVisible.value = false;
    }, duration);
  };

  return {
    toastMessage,
    toastVisible,
    toastType,
    toast,
  };
};
