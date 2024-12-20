import removeAttr from 'remove-attr'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n'], // TODO: fix language file import error
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt Landing',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Example of a landing page built with Nuxt 3',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
  },
  compatibilityDate: '2024-12-18',
  vite: {
    plugins: [
      process.env.NODE_ENV === 'production'
        ? removeAttr({
            extensions: ['vue'],
            attributes: ['data-testid'],
          })
        : undefined,
    ],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'ESNext',
        verbatimModuleSyntax: false,
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
