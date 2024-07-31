<template>
	<div class="card p-6">
		<!-- Content -->
		<div class="z-10">
			<div class="mt-14 flex flex-row justify-start items-center space-x-2 text-white">
				<Icon :name="icon" class="text-2xl" />
				<h1 class="text-lg tracking-widest">{{ title }}</h1>
			</div>
			<p class="mt-6 text-gray-4 text-base tracking-wide leading-7">
				{{ description }}
			</p>
		</div>
		<img :src="currentImage" alt="Service Card" class="absolute right-0 bottom-0 z-[-1] overflow-hidden opacity-30" />
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted } from "vue";
import card1 from "/assets/images/3D/computer-img.png";
import card2 from "/assets/images/3D/traffic-img.png";
import card3 from "/assets/images/3D/trials-img.png";
import card4 from "/assets/images/3D/bulb-front-color-img.png";
import card5 from "/assets/images/3D/dollar-front-color-img.png";
import card6 from "/assets/images/3D/develop-img.png";

const props = defineProps<{
	title: string;
	icon: string;
	description: string;
	image: string;
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

onMounted(() => {
	const updateCursor = ({ x, y }) => {
		document.documentElement.style.setProperty("--x", x);
		document.documentElement.style.setProperty("--y", y);
	};

	document.body.addEventListener("pointermove", updateCursor);
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
	transition: background 0.1s;
	overflow: hidden;
	cursor: pointer;
}

.card:hover {
	--active: 1;
}

.card:after {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: 8px;
	background: radial-gradient(
		circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
		hsl(0 0% 100% / 0.15),
		transparent 15vmin
	);
	background-attachment: fixed;
	opacity: var(--active, 0);
	transition: opacity 0.2s;
	pointer-events: none;
}

.card:before {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: 8px;
	background: radial-gradient(
			circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
			hsl(0 0% 100% / 0.5),
			transparent 15vmin
		),
		transparent;
	background-attachment: fixed;
	pointer-events: none;
	mask: linear-gradient(white, white) 50% 0 / 100% 4px no-repeat,
		linear-gradient(white, white) 50% 100% / 100% 4px no-repeat,
		linear-gradient(white, white) 0 50% / 4px 100% no-repeat,
		linear-gradient(white, white) 100% 50% / 4px 100% no-repeat;
}

/* span {
	position: absolute;
	bottom: 0.65rem;
	right: 0.65rem;
	font-weight: bold;
	font-size: 2rem;
	color: hsl(0 0% 100%);
} */
</style>
