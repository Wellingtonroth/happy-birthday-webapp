<template>
  <Transition name="fade">
    <div
      v-if="visible"
      :class="[
        'fixed top-8 right-6 px-6 py-4 rounded-lg shadow-lg z-50 min-w-[300px] text-lg',
        toastClasses
      ]"
    >
      {{ message }}
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  message: String,
  type: {
    type: String,
    default: 'success',
  },
  duration: {
    type: Number,
    default: 3000,
  },
  show: Boolean,
});

const visible = ref(false);

watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, props.duration);
    }
  }
);

const toastStyles = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-black',
};

const toastClasses = computed(() => {
  return toastStyles[props.type] || toastStyles.success;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
