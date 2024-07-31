<template>
	<div class="image-gradient-background">
		<section>
			<div class="px-12 sm:px-16 lg:px-20 h-full flex items-center">
				<div class="text-left">
					<TitlesMagicTitle text="FEWZED" />
					<h2 class="font-extralight text-gray-3 text-4xl">WE DELIVER GREAT PROJECTS</h2>
				</div>
			</div>
		</section>
		<section>
			<div class="relative px-12 sm:px-16 lg:px-20 h-screen flex items-center justify-center">
				<div class="text-left relative z-10 max-w-[50rem]">
					<TitlesShadowTitle text="about" />
					<h2 class="font-bold text-4xl tracking-wide uppercase">who we are</h2>
					<p class="mt-8 tracking-wide leading-7">
						A multi-disciplinary team of designers, engineers and consultants specialising in technical support and
						development for projects in the highways, transport and construction industries. Based in the South West of
						England but covering Nationwide and Europe we are available to support your projects.
					</p>
				</div>
				<AnimatedEclipse />
			</div>
		</section>
		<section>
			<div class="relative px-12 sm:px-16 lg:px-20 h-screen flex items-center justify-center">
				<div class="text-left relative z-10 max-w-[50rem]">
					<TitlesShadowTitle text="about" />
					<h2 class="font-bold text-4xl tracking-wide uppercase">what we do</h2>
					<p class="mt-8 tracking-wide leading-7">
						We Fewz your challenges with our team to build science based, market leading, sustainable solutions. We work
						across a wide variety of industries with a focus on transportation and construction.
					</p>
				</div>
				<AnimatedEclipse class="rotate-12" />
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
	z-index: 49;
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
