<template>
	<div class="site-container">
		<div class="h-screen flex items-center justify-center">
			<div id="box1" class="size-[200px] bg-black-1 rounded-lg shadow-sm">
				<h1 class="text-white">🚕</h1>
			</div>
		</div>

		<div class="h-screen flex items-center justify-center">
			<div id="box2" class="size-[200px] bg-black-1 rounded-lg shadow-sm">
				<h1 class="text-white">🚕</h1>
			</div>
		</div>

		<div class="h-screen flex items-center justify-center">
			<div id="box2" class="size-[200px] bg-black-1 rounded-lg shadow-sm">
				<h1 class="text-white">🚕</h1>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

usePageSeo({
	title: "Test",
	description: "Fewzed test page.",
	path: "/test",
	noindex: true,
});

// definePageMeta({
// 	layout: "custom",
// });

onMounted(() => {
	$gsap.from("#box1", {
		y: 100,
		opacity: 0,
		delay: 1,
	});

	$gsap.from("#box2", {
		rotation: 360,
		y: 100,
		opacity: 0,
		scrollTrigger: {
			trigger: "#box2",
			toggleActions: "play none none reset",
			start: "start bottom",
			end: "start center",
			scrub: 1,
			markers: true,
		},
	});
});
</script>