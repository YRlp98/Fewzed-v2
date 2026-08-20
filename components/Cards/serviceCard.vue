<template>
	<div
		ref="card"
		class="card p-6"
		@pointerenter="updateSpotlight"
	>
		<!-- Content -->
		<div class="card-content">
			<div class="mt-14 flex flex-col justify-start items-start gap-2 text-white">
				<Icon :name="icon" class="text-2xl" />
				<h1 class="text-lg tracking-widest font-bold">{{ title }}</h1>
			</div>
			<p class="mt-6 text-gray-4 text-base tracking-wide leading-7">
				{{ description }}
			</p>
		</div>
		<img :src="currentImage" alt="" class="card-image" />
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
	border-radius: 8px;
	max-width: 400px;
	aspect-ratio: 4 / 3;
	position: relative;
	isolation: isolate;
	transition: background 0.1s;
	overflow: hidden;
	cursor: pointer;

	--x: 0px;
	--y: 0px;
	--active: 0;
}

.card-content {
	position: relative;
	z-index: 2;
}

.card-image {
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: 0;
	width: 78%;
	height: 78%;
	object-fit: contain;
	opacity: 0.3;
	transform-origin: right bottom;
	transition:
		transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
		opacity 0.45s ease;
}

.card:hover .card-image {
	opacity: 0.48;
	transform: scale(1.16);
}

.card:after {
	content: "";
	position: absolute;
	inset: 0;
	z-index: 1;
	border-radius: inherit;
	background: radial-gradient(
		circle at var(--x) var(--y),
		hsl(273 86% 70% / 0.22),
		transparent 15vmin
	);
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
	background: radial-gradient(
		circle at var(--x) var(--y),
		hsl(273 92% 78% / 0.85),
		transparent 15vmin
	);
	-webkit-mask:
		linear-gradient(#fff 0 0) content-box,
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
	opacity: var(--active, 0);
	transition: opacity 0.2s ease;
	pointer-events: none;
}
</style>
