<template>
  <div class="py-16">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl font-bold mb-6">How CNC Portal Works</h1>
        <p class="text-xl text-gray-600">
          A step-by-step guide to creating and managing your Crypto Native
          Corporation
        </p>
      </div>

      <!-- Process Steps -->
      <div class="max-w-6xl mx-auto">
        <!-- Step 1: Basic Setup -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Step 1: Basic Setup</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-document-text"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Organization Details</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Enter your organization's name, description, and basic
                information to get started.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-user-group"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Team Structure</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Define your board size and initial team members who will help
                manage the organization.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-currency-dollar"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Token Economics</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Set up your token supply and distribution model for SHER tokens.
              </p>
            </UCard>
          </div>
        </div>

        <!-- Step 2: Smart Contracts -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Step 2: Smart Contracts</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-code-bracket"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Contract Generation</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Our system automatically generates the necessary smart contracts
                based on your configuration.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-shield-check"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Security Review</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Contracts are reviewed for security and compliance with best
                practices.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-rocket-launch"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Deployment</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Deploy your contracts to the blockchain with our guided process.
              </p>
            </UCard>
          </div>
        </div>

        <!-- Step 3: Management -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Step 3: Management</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-chart-bar"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Dashboard</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Access your organization's dashboard for real-time monitoring
                and management.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check-badge"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Governance</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Manage proposals, voting, and board decisions through the
                platform.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-arrow-path"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Updates</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Easily update your organization's structure and parameters as
                needed.
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
