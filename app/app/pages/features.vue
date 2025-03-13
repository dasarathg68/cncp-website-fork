<template>
  <div class="py-16">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl font-bold mb-6">CNC Portal Features</h1>
        <p class="text-xl text-gray-600">
          Everything you need to create and manage your Crypto Native
          Corporation
        </p>
      </div>

      <!-- Feature Categories -->
      <div class="max-w-6xl mx-auto">
        <!-- Smart Contract Management -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Smart Contract Management</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-document-text"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Contract Creation</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Easily create and deploy smart contracts for employment
                agreements, profit sharing, and governance structures.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-currency-dollar"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Payment Management</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Automate crypto payments, track distributions, and manage
                payroll tokens with built-in exchange rate handling.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-chart-bar"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Token Management</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Issue and manage SHER tokens, track ownership distribution, and
                handle token transfers securely.
              </p>
            </UCard>
          </div>
        </div>

        <!-- Governance Tools -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Governance Tools</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-user-group"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Board Management</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Tools for board elections, decision tracking, and implementing
                board-approved changes.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check-badge"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Voting System</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Secure voting mechanisms for corporate decisions, with automatic
                execution of approved proposals.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-document-chart-bar"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Reporting</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Comprehensive reporting tools for transparency in ownership,
                voting, and financial distributions.
              </p>
            </UCard>
          </div>
        </div>

        <!-- Collaboration Features -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Collaboration Features</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-users" class="text-primary-500" />
                  <h3 class="text-lg font-semibold">Team Management</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Tools for organizing distributed teams, tracking contributions,
                and managing permissions.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-presentation-chart-line"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Project Tracking</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Integrated project management tools with automatic token
                distribution based on contributions.
              </p>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-chat-bubble-left-right"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Communication</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Built-in communication tools for team coordination and corporate
                announcements.
              </p>
            </UCard>
          </div>
        </div>

        <!-- Integration & Security -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Integration & Security</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-puzzle-piece"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">
                    Third-party Integrations
                  </h3>
                </div>
              </template>
              <p class="text-gray-600">
                Connect with popular development tools, payment systems, and
                blockchain networks. Seamlessly integrate with:
              </p>
              <ul class="list-disc pl-4 mt-4 space-y-2 text-gray-600">
                <li>GitHub for code contribution tracking</li>
                <li>Popular crypto wallets</li>
                <li>Project management tools</li>
              </ul>
            </UCard>

            <UCard class="p-6">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-shield-check"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Security Features</h3>
                </div>
              </template>
              <p class="text-gray-600">
                Enterprise-grade security to protect your organization:
              </p>
              <ul class="list-disc pl-4 mt-4 space-y-2 text-gray-600">
                <li>Multi-signature transactions</li>
                <li>Role-based access control</li>
                <li>Audit logging and compliance tools</li>
              </ul>
            </UCard>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center">
          <UButton color="primary" size="lg" to="/get-started">
            Start Building Your CNC
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
