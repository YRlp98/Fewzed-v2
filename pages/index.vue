<template>
	<div ref="home" class="home-page min-h-screen">
		<div ref="orbitEntrance" class="home-orbit" aria-hidden="true">
			<img ref="orbit" src="/assets/images/eclipse.svg" alt="" />
		</div>

		<!-- #1 Hero -->
		<section ref="hero" class="section hero">
			<div class="site-container h-full flex items-center">
				<div class="text-left">
					<TitlesMagicTitle id="h1-title" text="FEWZED" class="title-animation" />
					<h2 id="h2-title" class="font-extralight text-gray-3 text-4xl">WE DELIVER GREAT PROJECTS</h2>
				</div>
			</div>
		</section>

		<!-- #2 Who we are -->
		<section class="section js-scroll-section who-we-are">
			<div class="site-container relative h-screen flex items-center justify-center">
				<div class="js-scroll-content text-left relative z-10 max-w-[50rem]">
					<TitlesShadowTitle text="about" />
					<h2 class="font-bold text-4xl tracking-wide uppercase">who we are</h2>
					<p class="mt-8 tracking-wide leading-7">
						A multi-disciplinary team of designers, engineers and consultants specialising in technical
						support and
						development for projects in the highways, transport and construction industries. Based in the
						South West of
						England but covering Nationwide and Europe we are available to support your projects.
					</p>
				</div>
			</div>
		</section>

		<!-- #3 What we do -->
		<section class="section js-scroll-section what-we-do">
			<div class="site-container relative h-screen flex items-center justify-center">
				<div class="js-scroll-content text-left relative z-10 max-w-[50rem]">
					<TitlesShadowTitle text="about" />
					<h2 class="font-bold text-4xl tracking-wide uppercase">what we do</h2>
					<p class="mt-8 tracking-wide leading-7">
						We Fewz your challenges with our team to build science based, market leading, sustainable
						solutions. We work
						across a wide variety of industries with a focus on transportation and construction.
					</p>
				</div>
			</div>
		</section>

		<!-- #4 Services -->
		<section class="section js-scroll-section services">
			<div class="site-container relative h-screen flex items-center justify-center">
				<div class="js-scroll-content relative z-10 w-full text-left">
					<TitlesShadowTitle text="services" />
					<h2 class="font-bold text-4xl tracking-wide uppercase">we provide</h2>
					<div
						class="service-card-grid mt-4 grid grid-cols-1 gap-2 min-[720px]:mt-11 min-[720px]:grid-cols-3 min-[720px]:gap-2.5">
						<CardsServiceCard title="Computer Aided design" icon="iconoir:design-nib-solid"
							description="Production of CAD modelling, simulations and rendering for mechanical and civil applications."
							image="card1" />
						<CardsServiceCard title="Traffic Modelling & Simulation" icon="lucide:traffic-cone"
							description="Development of traffic models for highway assessments and traffic management scheme."
							image="card2" />
						<CardsServiceCard title="Highway assessment trials" icon="mdi:highway"
							description="Assessments into new and innovative methodologies, technologies and systems and reporting of outcomes."
							image="card3" />
						<CardsServiceCard title="Innovation management" icon="teenyicons:bulb-on-outline"
							description="Helping you to build environments where innovation can thrive and deliver on an organisation’s strategic objectives."
							image="card4" />
						<CardsServiceCard title="Funding & Bidding" icon="icon-park-outline:funds"
							description="Supporting you to develop funding applications for UK and European funding. From first concepts to submission and project management."
							image="card5" />
						<CardsServiceCard title="Development & Management"
							icon="material-symbols:developer-mode-tv-outline"
							description="Development, testing and deployment of software systems including analytics, web and applications."
							image="card6" />
					</div>
				</div>
			</div>
		</section>

		<!-- #5 Products -->
		<section class="section js-scroll-section projects">
			<div class="site-container relative h-screen flex items-center justify-center">
				<div class="js-scroll-content relative z-10 w-full text-left">
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
						<ButtonsTransparentArrowBtn text="DISCOVER ALL PRODUCTS" link="/products" class="mt-5" />
					</div>
				</div>
			</div>
		</section>

		<!-- #6 Contact us -->
		<section class="section js-scroll-section contact-us">
			<div class="site-container relative h-screen flex flex-col items-center justify-center">
				<div class="js-scroll-content text-left relative z-10 w-full min-w-0 max-w-[50rem]">
					<TitlesShadowTitle text="contact us" />
					<h2 class="font-bold text-4xl tracking-wide uppercase">let's start <br class="hidden lg:inline"> a
						conversation</h2>
					<div class="mt-11 justify-center items-center space-y-6 lg:space-y-8">
						<p class="text-xl tracking-wide">
							Have a project to discuss, a challenge to solve, or an idea to explore? Tell us what you
							need and our team will be in touch.
						</p>
						<p class="text-base tracking-wide">
							Reach us by email or phone, or visit us at our Dorset office.
						</p>
						<div class="flex min-w-0 flex-col items-start space-y-2 lg:ml-10">
							<a href="mailto:info@fewzed.co.uk" class="hover:text-dark-primary">
								<b>Email:</b>
								Info@fewzed.co.uk
							</a>
							<a href="tel:01747871970" class="hover:text-dark-primary">
								<b>Phone:</b> 01747 871970
							</a>
							<a href="https://www.google.com/maps/search/?api=1&query=Unit+116,+The+Wincombe+Centre,+Wincombe+Business+Park,+Shaftesbury,+Dorset,+SP7+9QJ"
								target="_blank" class="hover:text-dark-primary">
								<b>Address:</b> Unit 116, The Wincombe Centre, Wincombe Business Park, Shaftesbury,
								Dorset, SP7 9QJ
							</a>
						</div>
						<p class="text-base tracking-wide">
							Ready to get started? Send us a message and we'll get back to you shortly.
						</p>
						<div class="flex justify-center w-full">
							<ButtonsRoundedBtn class="mt-2 h-14 w-40 !text-sm" text="Get in touch"
								icon="mynaui:telephone" link="/contact-us" />
						</div>
					</div>
				</div>

				<!-- Copyright -->
				<div class="absolute bottom-0 left-0 right-0 p-4">
					<p class="text-gray-3 text-center text-sm">Copyright © 2024 Fewzed Ltd. All rights reserved.</p>
				</div>

			</div>
		</section>
		<AnimatedScrollIcon class="scrollIcon hidden lg:block" />
	</div>
