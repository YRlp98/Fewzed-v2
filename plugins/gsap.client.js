import { defineNuxtPlugin } from '#app'
import { gsap, ScrollTrigger, ScrollToPlugin } from '~/utils'

export default defineNuxtPlugin(async (nuxtApp) => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
        nuxtApp.provide('gsap', gsap)
    }
});