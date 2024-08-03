<template>
	<div class="flex flex-col items-start">
		<label for="message" class="mb-1 ml-3 text-gray-4">{{ label }}</label>
		<textarea
			id="message"
			:placeholder="placeholder"
			class="w-full h-32 bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-2 border-none outline-none resize-none"
		></textarea>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
	label: string;
	placeholder: string;
}>();
</script>
