<template>
	<div
		class="absolute bg-dark-primary/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
		:style="{
			opacity,
			left: `${x}px`,
			top: `${y}px`,
			width: `${size}px`,
			height: `${size}px`,
		}"
	/>
</template>

<script lang="ts" setup>
import { useMouse, useWindowSize } from "@vueuse/core";

const { x, y } = useMouse();
const { width, height } = useWindowSize();

const dx = computed(() => Math.abs(x.value - width.value / 2));
const dy = computed(() => Math.abs(y.value - height.value / 2));
const distance = computed(() => Math.sqrt(dx.value * dx.value + dy.value * dy.value));
const size = computed(() => Math.max(300 - distance.value / 3, 150));
const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.7), 1));
</script>
