<template>
	<NuxtLink class="btn flex items-center shadow-lg shadow-dark-primary/50" :to="link">
		<span class="text">{{ text }}</span>
		<Icon :name="icon" class="text-base" />
	</NuxtLink>
</template>

<script setup>
const props = defineProps({
	text: {
		type: String,
		required: true,
		default: "Click Me!",
	},
	icon: {
		type: String,
		required: false,
	},
	link: {
		type: String,
		required: false,
	},
});
</script>

<style scoped>
.btn {
	position: relative;
	gap: 0.25rem;
	font-size: 0.75rem;
	color: white;
	padding: 0.375rem 0.875rem;
	cursor: pointer;
	z-index: 0;
	outline: none;
	cursor: pointer;
	position: relative;
	z-index: 0;
	border-radius: 12px;
}

.btn::after {
	content: "";
	z-index: -1;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.75;
	left: 0;
	top: 0;
	border-radius: 10px;
	border: 1px solid #8f39a9;
}
/* glow */
.btn::before {
	content: "";
	background: var(--linear-gradient);
	position: absolute;
	top: -2px;
	left: -2px;
	background-size: 600%;
	z-index: -1;
	width: calc(100% + 4px);
	height: calc(100% + 4px);
	filter: blur(8px);
	animation: glowing 20s linear infinite;
	transition: opacity 0.3s ease-in-out;
	border-radius: 10px;
	opacity: 0;
}

@keyframes glowing {
	0% {
		background-position: 0 0;
	}
	50% {
		background-position: 400% 0;
	}
	100% {
		background-position: 0 0;
	}
}

/* hover */
.btn:hover::before {
	opacity: 1;
}

.btn:active:after {
	background: transparent;
}

.btn:active {
	color: #000;
	font-weight: bold;
}
</style>
