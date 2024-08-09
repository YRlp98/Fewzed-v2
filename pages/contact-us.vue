<template>
	<div class="relative px-12 sm:px-16 lg:px-20 h-screen flex items-center justify-center overflow-y-auto">
		<div class="flex flex-wrap items-start gap-20 pt-[44rem] md:pt-0 pb-20 md:pb-0">
			<!-- Text col -->
			<div class="text-left relative min-w-[250px] max-w-[50rem] z-10 flex-1">
				<TitlesShadowTitle id="shadow-title" text="contact us" />
				<h2 id="h2-title" class="font-bold text-4xl tracking-wide uppercase">have a question?</h2>
				<div id="content" class="mt-11 justify-center items-center space-y-8">
					<p class="text-xl tracking-wide">
						We’re here to help! Reach out to us and we'll get back to you as soon as possible.
					</p>
					<div class="flex flex-col space-y-2 ml-10">
						<span><b>Email:</b> info@fewz.com</span>
						<span><b>Phone:</b> +123-456-7890</span>
						<span
							><b>Address:</b> Unit 116, The Wincombe Centre, Wincombe Business Park, Shaftesbury, Dorset, SP7 9QJ</span
						>
					</div>
				</div>
			</div>

			<!-- Form col -->
			<form id="form" class="text-left relative min-w-[250px] max-w-[27rem] space-y-4 z-10 flex-1">
				<div class="flex flex-col lg:flex-row justify-between gap-4">
					<TextfieldsLabelBlockTextField label="First name" placeholder="First name" class="w-full" />
					<TextfieldsLabelBlockTextField label="Last name" placeholder="Last name" class="w-full" />
				</div>
				<TextfieldsLabelBlockTextField label="Email" placeholder="Email" />
				<TextfieldsLabelBlockTextArea label="Message" placeholder="Type your message here..." />
				<ButtonsTextIconBlockBtn text="Send Message" link="#" />
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

useHead({
	title: "Fewzed - Contact Us",
	meta: [{ name: "description", content: "Fewzed contact us form and info page" }],
});

onMounted(async () => {
	// Animate the shadow title
	$gsap.from("#shadow-title", {
		x: -100,
		opacity: 0,
		delay: 0.5,
	});

	// Animate the h2 title
	$gsap.from("#h2-title", {
		x: -100,
		opacity: 0,
		delay: 0.75,
	});

	// Animate the content
	$gsap.from("#content", {
		y: -100,
		opacity: 0,
		delay: 1,
	});

	// Animate the form
	$gsap.from("#form", {
		y: 100,
		opacity: 0,
		delay: 1,
	});
});
</script>
