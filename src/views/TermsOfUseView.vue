<template>
  <Navigation />

  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Terms of Service</h1>
    <p class="text-gray-700 mb-4"><strong>Last Updated:</strong> March 16, 2025</p>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p>By accessing and using our platform, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use the platform.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">2. Service Description</h2>
      <p>Our platform allows users to create a personalized birthday website by filling out a form with their [Put all here] selection. After completing the form, users proceed to checkout, and upon successful payment, they receive a unique link via email.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">3. Registration and Security</h2>
      <p>To use our service, you must provide a valid email address. We do not share your email with third parties.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">4. Privacy</h2>
      <p>We respect your privacy. We do not use your data for any type of processing or sale to third parties. The email you provide is used solely for sending the personalized page link.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">5. User Content</h2>
      <p>You are responsible for the content you enter on the platform, including names and themes. We are not responsible for any inappropriate or unlawful content uploaded by users.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">6. Payments and Refunds</h2>
      <p>All payments are processed through Stripe. After completing the payment, users will receive a link to their personalized page via email. We do not offer refunds except in exceptional cases at our sole discretion.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">7. Service Modifications</h2>
      <p>We commit to keeping the service active and available for the agreed-upon period based on the selected plan. However, in exceptional circumstances beyond our control (such as legal, technical, or financial issues), we reserve the right to modify or discontinue the service. If discontinuation is necessary, we will make reasonable efforts to notify users in advance and provide alternative solutions where possible.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
      <p>Under no circumstances shall we be held liable for any indirect, incidental, special, or consequential damages arising from or related to the use or inability to use the platform.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">9. Changes to Terms</h2>
      <p>We may update these Terms of Service periodically. Any changes will be reflected in the “Last Updated” date at the top of this page. It is your responsibility to review these terms regularly to stay informed.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">10. Contact</h2>
      <p>If you have any questions regarding these Terms of Service, please contact us at <a href="mailto:[your email here]" class="text-blue-600 hover:underline">[your email here]</a>.</p>
    </section>
  </div>

  <Footer />
</template>

<script setup>
import Footer from '../components/shared/Footer.vue';
import Navigation from '../components/shared/Navigation.vue';
</script>
