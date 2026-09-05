<template>
	<NuxtLink :to="link"
		class="site-link group relative flex max-h-20 cursor-pointer flex-wrap items-center justify-start space-x-2 text-[#f5f5f5]"
		data-magnetic>
		<span
			class="whitespace-nowrap text-base font-bold uppercase tracking-wider transition-transform duration-300 ease-in-out group-hover:translate-x-2">
			{{ text }}
		</span>
		<svg class="h-10 w-auto transition-transform duration-300 ease-in-out group-hover:translate-x-2"
			viewBox="0 0 59 44" fill="none" aria-hidden="true">
			<circle class="stroke-current transition-colors duration-300 ease-in-out" cx="37" cy="22" r="21.5" />
			<path class="stroke-current stroke-2 transition-colors duration-300 ease-in-out" stroke-linecap="round"
				stroke-linejoin="round" d="M1 22H38M38 22L31.636 15.636M38 22L31.636 28.364" />
		</svg>
	</NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
	text: string;
	link: string;
}>();
</script>