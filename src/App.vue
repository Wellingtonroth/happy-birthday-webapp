<script setup>
import Toast from './components/shared/Toast.vue';
import { useToast } from './composables/useToast';

const { toastMessage, toastVisible, toastType } = useToast();
</script>

<template>
  <section>
    <router-view v-slot="{ Component }">
       <component :is="Component"></component>
    </router-view>
    <Toast 
      :message="toastMessage" 
      :type="toastType" 
      :show="toastVisible"
    />
  </section>
</template>

<style scoped>
</style>
