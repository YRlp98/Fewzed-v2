<template>
	<div class="flex flex-col items-start">
		<label for="placeholder" class="mb-1 ml-3 text-gray-4">{{ label }}</label>
		<input
			type="text"
			:id="label"
			:placeholder="placeholder"
			class="w-full bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-2 border-none outline-none"
		/>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
	label: string;
	placeholder: string;
}>();
</script>
