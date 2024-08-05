<template>
	<div
		v-if="store.isPreloaderVisible"
		class="preloader fixed inset-0 bg-black-1 z-[99] flex items-center justify-center select-none"
	>
		<div class="text-7xl">{{ percentage }}%</div>
	</div>
</template>

<script setup lang="ts">
const percentage = ref(0);

onMounted(() => {
	const tl = gsap.timeline({
		onComplete() {
			store.isPreloaderVisible = false;
		},
	});

	tl.to(percentage, {
		value: 100,
		duration: 1,
		onUpdate() {
			percentage.value = Math.floor(percentage.value);
		},
	});

	tl.fromTo(
		".preloader",
		{
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		},
		{
			clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
			duration: 1,
			ease: "power2.inOut",
			onComplete() {
				store.isPreloaderVisible.value = false;
			},
		}
	);
});
</script>

<style scoped>
.preloader {
	pointer-events: none;
}
</style>
