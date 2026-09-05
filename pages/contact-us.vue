<template>
	<div class="relative h-screen flex items-center justify-center overflow-y-auto">
		<div class="site-container flex flex-wrap items-start gap-20 pt-[44rem] md:pt-0 pb-20 md:pb-0">
			<!-- Text col -->
			<div class="text-left relative min-w-[250px] max-w-[50rem] z-10 flex-1">
				<TitlesShadowTitle id="shadow-title" text="contact us" />
				<h2 id="h2-title" class="font-bold text-4xl tracking-wide uppercase">let's start a<br
						class="hidden lg:inline"> conversation</h2>
				<div id="content" class="mt-11 justify-center items-center space-y-8">
					<p class="text-xl tracking-wide">
						Whether you need specialist support, want to discuss a project, or are exploring a new idea,
						we'd love to hear from you.
					</p>
					<div class="flex min-w-0 flex-col items-start space-y-2">
						<a href="mailto:info@fewzed.co.uk" class="site-link"><b>Email:</b>
							Info@fewzed.co.uk</a>
						<a href="tel:01747871970" class="site-link"><b>Phone:</b> 01747 871970</a>
						<a href="https://www.google.com/maps/search/?api=1&query=Unit+116,+The+Wincombe+Centre,+Wincombe+Business+Park,+Shaftesbury,+Dorset,+SP7+9QJ"
							target="_blank" rel="noopener noreferrer" class="site-link">
							<b>Address:</b> Unit 116, The Wincombe Centre, Wincombe Business Park, Shaftesbury, Dorset,
							SP7 9QJ
						</a>
					</div>
				</div>
			</div>

			<!-- Form col -->
			<!-- <form
				id="form"
				class="text-left relative min-w-[250px] max-w-[27rem] space-y-4 z-10 flex-1"
				@submit.prevent="submitForm"
				action="https://formsubmit.co/yousef.r1999@gmail.com"
				method="POST"
			>
				<div class="flex flex-col lg:flex-row justify-between gap-4">
					<TextfieldsLabelBlockTextField
						label="First name"
						placeholder="First name"
						v-model="form.firstName"
						class="w-full"
					/>
					<TextfieldsLabelBlockTextField
						label="Last name"
						placeholder="Last name"
						v-model="form.lastName"
						class="w-full"
					/>
				</div>
				<TextfieldsLabelBlockTextField label="Email" placeholder="Email" v-model="form.email" name="email" />
				<TextfieldsLabelBlockTextArea label="Message" placeholder="Type your message here..." v-model="form.message" />
				<ButtonsSubmitBtn text="Send Message" type="submit" class="w-full" />
			</form> -->

			<FormsContactUsForm id="form" />
		</div>
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

usePageSeo({
	title: "Contact Fewzed",
	description:
		"Contact Fewzed to discuss design, engineering, data collection, trial management and consultancy projects.",
	path: "/contact-us",
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