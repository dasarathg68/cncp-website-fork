export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "light",
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: "CNC Portal",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
