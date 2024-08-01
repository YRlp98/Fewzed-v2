<template>
	<button class="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-2/50 backdrop-blur hover:scale-105">
		<Icon :name="icon" class="text-2xl" />
	</button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
	icon: string;
}>();
</script>
