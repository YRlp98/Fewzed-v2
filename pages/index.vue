<template>
	<div class="image-gradient-background">
		<section class="">
			<div class="px-12 sm:px-16 lg:px-20 h-full flex items-center">
				<div class="text-left">
					<TitlesMagicTitle text="FEWZED" />
					<h2 class="font-extralight text-gray-3 text-4xl">WE DELIVER GREAT PROJECTS</h2>
				</div>
			</div>
		</section>
		<section class="">
			<div class="px-12 sm:px-16 lg:px-20 h-full flex items-center">
				<div class="text-left">
					<h1 class="font-medium text-dark-primary text-8xl">SECTION #2</h1>
				</div>
			</div>
		</section>
		<AnimatedScrollIcon class="scrollIcon" />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.scrollIcon {
	position: fixed;
	top: 95vh;
	transform: scale(0.55);
	z-index: 101;
}

@media (min-width: 768px) {
	.scrollIcon {
		top: 50%;
		left: auto;
		right: 3rem;
		transform: translateY(-50%) scale(0.55);
	}
}
</style>
