<template>
	<NuxtLink
		class="btn relative flex items-center justify-center p-2 rounded-[12px] bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg shadow-purple-500/50 cursor-pointer"
		:to="link || '#'"
	>
		<span class="text text-white mr-2">{{ text }}</span>
		<Icon :name="icon" class="text-base text-white" v-if="icon" />
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
		default: "#",
	},
});
</script>

<style scoped>
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
