<template>
	<h1 class="title-shadow text-dark-primary text-lg font-normal tracking-widest uppercase">{{ text }}</h1>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ text: string }>();
</script>

<style scoped>
.title-shadow {
	text-shadow: 0px 2px 5px;
}
</style>
