// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:8080'
    }
  },
  ssr: false, // SPA mode for micro frontend
  nitro: {
    preset: 'static'
  },
  typescript: {
    strict: false,
    typeCheck: false
  },
  vite: {
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia']
    }
  }
})
