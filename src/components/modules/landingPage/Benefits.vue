<template>
  <section class="py-16 px-6 text-center bg-white">
    <h2 class="text-4xl font-extrabold mb-6 text-blue-600">🎉 Own Your Birthday Website Forever! 🎉</h2>
    <p class="text-lg text-gray-600 mb-10">Celebrate birthdays in a unique way with a website that lasts a lifetime!</p>

    <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div v-for="(feature, index) in features" :key="index"
        class="p-6 bg-white rounded-3xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl border-t-4 border-yellow-400">
        <img :src="feature.image" alt="Feature Image" class="w-20 mx-auto mb-4">
        <h4 class="text-lg font-semibold mb-2 text-yellow-500">{{ feature.title }}</h4>
        <p class="text-gray-600">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const features = ref([
  { title: "Custom Themes", description: "Choose from a variety of themes to match the birthday celebration.", image: "https://via.placeholder.com/100/FFA500" },
  { title: "Personalized Messages", description: "Include heartfelt birthday wishes with photos and videos.", image: "https://via.placeholder.com/100/FF4500" },
  { title: "Lifetime Access", description: "Your birthday website is yours forever—no time limits!", image: "https://via.placeholder.com/100/8A2BE2" },
  { title: "QR Code Sharing", description: "Get a unique QR code for quick access and easy sharing.", image: "https://via.placeholder.com/100/8A2BE2" }
]);
</script>

<style scoped>
/* Add some celebration animations */
@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

h2 {
  animation: pop 1.5s infinite alternate ease-in-out;
}
</style>
