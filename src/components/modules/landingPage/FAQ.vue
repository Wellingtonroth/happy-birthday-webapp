<template>
  <section class="py-12 px-6 text-center bg-gray-100">
    <h2 class="text-3xl font-bold mb-6">
      {{ $t('module.landingpage.faq.title') }}
    </h2>
    <div class="max-w-2xl mx-auto">
      <div 
        class="bg-white mb-4 p-4 rounded-lg shadow-lg cursor-pointer"
        v-for="(faq, index) in faqs" 
        :key="index" 
        @click="toggleFAQ(index)"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold">
            {{ $t(faq.question) }}
          </h3>
          <span class="text-xl">
            {{ faq.open ? '➖' : '➕' }}
          </span>
        </div>
        <p 
          class="mt-2 text-gray-600"
          v-if="faq.open" 
        >
          {{ $t(faq.answer) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  { 
    question: 'module.landingpage.faq.q1.question', 
    answer: 'module.landingpage.faq.q1.answer', 
    open: false 
  },
  { 
    question: 'module.landingpage.faq.q2.question', 
    answer: 'module.landingpage.faq.q2.answer', 
    open: false 
  },
  { 
    question: 'module.landingpage.faq.q3.question', 
    answer: 'module.landingpage.faq.q3.answer', 
    open: false 
  },
  { 
    question: 'module.landingpage.faq.q4.question', 
    answer: 'module.landingpage.faq.q4.answer', 
    open: false 
  },
  { 
    question: 'module.landingpage.faq.q5.question', 
    answer: 'module.landingpage.faq.q5.answer', 
    open: false 
  },
  { 
    question: 'module.landingpage.faq.q6.question', 
    answer: 'module.landingpage.faq.q6.answer', 
    open: false 
  },
  { 
    question: 'module.landingpage.faq.q7.question', 
    answer: 'module.landingpage.faq.q7.answer', 
    open: false 
  },
  { 
    question: 'module.landingpage.faq.q8.question', 
    answer: 'module.landingpage.faq.q8.answer', 
    open: false 
  },
  { 
    question: 'module.landingpage.faq.q9.question', 
    answer: 'module.landingpage.faq.q9.answer', 
    open: false 
  }
]);

const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style scoped>
</style>
