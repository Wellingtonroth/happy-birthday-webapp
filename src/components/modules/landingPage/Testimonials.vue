<template>
  <section class="py-16 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
    <h2 class="text-3xl font-extrabold mb-8 text-blue-600">
      🌟 {{ $t('module.landingpage.testimonials.title') }} 🌟
    </h2>

    <div class="max-w-2xl mx-auto relative px-4">
      <div 
        class="bg-white p-8 rounded-3xl shadow-xl border transition-all duration-300 transform scale-105 flex flex-col items-center relative max-w-xs md:max-w-2xl mx-auto"
        v-if="testimonials.length"
      >
        <img 
          v-if="testimonials[currentTestimonial].image"
          :src="testimonials[currentTestimonial].image" 
          alt="User Profile"
          class="w-16 h-16 mb-4 rounded-full border-4 border-blue-300 shadow-lg"
        >

        <p class="text-lg md:text-xl text-gray-800 italic leading-relaxed text-center px-4">
          "{{ $t(testimonials[currentTestimonial].quote) }}"
        </p>
        <h4 class="mt-4 font-semibold text-lg text-blue-700">
          — {{ $t(testimonials[currentTestimonial].name) }}
        </h4>
      </div>

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
    quote: "module.landingpage.testimonials.1.quote", 
    name: "module.landingpage.testimonials.1.name",
    image: "https://via.placeholder.com/80/FFB6C1"
  },
  { 
    quote: "module.landingpage.testimonials.2.quote", 
    name: "module.landingpage.testimonials.2.name",
    image: "https://via.placeholder.com/80/87CEFA"
  },
  { 
    quote: "module.landingpage.testimonials.3.quote", 
    name: "module.landingpage.testimonials.3.name",
    image: "https://via.placeholder.com/80/98FB98"
  },
  { 
    quote: "module.landingpage.testimonials.4.quote", 
    name: "module.landingpage.testimonials.4.name",
    image: "https://via.placeholder.com/80/FFD700"
  },
  { 
    quote: "module.landingpage.testimonials.5.quote", 
    name: "module.landingpage.testimonials.5.name",
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
