<template>
	<div ref="card"
		class="card group w-full min-h-[72px] overflow-hidden rounded-lg p-3 transition-[background] duration-100 min-[720px]:aspect-[4/3] min-[720px]:min-h-0 min-[720px]:p-4 min-[1280px]:p-6"
		@pointerenter="updateSpotlight">
		<div class="card-content relative z-[2]">
			<div
				class="flex items-center gap-3 text-white min-[720px]:mt-10 min-[720px]:flex-col min-[720px]:items-start min-[720px]:gap-2">
				<Icon :name="icon" class="shrink-0 text-2xl" />
				<h1 class="text-lg font-bold tracking-widest">{{ title }}</h1>
			</div>
			<p class="mt-6 hidden text-base leading-7 tracking-wide text-gray-4 min-[1280px]:block">
				{{ description }}
			</p>
		</div>
		<img :src="currentImage" alt=""
			class="absolute right-0 bottom-0 z-0 hidden h-[78%] w-[78%] origin-bottom-right object-contain opacity-30 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] min-[720px]:block group-hover:scale-[1.16] group-hover:opacity-[.48]" />
	</div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import card1 from "~/assets/images/3D/computer-img.png";
import card2 from "~/assets/images/3D/traffic-img.png";
import card3 from "~/assets/images/3D/trials-img.png";
import card4 from "~/assets/images/3D/bulb-front-color-img.png";
import card5 from "~/assets/images/3D/dollar-front-color-img.png";
import card6 from "~/assets/images/3D/develop-img.png";

const props = defineProps<{
	title: string;
	icon: string;
	description: string;
	image: keyof typeof images;
}>();

const images = {
	card1,
	card2,
	card3,
	card4,
	card5,
	card6,
};

const currentImage = computed(() => images[props.image]);
const card = ref<HTMLElement | null>(null);

const updateSpotlight = (event: PointerEvent) => {
	const element = card.value;
	if (!element) return;

	const bounds = element.getBoundingClientRect();
	const x = event.clientX - bounds.left;
	const y = event.clientY - bounds.top;
	const closestX = Math.min(Math.max(event.clientX, bounds.left), bounds.right);
	const closestY = Math.min(Math.max(event.clientY, bounds.top), bounds.bottom);
	const distance = Math.hypot(event.clientX - closestX, event.clientY - closestY);
	const spotlightRadius = Math.min(window.innerWidth, window.innerHeight) * 0.15;

	element.style.setProperty("--x", `${x}px`);
	element.style.setProperty("--y", `${y}px`);
	element.style.setProperty("--active", distance <= spotlightRadius ? "1" : "0");
};

onMounted(() => {
	document.body.addEventListener("pointermove", updateSpotlight);
});

onBeforeUnmount(() => {
	document.body.removeEventListener("pointermove", updateSpotlight);
});
</script>

<style scoped>
.card {
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(8px);
	position: relative;
	isolation: isolate;
	cursor: pointer;

	--x: 0px;
	--y: 0px;
	--active: 0;
}

.card:after {
	content: "";
	position: absolute;
	inset: 0;
	z-index: 1;
	border-radius: inherit;
	background: radial-gradient(circle at var(--x) var(--y),
			hsl(273 86% 70% / 0.22),
			transparent 15vmin);
	opacity: var(--active, 0);
	transition: opacity 0.2s ease;
	pointer-events: none;
}

.card:before {
	content: "";
	position: absolute;
	inset: 0;
	z-index: 3;
	border-radius: inherit;
	padding: 1.5px;
	background: radial-gradient(circle at var(--x) var(--y),
			hsl(273 92% 78% / 0.85),
			transparent 15vmin);
	-webkit-mask:
		linear-gradient(#fff 0 0) content-box,
		linear-gradient(#fff 0 0);
	mask:
		linear-gradient(#fff 0 0) content-box,
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
	opacity: var(--active, 0);
	transition: opacity 0.2s ease;
	pointer-events: none;
}
</style>