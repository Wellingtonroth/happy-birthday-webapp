<template>
  <div class="p-4 bg-white rounded-xl shadow-md">
    <div v-if="order?.theme">
      <span class="block font-semibold mb-2">
        {{ $t('module.checkout.preview.title') }}
      </span>

      <div
        v-if="!loading"
        class="relative w-full max-w-[360px] h-[450px] rounded-md bg-no-repeat bg-contain bg-center flex items-center justify-center text-center text-black mx-auto"
        :style="{ backgroundImage: `url(${order?.theme?.url})` }"
      >
        <div
          v-if="currentContent"
          class="p-4 rounded-lg max-w-[90%] break-words text-pretty bg-white/50 backdrop-blur-sm shadow-md mx-8 mt-5"
        >
          <div v-if="currentContent === 'message'">
            <p
              v-if="order?.name"
              class="text-base font-semibold text-center text-black/90 px-2 py-1 capitalize"
            >
              {{ $t('module.checkout.preview.dear') }} {{ order.name }}!
            </p>
            <div
              v-if="order?.message"
              class="mt-2 italic text-sm text-center break-words max-h-32 overflow-y-auto px-1 custom-scroll"
            >
              {{ order.message }}
            </div>
          </div>

          <div
            v-else-if="currentContent.type === 'image'"
            class="w-full flex flex-col items-center"
          >
            <img
              :src="currentContent.url"
              class="rounded-lg max-w-[160px] max-h-[160px] mx-auto"
            />
            <p
              v-if="order?.name"
              class="text-base font-semibold text-center text-black/90 px-2 py-1 capitalize mt-2"
            >
              {{ $t('module.checkout.preview.dear') }} {{ order.name }}!
            </p>
          </div>

          <button
            v-if="slides.length > 1"
            @click="nextSlide"
            class="mt-4 mx-auto block text-green-600 text-sm hover:underline"
          >
            ➡️ Next
          </button>
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
        <p class="text-gray-600 text-sm">
          {{ $t('module.checkout.preview.loading.theme') }}
        </p>
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
        {{ $t('module.checkout.preview.no.theme.selected') }}
      </p>
      <p class="text-gray-500 text-sm mt-1">
        {{ $t('module.checkout.preview.instructions') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import useCheckout from "../../../composables/useCheckout";

const loading = ref(false);
const currentSlide = ref(0);

const { order } = useCheckout();

const isTemplateInLocalStorage = (url) => {
  const shownTemplates =
    JSON.parse(localStorage.getItem("shownTemplates")) || [];
  return shownTemplates.includes(url);
};

const addTemplateToLocalStorage = (url) => {
  const shownTemplates =
    JSON.parse(localStorage.getItem("shownTemplates")) || [];
  if (!shownTemplates.includes(url)) {
    shownTemplates.push(url);
    localStorage.setItem("shownTemplates", JSON.stringify(shownTemplates));
  }
};

const slides = computed(() => {
  const items = [];

  if (order.value?.message || order.value?.name) {
    items.push("message");
  }

  if (order.value?.plan === "premium" && order.value?.images?.length > 0) {
    order.value.images.forEach((imageUrl, index) => {
      items.push({ type: "image", url: imageUrl, index });
    });
  }

  return items;
});

const currentContent = computed(() => slides.value[currentSlide.value]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

watch(
  () => order.value,
  () => {
    currentSlide.value = 0;
  }
);

watch(
  () => order.theme,
  (newTheme) => {
    if (newTheme?.url && !isTemplateInLocalStorage(newTheme.url)) {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        addTemplateToLocalStorage(newTheme.url);
      }, 2000);
    } else {
      loading.value = false;
    }
  }
);
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
