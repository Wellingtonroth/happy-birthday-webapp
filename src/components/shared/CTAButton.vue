<template>
  <router-link 
    to="/checkout"
    class="rounded-md font-semibold shadow-md transition-all cursor-pointer text-center min-w-[110px] text-sm px-4 py-2 md:text-lg md:px-6 md:py-3"
    :class="variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'"
  >
    {{ label }}
  </router-link>
</template>

<script setup>
defineProps({
  label: { type: String, default: "Create My Site" },
  variant: { type: String, default: "primary" }
});
</script>
