<template>
  <div class="max-w-lg mx-auto p-8">
    <h2 class="text-3xl font-bold mb-4">Complete Your Purchase</h2>
    <form @submit.prevent="handleCheckout">
      <input v-model="name" type="text" placeholder="Recipient Name" class="input" required />
      <input v-model="age" type="number" placeholder="Recipient Age" class="input" required />
      <input v-model="email" type="email" placeholder="Your Email" class="input" required />
      <button type="submit" class="bg-green-500 text-white px-6 py-3 rounded-lg mt-4">
        Pay with Stripe
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

const { checkoutStripe } = useCheckout();

const handleCheckout = async () => {
  const paylaod = {
    name: name.value,
    age: age.value,
    email: email.value,
  };

  checkoutStripe(paylaod);
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
