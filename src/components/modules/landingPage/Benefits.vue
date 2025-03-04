<template>
  <section class="py-16 px-6 text-center bg-white">
    <h2 class="text-4xl font-extrabold mb-6 text-blue-600">
      🎉 Own Your Birthday Website Forever! 🎉
    </h2>
    <p class="text-lg text-gray-600 mb-10">
      Celebrate birthdays in a unique way with a website that lasts a lifetime!  
      <span class="font-semibold text-blue-500">
        Basic plan includes 1-year access, while Premium unlocks lifetime ownership!
      </span>
    </p>

    <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div 
        class="p-6 bg-white rounded-3xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl border-t-4 border-yellow-400"
        v-for="(feature, index) in features" 
        :key="index"
        :class="feature.highlight ? 'highlight-feature' : ''"
      >
        <h4 class="text-lg font-semibold mb-2 text-yellow-500">
          {{ feature.title }}
        </h4>
        <p class="text-gray-600">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const features = ref([
  { 
    title: "Custom Themes", 
    description: "Choose from a variety of themes to match the birthday celebration.", 
    image: "https://via.placeholder.com/100/FFA500", 
    highlight: false,
  },
  { 
    title: "Personalized Messages", 
    description: "Include heartfelt birthday wishes with photos and videos.", 
    image: "https://via.placeholder.com/100/FF4500", 
    highlight: false,
  },
  { 
    title: "Lifetime Access (Premium Only)", 
    description: "Upgrade to Premium for a website that never expires!", 
    image: "https://via.placeholder.com/100/FFD700", 
    highlight: true,
  },
  { 
    title: "QR Code Sharing", 
    description: "Get a unique QR code for quick access and easy sharing.", 
    image: "https://via.placeholder.com/100/8A2BE2", 
    highlight: false,
  }
]);
</script>

<style scoped>
@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

h2 {
  animation: pop 1.5s infinite alternate ease-in-out;
}

.highlight-feature {
  background: linear-gradient(135deg, #FFF9C4, #FFECB3);
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.3); 
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.highlight-feature:hover {
  box-shadow: 0 6px 30px rgba(255, 215, 0, 0.5);
}
</style>
