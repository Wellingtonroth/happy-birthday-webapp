<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-4 text-center">
    <h1 class="text-3xl font-bold mb-4">
      {{ t('module.checkout.pending.title') }}
    </h1>
    <p class="text-lg mb-6">
      {{ t('module.checkout.pending.description') }}
    </p>
    <p class="text-sm text-gray-500 mb-8">
      {{ t('module.checkout.pending.information') }}
    </p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
