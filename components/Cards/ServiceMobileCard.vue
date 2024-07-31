<template>
	<div class="card p-3">
		<!-- Content -->
		<div class="">
			<div class="flex flex-row justify-start items-center space-x-3 text-white">
				<Icon :name="icon" class="text-2xl" />
				<h1 class="text-lg tracking-widest">{{ title }}</h1>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted } from "vue";

const props = defineProps<{
	title: string;
	icon: string;
}>();

onMounted(() => {
	const updateCursor = ({ x, y }) => {
		document.documentElement.style.setProperty("--x", x);
		document.documentElement.style.setProperty("--y", y);
	};

	document.body.addEventListener("pointermove", updateCursor);
});
</script>

<style scoped>
.card {
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(8px);
	border-radius: 8px;
	width: 100%;
	max-height: 72px;
	/* aspect-ratio: 4 / 3; */
	position: relative;
	transition: background 0.1s;
	overflow: hidden;
	cursor: pointer;
}

.card:hover {
	--active: 1;
}

.card:after {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: 8px;
	background: radial-gradient(
		circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
		hsl(0 0% 100% / 0.15),
		transparent 15vmin
	);
	background-attachment: fixed;
	opacity: var(--active, 0);
	transition: opacity 0.2s;
	pointer-events: none;
}

.card:before {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: 8px;
	background: radial-gradient(
			circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
			hsl(0 0% 100% / 0.5),
			transparent 15vmin
		),
		transparent;
	background-attachment: fixed;
	pointer-events: none;
	mask: linear-gradient(white, white) 50% 0 / 100% 4px no-repeat,
		linear-gradient(white, white) 50% 100% / 100% 4px no-repeat,
		linear-gradient(white, white) 0 50% / 4px 100% no-repeat,
		linear-gradient(white, white) 100% 50% / 4px 100% no-repeat;
}
</style>
