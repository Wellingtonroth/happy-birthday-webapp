<template>
  <section class="py-12 px-6 text-center bg-gray-100">
    <h2 class="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
    <div class="max-w-2xl mx-auto">
      <div 
        v-for="(faq, index) in faqs" 
        :key="index" 
        class="bg-white mb-4 p-4 rounded-lg shadow-lg cursor-pointer"
        @click="toggleFAQ(index)"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold">
            {{ faq.question }}
          </h3>
          <span class="text-xl">
            {{ faq.open ? '➖' : '➕' }}
          </span>
        </div>
        <p v-if="faq.open" class="mt-2 text-gray-600">
          {{ faq.answer }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  { 
    question: "Can I edit the birthday page after purchase?", 
    answer: "Yes! You can make changes anytime after purchase.", 
    open: false
  },
  { 
    question: "How long will the page stay online?", 
    answer: "Your birthday page will stay online forever!", 
    open: false
  },
  { 
    question: "Is there a free trial?", 
    answer: "Currently, we offer a one-time purchase with lifetime access.", 
    open: false
  },
  { 
    question: "Can I add music to the birthday page?", 
    answer: "Yes, you can upload an audio file to play on the page.", 
    open: false
  }
]);

const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style scoped>
</style>
