<template>
  <button 
    class="px-6 py-3 rounded-lg font-bold text-lg shadow-md transition-all cursor-pointer"
    :class="variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  label: { 
    type: String, 
    default: "Create My Site"
  },
  variant: {
    type: String, 
    default: "primary"
  } 
});
</script>
