<template>
  <div class="p-8 bg-white shadow-lg rounded-xl">
    <h2 class="text-3xl font-bold mb-6 text-center">
      Complete Your Purchase
    </h2>
    <form 
      class="space-y-6"
      @submit.prevent="handleCheckout" 
    >
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
        <label class="block text-gray-700 font-medium">
          Select a Plan
        </label>
        <select class="input" required v-model="selectedPlan">
          <option value="" disabled selected>Select a Plan</option>
          <option value="basic">Basic - $4.89</option>
          <option value="premium">Premium - $6.89</option>
        </select>
      </div>

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
        <p class="text-red-500 text-sm mt-1" v-if="imageError">
          {{ imageError }}
        </p>

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

      <div>
        <label class="block text-gray-700 font-medium mb-2">
          Select a Theme
        </label>
        
        <div class="h-[500px] overflow-y-auto rounded-lg border border-gray-200 p-2">
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <div
              class="theme-option p-2 text-center rounded-lg border-2 cursor-pointer transition-all hover:shadow-md"
              v-for="(theme, index) in templates"
              :key="index"
              :class="{
                'border-green-500 border-4': selectedTheme === theme,
                'border-gray-300': selectedTheme !== theme
              }"
              @click.prevent="selectTheme(theme)"
            >
              <img
                :src="theme.url"
                :alt="theme.name"
                class="w-full h-24 object-contain lg:object-cover rounded mb-2"
                />
              <p class="text-xs truncate font-medium">{{ theme.name }}</p>
            </div>
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
import { onBeforeMount, ref, watch } from "vue";
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

const { 
  createOrder, 
  uploadImages,
  getTemplateImages,
  setSelectedTemplate,
  setOrder,
  templates,
  order,
} = useCheckout();

const selectTheme = (theme) => {
  selectedTheme.value = theme;
  setSelectedTemplate(theme);
};

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

const removeImage = (index) => {
  selectedImages.value.splice(index, 1);
  imagePreviews.value.splice(index, 1);
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

watch([name, age, email, message, selectedTheme, selectedPlan], () => {
  setOrder({
    name: name.value,
    age: age.value,
    email: email.value,
    message: message.value,
    theme: selectedTheme.value,
    plan: selectedPlan.value,
  });
});

onBeforeMount(async () => {
  await getTemplateImages();
});
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

.theme-option {
  transition: border-color 0.2s, transform 0.2s;
}

.theme-option:hover {
  transform: scale(1.05);
}

.custom-file-upload {
  display: inline-block;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #f3f4f6;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-align: center;
  width: 100%;
  color: #333;
  font-weight: 500;
}

.custom-file-upload:hover {
  background-color: #e5e7eb;
}

.hidden-input {
  display: none;
}
</style>
