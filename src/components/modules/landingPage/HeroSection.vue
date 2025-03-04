<template>
  <section class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12 py-32">
    <div class="max-w-lg text-center lg:text-left">
      <h1 class="text-4xl lg:text-5xl font-extrabold text-[#2D3436] leading-tight">
        The Easiest Way to Create a <br> Stunning Birthday Website!
      </h1>
      <p class="text-lg text-[#555] my-6">
        Surprise your loved ones with a <span class="font-bold">personalized</span> birthday page, featuring heartfelt messages, custom themes, and easy sharing.  
        <span class="text-blue-500 font-semibold">No coding required!</span>
      </p> 
      <CTAButton label="Create My Site" variant="secondary" />
    </div>

    <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <img 
        alt="Birthday Website Preview"
        class="w-3/4 lg:w-96 drop-shadow-lg rounded-xl"
      >
    </div>
  </section>
</template>

<script setup>
import CTAButton from "../../shared/CTAButton.vue";
</script>
