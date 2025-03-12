<template>
  <div class="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-xl">
    <h2 class="text-3xl font-bold mb-6 text-center">
      Complete Your Purchase
    </h2>
    <form 
      class="space-y-6"
      @submit.prevent="handleCheckout" 
    >
      <!-- Recipient Details -->
      <div>
        <label class="block text-gray-700 font-medium">
          Recipient Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          class="input"
          required
          v-model="name"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium">
          Recipient Age
        </label>
        <input
          v-model="age"
          type="number"
          min="1"
          placeholder="Enter age"
          class="input"
          required
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium">
          Your Email
        </label>
        <input
          v-model="email"
          type="email"
          placeholder="email@example.com"
          class="input"
          required
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium">
          Personalized Message (Optional)
        </label>
        <textarea
          placeholder="Write a special message"
          class="input h-24"
          v-model="message"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium">
          Select a Plan
        </label>
        <select 
          class="input" 
          required 
          v-model="selectedPlan"
        >
          <option value="basic">Basic - $5.90</option>
          <option value="premium">Premium - $9.90</option>
        </select>
      </div>

      <div>
        <label class="block text-gray-700 font-medium">
          Select a Theme
        </label>
        <div class="grid grid-cols-3 gap-4 mt-2">
          <div
            class="theme-option"
            v-for="theme in themes"
            :key="theme.value"
            :class="{ 'border-green-500': selectedTheme === theme.value }"
            @click="selectedTheme = theme.value"
          >
            <p class="text-center text-sm mt-1">
              {{ theme.label }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="selectedPlan === 'premium'">
        <label class="block text-gray-700 font-medium">
          Upload Images (Optional)
        </label>
        <input 
          type="file" 
          class="input-file" 
          accept="image/*" 
          multiple 
          @change="handleImageUpload"
        />
        <div class="grid grid-cols-3 gap-2 mt-2">
          <img 
            class="rounded-lg w-full h-24 object-cover"
            v-for="image in imagePreviews" 
            :key="image" 
            :src="image" 
          />
        </div>
      </div>

      <button
        type="submit"
        class="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-lg"
      >
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
const selectedImages = ref([]);
const imagePreviews = ref([]);

const themes = ref([
  { value: "dogs", label: "Dogs" },
  { value: "cats", label: "Cats" },
  { value: "beach", label: "Beach" },
]);

const { 
  createOrder, 
  uploadImages, 
  isLoading,
} = useCheckout();

const handleImageUpload = (event) => {
  selectedImages.value = Array.from(event.target.files);
  imagePreviews.value = selectedImages.value.map((file) => URL.createObjectURL(file));
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
  };

  try {
    const response = await createOrder(payload);
    if (!response?.orderId) {
      alert("Failed to create order.");
      return;
    }

    const orderId = response.orderId;
    if (selectedImages.value.length > 0) {
      await uploadImages(orderId, selectedImages.value);
    }

    alert("Order created successfully!");
  } catch (error) {
    console.error("Order creation failed:", error);
    alert("Something went wrong. Please try again.");
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
}

.input-file {
  width: 100%;
  padding: 6px;
  border: 1px solid green;
}

.theme-option {
  cursor: pointer;
  border: 2px solid transparent;
  padding: 4px;
  border-radius: 8px;
  transition: border-color 0.2s;
}

.theme-option:hover {
  border-color: #4caf50;
}
</style>
