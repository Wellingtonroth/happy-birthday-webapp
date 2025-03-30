<template>
  <div class="p-4 bg-white rounded-xl shadow-md">
    <div v-if="order?.theme">
      <span class="block font-semibold mb-2">Preview</span>

      <div
        v-if="!loading"
        class="relative w-full max-w-[360px] h-[450px] rounded-md bg-no-repeat bg-contain bg-center flex items-center justify-center text-center text-black mx-auto"
        :style="{ backgroundImage: `url(${order?.theme?.url})` }"
      >
        <div class="p-4 rounded-lg w-full max-w-[90%] break-words text-pretty bg-white/50 backdrop-blur-sm shadow-md">
          <p 
            v-if="order?.name"
            class="text-lg font-semibold break-words text-center"
          >
            To: {{ order?.name }}
          </p>
          <div
            v-if="order?.message"
            class="mt-2 italic text-sm text-center break-words max-h-32 overflow-y-auto px-1 custom-scroll"
          >
            {{ order.message }}
          </div>
        </div>
      </div>

      <div
        v-else
        class="flex flex-col items-center justify-center w-full h-[450px] bg-gray-50 rounded-md"
      >
        <svg
          class="animate-spin h-8 w-8 text-green-500 mb-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <p class="text-gray-600 text-sm">Loading your birthday template...</p>
      </div>
    </div>

    <div
      v-else
      class="flex flex-col items-center justify-center w-full h-[450px] bg-gray-50 rounded-md text-center px-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 text-gray-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2zm0 2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z"
        />
      </svg>
      <p class="text-gray-600 text-base font-medium">
        No theme selected yet
      </p>
      <p class="text-gray-500 text-sm mt-1">
        Choose a birthday template to preview it here 🎉
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import useCheckout from "../../../composables/useCheckout";

const loading = ref(false);
const { order } = useCheckout();

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
.custom-scroll::-webkit-scrollbar {
  width: 4px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #e2e6ec;
  border-radius: 8px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
</style>
