<template>
  <div>
    <Navigation />
  </div>

  <div class="wrapper">
    <CheckoutForm class="form" />
    <Preview class="preview" />
  </div>

  <Footer />
</template>


<script setup>
import CheckoutForm from "./CheckoutForm.vue";
import Preview from "./Preview.vue";
import Navigation from '../../shared/Navigation.vue';
import Footer from '../../shared/Footer.vue';
</script>


<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  padding: 7rem 2rem 4rem;
  flex-wrap: wrap;
}

.preview {
  max-width: 360px;
  width: 100%;
  background-color: white;
  border-radius: 0.75rem;
  padding: 1rem;
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
  }

  .preview {
    position: static;
    transform: none;
    margin-top: 2rem;
    max-width: 100%;
  }

  .form {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .preview {
    position: sticky;
    top: 100px;
  }
}


@media (max-width: 1024px) and (min-width: 769px) {
  .form {
    width: 100%;
  }

  .wrapper {
    flex-direction: column;
    align-items: center;
  }

  .preview {
    position: static;
    transform: none;
    margin-top: 2rem;
    max-width: 100%;
  }
}
</style>