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
        <label class="block text-gray-700 font-medium">Recipient Name</label>
        <input type="text" placeholder="John Doe" class="input" required v-model="name" />
      </div>

      <div>
        <label class="block text-gray-700 font-medium">Recipient Age</label>
        <input v-model="age" type="number" min="1" placeholder="Enter age" class="input" required />
      </div>

      <div>
        <label class="block text-gray-700 font-medium">Your Email</label>
        <input v-model="email" type="email" placeholder="email@example.com" class="input" required />
      </div>

      <div>
        <label class="block text-gray-700 font-medium">Personalized Message (Optional)</label>
        <textarea placeholder="Write a special message" class="input h-24" v-model="message" />
      </div>

      <div>
        <label class="block text-gray-700 font-medium">Select a Plan</label>
        <select class="input" required v-model="selectedPlan">
          <option value="basic">Basic - $4.89</option>
          <option value="premium">Premium - $6.89</option>
        </select>
      </div>

      <div>
        <label class="block text-gray-700 font-medium">Select a Theme</label>
        <div class="grid grid-cols-3 gap-4 mt-2">
          <div
            class="theme-option"
            v-for="theme in themes"
            :key="theme.value"
            :class="{ 'border-green-500': selectedTheme === theme.value }"
            @click="selectedTheme = theme.value"
          >
            <p class="text-center text-sm mt-1">{{ theme.label }}</p>
          </div>
        </div>
      </div>

      <!-- Upload de Imagens (Apenas Premium) -->
      <div v-if="selectedPlan === 'premium'">
        <div>
          <label class="block text-gray-700 font-medium">
            Upload Images (Max: 4)
          </label>
        
          <label for="file-upload" class="custom-file-upload">
            Choose up to 4 images
          </label>
        
          <input 
            id="file-upload"
            type="file" 
            class="hidden-input" 
            accept="image/*" 
            multiple 
            @change="handleImageUpload"
          />
        </div>
        <p class="text-red-500 text-sm mt-1" v-if="imageError">{{ imageError }}</p>

        <div class="grid grid-cols-4 gap-2 mt-2">
          <div v-for="(image, index) in imagePreviews" :key="index" class="relative">
            <img class="rounded-lg w-full h-24 object-cover" :src="image" />
            <button 
              class="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 text-xs"
              @click.prevent="removeImage(index)"
            >
              X
            </button>
          </div>
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
const imageError = ref("");

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

/**
 * Manipula o upload de imagens garantindo que o usuário possa enviar no máximo 4 imagens.
 */
const handleImageUpload = (event) => {
  const files = Array.from(event.target.files);

  if (selectedImages.value.length + files.length > 4) {
    imageError.value = "You can upload a maximum of 4 images.";
    return;
  }

  imageError.value = "";
  selectedImages.value = [...selectedImages.value, ...files].slice(0, 4);
  imagePreviews.value = selectedImages.value.map((file) => URL.createObjectURL(file));
};

/**
 * Remove uma imagem da lista de uploads
 */
const removeImage = (index) => {
  selectedImages.value.splice(index, 1);
  imagePreviews.value.splice(index, 1);
};

/**
 * Realiza o processo de checkout e upload de imagens
 */
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

.custom-file-upload {
  display: inline-block;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #f3f4f6; /* Cinza claro */
  border: 1px solid #ccc;
  border-radius: 6px;
  text-align: center;
  width: 100%;
  color: #333;
  font-weight: 500;
}

.custom-file-upload:hover {
  background-color: #e5e7eb; /* Cinza mais escuro */
}

.hidden-input {
  display: none;
}

</style>
