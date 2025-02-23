<template>
  <div class="text-center p-10">
    <h1 class="text-4xl font-bold text-blue-500">🎉 Welcome to Happy Birthday Website! 🎂</h1>
    <p class="text-lg mt-4">Enter birthday details and get a custom page!</p>
    <router-link to="/checkout">
      <button class="bg-blue-500 text-white px-6 py-3 rounded-lg mt-6">Buy Now</button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>