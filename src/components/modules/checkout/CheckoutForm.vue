<template>
  <div class="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-xl">
    <h2 class="text-3xl font-bold mb-6 text-center">Complete Your Purchase</h2>

    <form @submit.prevent="handleCheckout" class="space-y-6">
      <!-- Recipient Details -->
      <div>
        <label class="block text-gray-700 font-medium">Recipient Name</label>
        <input v-model="name" type="text" placeholder="John Doe" class="input" required />
      </div>

      <div>
        <label class="block text-gray-700 font-medium">Recipient Age</label>
        <input v-model="age" type="number" min="1" placeholder="Enter age" class="input" required />
      </div>

      <!-- Buyer Email -->
      <div>
        <label class="block text-gray-700 font-medium">Your Email</label>
        <input v-model="email" type="email" placeholder="email@example.com" class="input" required />
      </div>

      <!-- Personalized Message -->
      <div>
        <label class="block text-gray-700 font-medium">Personalized Message (Optional)</label>
        <textarea v-model="message" placeholder="Write a special message" class="input h-24"></textarea>
      </div>

      <!-- Plan Selection -->
      <div>
        <label class="block text-gray-700 font-medium">Select a Plan</label>
        <select v-model="selectedPlan" class="input" required>
          <option value="basic">Basic - $5.90</option>
          <option value="premium">Premium - $9.90</option>
        </select>
      </div>

      <!-- Theme Selection -->
      <div>
        <label class="block text-gray-700 font-medium">Select a Theme</label>
        <div class="grid grid-cols-3 gap-4 mt-2">
          <div
            v-for="theme in themes"
            :key="theme.value"
            class="theme-option"
            :class="{ 'border-green-500': selectedTheme === theme.value }"
            @click="selectedTheme = theme.value"
          >
            <img :src="theme.image" :alt="theme.label" class="rounded-lg w-full h-20 object-cover" />
            <p class="text-center text-sm mt-1">{{ theme.label }}</p>
          </div>
        </div>
      </div>

      <!-- Image Upload -->
      <div>
        <label class="block text-gray-700 font-medium">Upload an Image (Optional)</label>
        <input type="file" @change="handleImageUpload" class="input-file" accept="image/*" />
        <img v-if="imagePreview" :src="imagePreview" class="mt-2 rounded-lg w-full h-32 object-cover" />
      </div>

      <!-- Checkout Button -->
      <button type="submit" class="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-lg">
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
const selectedTheme = ref("");
const selectedPlan = ref("");
const uploadedImage = ref(null);
const imagePreview = ref("");

const themes = ref([
  { value: "dogs", label: "Dogs", image: "/themes/dogs.jpg" },
  { value: "cats", label: "Cats", image: "/themes/cats.jpg" },
  { value: "carnaval", label: "Carnaval", image: "/themes/carnaval.jpg" },
  { value: "beach", label: "Beach", image: "/themes/beach.jpg" },
]);

const { createOrder } = useCheckout();

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImage.value = reader.result; // Base64 format
      imagePreview.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleCheckout = async () => {
  if (!selectedTheme.value) {
    alert("Please select a theme.");
    return;
  }
  if (!selectedPlan.value) {
    alert("Please select a plan.");
    return;
  }

  const payload = {
    name: name.value,
    age: age.value,
    email: email.value,
    message: message.value,
    theme: selectedTheme.value,
    plan: selectedPlan.value,
    image: uploadedImage.value,
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
  padding: 12px;
  margin-top: 4px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border 0.2s ease-in-out;
}

.input:focus {
  border-color: #4CAF50;
}

.input-file {
  width: 100%;
  padding: 6px;
}

.theme-option {
  cursor: pointer;
  border: 2px solid transparent;
  padding: 4px;
  border-radius: 8px;
  transition: border-color 0.2s;
}

.theme-option:hover {
  border-color: #4CAF50;
}
</style>
