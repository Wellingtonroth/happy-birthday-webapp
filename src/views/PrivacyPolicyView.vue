<template>
  <Navigation />

  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">{{ $t('module.privacy.title') }}</h1>
    <p class="text-gray-700 mb-4">
      <strong>{{ $t('module.privacy.lastUpdated.label') }}</strong> {{ $t('module.privacy.lastUpdated.date') }}
    </p>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">{{ $t('module.privacy.section1.title') }}</h2>
      <p>{{ $t('module.privacy.section1.content') }}</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">{{ $t('module.privacy.section2.title') }}</h2>
      <p>{{ $t('module.privacy.section2.intro') }}</p>
      <ul class="list-disc list-inside">
        <li>
          <strong>{{ $t('module.privacy.section2.item1.title') }}</strong>
          {{ $t('module.privacy.section2.item1.desc') }}
        </li>
        <li>
          <strong>{{ $t('module.privacy.section2.item2.title') }}</strong>
          {{ $t('module.privacy.section2.item2.desc') }}
        </li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">{{ $t('module.privacy.section3.title') }}</h2>
      <p>{{ $t('module.privacy.section3.intro') }}</p>
      <ul class="list-disc list-inside">
        <li>{{ $t('module.privacy.section3.item1') }}</li>
        <li>{{ $t('module.privacy.section3.item2') }}</li>
        <li>{{ $t('module.privacy.section3.item3') }}</li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">{{ $t('module.privacy.section4.title') }}</h2>
      <p>{{ $t('module.privacy.section4.content') }}</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">{{ $t('module.privacy.section5.title') }}</h2>
      <p>{{ $t('module.privacy.section5.content') }}</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">{{ $t('module.privacy.section6.title') }}</h2>
      <p>{{ $t('module.privacy.section6.content') }}</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">{{ $t('module.privacy.section7.title') }}</h2>
      <p>
        {{ $t('module.privacy.section7.content') }}
        <a href="mailto:[your email here]" class="text-blue-600 hover:underline">[your email here]</a>.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">{{ $t('module.privacy.section8.title') }}</h2>
      <p>{{ $t('module.privacy.section8.content') }}</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">{{ $t('module.privacy.section9.title') }}</h2>
      <p>
        {{ $t('module.privacy.section9.content') }}
        <a href="mailto:[your email here]" class="text-blue-600 hover:underline">[your email here]</a>.
      </p>
    </section>
  </div>

  <Footer />
</template>


<script setup>
import Footer from '../components/shared/Footer.vue';
import Navigation from '../components/shared/Navigation.vue';
</script>
