// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  $production: {},
  $development: {},
  runtimeConfig: {
    public: {},
  },
  nitro: {
    firebase: {
      gen: 2,
    },
    preset: "firebase",
  },
  modules: [
    "nuxt-vuefire",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/eslint",
    "@nuxt/image",
    "nuxt-lucide-icons",
  ],
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    firestore: true,
  },
  tailwindcss: {},
  shadcn: {},
  routeRules: {
    "/announcements": {
      redirect: "/",
    },
  },
  image: {
    provider: "ipx",
    dir: "assets/images",
  },
  eslint: {
    config: {},
  },
});