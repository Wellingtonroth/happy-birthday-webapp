<template>
  <div class="">
    <Theme />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Theme from "./Theme.vue";
import useBirthday from "../../../composables/useBirthday";

const { getOrderById } = useBirthday();

</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
