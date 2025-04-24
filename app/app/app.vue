<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Navigation Bar -->
    <header
      class="fixed top-0 left-0 right-0 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-transform duration-300 z-50"
      :class="{ '-translate-y-full': !showHeader }"
    >
      <div
        class="container mx-auto px-4 h-16 flex items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <NuxtImg
            :src="colorMode.value === 'dark' ? '/LogoDark.png' : '/Logo.png'"
            class="w-32"
            alt="CNC Portal Logo"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-4">
          <NuxtLink
            v-for="link in ['features', 'how-it-works', 'use-cases', 'contact']"
            :key="link"
            :to="'/' + link"
            class="nav-link text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            active-class="active"
          >
            {{
              link
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            }}
          </NuxtLink>
          <NuxtLink
            to="https://docs.google.com/document/d/10WzR-UBMJlE_2f5EPVRuKLLfoP-VgABZ/"
            class="nav-link text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Litepaper
          </NuxtLink>

          <UButton
            to="https://app.cncportal.io"
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
              active-class="active"
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
              to="https://app.cncportal.io"
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
    <main class="pt-16">
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
          © 2025 Globe & Citizen: A Crypto Native Corporation
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false);
const colorMode = useColorMode();

// Add scroll behavior logic
const showHeader = ref(true);
const lastScrollPosition = ref(0);
const scrollThreshold = 50; // Minimum scroll amount before hiding/showing

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;

  // Don't do anything if we haven't scrolled enough
  if (
    Math.abs(currentScrollPosition - lastScrollPosition.value) < scrollThreshold
  ) {
    return;
  }

  showHeader.value =
    // Show header if scrolling up or at the top
    currentScrollPosition < lastScrollPosition.value ||
    currentScrollPosition < 50;

  lastScrollPosition.value = currentScrollPosition;
};
useSeoMeta({
  title: "CNC Portal – Launch and Scale Your Crypto Native Corporation",
  ogTitle: "CNC Portal – Empowering Distributed Crypto Enterprises",
  description:
    "Spin up your Crypto Native Corporation with blockchain-powered governance, smart contracts, and tokenized ownership. Automate payments, attract contributors, and scale without giving up control.",
  ogDescription:
    "The CNC Portal enables knowledge workers and founders to create scalable, globally-owned blockchain-based corporations. Democratize governance, automate token distribution, and bootstrap your venture without VCs.",
  ogImage: "/Logo.png",
  keywords:
    "crypto native corporation, corporate, corporations, decentralized governance, smart contract platform, tokenized equity, open source incentives, blockchain corporations, DAO alternative, DeFi for startups, web3 organizations, CNC Portal, governance, smart contracts, tokenized ownership, automation, scalability, global ownership, blockchain-based corporations",
  author: "Globe & Citizen",
  robots: "index, follow",
  twitterCard: "summary_large_image",
  twitterTitle: "Build Scalable Web3 Companies with CNC Portal",
  twitterDescription:
    "Turn ideas into distributed companies using smart contracts, token-based equity, and democratic governance. CNC Portal is your gateway to founding a modern Crypto Native Corporation.",
  twitterImage: "/Logo.png",
});
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

.nav-link.active {
  color: rgb(31, 41, 55);
}

.dark .nav-link.active {
  color: rgb(229, 231, 235);
}

.nav-link.active::after {
  width: 100%;
}

/* Add smooth transition for header */
header {
  will-change: transform;
}
</style>
