<template>
	<!-- Hover inspired by prashantj510's Uiverse card variation (MIT). -->
	<div
		class="project-card group relative h-[120px] w-full min-w-[264px] max-w-none rounded-lg bg-gradient-to-br from-dark-primary to-[#673ab7] transition-shadow duration-300 ease-out hover:shadow-[0_0_30px_rgba(169,81,196,0.45)] min-[720px]:h-[180px] lg:h-[360px] lg:w-auto lg:max-w-[264px]">
		<div
			class="card-surface absolute inset-0 overflow-hidden rounded-lg p-6 transition-transform duration-300 ease-out group-hover:scale-[0.98]">
			<div class="gradient-overlay absolute inset-0 z-0 bg-black opacity-50"></div>
			<div class="z-10">
				<h1
					class="absolute left-6 bottom-4 text-lg tracking-widest font-bold text-gray-4 transition-colors duration-300 group-hover:text-white">
					{{ title }}</h1>
			</div>
			<img :src="currentImage" alt="Project Card"
				class="absolute left-0 bottom-0 z-[-1] h-full w-full overflow-hidden object-cover" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import sytemonitor from "/assets/images/road-image.jpg";
import flohtex from "/assets/images/police-image.jpg";
import fewzed from "/assets/images/writing-image.jpg";

const images = {
	sytemonitor,
	flohtex,
	fewzed,
} as const;

type ProjectImage = keyof typeof images;

const props = defineProps<{
	title: string;
	image: ProjectImage;
}>();

const currentImage = computed(() => images[props.image]);
</script>

<style scoped>
.card-surface {
	background: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(8px);
	overflow: hidden;
	cursor: pointer;
}

.gradient-overlay {
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1) 100%);
}
</style>