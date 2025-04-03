<template>
  <section class="py-12 px-6 text-center bg-gray-100">
    <h2 class="text-3xl font-bold mb-6">
      {{ $t('module.landingpage.pricing.title') }}
    </h2>
    <p class="text-lg text-gray-600 mb-8">
      {{ $t('module.landingpage.pricing.subtitle') }}
    </p>
    <div class="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
      <div 
        class="relative p-8 rounded-3xl shadow-lg border text-center w-full max-w-sm"
        v-for="(plan, index) in pricingOptions" 
        :key="index" 
        :class="plan.featured ? 'bg-blue-600 text-white scale-105 shadow-2xl border-blue-700' : 'bg-white text-gray-900 border-gray-300'"
      >
        <div 
          class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full"
          v-if="plan.featured" 
        >
          {{ $t('module.landingpage.pricing.featured.label') }}
        </div>
        <h3 class="text-2xl font-semibold">
          {{ $t(plan.title) }}
        </h3>
        <div class="flex items-center justify-center gap-2 my-4">
          <p 
            class="text-4xl font-bold" 
            :class="plan.featured ? 'text-yellow-300' : 'text-blue-600'"
          >
            {{ plan.price }}
          </p>
          <p 
            class="text-xl text-gray-400 line-through"
            v-if="plan.oldPrice" 
          >
            {{ plan.oldPrice }}
          </p>
        </div>
        <ul class="space-y-2 mb-6">
          <li 
            v-for="(benefit, i) in plan.benefits" 
            :key="i"
          >
            ✅ {{ $t(benefit) }}
          </li>
        </ul>
        <button 
          class="w-full py-3 rounded-lg font-bold transition cursor-pointer"
          :class="plan.featured ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' : 'bg-blue-600 text-white hover:bg-blue-700'"
          @click="redirectToCheckout"
        >
          {{ $t(plan.buttonText) }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Plan from '../../../constants/Plan.js';

const pricingOptions = [
  {
    title: 'module.landingpage.pricing.basic.title',
    price: Plan.BASIC,
    oldPrice: null, 
    benefits: [
      'module.landingpage.pricing.benefit.noads',
      'module.landingpage.pricing.benefit.oneyear',
      'module.landingpage.pricing.benefit.themes',
      'module.landingpage.pricing.benefit.messages',
      'module.landingpage.pricing.benefit.qr',
    ],
    buttonText: 'module.landingpage.pricing.basic.button',
    featured: false
  },
  {
    title: 'module.landingpage.pricing.premium.title',
    price: Plan.PREMIUM,
    oldPrice: "$11.99",
    benefits: [
      'module.landingpage.pricing.benefit.noads',
      'module.landingpage.pricing.benefit.lifetime',
      'module.landingpage.pricing.benefit.themes',
      'module.landingpage.pricing.benefit.messages',
      'module.landingpage.pricing.benefit.photos',
      'module.landingpage.pricing.benefit.qr',
    ],
    buttonText: 'module.landingpage.pricing.premium.button',
    featured: true 
  }
];

const redirectToCheckout = () => {
  window.location.href = "/checkout";
};
</script>

