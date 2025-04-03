<template>
  <footer class="bg-gray-900 text-white py-8 px-6 text-center">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-wrap justify-center space-x-6 mb-4">
        <a 
          href="/privacy-policy" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-gray-400"
        >
          {{ $t('shared.component.footer.privacy') }}
        </a>
        <a 
          href="/terms-of-use" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-gray-400"
        >
          {{ $t('shared.component.footer.terms') }}
        </a>
        <a 
          href="#" 
          class="hover:text-gray-400"
        >
          {{ $t('shared.component.footer.contact') }}
        </a>
      </div>
      <div class="flex justify-center space-x-4 mb-4">
        <a 
          href="#" 
          class="text-xl hover:text-gray-400"
        >
          🐦
        </a>
        <a 
          href="#" 
          class="text-xl hover:text-gray-400"
        >
          📸
        </a>
      </div>
      <p class="text-sm text-gray-400">
        © {{ new Date().getFullYear() }} {{ $t('shared.component.footer.rights') }}
      </p>
    </div>
  </footer>
</template>
