<template>
  <section class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12 py-32">
    <div class="max-w-lg text-center lg:text-left">
      <h1 class="text-4xl lg:text-5xl font-extrabold text-[#2D3436] leading-tight">
        Create a Unique & Personalized Birthday Website in Minutes
      </h1>
      <p class="text-lg text-[#555] my-4">
        Surprise your loved ones with a customized birthday page filled with heartfelt messages, photos, and special themes!
      </p> 
      <CTAButton label="Create My Site" variant="secondary" />
    </div>

    <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <img 
        alt="Birthday Website Preview"
        class="w-3/4 lg:w-full drop-shadow-lg"
      >
    </div>
  </section>
</template>

<script setup>
import CTAButton from "../../shared/CTAButton.vue";
</script>