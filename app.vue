<template>
	<div class="text-white">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<CursorLightEffect />
	</div>
</template>

<script lang="ts" setup>
import "typeface-inter";
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.9s cubic-bezier(0.6, 0.05, 0.4, 1);
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	transform: translateY(-100%);
}

.page-enter-to,
.page-leave-from {
	opacity: 1;
	transform: translateY(0);
}

.page-leave-to {
	transform: translateY(100%);
}
</style>
