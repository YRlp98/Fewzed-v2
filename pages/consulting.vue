<template>
	<section ref="section" class="consulting-page relative">
		<div class="site-container grid items-start gap-16 py-32 md:grid-cols-2 md:gap-20 md:py-[20svh]">
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
			<div id="canvas" class="consulting-canvas flex justify-center">
				<canvas ref="canvas" class="consulting-scene" aria-hidden="true" tabindex="-1" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Application } from "@splinetool/runtime";

const { $gsap } = useNuxtApp();

usePageSeo({
	title: "Consulting Services",
	description:
		"Fewzed provides practical consulting support for design, engineering, highways and infrastructure projects.",
	path: "/consulting",
});

const section = ref<HTMLElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
let animationContext: ReturnType<typeof $gsap.context> | undefined;
let splineApp: Application | null = null;
let splineResizeObserver: ResizeObserver | undefined;
let isUnmounted = false;

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

	}, section.value);

	if (!canvas.value) return;

	const app = new Application(canvas.value);

	try {
		await app.load(state.spline.scene);

		if (isUnmounted) {
			app.dispose();
			return;
		}

		state.spline.app = app;
		splineApp = app;

		const resizeScene = () => {
			if (!canvas.value) return;

			const { width, height } = canvas.value.getBoundingClientRect();
			if (width > 0 && height > 0) {
				app.setSize(Math.round(width), Math.round(height));
				app.requestRender();
			}
		};

		splineResizeObserver = new ResizeObserver(resizeScene);
		splineResizeObserver.observe(canvas.value);
		resizeScene();
	} catch (error) {
		app.dispose();
		console.warn("Unable to load the consulting Spline scene.", error);
	}
});

onBeforeUnmount(() => {
	isUnmounted = true;
	animationContext?.revert();
	splineResizeObserver?.disconnect();
	splineResizeObserver = undefined;
	splineApp?.dispose();
	splineApp = null;
});
</script>

<style scoped>
canvas {
	pointer-events: none;
}

.consulting-canvas {
	width: 100%;
	min-height: clamp(22rem, 92vw, 34rem);
	align-items: center;
}

.consulting-scene {
	display: block;
	width: 100%;
	max-width: 34rem;
	aspect-ratio: 1;
}

@media (min-width: 768px) {
	.consulting-page {
		min-height: 170svh;
	}

	.consulting-canvas {
		position: sticky;
		top: 0;
		align-self: start;
		min-height: min(70svh, 42rem);
	}
}
</style>