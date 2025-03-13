<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Navigation Bar -->
    <header class="border-b border-gray-200 dark:border-gray-800">
      <div
        class="container mx-auto px-4 h-16 flex items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <NuxtImg src="/Logo.png" class="w-40" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-4">
          <NuxtLink
            v-for="link in ['features', 'how-it-works', 'use-cases', 'contact']"
            :key="link"
            :to="'/' + link"
            class="nav-link text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {{
              link
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            }}
          </NuxtLink>

          <UButton
            to="/get-started"
            class="transition-transform hover:scale-105"
            >Get Started</UButton
          >
          <UButton
            :icon="
              colorMode.value === 'dark'
                ? 'i-heroicons-moon'
                : 'i-heroicons-sun'
            "
            color="gray"
            variant="ghost"
            aria-label="Toggle color mode"
            class="transition-transform hover:scale-105"
            @click="
              colorMode.preference =
                colorMode.value === 'dark' ? 'light' : 'dark'
            "
          />
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden transition-transform active:scale-95"
          @click="isMenuOpen = !isMenuOpen"
        >
          <UIcon
            :name="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            class="text-gray-500 dark:text-gray-400 w-6 h-6"
          />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="menu">
        <div
          v-if="isMenuOpen"
          class="md:hidden border-t border-gray-200 dark:border-gray-800"
        >
          <div class="container mx-auto px-4 py-4 space-y-4">
            <NuxtLink
              v-for="link in [
                'features',
                'how-it-works',
                'use-cases',
                'contact',
              ]"
              :key="link"
              :to="'/' + link"
              class="nav-link block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              @click="isMenuOpen = false"
            >
              {{
                link
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
              }}
            </NuxtLink>

            <UButton
              to="/get-started"
              block
              class="transition-transform hover:scale-105"
              @click="isMenuOpen = false"
            >
              Get Started
            </UButton>
            <UButton
              :icon="
                colorMode.value === 'dark'
                  ? 'i-heroicons-moon'
                  : 'i-heroicons-sun'
              "
              color="gray"
              variant="ghost"
              block
              aria-label="Toggle color mode"
              class="transition-transform hover:scale-105"
              @click="
                colorMode.preference =
                  colorMode.value === 'dark' ? 'light' : 'dark'
              "
            />
          </div>
        </div>
      </Transition>
    </header>

    <!-- Main Content -->
    <main>
      <Transition name="page" mode="out-in">
        <NuxtPage />
      </Transition>
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800 mt-10">
      <div
        class="container mx-auto px-4 py-6 flex items-center justify-between"
      >
        <div class="text-sm text-gray-500 dark:text-gray-400">
          © 2024 CNC Portal. All rights reserved.
        </div>
        <div class="flex gap-4">
          <NuxtLink
            v-for="link in ['privacy', 'terms']"
            :key="link"
            :to="'/' + link"
            class="nav-link text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {{ link.charAt(0).toUpperCase() + link.slice(1) }}
            {{ link === "privacy" ? "Policy" : "of Service" }}
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false);
const colorMode = useColorMode();
</script>

<style>
/* Fade animation for page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Slide animation for mobile menu */
.menu-enter-active,
.menu-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.menu-enter-from,
.menu-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Hover animations for navigation links */
.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
