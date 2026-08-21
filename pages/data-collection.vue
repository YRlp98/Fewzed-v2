<template>
	<main class="relative min-h-screen overflow-hidden">
		<div
			class="site-container grid items-center gap-12 py-32 md:min-h-screen md:grid-cols-[1.1fr_0.9fr] md:gap-20 md:py-20">
			<section class="max-w-[46rem]">
				<TitlesShadowTitle text="data collection" />
				<h1 class="mt-8 max-w-[38rem] text-4xl font-bold uppercase tracking-wide md:text-6xl">
					turn field data into better decisions
				</h1>
				<p class="mt-8 max-w-[42rem] text-xl leading-8 tracking-wide text-gray-5">
					Good decisions start with dependable evidence. We design and deliver practical data collection and
					sampling
					programmes that help you understand what is happening on the ground.
				</p>
				<p class="mt-6 max-w-[42rem] leading-7 tracking-wide text-gray-4">
					From planning and fieldwork to quality checks and clear reporting, we make complex information
					easier to use
					across highways, transport, construction, and technology projects.
				</p>
				<ButtonsRoundedBtn class="mt-10 !px-6 !py-3 !text-sm" text="Discuss your data needs"
					icon="mynaui:telephone" link="/contact-us" />
			</section>

			<section class="grid gap-4" aria-label="Data collection capabilities">
				<article class="rounded-xl border border-gray-2 bg-gray-1/20 p-6">
					<span class="text-sm font-bold tracking-widest text-dark-primary">01</span>
					<h2 class="mt-4 text-2xl font-bold uppercase tracking-wide">Plan with purpose</h2>
					<p class="mt-3 leading-7 text-gray-4">Define the right questions, measures, locations, and sampling
						approach before work begins.</p>
				</article>
				<article class="rounded-xl border border-gray-2 bg-gray-1/20 p-6">
					<span class="text-sm font-bold tracking-widest text-dark-primary">02</span>
					<h2 class="mt-4 text-2xl font-bold uppercase tracking-wide">Capture reliably</h2>
					<p class="mt-3 leading-7 text-gray-4">Collect consistent, traceable field data using practical
						methods suited to your project.</p>
				</article>
				<article class="rounded-xl border border-gray-2 bg-gray-1/20 p-6">
					<span class="text-sm font-bold tracking-widest text-dark-primary">03</span>
					<h2 class="mt-4 text-2xl font-bold uppercase tracking-wide">Deliver insight</h2>
					<p class="mt-3 leading-7 text-gray-4">Turn results into clear reports and useful insight that
						supports the next decision.</p>
				</article>
			</section>
		</div>
	</main>
</template>

<script setup lang="ts">
usePageSeo({
	title: "Data Collection & Sampling",
	description:
		"Fewzed provides dependable data collection and sampling services for transport and construction projects.",
	path: "/data-collection",
});
</script>