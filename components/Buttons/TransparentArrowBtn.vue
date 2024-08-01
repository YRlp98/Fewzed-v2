<template>
	<NuxtLink :to="link" class="button cursor-pointer max-h-20 flex flex-wrap items-center justify-start space-x-2">
		<span class="text uppercase whitespace-nowrap text-base font-bold tracking-wider">{{ text }}</span>
		<img class="h-10" src="/assets/icons/ArrowToCircleIcon.svg" alt="Arrow Icon" />
	</NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
	text: string;
	link: string;
}>();
</script>

<style scoped>
.button {
	position: relative;
	transition: background-color 0.3s ease-in-out;
}

.button:hover .text {
	transform: translateX(8px);
}

.text {
	transition: transform 0.3s ease-in-out;
}
</style>
