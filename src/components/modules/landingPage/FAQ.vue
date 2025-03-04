<template>
  <section class="py-12 px-6 text-center bg-gray-100">
    <h2 class="text-3xl font-bold mb-6">
      Frequently Asked Questions
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
            {{ faq.question }}
          </h3>
          <span class="text-xl">
            {{ faq.open ? '➖' : '➕' }}
          </span>
        </div>
        <p 
          class="mt-2 text-gray-600"
          v-if="faq.open" 
        >
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
    answer: "No, the birthday page cannot be edited after purchase. Once created, all the details are final.", 
    open: false
  },
  { 
    question: "How long will the page stay online?", 
    answer: "The page duration depends on your chosen plan. The Basic plan gives you access for 1 year, while the Premium plan provides lifetime access with no expiration.", 
    open: false
  },
  { 
    question: "Is there a free trial?", 
    answer: "We do not offer a free trial, but we provide a one-time purchase with lifetime access for Premium users.", 
    open: false
  },
  { 
    question: "Can I add music to the birthday page?", 
    answer: "No, music uploads are not supported at this time. The page allows images but does not include an audio feature.", 
    open: false
  },
  { 
    question: "Can I upload videos and images?", 
    answer: "You can upload images to personalize the birthday page. However, video uploads are not supported.", 
    open: false
  },
  { 
    question: "How can I share the birthday page?", 
    answer: "After purchase, you will receive a unique link and a QR code that you can easily share with family and friends.", 
    open: false
  },
  { 
    question: "Do I need to renew my purchase every year?", 
    answer: "No! The Premium plan offers lifetime access, while the Basic plan lasts for 1 year. There are no hidden fees or subscriptions.", 
    open: false
  },
  { 
    question: "Can I choose different themes for the birthday page?", 
    answer: "Yes! You can select from multiple beautifully designed themes to match the birthday celebration.", 
    open: false
  },
  { 
    question: "Can I create multiple birthday pages with one purchase?", 
    answer: "No, each purchase grants access to create only one personalized birthday page. If you need another, you will need to make a new purchase.", 
    open: false
  }
]);

const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style scoped>
</style>
