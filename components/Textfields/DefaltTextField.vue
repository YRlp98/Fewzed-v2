<template>
	<input
		type="text"
		:placeholder="placeholder"
		class="w-52 bg-gray-1 rounded-lg placeholder-gray-4 text-gray-5 p-3 border-none outline-none"
	/>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
	placeholder: string;
}>();
</script>
