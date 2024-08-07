<template>
	<div class="relative px-12 sm:px-16 lg:px-20 h-screen flex items-center justify-center overflow-y-auto">
		<div class="flex flex-wrap items-start gap-20 md:pt-0 pb-20 md:pb-0">
			<!-- Left side -->
			<div class="text-left relative min-w-[250px] max-w-[50rem] flex-1">
				<div class="relative space-y-8 h-[500px] mt-12">
					<TitlesShadowTitle text="consulting" />

					<!-- Scrolling Content -->
					<div class="max-w-[800px]">
						<p class="text-2xl tracking-wide leading-10 pb-12">
							We’re here to support your business and projects with expert knowledge and experience from the Highways,
							Construction, Data Collection and Sampling industries. 

							<br class="mt-16" />
							Our small team of experts have demonstrated their capabilities over many years as project managers,
							technical experts, innovation and technology strategists and trial and experiment managers

							<br class="mt-16" />
							We also have access to a wide network of specialists to supplement our capabilities. Our background is big
							consultancy and technology development together with a wide knowledge of highways operations.

							<br class="mt-16" />
							We typically work with a blend of in person and remote delivery and even take on secondment opportunities.

							<br class="mt-16" />
							Get in touch with us  today to see how we can assist you with your specialist projects and applications.
						</p>
					</div>
				</div>
			</div>

			<!-- Right side -->
			<div class="relative flex-1 mt-20">
				<canvas ref="canvas" class="m-auto" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Application } from "@splinetool/runtime";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const canvas = ref<HTMLCanvasElement | null>(null);

const state = reactive({
	spline: {
		scene: "https://prod.spline.design/0v8Sna82q5BfD6Gy/scene.splinecode",
		app: null as Application | null,
		isLoaded: false,
	},
});

onMounted(async () => {
	if (canvas.value) {
		const app = new Application(canvas.value);
		await app.load(state.spline.scene);
		state.spline.app = app;
		state.spline.isLoaded = true;

		// Pin the canvas element
		gsap.to(canvas.value, {
			scrollTrigger: {
				trigger: canvas.value,
				pin: true,
				start: "top center",
				end: "bottom center",
				scrub: true,
			},
		});
	}
});
</script>

<style scoped>
canvas {
	pointer-events: none;
}
</style>
