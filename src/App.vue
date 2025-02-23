<script setup>
</script>

<template>
  <section>
    <router-view v-slot="{ Component }">
       <component :is="Component"></component>
    </router-view>
  </section>
</template>

<style scoped>
</style>
