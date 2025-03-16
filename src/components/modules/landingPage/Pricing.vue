<template>
  <section class="py-12 px-6 text-center bg-gray-100">
    <h2 class="text-3xl font-bold mb-6">
      Pricing
    </h2>
    <p class="text-lg text-gray-600 mb-8">
      Simple & Affordable – One-time fee, no hidden costs.
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
          ⭐ Most Picked
        </div>
        <h3 class="text-2xl font-semibold">
          {{ plan.title }}
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
            ✅ {{ benefit }}
          </li>
        </ul>
        <button 
          class="w-full py-3 rounded-lg font-bold transition cursor-pointer"
          :class="plan.featured ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' : 'bg-blue-600 text-white hover:bg-blue-700'"
          @click="redirectToCheckout"
        >
          {{ plan.buttonText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const pricingOptions = [
  {
    title: "Basic Purchase",
    price: "$4.89",
    oldPrice: null, 
    benefits: [
      "No Ads",
      "1 year Access",
      "Choose between Themes",
      "Personalized Messages",
      "QR Code Sharing",
    ],
    buttonText: "Get Started Now",
    featured: false
  },
  {
    title: "Premium Birthday Pack",
    price: "$6.89",
    oldPrice: "$11.99",
    benefits: [
      "No Ads",
      "Lifetime Access",
      "Choose between Themes",
      "Personalized Messages",
      "Add up to 4 Photos",
      "QR Code Sharing",
    ],
    buttonText: "Get the Best Deal",
    featured: true 
  }
];

const redirectToCheckout = () => {
  window.location.href = "/checkout";
};
</script>
