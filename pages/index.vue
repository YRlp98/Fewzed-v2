<template>
	<div class="h-screen">
		<!-- #1 Hero -->
		<section class="section hero image-gradient-background">
			<div class="px-12 sm:px-16 lg:px-20 h-full flex items-center">
				<div class="text-left">
					<TitlesMagicTitle id="h1-title" text="FEWZED" class="title-animation" />
					<h2 id="h2-title" class="font-extralight text-gray-3 text-4xl">WE DELIVER GREAT PROJECTS</h2>
				</div>
			</div>
		</section>
		<!-- #2 Who we are -->
		<section class="section who-we-are image-gradient-background">
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
				<AnimatedEclipse class="rotate-[0deg]" />
			</div>
		</section>
		<!-- #3 What we do -->
		<section class="section what-we-do image-gradient-background">
			<div class="relative px-12 sm:px-16 lg:px-20 h-screen flex items-center justify-center">
				<div class="text-left relative z-10 max-w-[50rem]">
					<TitlesShadowTitle text="about" />
					<h2 class="font-bold text-4xl tracking-wide uppercase">what we do</h2>
					<p class="mt-8 tracking-wide leading-7">
						We Fewz your challenges with our team to build science based, market leading, sustainable solutions. We work
						across a wide variety of industries with a focus on transportation and construction.
					</p>
				</div>
				<AnimatedEclipse class="rotate-[30deg]" />
			</div>
		</section>
		<!-- #4 Services -->
		<section class="section services image-gradient-background">
			<div class="relative px-12 sm:px-16 lg:px-20 h-screen flex items-center justify-center">
				<div class="text-left relative z-10">
					<TitlesShadowTitle text="services" />
					<h2 class="font-bold text-4xl tracking-wide uppercase">we provide</h2>
					<!-- On Large Screen -->
					<div class="mt-11 hidden 2xl:grid grid-cols-3 gap-2.5">
						<CardsServiceCard
							title="Computer Aided design"
							icon="iconoir:design-nib-solid"
							description="Production of CAD modelling, simulations and rendering for mechanical and civil applications."
							image="card1"
						/>
						<CardsServiceCard
							title="Traffic Modelling & Simulation"
							icon="lucide:traffic-cone"
							description="Development of traffic models for highway assessments and traffic management scheme."
							image="card2"
						/>
						<CardsServiceCard
							title="Highway assessment trials"
							icon="mdi:highway"
							description="Assessments into new and innovative methodologies, technologies and systems and reporting of outcomes."
							image="card3"
						/>
						<CardsServiceCard
							title="Innovation management"
							icon="teenyicons:bulb-on-outline"
							description="Helping you to build environments where innovation can thrive and deliver on an organisation’s strategic objectives."
							image="card4"
						/>
						<CardsServiceCard
							title="Funding & Bidding"
							icon="icon-park-outline:funds"
							description="Supporting you to develop funding applications for UK and European funding. From first concepts to submission and project management."
							image="card5"
						/>
						<CardsServiceCard
							title="Development & Management"
							icon="material-symbols:developer-mode-tv-outline"
							description="Development, testing and deployment of software systems including analytics, web and applications."
							image="card6"
						/>
					</div>
					<!-- On Small screen -->
					<div class="mt-4 grid gap-2 2xl:hidden">
						<CardsServiceMobileCard title="Computer Aided design" icon="iconoir:design-nib-solid" />
						<CardsServiceMobileCard title="Traffic Modelling & Simulation" icon="lucide:traffic-cone" />
						<CardsServiceMobileCard title="Highway assessment trials" icon="mdi:highway" />
						<CardsServiceMobileCard title="Innovation management" icon="teenyicons:bulb-on-outline" />
						<CardsServiceMobileCard title="Funding & Bidding" icon="icon-park-outline:funds" />
						<CardsServiceMobileCard
							title="Development & Management"
							icon="material-symbols:developer-mode-tv-outline"
						/>
					</div>
				</div>
				<AnimatedEclipse class="rotate-[60deg]" />
			</div>
		</section>
		<!-- #5 Products -->
		<section class="section projects image-gradient-background">
			<div class="relative px-12 sm:px-16 lg:px-20 h-screen flex items-center justify-center">
				<div class="text-left relative z-10">
					<TitlesShadowTitle text="products" />
					<h2 class="font-bold text-4xl tracking-wide uppercase">We've crafted</h2>
					<!-- On Large Screen -->
					<div class="mt-11 hidden lg:grid grid-cols-3 lg:grid-cols-4 gap-2.5 justify-center items-center">
						<CardsProjectCard title="Sytemonitor" image="sytemonitor" />
						<CardsProjectCard title="Flohtex" image="flohtex" />
						<CardsProjectCard title="Fewzed" image="fewzed" />
						<ButtonsTransparentArrowBtn text="DISCOVER ALL PRODUCTS" link="/products" />
					</div>
					<!-- On Small screen -->
					<div class="mt-4 grid gap-2 lg:hidden">
						<CardsProjectCard title="Sytemonitor" image="sytemonitor" />
						<CardsProjectCard title="Flohtex" image="flohtex" />
						<CardsProjectCard title="Fewzed" image="fewzed" />
						<ButtonsTransparentArrowBtn text="DISCOVER ALL PRODUCTS" link="/products" />
					</div>
				</div>
				<AnimatedEclipse class="rotate-[90deg]" />
			</div>
		</section>
		<!-- #6 Contact us -->
		<section class="section contact-us image-gradient-background">
			<div class="relative px-12 sm:px-16 lg:px-20 h-screen flex items-center justify-center">
				<div class="text-left relative max-w-[50rem] z-10">
					<TitlesShadowTitle text="contact us" />
					<h2 class="font-bold text-4xl tracking-wide uppercase">have a question?</h2>
					<div class="mt-11 justify-center items-center space-y-8">
						<p class="text-xl tracking-wide">
							We’re here to help! Reach out to us and we'll get back to you as soon as possible.
						</p>
						<div class="flex flex-col space-y-2 ml-10">
							<span><b>Email:</b> info@fewz.com</span>
							<span><b>Phone:</b> 01747 871970</span>
							<span
								><b>Address:</b> Unit 116, The Wincombe Centre, Wincombe Business Park, Shaftesbury, Dorset, SP7
								9QJ</span
							>
						</div>
						<p class="text-base tracking-wide">
							Or fill out our contact form, and we'll get in touch with you shortly.
						</p>
						<div class="flex justify-center w-full">
							<ButtonsRoundedBtn
								class="w-[7.875rem] mt-2"
								text="Contact Us"
								icon="mynaui:telephone"
								link="/contact-us"
							/>
						</div>
					</div>
				</div>
				<AnimatedEclipse class="rotate-[120deg]" />
			</div>
		</section>
		<AnimatedScrollIcon class="scrollIcon" />
	</div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

useHead({
	title: "Fewzed",
	meta: [{ name: "description", content: "Fewzed home page - We deliver great projects" }],
});

onMounted(() => {
	// Animate the h1 title
	$gsap.from("#h1-title", {
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
});
</script>

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
