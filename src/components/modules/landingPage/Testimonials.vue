<template>
  <section class="py-12 px-6 text-center">
    <h2 class="text-3xl font-bold mb-6">What Our Users Say</h2>
    <div class="max-w-2xl mx-auto relative">
      <div class="bg-white p-6 rounded-2xl shadow-lg border" v-if="testimonials.length">
        <p class="text-lg text-gray-700 italic">"{{ testimonials[currentTestimonial].quote }}"</p>
        <h4 class="mt-4 font-semibold text-lg">— {{ testimonials[currentTestimonial].name }}</h4>
      </div>

      <!-- Navigation Buttons -->
      <button 
        @click="prevTestimonial"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
      >
        ◀
      </button>
      <button 
        @click="nextTestimonial"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
      >
        ▶
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const testimonials = ref([
  { quote: "This was the best surprise for my friend's birthday! Super easy to set up!", name: "Emily R." },
  { quote: "Loved the themes and customization. My family was impressed!", name: "Jason T." },
  { quote: "Highly recommend! Simple, affordable, and looks amazing.", name: "Sophia M." }
]);

const currentTestimonial = ref(0);

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
};
</script>

<style scoped>
/* Styling can be adjusted as needed */
</style>
