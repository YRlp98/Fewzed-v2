<template>
	<div class="text-white">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<CursorsLightEffect />
	</div>
</template>

<script lang="ts" setup>
</script>

<style>
.page-enter-active {
	transition:
		opacity 400ms var(--ease-out),
		transform 400ms var(--ease-out);
}

.page-leave-active {
	transition:
		opacity 250ms var(--ease-out),
		transform 250ms var(--ease-out);
}

.page-enter-from {
	opacity: 0;
	transform: translateY(1.5rem);
}

.page-enter-to,
.page-leave-from {
	opacity: 1;
	transform: translateY(0);
}

.page-leave-to {
	opacity: 0;
	transform: translateY(-1rem);
}
</style>