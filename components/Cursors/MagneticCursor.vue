<template>
	<div class="magnetic-cursor" :class="{ 'is-visible': isVisible }" aria-hidden="true">
		<span v-for="index in 8" :key="index" ref="trailDots" class="magnetic-cursor__tail"
			:style="{ '--trail-index': index }" />
	</div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { onBeforeUnmount, onMounted, ref } from "vue";

const trailDots = ref<HTMLElement[]>([]);
const isVisible = ref(false);
const activeTarget = ref<HTMLElement | null>(null);

let trailFollowers: Array<{
	x: ReturnType<typeof gsap.quickTo>;
	y: ReturnType<typeof gsap.quickTo>;
}> = [];
let isEnabled = false;

const releaseTarget = () => {
	if (!activeTarget.value) return;

	gsap.to(activeTarget.value, {
		x: 0,
		y: 0,
		duration: 0.55,
		ease: "elastic.out(1, 0.45)",
		overwrite: true,
	});

	activeTarget.value = null;
};

const updateCursor = (event: PointerEvent) => {
	if (!isEnabled) return;

	if (activeTarget.value) {
		const bounds = activeTarget.value.getBoundingClientRect();
		const offsetX = event.clientX - (bounds.left + bounds.width / 2);
		const offsetY = event.clientY - (bounds.top + bounds.height / 2);
		const strength = Number(activeTarget.value.dataset.magneticStrength ?? 0.16);

		gsap.to(activeTarget.value, {
			x: offsetX * strength,
			y: offsetY * strength,
			duration: 0.32,
			ease: "power3.out",
			overwrite: true,
		});

	}

	trailFollowers.forEach((follower) => {
		follower.x(event.clientX);
		follower.y(event.clientY);
	});
	isVisible.value = true;
};

const activateTarget = (event: PointerEvent) => {
	const target = (event.target as HTMLElement).closest<HTMLElement>("[data-magnetic]");
	if (!target || target === activeTarget.value) return;

	releaseTarget();
	activeTarget.value = target;
};

const deactivateTarget = (event: PointerEvent) => {
	const target = (event.target as HTMLElement).closest<HTMLElement>("[data-magnetic]");
	const nextTarget = (event.relatedTarget as HTMLElement | null)?.closest?.("[data-magnetic]");

	if (target && target === activeTarget.value && target !== nextTarget) {
		releaseTarget();
	}
};

const hideCursor = () => {
	isVisible.value = false;
	releaseTarget();
};

onMounted(() => {
	const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
	const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

	if (!supportsFinePointer.matches || prefersReducedMotion.matches) return;

	isEnabled = true;
	trailFollowers = trailDots.value.map((dot, index) => {
		gsap.set(dot, { xPercent: -50, yPercent: -50 });

		return {
			x: gsap.quickTo(dot, "x", { duration: 0.05 + index * 0.035, ease: "power3.out" }),
			y: gsap.quickTo(dot, "y", { duration: 0.05 + index * 0.035, ease: "power3.out" }),
		};
	});

	window.addEventListener("pointermove", updateCursor, { passive: true });
	document.addEventListener("pointerover", activateTarget);
	document.addEventListener("pointerout", deactivateTarget);
	window.addEventListener("blur", hideCursor);
	document.addEventListener("mouseleave", hideCursor);
});

onBeforeUnmount(() => {
	isEnabled = false;
	window.removeEventListener("pointermove", updateCursor);
	document.removeEventListener("pointerover", activateTarget);
	document.removeEventListener("pointerout", deactivateTarget);
	window.removeEventListener("blur", hideCursor);
	document.removeEventListener("mouseleave", hideCursor);
});
</script>

<style scoped>
.magnetic-cursor {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.2s ease;
}

.magnetic-cursor.is-visible {
	opacity: 1;
}

.magnetic-cursor__tail {
	position: absolute;
	top: 0;
	left: 0;
	width: calc(0.75rem - var(--trail-index) * 0.06rem);
	height: calc(0.75rem - var(--trail-index) * 0.06rem);
	border-radius: 999px;
	background: rgb(181 91 255 / calc(0.58 - var(--trail-index) * 0.05));
	box-shadow: 0 0 0.9rem rgb(181 91 255 / 0.4);
}
</style>