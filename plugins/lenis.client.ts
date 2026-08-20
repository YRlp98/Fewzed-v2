import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  if (prefersReducedMotion.matches) {
    return
  }

  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    syncTouch: false,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const updateLenis = (time: number) => {
    lenis.raf(time * 1000)
  }

  gsap.ticker.add(updateLenis)
  gsap.ticker.lagSmoothing(0)

  return {
    provide: {
      lenis,
    },
  }
})