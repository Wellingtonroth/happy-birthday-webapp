<template>
  <section class="py-16 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
    <h2 class="text-4xl font-extrabold mb-6 text-blue-600">🎉 How It Works 🎉</h2>
    <p class="text-lg text-gray-600 mb-10">Follow these simple steps to create an unforgettable birthday surprise!</p>

    <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div v-for="(step, index) in steps" :key="index"
        class="p-6 bg-white rounded-3xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl border-t-4 border-blue-500">
        <img :src="step.image" alt="Step Image" class="w-20 mx-auto mb-4">
        <h3 class="text-xl font-bold text-blue-600 mb-2">Step {{ index + 1 }}</h3>
        <h4 class="text-lg font-semibold mb-2">{{ step.title }}</h4>
        <p class="text-gray-600">{{ step.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const steps = ref([
  { title: "Choose a Theme", description: "Select from multiple beautiful designs.", image: "https://via.placeholder.com/100/FFD700" },
  { title: "Personalize It", description: "Add the recipient’s name, age, and a special message.", image: "https://via.placeholder.com/100/FF69B4" },
  { title: "Get Your Link & QR Code", description: "Receive your website link via email along with a QR code for easy sharing.", image: "https://via.placeholder.com/100/32CD32" },
  { title: "Share & Celebrate", description: "Send the link and QR code to family & friends to enjoy the celebration!", image: "https://via.placeholder.com/100/4169E1" }
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