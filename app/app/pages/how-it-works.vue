<template>
  <div class="py-16 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl font-bold mb-6 text-black dark:text-emerald-400">
          How CNC Portal Works
        </h1>
        <p class="text-xl text-black dark:text-white">
          A step-by-step guide to creating and managing your Crypto Native
          Corporation
        </p>
      </div>

      <div class="max-w-6xl mx-auto px-4">
        <div class="relative">
          <div
            class="absolute left-1/2 top-0 bottom-0 w-1 bg-emerald-200 dark:bg-emerald-800 transform -translate-x-1/2 hidden md:block"
          />
          <!-- Mobile Timeline Line -->
          <div
            class="absolute left-8 top-0 bottom-0 w-1 bg-emerald-200 dark:bg-emerald-800 transform -translate-x-1/2 md:hidden"
          />

          <div class="relative mb-16">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="w-full md:w-5/12 pl-16 md:pl-0">
                <UCard class="shadow-sm dark:bg-gray-800">
                  <template #header>
                    <h3
                      class="text-xl font-semibold text-black dark:text-emerald-400"
                    >
                      Initial Concept
                    </h3>
                  </template>
                  <p class="text-black dark:text-white mb-4">
                    A founding team or individual develops an innovative idea
                    for a distributed organization.
                  </p>
                  <div
                    class="bg-emerald-50 dark:bg-emerald-900/50 p-4 rounded-lg"
                  >
                    <ul class="space-y-2 text-black dark:text-white">
                      <li class="flex items-center">
                        <UIcon
                          name="i-heroicons-light-bulb"
                          class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2"
                        />
                        <span>Vision development</span>
                      </li>
                      <li class="flex items-center">
                        <UIcon
                          name="i-heroicons-document-text"
                          class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2"
                        />
                        <span>Initial planning</span>
                      </li>
                    </ul>
                  </div>
                </UCard>
              </div>
              <div
                class="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 dark:bg-emerald-500 border-4 border-emerald-100 dark:border-emerald-900"
              />
              <div class="hidden md:block md:w-5/12" />
            </div>
          </div>

          <div class="relative mb-16">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="hidden md:block md:w-5/12" />
              <div
                class="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 dark:bg-emerald-500 border-4 border-emerald-100 dark:border-emerald-900"
              />
              <div class="w-full md:w-5/12 pl-16 md:pl-0">
                <UCard class="shadow-sm dark:bg-gray-800">
                  <template #header>
                    <h3
                      class="text-xl font-semibold text-black dark:text-emerald-400"
                    >
                      Community Building
                    </h3>
                  </template>
                  <p class="text-black dark:text-white mb-4">
                    Gather micro investments from a distributed pool of
                    knowledge workers who believe in the vision.
                  </p>
                  <div
                    class="bg-emerald-50 dark:bg-emerald-900/50 p-4 rounded-lg"
                  >
                    <ul class="space-y-2 text-black dark:text-white">
                      <li class="flex items-center">
                        <UIcon
                          name="i-heroicons-user-group"
                          class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2"
                        />
                        <span>Community engagement</span>
                      </li>
                      <li class="flex items-center">
                        <UIcon
                          name="i-heroicons-currency-dollar"
                          class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2"
                        />
                        <span>Initial funding</span>
                      </li>
                    </ul>
                  </div>
                </UCard>
              </div>
            </div>
          </div>

          <div class="relative mb-16">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="w-full md:w-5/12 pl-16 md:pl-0">
                <UCard class="shadow-sm dark:bg-gray-800">
                  <template #header>
                    <h3
                      class="text-xl font-semibold text-black dark:text-emerald-400"
                    >
                      Organizational Structure
                    </h3>
                  </template>
                  <p class="text-black dark:text-white mb-4">
                    Establish a distributed corporate structure with clear
                    governance and operational frameworks.
                  </p>
                  <div
                    class="bg-emerald-50 dark:bg-emerald-900/50 p-4 rounded-lg"
                  >
                    <ul class="space-y-2 text-black dark:text-white">
                      <li class="flex items-center">
                        <UIcon
                          name="i-heroicons-chart-bar"
                          class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2"
                        />
                        <span>Governance model</span>
                      </li>
                      <li class="flex items-center">
                        <UIcon
                          name="i-heroicons-cog"
                          class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2"
                        />
                        <span>Operational systems</span>
                      </li>
                    </ul>
                  </div>
                </UCard>
              </div>
              <div
                class="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 dark:bg-emerald-500 border-4 border-emerald-100 dark:border-emerald-900"
              />
              <div class="hidden md:block md:w-5/12" />
            </div>
          </div>

          <div class="relative mb-16">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="hidden md:block md:w-5/12" />
              <div
                class="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 dark:bg-emerald-500 border-4 border-emerald-100 dark:border-emerald-900"
              />
              <div class="w-full md:w-5/12 pl-16 md:pl-0">
                <UCard class="shadow-sm dark:bg-gray-800">
                  <template #header>
                    <h3
                      class="text-xl font-semibold text-black dark:text-emerald-400"
                    >
                      Growth & Scale
                    </h3>
                  </template>
                  <p class="text-black dark:text-white mb-4">
                    Scale operations through pooled labor and community synergy
                    while maintaining decentralized management.
                  </p>
                  <div
                    class="bg-emerald-50 dark:bg-emerald-900/50 p-4 rounded-lg"
                  >
                    <ul class="space-y-2 text-black dark:text-white">
                      <li class="flex items-center">
                        <UIcon
                          name="i-heroicons-arrow-trending-up"
                          class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2"
                        />
                        <span>Sustainable growth</span>
                      </li>
                      <li class="flex items-center">
                        <UIcon
                          name="i-heroicons-users"
                          class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2"
                        />
                        <span>Community expansion</span>
                      </li>
                    </ul>
                  </div>
                </UCard>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="w-full md:w-5/12 pl-16 md:pl-0">
                <UCard class="shadow-sm dark:bg-gray-800">
                  <template #header>
                    <h3
                      class="text-xl font-semibold text-black dark:text-emerald-400"
                    >
                      Value Distribution
                    </h3>
                  </template>
                  <p class="text-black dark:text-white mb-4">
                    Profits and value are distributed back to the community of
                    investors and workers.
                  </p>
                  <div
                    class="bg-emerald-50 dark:bg-emerald-900/50 p-4 rounded-lg"
                  >
                    <ul class="space-y-2 text-black dark:text-white">
                      <li class="flex items-center">
                        <UIcon
                          name="i-heroicons-banknotes"
                          class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2"
                        />
                        <span>Profit sharing</span>
                      </li>
                      <li class="flex items-center">
                        <UIcon
                          name="i-heroicons-gift"
                          class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2"
                        />
                        <span>Community rewards</span>
                      </li>
                    </ul>
                  </div>
                </UCard>
              </div>
              <div
                class="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 dark:bg-emerald-500 border-4 border-emerald-100 dark:border-emerald-900"
              />
              <div class="hidden md:block md:w-5/12" />
            </div>
          </div>
        </div>

        <div class="text-center mt-16">
          <UButton
            size="lg"
            to="https://app.cncportal.io"
            class="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-3 rounded-md text-lg font-medium"
          >
            Start Your CNC Journey
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
