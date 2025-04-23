<template>
  <div class="py-16 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl font-bold mb-6 text-black dark:text-emerald-400">
          CNC Portal Features
        </h1>
        <p class="text-xl text-black dark:text-white">
          Everything you need to create and manage your Crypto Native
          Corporation
        </p>
      </div>

      <!-- Feature Categories -->
      <div class="max-w-6xl mx-auto">
        <!-- Smart Contract Management -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8 text-black dark:text-emerald-400">
            Smart Contract Management
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard
              class="shadow-sm dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-800/80 backdrop-blur"
            >
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-document-text"
                    class="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3
                    class="text-lg font-semibold text-black dark:text-emerald-400"
                  >
                    Contract Creation
                  </h3>
                </div>
              </template>
              <p class="text-black dark:text-white">
                Easily create and deploy smart contracts for employment
                agreements, profit sharing, and governance structures.
              </p>
            </UCard>

            <UCard
              class="shadow-sm dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-800/80 backdrop-blur"
            >
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-currency-dollar"
                    class="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3
                    class="text-lg font-semibold text-black dark:text-emerald-400"
                  >
                    Payment Management
                  </h3>
                </div>
              </template>
              <p class="text-black dark:text-white">
                Automate crypto payments, track distributions, and manage
                payroll tokens with built-in exchange rate handling.
              </p>
            </UCard>

            <UCard
              class="shadow-sm dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-800/80 backdrop-blur"
            >
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-chart-bar"
                    class="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3
                    class="text-lg font-semibold text-black dark:text-emerald-400"
                  >
                    Token Management
                  </h3>
                </div>
              </template>
              <p class="text-black dark:text-white">
                Issue and manage ERC20 tokens, track ownership distribution, and
                handle token transfers securely.
              </p>
            </UCard>
          </div>
        </div>

        <!-- Governance Tools -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8 text-black dark:text-emerald-400">
            Governance Tools
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard
              class="shadow-sm dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-800/80 backdrop-blur"
            >
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-user-group"
                    class="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3
                    class="text-lg font-semibold text-black dark:text-emerald-400"
                  >
                    Board Management
                  </h3>
                </div>
              </template>
              <p class="text-black dark:text-white">
                Tools for board elections, decision tracking, and implementing
                board-approved changes.
              </p>
            </UCard>

            <UCard
              class="shadow-sm dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-800/80 backdrop-blur"
            >
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-check-badge"
                    class="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3
                    class="text-lg font-semibold text-black dark:text-emerald-400"
                  >
                    Voting System
                  </h3>
                </div>
              </template>
              <p class="text-black dark:text-white">
                Secure voting mechanisms for corporate decisions, with automatic
                execution of approved proposals.
              </p>
            </UCard>

            <UCard
              class="shadow-sm dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-800/80 backdrop-blur"
            >
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-document-chart-bar"
                    class="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3
                    class="text-lg font-semibold text-black dark:text-emerald-400"
                  >
                    Reporting
                  </h3>
                </div>
              </template>
              <p class="text-black dark:text-white">
                Comprehensive reporting tools for transparency in ownership,
                voting, and financial distributions.
              </p>
            </UCard>
          </div>
        </div>

        <!-- Integration & Security -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8 text-black dark:text-emerald-400">
            3rd Party Integrations
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <UCard
              class="shadow-sm dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-800/80 backdrop-blur"
            >
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-puzzle-piece"
                    class="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3
                    class="text-lg font-semibold text-black dark:text-emerald-400"
                  >
                    Third-party Integrations
                  </h3>
                </div>
              </template>
              <p class="text-black dark:text-white">
                Connect with popular development tools, payment systems, and
                blockchain networks. Seamlessly integrate with:
              </p>
              <div
                class="bg-emerald-50 dark:bg-emerald-900/50 p-4 rounded-lg mt-4"
              >
                <ul class="list-disc pl-4 space-y-2 text-black dark:text-white">
                  <li>GitHub for code contribution tracking</li>
                  <li>Popular crypto wallets</li>
                  <li>Project management tools</li>
                </ul>
              </div>
              <UButton variant="ghost" class="mt-4">Coming Soon</UButton>
            </UCard>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center">
          <UButton
            size="lg"
            to="https://app.cncportal.io"
            class="transition-transform duration-300 hover:scale-105"
          >
            Start Building Your CNC
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
