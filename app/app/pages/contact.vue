<template>
  <div class="py-16 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl font-bold mb-6 text-black dark:text-emerald-400">
          Contact Us
        </h1>
        <p class="text-xl text-black dark:text-white">
          Have questions about CNC Portal? We're here to help.
        </p>
      </div>

      <!-- Contact Content -->
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2
              class="text-2xl font-bold mb-8 text-black dark:text-emerald-400"
            >
              Other Ways to Connect
            </h2>
            <div class="space-y-6">
              <UCard class="shadow-sm dark:bg-gray-800">
                <template #header>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-chat-bubble-left-right"
                      class="text-emerald-600 dark:text-emerald-400"
                    />
                    <h3
                      class="text-lg font-semibold text-black dark:text-emerald-400"
                    >
                      Community
                    </h3>
                  </div>
                </template>
                <p class="text-black dark:text-white">
                  Join our Discord community for real-time discussions and
                  support.
                </p>
                <div class="mt-4">
                  <UButton variant="ghost" to="https://discord.gg/zNgaZSu4x5">
                    Join Discord
                  </UButton>
                </div>
              </UCard>
              <UCard class="shadow-sm dark:bg-gray-800">
                <template #header>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-document-text"
                      class="text-emerald-600 dark:text-emerald-400"
                    />
                    <h3
                      class="text-lg font-semibold text-black dark:text-emerald-400"
                    >
                      License
                    </h3>
                  </div>
                </template>
                <p class="text-black dark:text-white">
                  We publish our code under a GPL2.0 license.
                </p>
              </UCard>
              <UCard class="shadow-sm dark:bg-gray-800">
                <template #header>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-document-text"
                      class="text-emerald-600 dark:text-emerald-400"
                    />
                    <h3
                      class="text-lg font-semibold text-black dark:text-emerald-400"
                    >
                      Documentation
                    </h3>
                  </div>
                </template>
                <p class="text-black dark:text-white">
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
            <h2
              class="text-2xl font-bold mb-8 text-black dark:text-emerald-400"
            >
              Frequently Asked Questions
            </h2>
            <UCard
              class="shadow-sm dark:bg-gray-800 divide-y dark:divide-gray-700"
            >
              <div class="py-4">
                <h3 class="font-semibold mb-2 text-black dark:text-white">
                  What is a CNC?
                </h3>
                <p class="text-black dark:text-white">
                  A Crypto Native Corporation (CNC) is a new type of
                  organization that operates primarily through blockchain
                  technology and smart contracts.
                </p>
              </div>
              <div class="py-4">
                <h3 class="font-semibold mb-2 text-black dark:text-white">
                  How do I get started?
                </h3>
                <p class="text-black dark:text-white">
                  Click the "Get Started" button to begin creating your CNC. Our
                  guided process will help you set up your organization step by
                  step.
                </p>
              </div>
              <div class="py-4">
                <h3 class="font-semibold mb-2 text-black dark:text-white">
                  Is technical knowledge required?
                </h3>
                <p class="text-black dark:text-white">
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
