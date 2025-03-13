<template>
  <div class="py-16">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl font-bold mb-6">CNC Use Cases</h1>
        <p class="text-xl text-gray-600">
          Discover how different organizations can leverage the CNC model
        </p>
      </div>

      <!-- Use Cases -->
      <div class="max-w-6xl mx-auto">
        <!-- AI Service Provider -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8">AI Service Provider</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-cpu-chip" class="text-gray-500" />
                  <h3 class="text-lg font-semibold">Global Team</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Build and manage a globally distributed AI service team with
                seamless crypto payments and smart contract-based agreements.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-code-bracket"
                    class="text-gray-500"
                  />
                  <h3 class="text-lg font-semibold">Smart Contracts</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Automate employment agreements and payment distribution through
                secure smart contracts.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-currency-dollar"
                    class="text-gray-500"
                  />
                  <h3 class="text-lg font-semibold">Crypto Payments</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Process payments in cryptocurrency without banking restrictions,
                with automated exchange rate handling.
              </p>
            </UCard>
          </div>
        </div>

        <!-- Digital Art Collective -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Digital Art Collective</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-paint-brush" class="text-gray-500" />
                  <h3 class="text-lg font-semibold">Creative Collaboration</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Enable seamless collaboration between artists with transparent
                revenue sharing and digital asset management.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-currency-dollar"
                    class="text-gray-500"
                  />
                  <h3 class="text-lg font-semibold">Equal Sharing</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Implement fair profit distribution through SHER tokens and
                automated revenue sharing.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-photo" class="text-gray-500" />
                  <h3 class="text-lg font-semibold">Digital Assets</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Manage and track digital art ownership, sales, and royalties
                through blockchain technology.
              </p>
            </UCard>
          </div>
        </div>

        <!-- Open Source Project -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Open Source Development</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-code-bracket"
                    class="text-gray-500"
                  />
                  <h3 class="text-lg font-semibold">Open Source</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Transform open source projects into sustainable businesses with
                token-based incentives.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-star" class="text-gray-500" />
                  <h3 class="text-lg font-semibold">Merit-Based</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Reward contributors based on their contributions through
                automated token distribution.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-arrow-path" class="text-gray-500" />
                  <h3 class="text-lg font-semibold">Sustainable</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Create a sustainable funding model for open source development
                through token economics.
              </p>
            </UCard>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center">
          <UButton size="lg" to="/get-started">
            Start Your CNC Journey
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
