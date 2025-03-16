<template>
  <Navigation />

  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p class="text-gray-700 mb-4"><strong>Last Updated:</strong> March 16, 2025</p>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">1. Introduction</h2>
      <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">2. Information We Collect</h2>
      <p>When you use our platform, we collect the following information:</p>
      <ul class="list-disc list-inside">
        <li><strong>Registration Details:</strong> [update with all the things that i collect]</li>
        <li><strong>Payment Information:</strong> Email address used for payment processing via Stripe and for sending the personalized page link.</li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul class="list-disc list-inside">
        <li>Process payments and send the personalized page link via email.</li>
        <li>Customize and generate your personalized page using the details provided.</li>
        <li>Improve our services and provide customer support.</li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">4. Information Sharing</h2>
      <p>We do not share your personal information with third parties, except when necessary for payment processing (via Stripe) or when required by law.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">5. Data Security</h2>
      <p>We implement security measures to protect your personal data against unauthorized access, misuse, or disclosure. However, no online data transmission is 100% secure, and we cannot guarantee absolute security.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">6. Data Retention</h2>
      <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected or as required by applicable laws.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">7. Your Rights</h2>
      <p>You have the right to access, correct, or request the deletion of your personal information. To exercise these rights, please contact us at <a href="mailto:[your email here]" class="text-blue-600 hover:underline">[your email here]</a>.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy periodically. Any changes will be reflected in the “Last Updated” date at the top of this page. It is your responsibility to review this policy regularly to stay informed.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">9. Contact</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:[your email here]" class="text-blue-600 hover:underline">[your email here]</a>.</p>
    </section>
  </div>

  <Footer />
</template>

<script setup>
import Footer from '../components/shared/Footer.vue';
import Navigation from '../components/shared/Navigation.vue';
</script>
