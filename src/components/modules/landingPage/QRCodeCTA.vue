<template>
  <section class="py-6 px-6 text-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg my-8 mx-auto max-w-5xl md:px-12">
    <div class="flex flex-col md:flex-row items-center justify-between text-left">
      <div class="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
        <img 
          class="w-32 md:w-40 rounded-lg shadow-lg"
          :alt="$t('module.landingpage.qrcode.alt')" 
          src="../../../assets/qrcode.png" 
        >
      </div>
      <div class="w-full md:w-2/3 text-center md:text-left">
        <h2 class="text-2xl md:text-3xl font-bold text-blue-600 leading-tight">
          {{ $t('module.landingpage.hero.title.line1') }}<br />
          {{ $t('module.landingpage.hero.title.line2') }}
        </h2>
        <p class="text-base md:text-lg text-gray-700 mt-3 mb-6">
          {{ $t('module.landingpage.hero.description.line1') }}<br />
          {{ $t('module.landingpage.hero.description.line2') }}
        </p>
        <CTAButton :label="$t('shared.component.button.create')" />
      </div>
    </div>
  </section>
</template>

<script setup>
import CTAButton from "../../shared/CTAButton.vue";
</script>
