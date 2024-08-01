<template>
	<div class="card p-6 max-w-[180px] lg:max-w-[264px] h-[120px] lg:h-[360px]">
		<div class="gradient-overlay absolute inset-0 bg-black opacity-50 z-0"></div>
		<div class="z-10">
			<h1 class="absolute left-6 bottom-4 text-lg tracking-widest font-bold text-gray-4">{{ title }}</h1>
		</div>
		<img
			:src="currentImage"
			alt="Project Card"
			class="absolute left-0 bottom-0 z-[-1] overflow-hidden object-cover w-full h-full"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted } from "vue";
import sytemonitor from "/assets/images/road-image.jpg";
import flohtex from "/assets/images/police-image.jpg";
import fewzed from "/assets/images/writing-image.jpg";

const props = defineProps<{
	title: string;
	image: string;
}>();

const images = {
	sytemonitor,
	flohtex,
	fewzed,
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
	background: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(8px);
	border-radius: 8px;
	min-width: 264px;
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

.gradient-overlay {
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1) 100%);
}
</style>
