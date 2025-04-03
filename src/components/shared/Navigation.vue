<template>
  <nav class="fixed top-0 left-0 w-full flex justify-between items-center py-3 px-4 lg:px-10 bg-white shadow-md z-50">
    <router-link to="/" class="text-lg md:text-2xl font-semibold text-[#2D3436]">
      {{ $t('shared.component.navigation.home') }}
    </router-link>
    <CTAButton 
      :label="$t('shared.component.button.create')" 
      variant="secondary" 
      class="text-sm px-4 py-2 md:px-6 md:py-3 md:text-lg"
    />
  </nav>
</template>

<script setup>
import CTAButton from "../shared/CTAButton.vue";
</script>
