<template>
  <div>
    <!-- Navigation Bar -->
    <header class="border-b border-gray-200">
      <div
        class="container mx-auto px-4 h-16 flex items-center justify-between"
      >
        <NuxtLink to="/" class="flex items-center gap-2">
          <UIcon
            name="i-heroicons-cube-transparent"
            class="text-gray-500 text-xl"
          />
          <span class="font-bold text-xl">CNC Portal</span>
        </NuxtLink>
        <nav class="flex items-center gap-4">
          <NuxtLink to="/features" class="text-gray-600 hover:text-gray-900">
            Features
          </NuxtLink>
          <NuxtLink
            to="/how-it-works"
            class="text-gray-600 hover:text-gray-900"
          >
            How it Works
          </NuxtLink>
          <NuxtLink to="/use-cases" class="text-gray-600 hover:text-gray-900">
            Use Cases
          </NuxtLink>
          <NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900">
            Contact
          </NuxtLink>
          <UButton to="/get-started">Get Started</UButton>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 mt-10">
      <div
        class="container mx-auto px-4 py-6 flex items-center justify-between"
      >
        <div class="text-sm text-gray-500">
          © 2024 CNC Portal. All rights reserved.
        </div>
        <div class="flex gap-4">
          <NuxtLink
            to="/privacy"
            class="text-sm text-gray-500 hover:text-gray-900"
          >
            Privacy Policy
          </NuxtLink>
          <NuxtLink
            to="/terms"
            class="text-sm text-gray-500 hover:text-gray-900"
          >
            Terms of Service
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
