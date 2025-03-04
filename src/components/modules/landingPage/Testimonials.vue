<template>
  <section class="py-16 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
    <h2 class="text-3xl font-extrabold mb-8 text-blue-600">
      🌟 What Our Users Say 🌟
    </h2>

    <div class="max-w-2xl mx-auto relative px-4">
      <div 
        class="bg-white p-8 rounded-3xl shadow-xl border transition-all duration-300 transform scale-105 flex flex-col items-center relative max-w-xs md:max-w-2xl mx-auto"
        v-if="testimonials.length"
      >
        <!-- Profile Image Inside the Card -->
        <img 
          v-if="testimonials[currentTestimonial].image"
          :src="testimonials[currentTestimonial].image" 
          alt="User Profile"
          class="w-16 h-16 mb-4 rounded-full border-4 border-blue-300 shadow-lg"
        >

        <!-- Testimonial Text -->
        <p class="text-lg md:text-xl text-gray-800 italic leading-relaxed text-center px-4">
          "{{ testimonials[currentTestimonial].quote }}"
        </p>
        <h4 class="mt-4 font-semibold text-lg text-blue-700">
          — {{ testimonials[currentTestimonial].name }}
        </h4>
      </div>

      <!-- Navigation Buttons (Positioned Correctly) -->
      <button 
        class="absolute left-2 md:-left-12 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition cursor-pointer"
        @click="prevTestimonial"
      >
        ◀
      </button>
      <button 
        class="absolute right-2 md:-right-12 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition cursor-pointer"
        @click="nextTestimonial"
      >
        ▶
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const testimonials = ref([
  { 
    quote: "This was the best surprise for my friend's birthday! The setup was incredibly easy, and it looked amazing.", 
    name: "Emily R.",
    image: "https://via.placeholder.com/80/FFB6C1"
  },
  { 
    quote: "I was able to create a stunning, personalized birthday page in minutes. My family absolutely loved it!", 
    name: "Jason T.",
    image: "https://via.placeholder.com/80/87CEFA"
  },
  { 
    quote: "This is the best one-time purchase ever! No ads, fully customizable, and a unique way to celebrate birthdays!", 
    name: "Sophia M.",
    image: "https://via.placeholder.com/80/98FB98"
  },
  { 
    quote: "The QR code made it so easy to share the page with friends. Highly recommend this service!", 
    name: "David L.",
    image: "https://via.placeholder.com/80/FFD700"
  },
  { 
    quote: "A beautiful and stress-free way to celebrate! The themes are great, and the process is simple.", 
    name: "Olivia K.",
    image: "https://via.placeholder.com/80/FF69B4"
  }
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
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

div.bg-white {
  animation: fadeIn 0.5s ease-in-out;
}
</style>
