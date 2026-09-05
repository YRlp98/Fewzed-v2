<template>
	<div v-if="store.isPreloaderVisible" ref="preloader"
		class="preloader fixed inset-0 bg-black-1 z-[99] flex items-center justify-center select-none">
		<svg id="demo" xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 100 100">
			<defs>
				<clipPath id="theClipPath">
					<rect id="theSquare" x="0" y="50" width="100" height="0" fill="red" />
				</clipPath>
			</defs>
			<line id="target1" x1="0" y1="50" x2="0" y2="50" stroke-width="1" stroke="#fff" />
			<line id="target2" x1="0" y1="50" x2="0" y2="50" stroke-width="1" stroke="#fff" />
			<g id="clipPathReveal" clip-path="url(#theClipPath)">
				<text transform="translate(50 55)" text-anchor="middle" font-size="18" fill="#fff">FEWZED</text>
			</g>
		</svg>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch, type WatchStopHandle } from "vue";
import { store } from "~/store";

const { $gsap, $lenis } = useNuxtApp();
const preloader = ref<HTMLElement | null>(null);
let stopVisibilityWatch: WatchStopHandle | undefined;
let loaderContext: ReturnType<typeof $gsap.context> | undefined;

const setScrollLock = (isLocked: boolean) => {
	document.documentElement.classList.toggle("preloader-active", isLocked);
	document.body.classList.toggle("preloader-active", isLocked);

	if (isLocked) {
		$lenis?.stop();
		return;
	}

	$lenis?.start();
};

onMounted(() => {
	stopVisibilityWatch = watch(
		() => store.isPreloaderVisible,
		setScrollLock,
		{ immediate: true },
	);

	if (!preloader.value) return;

	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const motionDuration = reduceMotion ? 0.01 : undefined;

	loaderContext = $gsap.context(() => {
		const tl = $gsap.timeline({
			defaults: {
				duration: motionDuration ?? 0.4,
				ease: "power3.out",
			},
			onComplete() {
				store.isPreloaderVisible = false;
			},
		});

		$gsap.set("#target1", { rotation: 45, svgOrigin: "50 50" });
		$gsap.set("#target2", { rotation: 135, svgOrigin: "50 50" });
		tl.to("line", { attr: { x2: 100 } });
		tl.to("#target1", { rotation: 0 }, "turn");
		tl.to("#target2", { rotation: 180 }, "turn");
		tl.to("#target1", { y: -10 }, "move");
		tl.to("#target2", { y: 10 }, "move");
		tl.to("#theSquare", { attr: { height: 22, y: 38 } }, "move");
		tl.to("line", { attr: { x1: 50, x2: 50 } });
		tl.to("text", { duration: reduceMotion ? 0.01 : 0.55, opacity: 0, ease: "none" });
		tl.to(preloader.value, {
			autoAlpha: 0,
			duration: reduceMotion ? 0.2 : 0.4,
			ease: "power3.out",
		}, reduceMotion ? ">" : "+=0.1");
	}, preloader.value);
});

onBeforeUnmount(() => {
	stopVisibilityWatch?.();
	loaderContext?.revert();
	setScrollLock(false);
});
</script>

<style scoped>
.preloader {
	background: #000;
	overflow: hidden;
	touch-action: none;
	z-index: 99;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

:global(html.preloader-active),
:global(body.preloader-active) {
	overflow: hidden !important;
	overscroll-behavior: none;
}

#demo {
	max-height: 20%;
	max-width: 20%;
	font-weight: 700;
}
</style>