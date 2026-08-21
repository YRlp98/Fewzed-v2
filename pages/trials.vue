<template>
	<main class="relative min-h-screen overflow-hidden">
		<div class="site-container grid items-center gap-12 py-32 md:min-h-screen md:grid-cols-[1.1fr_0.9fr] md:gap-20 md:py-20">
			<section class="max-w-[46rem]">
				<TitlesShadowTitle text="trials" />
				<h1 class="mt-8 max-w-[38rem] text-4xl font-bold uppercase tracking-wide md:text-6xl">
					turn new ideas into proven solutions
				</h1>
				<p class="mt-8 max-w-[42rem] text-xl leading-8 tracking-wide text-gray-5">
					A well-run trial gives you more than a result. It gives you the evidence and confidence to decide what to do
					next.
				</p>
				<p class="mt-6 max-w-[42rem] leading-7 tracking-wide text-gray-4">
					We help teams plan, manage, and evaluate trials for new methods, technologies, and systems across highways,
					transport, and construction.
				</p>
				<ButtonsRoundedBtn class="mt-10 !px-6 !py-3 !text-sm" text="Plan a trial" icon="mynaui:telephone" link="/contact-us" />
			</section>

			<section class="grid gap-4" aria-label="Trial delivery stages">
				<article class="rounded-xl border border-gray-2 bg-gray-1/20 p-6">
					<span class="text-sm font-bold tracking-widest text-dark-primary">01</span>
					<h2 class="mt-4 text-2xl font-bold uppercase tracking-wide">Shape the question</h2>
					<p class="mt-3 leading-7 text-gray-4">Set clear objectives, success measures, and a practical plan for generating useful evidence.</p>
				</article>
				<article class="rounded-xl border border-gray-2 bg-gray-1/20 p-6">
					<span class="text-sm font-bold tracking-widest text-dark-primary">02</span>
					<h2 class="mt-4 text-2xl font-bold uppercase tracking-wide">Run with control</h2>
					<p class="mt-3 leading-7 text-gray-4">Coordinate people, partners, data, and delivery so the trial stays safe, focused, and on track.</p>
				</article>
				<article class="rounded-xl border border-gray-2 bg-gray-1/20 p-6">
					<span class="text-sm font-bold tracking-widest text-dark-primary">03</span>
					<h2 class="mt-4 text-2xl font-bold uppercase tracking-wide">Learn and act</h2>
					<p class="mt-3 leading-7 text-gray-4">Evaluate the outcome, communicate what it means, and identify the next step with confidence.</p>
				</article>
			</section>
		</div>
	</main>
</template>

<script setup lang="ts">
useHead({
	title: "Fewzed - Trials",
	meta: [{ name: "description", content: "Fewzed trial management and evaluation services for new methods, technologies, and systems" }],
});
</script>