</template>

<script setup lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { $gsap, $lenis } = useNuxtApp();

const home = ref<HTMLElement | null>(null);
const hero = ref<HTMLElement | null>(null);
const orbitEntrance = ref<HTMLElement | null>(null);
const orbit = ref<HTMLElement | null>(null);
let pageContext: ReturnType<typeof $gsap.context> | undefined;

useHead({
	title: "Fewzed",
	meta: [{ name: "description", content: "Fewzed home page - We deliver great projects" }],
});

onMounted(async () => {
	window.scrollTo({ top: 0, behavior: "auto" });
	$lenis?.scrollTo(0, { immediate: true });
	await nextTick();

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

	if (!home.value) return;

	pageContext = $gsap.context(() => {
		if (orbitEntrance.value && hero.value) {
			$gsap.fromTo(
				orbitEntrance.value,
				{ autoAlpha: 0, x: -160 },
				{
					autoAlpha: 0.8,
					x: 0,
					ease: "none",
					scrollTrigger: {
						trigger: hero.value,
						start: "bottom 80%",
						end: "bottom 25%",
						scrub: 0.5,
					},
				},
			);
		}

		if (orbit.value) {
			$gsap.to(orbit.value, {
				rotation: 150,
				ease: "none",
				scrollTrigger: {
					trigger: home.value,
					start: "top top",
					end: "bottom bottom",
					scrub: 0.5,
					invalidateOnRefresh: true,
				},
			});
		}

		const media = $gsap.matchMedia();
		media.add("(prefers-reduced-motion: no-preference)", () => {
			$gsap.utils.toArray<HTMLElement>(".js-scroll-section").forEach((section) => {
				const content = section.querySelector<HTMLElement>(".js-scroll-content");
				if (!content) return;

				$gsap.from(content.children, {
					y: 48,
					autoAlpha: 0,
					stagger: 0.09,
					duration: 0.75,
					ease: "power3.out",
					scrollTrigger: {
						trigger: section,
						start: "top 72%",
						toggleActions: "play none none reverse",
					},
				});
			});
		});

		return () => media.revert();
	}, home.value);

	ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
	pageContext?.revert();
});
</script>

<style scoped>
.home-page {
	position: relative;
	background:
		linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(30, 32, 35, 0.5)),
		url('/assets/images/uk-dot-map.svg');
	background-repeat: no-repeat;
	background-position: center, center;
	background-size: cover, auto min(100svh, 64rem);
	background-attachment: fixed;
	background-color: #000;
}

.home-page>.section {
	position: relative;
	z-index: 1;
	height: 100svh;
}

.home-orbit {
	position: fixed;
	top: 50%;
	left: clamp(-34rem, -28vw, -14rem);
	z-index: 0;
	width: clamp(46rem, 74vw, 68rem);
	opacity: 0;
	pointer-events: none;
	transform: translateY(-50%);
}

.home-orbit img {
	width: 100%;
	max-width: none;
	transform-origin: 50% 50%;
	will-change: transform;
}

@media (max-width: 639px) {
	.home-orbit {
		display: none;
	}
}

@media (min-width: 768px) {
	.home-page {
		background-position: center, calc(100% + 10rem) center;
	}
}

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