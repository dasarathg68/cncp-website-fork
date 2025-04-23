<template>
  <div class="py-16">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
        <p class="text-xl text-gray-600">
          Have questions about CNC Portal? We're here to help.
        </p>
      </div>

      <!-- Contact Content -->
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-bold mb-8">Other Ways to Connect</h2>
            <div class="space-y-6">
              <UCard class="p-6">
                <template #header>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-chat-bubble-left-right"
                      class="text-primary-500"
                    />
                    <h3 class="text-lg font-semibold">Community</h3>
                  </div>
                </template>
                <p class="text-gray-600">
                  Join our Discord community for real-time discussions and
                  support.
                </p>
                <div class="mt-4">
                  <UButton variant="ghost" to="https://discord.gg/zNgaZSu4x5">
                    Join Discord
                  </UButton>
                </div>
              </UCard>
              <UCard class="p-6">
                <template #header>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-document-text"
                      class="text-primary-500"
                    />
                    <h3 class="text-lg font-semibold">License</h3>
                  </div>
                </template>
                <p class="text-gray-600">
                  We publish our code under a GPL2.0 license.
                </p>
                <div class="mt-4">
                  <UButton variant="ghost"> Coming Soon </UButton>
                </div>
              </UCard>
              <UCard class="p-6">
                <template #header>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-document-text"
                      class="text-primary-500"
                    />
                    <h3 class="text-lg font-semibold">Documentation</h3>
                  </div>
                </template>
                <p class="text-gray-600">
                  Check our comprehensive documentation for detailed
                  information.
                </p>
                <div class="mt-4">
                  <UButton variant="ghost"> Coming Soon </UButton>
                </div>
              </UCard>
            </div>
          </div>

          <!-- FAQ Section -->
          <div>
            <h2 class="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <UCard class="divide-y">
              <div class="py-4">
                <h3 class="font-semibold mb-2">What is a CNC?</h3>
                <p class="text-gray-600">
                  A Crypto Native Corporation (CNC) is a new type of
                  organization that operates primarily through blockchain
                  technology and smart contracts.
                </p>
              </div>
              <div class="py-4">
                <h3 class="font-semibold mb-2">How do I get started?</h3>
                <p class="text-gray-600">
                  Click the "Get Started" button to begin creating your CNC. Our
                  guided process will help you set up your organization step by
                  step.
                </p>
              </div>
              <div class="py-4">
                <h3 class="font-semibold mb-2">
                  Is technical knowledge required?
                </h3>
                <p class="text-gray-600">
                  No, our platform handles all the technical aspects. You just
                  need to understand your organization's goals and structure.
                </p>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
