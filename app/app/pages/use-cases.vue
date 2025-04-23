<template>
  <div class="py-24 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-24">
        <h1
          class="text-5xl font-bold mb-8 text-black dark:text-emerald-400 tracking-tight"
        >
          CNC Use Cases
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover how different users and organizations can leverage the CNC
          model
        </p>
      </div>

      <!-- Use Cases -->
      <div class="max-w-7xl mx-auto space-y-32">
        <!-- AI Service Provider -->
        <div class="group">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <UCard
              class="shadow-lg dark:bg-gray-800/80 backdrop-blur transition-transform duration-300 group-hover:scale-[1.02]"
            >
              <template #header>
                <div class="flex items-center gap-3 mb-2">
                  <UIcon
                    name="i-heroicons-cube-transparent"
                    class="text-emerald-600 dark:text-emerald-400 w-6 h-6"
                  />
                  <h3
                    class="text-xl font-semibold text-black dark:text-emerald-400"
                  >
                    AI Service Provider
                  </h3>
                </div>
              </template>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                An entrepreneur would like to build an online service powered by
                AI. However, none of his best employees have access to a
                computer but not a robust banking system that can be trusted. He
                logs into the CNC Portal and initiates the creation of a smart
                contract between him and his employee. He inputs the employee's
                wallet address and sets the appropriate agreement. Once every
                cycle, the employee receives a token in their wallet and the CNC
                Portal tracks all payments. He could, if he wanted, distribute
                ownership but for now he decides to retain exclusive ownership.
              </p>
            </UCard>
            <div
              class="h-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
            >
              <NuxtImg
                src="/AIServiceProvider.png"
                alt="AI Service Provider Use Case"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Digital Art Collective -->
        <div class="group">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div
              class="h-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02] md:order-2"
            >
              <NuxtImg
                src="/ArtistCollective.png"
                alt="Digital Art Collective Use Case"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <UCard
              class="shadow-lg dark:bg-gray-800/80 backdrop-blur transition-transform duration-300 group-hover:scale-[1.02] md:order-1"
            >
              <template #header>
                <div class="flex items-center gap-3 mb-2">
                  <UIcon
                    name="i-heroicons-paint-brush"
                    class="text-emerald-600 dark:text-emerald-400 w-6 h-6"
                  />
                  <h3
                    class="text-xl font-semibold text-black dark:text-emerald-400"
                  >
                    Digital Art Collective
                  </h3>
                </div>
              </template>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                A visual artist who wants to start an art collective with five
                of his friends. He will be the manager. Together they log into
                the CNC Portal and create their solution. They divide their
                ownership tokens 6 ways equally. As they start to produce art
                and sell it in their fronted store, revenue is generated. As per
                the rules of the smart contract, the profits are shared six ways
                after expenses including his pay as the manager.
              </p>
            </UCard>
          </div>
        </div>

        <!-- Open Source Development -->
        <div class="group">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <UCard
              class="shadow-lg dark:bg-gray-800/80 backdrop-blur transition-transform duration-300 group-hover:scale-[1.02]"
            >
              <template #header>
                <div class="flex items-center gap-3 mb-2">
                  <UIcon
                    name="i-heroicons-globe-alt"
                    class="text-emerald-600 dark:text-emerald-400 w-6 h-6"
                  />
                  <h3
                    class="text-xl font-semibold text-black dark:text-emerald-400"
                  >
                    Open Source Development
                  </h3>
                </div>
              </template>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                A digital nomad is working on an open-source project with 32
                other contributors. A GitHub action is configured so that every
                successful merge request is paid out using ownership tokens and
                only holders of ownership tokens can approve merge requests.
                After 18 months of hard work, revenue has generated and the
                ownership tokens are organized in a way that reflects that those
                who contributed the most are rewarded the most tokens. As
                revenue is generated, profits are paid proportionally.
              </p>
            </UCard>
            <div
              class="h-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
            >
              <NuxtImg
                src="/OSContributor.png"
                alt="Open Source Development Use Case"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-32">
          <UButton
            size="lg"
            to="https://app.cncportal.io"
            class="transition-transform duration-300 hover:scale-105"
          >
            Start Your CNC Journey
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
