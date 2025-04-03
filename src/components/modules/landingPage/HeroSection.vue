<template>
  <section class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12 py-32">
    <div class="max-w-lg text-center lg:text-left">
      <h1 class="text-4xl lg:text-5xl font-extrabold text-[#2D3436] leading-tight">
        {{ $t('module.landingpage.hero.headline.line1') }} <br />
        {{ $t('module.landingpage.hero.headline.line2') }}
      </h1>
      <p class="text-lg text-[#555] my-6">
        {{ $t('module.landingpage.hero.description.part1') }}
        <span class="font-bold">{{ $t('module.landingpage.hero.description.bold') }}</span>
        {{ $t('module.landingpage.hero.description.part2') }}
        <span class="text-blue-500 font-semibold">{{ $t('module.landingpage.hero.description.highlight') }}</span>
      </p> 
      <CTAButton :label="$t('shared.component.button.create')" variant="secondary" />
    </div>

    <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <img 
        :alt="$t('module.landingpage.hero.image.alt')"
        class="w-3/4 lg:w-96 drop-shadow-lg rounded-xl"
      >
    </div>
  </section>
</template>

<script setup>
import CTAButton from "../../shared/CTAButton.vue";
</script>
