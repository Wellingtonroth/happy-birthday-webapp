<template>
  <div class="max-w-lg mx-auto p-8">
    <h2 class="text-3xl font-bold mb-4">Complete Your Purchase</h2>
    <form @submit.prevent="handleCheckout">
      <input v-model="name" type="text" placeholder="Recipient Name" class="input" required />
      <input v-model="age" type="number" placeholder="Recipient Age" class="input" required />
      <input v-model="email" type="email" placeholder="Your Email" class="input" required />
      <input v-model="message" type="text" placeholder="Personalized Message" class="input" />
      <button type="submit" class="bg-green-500 text-white px-6 py-3 rounded-lg mt-4">
        Checkout
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useCheckout from "../../../composables/useCheckout";

const name = ref("");
const age = ref("");
const email = ref("");
const message = ref("");

const { createOrder } = useCheckout();

const handleCheckout = async () => {
  const payload = {
    name: name.value,
    age: age.value,
    email: email.value,
    message: message.value,
  };

  const response = await createOrder(payload);
  if (response?.url) {
    window.location.href = response.url;
  } else {
    alert("Order created successfully!");
  }
};
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
