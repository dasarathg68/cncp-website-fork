<template>
  <div class="py-16">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl font-bold mb-6">CNC Use Cases</h1>
        <p class="text-xl text-gray-600">
          Discover how different users and organizations can leverage the CNC
          model
        </p>
      </div>

      <!-- Use Cases -->
      <div class="max-w-7xl mx-auto space-y-24">
        <!-- AI Service Provider -->
        <div>
          <div class="grid md:grid-cols-2 gap-8">
            <UCard>
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-cube-transparent"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">AI Service Provider</h3>
                </div>
              </template>
              <p class="text-gray-600">
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
            <UCard class="flex items-center justify-center min-h-[300px]">
              <p class="text-xl">Image</p>
            </UCard>
          </div>
        </div>

        <!-- Digital Art Collective -->
        <div>
          <div class="grid md:grid-cols-2 gap-8">
            <UCard>
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-paint-brush"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Digital Art Collective</h3>
                </div>
              </template>
              <p class="text-gray-600">
                A visual artist who wants to start an art collective with five
                of his friends. He will be the manager. Together they log into
                the CNC Portal and create their solution. They divide their
                ownership tokens 6 ways equally. As they start to produce art
                and sell it in their fronted store, revenue is generated. As per
                the rules of the smart contract, the profits are shared six ways
                after expenses including his pay as the manager.
              </p>
            </UCard>
            <UCard class="flex items-center justify-center min-h-[300px]">
              <p class="text-xl">Image</p>
            </UCard>
          </div>
        </div>

        <!-- Open Source Development -->
        <div>
          <div class="grid md:grid-cols-2 gap-8">
            <UCard>
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-globe-alt"
                    class="text-primary-500"
                  />
                  <h3 class="text-lg font-semibold">Open Source Development</h3>
                </div>
              </template>
              <p class="text-gray-600">
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
            <UCard class="flex items-center justify-center min-h-[300px]">
              <p class="text-xl">Image</p>
            </UCard>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16">
          <UButton size="lg" to="https://app.cncportal.io">
            Start Your CNC Journey
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
