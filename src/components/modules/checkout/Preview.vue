<template>
  <div class="p-4 bg-white rounded-xl shadow-md">
    <div v-if="order?.theme">
      <span class="block font-semibold mb-2">Preview</span>

      <div
        v-if="!loading"
        class="relative w-full h-[450px] rounded-md bg-no-repeat bg-contain bg-center flex items-center justify-center text-center text-black"
        :style="{ backgroundImage: `url(${order?.theme?.url})` }"
      >
        <div class="p-4 rounded-lg max-w-[80%]">
          <p class="text-xl font-bold">{{ order?.name }}</p>
          <p class="text-lg">{{ order?.age }}</p>
          <p class="mt-2 italic">{{ order?.message }}</p>
        </div>
      </div>

      <div v-else class="flex flex-col items-center justify-center w-full h-[450px] bg-gray-50 rounded-md">
        <svg class="animate-spin h-8 w-8 text-green-500 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z">
          </path>
        </svg>
        <p class="text-gray-600 text-sm">Loading your birthday template...</p>
      </div>
    </div>

    <div v-else>
      Your Preview will be shown here after you select one template
    </div>
  </div>
</template>



<script setup>
import { ref, watch } from 'vue';
import useCheckout from "../../../composables/useCheckout";

const loading = ref(false);
const { 
  selectedTemplate,
  order,
} = useCheckout();

const isTemplateInLocalStorage = (url) => {
  const shownTemplates = JSON.parse(localStorage.getItem('shownTemplates')) || [];
  return shownTemplates.includes(url);
};

const addTemplateToLocalStorage = (url) => {
  const shownTemplates = JSON.parse(localStorage.getItem('shownTemplates')) || [];
  if (!shownTemplates.includes(url)) {
    shownTemplates.push(url);
    localStorage.setItem('shownTemplates', JSON.stringify(shownTemplates));
  }
};

watch(() => order.theme, (newTheme) => {
  if (newTheme?.url && !isTemplateInLocalStorage(newTheme.url)) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      addTemplateToLocalStorage(newTheme.url);
    }, 2000);
  } else {
    loading.value = false;
  }
});

</script>

<style scoped>
</style>