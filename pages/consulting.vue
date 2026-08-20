<template>
	<section ref="section" class="consulting-page relative px-12 sm:px-16 lg:px-20">
		<div class="mx-auto grid max-w-[90rem] items-start gap-16 py-32 md:grid-cols-2 md:gap-20 md:py-[20svh]">
			<!-- Left side -->
			<div class="text-left">
				<div class="relative space-y-8">
					<TitlesShadowTitle id="shadow-title" text="consulting" />

					<!-- Scrolling Content -->
					<div id="content" class="max-w-[800px] text-2xl tracking-wide leading-10 space-y-20">
						<p id="p1">
							We’re here to support your business and projects with expert knowledge and experience from
							the Highways,
							Construction, Data Collection, and Sampling industries.
						</p>

						<p id="p2">
							Our small team of experts have demonstrated their capabilities over many years as project
							managers,
							technical experts, innovation and technology strategists, and trial and experiment managers.
							We also have
							access to a wide network of specialists to supplement our capabilities.
						</p>

						<p id="p3">
							Our background is big consultancy and technology development together with a wide knowledge
							of highways
							operations.
						</p>

						<p id="p4">
							We typically work with a blend of in person and remote delivery and even take on secondment
							opportunities.
							Get in touch with us today to see how we can assist you with your specialist projects and
							applications.
						</p>
					</div>
				</div>
			</div>

			<!-- Right side -->
			<div ref="canvasPanel" id="canvas" class="consulting-canvas hidden justify-center md:flex">
				<canvas ref="canvas" class="aspect-square w-full max-w-[34rem]" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Application } from "@splinetool/runtime";

const { $gsap, $scrollTrigger } = useNuxtApp();

useHead({
	title: "Fewzed - Consulting",
	meta: [{ name: "description", content: "Fewzed consulting page" }],
});

const section = ref<HTMLElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const canvasPanel = ref<HTMLElement | null>(null);
let animationContext: ReturnType<typeof $gsap.context> | undefined;

const state = reactive({
	spline: {
		scene: "https://prod.spline.design/0v8Sna82q5BfD6Gy/scene.splinecode",
		app: null as Application | null,
	},
});

onMounted(async () => {
	if (!section.value) return;

	animationContext = $gsap.context(() => {
		$gsap.from("#shadow-title", {
			x: -80,
			opacity: 0,
			duration: 0.7,
			ease: "power3.out",
		});

		$gsap.from("#content", {
			y: 48,
			opacity: 0,
			delay: 0.15,
			duration: 0.8,
			ease: "power3.out",
		});

		const media = $gsap.matchMedia();
		media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
			if (!canvasPanel.value || !section.value) return;

			const stickyCanvas = $scrollTrigger.create({
				trigger: section.value,
				start: "top top",
				end: "bottom bottom",
				pin: canvasPanel.value,
				pinSpacing: false,
				anticipatePin: 1,
				invalidateOnRefresh: true,
			});

			return () => stickyCanvas.kill();
		});

		return () => media.revert();
	}, section.value);

	if (!canvas.value) return;

	const app = new Application(canvas.value);
	await app.load(state.spline.scene);
	state.spline.app = app;
	$scrollTrigger.refresh();
});

onBeforeUnmount(() => {
	animationContext?.revert();
});
</script>

<style scoped>
canvas {
	pointer-events: none;
}

@media (min-width: 768px) {
	.consulting-page {
		min-height: 170svh;
	}

	.consulting-canvas {
		min-height: min(70svh, 42rem);
	}
}
</style>