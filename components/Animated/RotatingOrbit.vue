<template>
	<div class="orbit-gate" :class="{ 'is-revealed': isPastHero }" aria-hidden="true">
		<div ref="orbit" class="rotating-orbit">
			<img src="/assets/images/eclipse.svg" alt="" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const { $gsap } = useNuxtApp();
const orbit = ref<HTMLElement | null>(null);
const isPastHero = ref(false);
let animationContext: ReturnType<typeof $gsap.context> | undefined;
let animationFrame: number | undefined;
let heroElement: HTMLElement | undefined;

const updateHeroVisibility = () => {
	if (!heroElement) return;

	isPastHero.value = heroElement.getBoundingClientRect().bottom <= window.innerHeight * 0.8;
};

const resetOrbit = () => {
	animationContext?.revert();
	animationContext = undefined;
	isPastHero.value = false;

	if (orbit.value) {
		$gsap.set(orbit.value, { autoAlpha: 0, rotation: 0, x: -160 });
	}
};

const buildAnimation = () => {
	resetOrbit();

	const element = orbit.value;
	if (!element) return false;

	const home = document.querySelector<HTMLElement>(".home-page");
	const hero = home?.querySelector<HTMLElement>(".hero");

	if (!home || !hero) return false;
	heroElement = hero;
	updateHeroVisibility();

	animationContext = $gsap.context(() => {
		$gsap.to(element, {
			autoAlpha: 0.8,
			x: 0,
			ease: "none",
			scrollTrigger: {
				trigger: hero,
				start: "bottom 80%",
				end: "bottom 25%",
				scrub: 0.5,
			},
		});

		$gsap.to(element, {
			rotation: 150,
			ease: "none",
			scrollTrigger: {
				trigger: home,
				start: "top top",
				end: "bottom bottom",
				scrub: 0.5,
				invalidateOnRefresh: true,
			},
		});
	}, element);

	ScrollTrigger.refresh();
	return true;
};

const scheduleAnimation = async (attempt = 0) => {
	if (animationFrame) cancelAnimationFrame(animationFrame);

	await nextTick();
	animationFrame = requestAnimationFrame(() => {
		animationFrame = undefined;
		const wasBuilt = buildAnimation();

		if (!wasBuilt && attempt < 10) {
			scheduleAnimation(attempt + 1);
		}
	});
};

onMounted(scheduleAnimation);

onMounted(() => {
	window.addEventListener("scroll", updateHeroVisibility, { passive: true });
});

onBeforeUnmount(() => {
	if (animationFrame) cancelAnimationFrame(animationFrame);
	animationContext?.revert();
	window.removeEventListener("scroll", updateHeroVisibility);
});
</script>

<style scoped>
.orbit-gate {
	position: fixed;
	inset: 0;
	z-index: 0;
	visibility: hidden;
	pointer-events: none;
}

.orbit-gate.is-revealed {
	visibility: visible;
}

.rotating-orbit {
	position: fixed;
	top: 50%;
	left: clamp(-34rem, -28vw, -14rem);
	width: clamp(46rem, 74vw, 68rem);
	opacity: 0;
	pointer-events: none;
	transform: translateY(-50%);
}

.rotating-orbit img {
	width: 100%;
	max-width: none;
	transform-origin: 50% 50%;
	will-change: transform;
}

@media (max-width: 639px) {
	.rotating-orbit {
		display: none;
	}
}
</style>