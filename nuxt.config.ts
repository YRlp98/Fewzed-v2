// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Enable server-side rendering
  ssr: true,

  // Global page transition
  app: {
    head: {
      title: 'Fewzed',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'We deliver great projects' },
        { name: 'keywords', content: 'Fewzed, projects, design, engineering, technical support, development' },
        { name: 'author', content: 'Fewzed' },
        { property: 'og:title', content: 'Fewzed' },
        { property: 'og:description', content: 'We deliver great projects' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.fewzed.co.uk' },
        { property: 'og:image', content: 'https://media.licdn.com/dms/image/C4E0BAQE40p4qe9z3zA/company-logo_200_200/0/1662882352622/fewzed_ltd_logo?e=1730937600&v=beta&t=4VZ8O9-p0DXD5EvtjmbTZvSP1FJhvV011t4FdbrgsHo' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  // Site maps
  sitemap: {
    hostname: 'https://www.fewzed.co.uk',
    routes: [
      '/',
      '/consulting',
      '/trials',
      '/data-collection',
      '/products',
      '/contact-us',
    ],
  },

   // Aliases
   alias: {
    '@': resolve(__dirname, '/'),
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
  buildModules: [
    'nuxt-gsap-module'
  ],

  // Imports
  imports: {
    dirs: ['store', 'utils'],
  },
})