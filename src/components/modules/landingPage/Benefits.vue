<template>
  <section class="py-16 px-6 text-center bg-white">
    <h2 class="text-4xl font-extrabold mb-6 text-blue-600">
      🎉 {{ $t('module.landingpage.ownership.title') }} 🎉
    </h2>
    <p class="text-lg text-gray-600 mb-10">
      {{ $t('module.landingpage.ownership.description.beforeHighlight') }}
      <span class="font-semibold text-blue-500">
        {{ $t('module.landingpage.ownership.description.highlight') }}
      </span>
    </p>

    <div class="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
      <div 
        class="p-6 bg-white rounded-3xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl border-t-4 border-yellow-400 relative premium-box"
        v-for="(premiumFeature, index) in premiumFeatures" 
        :key="index"
      >
        <span class="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 text-xs font-bold rounded-bl-xl">
          {{ $t('module.landingpage.ownership.premium.label') }}
        </span>
        <h4 class="text-lg font-semibold mb-2 text-yellow-500">
          {{ $t(premiumFeature.title) }}
        </h4>
        <p class="text-gray-600">
          {{ $t(premiumFeature.description) }}
        </p>
      </div>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div 
        class="p-6 bg-white rounded-3xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl border-t-4 border-blue-400"
        v-for="(feature, index) in features" 
        :key="index"
      >
        <h4 class="text-lg font-semibold mb-2 text-blue-500">
          {{ $t(feature.title) }}
        </h4>
        <p class="text-gray-600">
          {{ $t(feature.description) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const premiumFeatures = ref([
  { 
    title: "module.landingpage.ownership.premium.photos.title", 
    description: "module.landingpage.ownership.premium.photos.description", 
  },
  { 
    title: "module.landingpage.ownership.premium.lifetime.title", 
    description: "module.landingpage.ownership.premium.lifetime.description", 
  },
]);

const features = ref([
  { 
    title: "module.landingpage.ownership.feature.themes.title", 
    description: "module.landingpage.ownership.feature.themes.description" 
  },
  { 
    title: "module.landingpage.ownership.feature.messages.title", 
    description: "module.landingpage.ownership.feature.messages.description" 
  },
  { 
    title: "module.landingpage.ownership.feature.qr.title", 
    description: "module.landingpage.ownership.feature.qr.description" 
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

.premium-box {
  background: linear-gradient(135deg, #FFF9C4, #FFECB3);
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.3); 
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.premium-box:hover {
  box-shadow: 0 6px 30px rgba(255, 215, 0, 0.5);
}

.premium-box span {
  font-size: 0.75rem;
  letter-spacing: 1px;
}
</style>
