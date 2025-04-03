<template>
  <section class="py-16 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
    <h2 class="text-4xl font-extrabold mb-6 text-blue-600">
      🎉 {{ $t('module.landingpage.howitworks.title') }} 🎉
    </h2>
    <p class="text-lg text-gray-600 mb-10">
      {{ $t('module.landingpage.howitworks.subtitle') }}
    </p>
    <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div 
        class="p-6 bg-white rounded-3xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl border-t-4 border-blue-500"
        v-for="(step, index) in steps" 
        :key="index"
      >
        <div class="mb-4">
          <span 
            class="px-4 py-2 text-white text-sm font-bold rounded-full" 
            :class="step.badgeColor"
          >
            {{ $t('module.landingpage.howitworks.step') }} {{ index + 1 }}
          </span>
        </div>
        <h4 class="text-xl font-bold text-gray-800 mb-2">
          {{ $t(step.title) }}
        </h4>
        <p class="text-gray-600">
          {{ $t(step.description) }}
        </p>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue';

const steps = ref([
  { 
    title: 'module.landingpage.howitworks.step1.title', 
    description: 'module.landingpage.howitworks.step1.description', 
    badgeColor: 'bg-yellow-500'
  },
  { 
    title: 'module.landingpage.howitworks.step2.title', 
    description: 'module.landingpage.howitworks.step2.description', 
    badgeColor: 'bg-pink-500'
  },
  { 
    title: 'module.landingpage.howitworks.step3.title', 
    description: 'module.landingpage.howitworks.step3.description', 
    badgeColor: 'bg-green-500'
  },
  { 
    title: 'module.landingpage.howitworks.step4.title', 
    description: 'module.landingpage.howitworks.step4.description', 
    badgeColor: 'bg-blue-500'
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
</style>
