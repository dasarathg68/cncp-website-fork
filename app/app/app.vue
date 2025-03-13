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

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-4">
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

        <!-- Mobile Menu Button -->
        <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
          <UIcon
            :name="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            class="text-gray-500 w-6 h-6"
          />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden border-t border-gray-200">
        <div class="container mx-auto px-4 py-4 space-y-4">
          <NuxtLink
            to="/features"
            class="block text-gray-600 hover:text-gray-900"
            @click="isMenuOpen = false"
          >
            Features
          </NuxtLink>
          <NuxtLink
            to="/how-it-works"
            class="block text-gray-600 hover:text-gray-900"
            @click="isMenuOpen = false"
          >
            How it Works
          </NuxtLink>
          <NuxtLink
            to="/use-cases"
            class="block text-gray-600 hover:text-gray-900"
            @click="isMenuOpen = false"
          >
            Use Cases
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block text-gray-600 hover:text-gray-900"
            @click="isMenuOpen = false"
          >
            Contact
          </NuxtLink>
          <UButton to="/get-started" block @click="isMenuOpen = false">
            Get Started
          </UButton>
        </div>
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

<script setup>
const isMenuOpen = ref(false);
</script>
