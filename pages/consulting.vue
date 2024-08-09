<template>
	<div class="relative px-12 sm:px-16 lg:px-20 h-screen flex items-center justify-center">
		<div class="flex flex-wrap items-start gap-20 md:pt-0 pb-20 md:pb-0">
			<!-- Left side -->
			<div class="text-left relative min-w-[250px] max-w-[50rem] flex-1">
				<div class="relative space-y-8 h-[300px] lg:mt-40">
					<TitlesShadowTitle id="shadow-title" text="consulting" />

					<!-- Scrolling Content -->
					<div id="content" class="max-w-[800px] text-2xl tracking-wide leading-10 space-y-20 fade">
						<p id="p1">
							We’re here to support your business and projects with expert knowledge and experience from the Highways,
							Construction, Data Collection, and Sampling industries.
						</p>

						<p id="p2">
							Our small team of experts have demonstrated their capabilities over many years as project managers,
							technical experts, innovation and technology strategists, and trial and experiment managers. We also have
							access to a wide network of specialists to supplement our capabilities.
						</p>

						<p id="p3">
							Our background is big consultancy and technology development together with a wide knowledge of highways
							operations.
						</p>

						<p id="p4" class="pb-60">
							We typically work with a blend of in person and remote delivery and even take on secondment opportunities.
							Get in touch with us today to see how we can assist you with your specialist projects and applications.
						</p>
					</div>
				</div>
			</div>

			<!-- Right side -->
			<div class="relative flex-1 mt-20 hidden md:block">
				<canvas ref="canvas" class="m-auto" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Application } from "@splinetool/runtime";

const { $gsap } = useNuxtApp();

useHead({
	title: "Fewzed - Consulting",
	meta: [{ name: "description", content: "Fewzed consulting page" }],
});

const canvas = ref<HTMLCanvasElement | null>(null);

const state = reactive({
	spline: {
		scene: "https://prod.spline.design/0v8Sna82q5BfD6Gy/scene.splinecode",
		app: null as Application | null,
		isLoaded: false,
	},
});

// Browser detection
const isFirefox = typeof InstallTrigger !== "undefined";

onMounted(() => {
	if (isFirefox) {
		document.body.classList.add("firefox");
	}
});

onMounted(async () => {
	if (canvas.value) {
		const app = new Application(canvas.value);
		await app.load(state.spline.scene);
		state.spline.app = app;
		state.spline.isLoaded = true;

		// Pin the canvas element
		$gsap.to(canvas.value, {
			scrollTrigger: {
				trigger: canvas.value,
				pin: true,
				start: "top center",
				end: "bottom center",
				scrub: true,
			},
		});

		// Animate the shadow title
		$gsap.from("#shadow-title", {
			x: -100,
			opacity: 0,
			delay: 0.5,
		});
	}
});
</script>

<style scoped>
canvas {
	pointer-events: none;
}

.fade {
	background-image: linear-gradient(transparent 10%, #fff 30%, #fff 70%, transparent 90%);
	background-clip: text;
	-webkit-background-clip: text;
	background-attachment: fixed;
}

.fade > * {
	color: transparent;
}

/* Firefox-specific adjustments */
.firefox .fade {
	background-image: none;
}

.firefox .fade > * {
	color: inherit;
}
</style>
