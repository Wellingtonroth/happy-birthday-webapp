<template>
  <header class="relative w-full bg-[#F8F9FA]">
    <Navigation />
    <HeroSection />
    <HowItWorks />
    <Benefits />
    <Pricing />
    <Testimonials />
    <FAQ />
  </header>
  
  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from './HeroSection.vue';
import HowItWorks from './HowItWorks.vue';
import Benefits from './Benefits.vue';
import Pricing from './Pricing.vue';
import Testimonials from './Testimonials.vue';
import FAQ from './FAQ.vue';
import Footer from '../../shared/Footer.vue';
import Navigation from '../../shared/Navigation.vue';
</script>