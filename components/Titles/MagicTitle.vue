<template>
	<h1 class="font-medium text-8xl z-1">
		<span class="magic">
			<span class="magic-star">
				<svg viewBox="0 0 512 512">
					<path
						d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
					/>
				</svg>
			</span>
			<span class="magic-star">
				<svg viewBox="0 0 512 512">
					<path
						d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
					/>
				</svg>
			</span>
			<span class="magic-star">
				<svg viewBox="0 0 512 512">
					<path
						d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
					/>
				</svg>
			</span>
			<span class="magic-text">{{ text }}</span>
		</span>
	</h1>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";

const props = defineProps<{ text: string }>();

let index = 0;
const interval = 1000;

const rand = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star: HTMLElement): void => {
	star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
	star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

	// Reset the animation
	star.style.animation = "none";
	star.offsetHeight; // Trigger reflow
	star.style.animation = ""; // Re-enable animation
};

onMounted((): void => {
	const stars: HTMLCollectionOf<Element> = document.getElementsByClassName("magic-star");
	for (const star of Array.from(stars) as HTMLElement[]) {
		setTimeout(() => {
			animate(star);

			setInterval(() => animate(star), 1000);
		}, index++ * (interval / 3));
	}
});
</script>

<style scoped>
@keyframes scale {
	from,
	to {
		transform: scale(0);
	}

	50% {
		transform: scale(1);
	}
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(180deg);
	}
}

.magic {
	display: inline-block;
	position: relative;
}

.magic-star {
	--size: clamp(20px, 1.5vw, 30px);

	animation: scale 700ms ease forwards;
	display: block;
	height: var(--size);
	left: var(--star-left);
	position: absolute;
	top: var(--star-top);
	width: var(--size);
}

.magic-star > svg {
	animation: rotate 1000ms linear infinite;
	display: block;
	opacity: 0.7;
}

.magic-star > svg > path {
	fill: var(--violet);
}

.magic-text {
	animation: background-pan 3s linear infinite;
	background: linear-gradient(to right, var(--purple), var(--violet), var(--pink), var(--purple));
	background-size: 200%;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	white-space: nowrap;
}
</style>
