// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: 'Mi Portfolio',
      meta: [
        { name: 'description', content: 'Este es mi portfolio personal.' }
      ]
    }
  }
})
