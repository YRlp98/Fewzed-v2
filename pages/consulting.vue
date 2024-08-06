<template>
	<div class="container text-black-1">
		<h2>Scroll down</h2>
		<h1>This will jump</h1>
	</div>
</template>

<script setup lang="ts">
// definePageMeta({
// 	layout: "custom",
// });

onMounted(() => {
	gsap.to("h1", {
		x: 100,
		scrollTrigger: {
			trigger: "h1",
			start: "top bottom",
			end: "center center",
			scrub: true,
		},
	});

	gsap.to("h1", {
		x: 200,
		scrollTrigger: {
			markers: true,
			trigger: "h1",
			start: "center center",
			end: "bottom top",
			scrub: true,
			onEnter: () => console.log("Image animation started"),
		},
	});
});
</script>

<style scoped>
h1,
h2 {
	margin-bottom: 100vh;
}
h2 {
	text-align: center;
}
</style>
