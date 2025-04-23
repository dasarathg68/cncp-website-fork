<template>
  <div class="py-16">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl font-bold mb-6">Get Started with Your CNC</h1>
        <p class="text-xl text-gray-600">
          Begin your journey to create a Crypto Native Corporation
        </p>
      </div>

      <!-- Steps -->
      <div class="max-w-3xl mx-auto">
        <UCard
          class="mb-8 transition-all duration-300 hover:shadow-lg hover:bg-gray-50/80 dark:hover:bg-gray-800/80 backdrop-blur"
        >
          <USteps>
            <UStep title="Basic Information">
              <template #description>
                Tell us about your organization
              </template>
              <div class="mt-4 space-y-4">
                <UFormGroup label="Organization Name" required>
                  <UInput placeholder="Enter your organization name" />
                </UFormGroup>
                <UFormGroup label="Description">
                  <UTextarea
                    placeholder="Describe your organization's purpose"
                  />
                </UFormGroup>
                <UFormGroup label="Organization Type" required>
                  <USelect
                    :options="[
                      { label: 'AI Service Provider', value: 'ai' },
                      { label: 'Digital Art Collective', value: 'art' },
                      { label: 'Open Source Project', value: 'opensource' },
                      { label: 'Other', value: 'other' },
                    ]"
                    placeholder="Select organization type"
                  />
                </UFormGroup>
              </div>
            </UStep>

            <UStep title="Governance Structure">
              <template #description>
                Define your initial governance model
              </template>
              <div class="mt-4 space-y-4">
                <UFormGroup label="Board Size" required>
                  <UInput type="number" placeholder="Number of board members" />
                </UFormGroup>
                <UFormGroup label="Voting Structure" required>
                  <USelect
                    :options="[
                      { label: 'Token-weighted Voting', value: 'token' },
                      { label: 'One Member, One Vote', value: 'equal' },
                      { label: 'Hybrid Model', value: 'hybrid' },
                    ]"
                    placeholder="Select voting structure"
                  />
                </UFormGroup>
              </div>
            </UStep>

            <UStep title="Token Economics">
              <template #description>
                Configure your SHER token distribution
              </template>
              <div class="mt-4 space-y-4">
                <UFormGroup label="Initial Token Supply" required>
                  <UInput type="number" placeholder="Total number of tokens" />
                </UFormGroup>
                <UFormGroup label="Distribution Model" required>
                  <USelect
                    :options="[
                      { label: 'Merit-based Distribution', value: 'merit' },
                      { label: 'Equal Distribution', value: 'equal' },
                      { label: 'Custom Distribution', value: 'custom' },
                    ]"
                    placeholder="Select distribution model"
                  />
                </UFormGroup>
              </div>
            </UStep>
          </USteps>

          <div class="mt-8 flex justify-end gap-4">
            <UButton
              color="gray"
              variant="ghost"
              class="transition-transform duration-300 hover:scale-105"
            >
              Save Draft
            </UButton>
            <UButton
              color="primary"
              class="transition-transform duration-300 hover:scale-105"
            >
              Continue
            </UButton>
          </div>
        </UCard>

        <!-- Help Section -->
        <div class="mt-16">
          <h2 class="text-2xl font-bold mb-6">Need Help?</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <UCard
              class="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50/80 dark:hover:bg-gray-800/80 backdrop-blur"
            >
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-book-open"
                    class="text-primary-500 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 class="text-lg font-semibold">Documentation</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Read our comprehensive guides and documentation to learn more
                about CNCs.
              </p>
              <template #footer>
                <UButton
                  color="primary"
                  variant="ghost"
                  to="/docs"
                  class="w-full transition-transform duration-300 hover:scale-105"
                >
                  View Documentation
                </UButton>
              </template>
            </UCard>

            <UCard
              class="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50/80 dark:hover:bg-gray-800/80 backdrop-blur"
            >
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-chat-bubble-left-right"
                    class="text-primary-500 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 class="text-lg font-semibold">Contact Support</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Get in touch with our team for personalized assistance with your
                CNC setup.
              </p>
              <template #footer>
                <UButton
                  color="primary"
                  variant="ghost"
                  to="/support"
                  class="w-full transition-transform duration-300 hover:scale-105"
                >
                  Contact Support
                </UButton>
              </template>
            </UCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Add any necessary component logic here
</script>
