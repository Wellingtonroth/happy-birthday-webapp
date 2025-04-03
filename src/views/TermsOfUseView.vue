<template>
  <Navigation />

  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">{{ $t('module.terms.title') }}</h1>
    <p class="text-gray-700 mb-4">
      <strong>{{ $t('module.terms.lastUpdated.label') }}</strong> {{ $t('module.terms.lastUpdated.date') }}
    </p>

    <section class="mb-6" v-for="section in termsSections" :key="section.id">
      <h2 class="text-xl font-semibold mb-2">{{ $t(section.title) }}</h2>
      <p>
        <span v-html="$t(section.content)"></span>
      </p>
    </section>
  </div>

  <Footer />
</template>

<script setup>
import Footer from '../components/shared/Footer.vue';
import Navigation from '../components/shared/Navigation.vue';

const termsSections = [
  { id: 1, title: 'module.terms.section1.title', content: 'module.terms.section1.content' },
  { id: 2, title: 'module.terms.section2.title', content: 'module.terms.section2.content' },
  { id: 3, title: 'module.terms.section3.title', content: 'module.terms.section3.content' },
  { id: 4, title: 'module.terms.section4.title', content: 'module.terms.section4.content' },
  { id: 5, title: 'module.terms.section5.title', content: 'module.terms.section5.content' },
  { id: 6, title: 'module.terms.section6.title', content: 'module.terms.section6.content' },
  { id: 7, title: 'module.terms.section7.title', content: 'module.terms.section7.content' },
  { id: 8, title: 'module.terms.section8.title', content: 'module.terms.section8.content' },
  { id: 9, title: 'module.terms.section9.title', content: 'module.terms.section9.content' },
  { id: 10, title: 'module.terms.section10.title', content: 'module.terms.section10.content' }
];
</script>
