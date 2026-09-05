<template>
	<h1 class="font-bold text-7xl sm:text-8xl" :class="{ 'magic-title--active': active }" id="magic-title">
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
withDefaults(defineProps<{
	text: string;
	active?: boolean;
}>(), {
	active: true,
});
</script>

<style scoped>
@keyframes background-pan {
	from {
		background-position: 0% center;
	}

	to {
		background-position: -200% center;
	}
}

@keyframes star-appear {
	0% {
		opacity: 0;
		transform: scale(0.9);
	}

	45% {
		opacity: 0.85;
		transform: scale(1);
	}

	100% {
		opacity: 0;
		transform: scale(0.95);
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

h1 > .magic {
	display: inline-block;
	position: relative;
}

h1 > .magic > .magic-star {
	--size: clamp(20px, 1.5vw, 30px);

	animation: star-appear 700ms var(--ease-out) both paused;
	display: block;
	height: var(--size);
	opacity: 0;
	position: absolute;
	transform: scale(0.9);
	width: var(--size);
}

h1 > .magic > .magic-star:nth-child(1) {
	left: 4%;
	top: -24%;
}

h1 > .magic > .magic-star:nth-child(2) {
	left: 54%;
	top: 58%;
	animation-delay: 220ms;
}

h1 > .magic > .magic-star:nth-child(3) {
	left: 88%;
	top: -10%;
	animation-delay: 440ms;
}

h1 > .magic > .magic-star > svg {
	animation: rotate 900ms var(--ease-out) both paused;
	display: block;
	opacity: 0.7;
}

h1 > .magic > .magic-star:nth-child(2) > svg {
	animation-delay: 220ms;
}

h1 > .magic > .magic-star:nth-child(3) > svg {
	animation-delay: 440ms;
}

h1 > .magic > .magic-star > svg > path {
	fill: var(--violet);
}

h1 > .magic > .magic-text {
	animation: background-pan 3s linear both paused;
	background: linear-gradient(to right, var(--purple), var(--violet), var(--pink), var(--purple));
	background-size: 200%;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	white-space: nowrap;
}

.magic-title--active > .magic > .magic-star,
.magic-title--active > .magic > .magic-star > svg,
.magic-title--active > .magic > .magic-text {
	animation-play-state: running;
}

@media (prefers-reduced-motion: reduce) {
	h1 > .magic > .magic-star {
		display: none;
	}

	h1 > .magic > .magic-text {
		animation: none;
	}
}
</style>
