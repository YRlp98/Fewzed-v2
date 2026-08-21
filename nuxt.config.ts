export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Enable server-side rendering
  ssr: true,

  // Global page transition
  app: {
    head: {
      title: 'Fewzed',
      htmlAttrs: {
        lang: 'en-GB',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Fewzed' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  site: {
    name: 'Fewzed',
    url: 'https://www.fewzed.co.uk',
  },

  // Site maps
  sitemap: {
    urls: [
      '/',
      '/consulting',
      '/trials',
      '/data-collection',
      '/products',
      '/contact-us',
    ],
  },

  // Global CSS
  css: [
    '~/assets/css/main.css',
  ],

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
  ],

  // Imports
  imports: {
    dirs: ['store', 'utils'],
  },
})