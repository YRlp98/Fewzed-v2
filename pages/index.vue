<template>
	<div ref="home" class="home-page min-h-screen">
		<div ref="orbitEntrance" class="home-orbit" aria-hidden="true">
			<img ref="orbit" src="/assets/images/eclipse.svg" alt="" />
		</div>

		<!-- #1 Hero -->
		<section ref="hero" class="section hero" :class="{ 'hero--ready': !store.isPreloaderVisible }">
			<div class="site-container h-full flex items-center">
				<div class="text-left">
					<TitlesMagicTitle id="h1-title" text="FEWZED" class="hero-title"
						:active="!store.isPreloaderVisible" />
					<div class="hero-tagline-reveal">
						<h2 id="h2-title" class="hero-tagline text-2xl font-extralight text-gray-4 sm:text-4xl">WE
							DELIVER GREAT
							PROJECTS</h2>
					</div>
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
						class="js-reveal-group service-card-grid mt-4 grid grid-cols-1 gap-2 min-[720px]:mt-11 min-[720px]:grid-cols-3 min-[720px]:gap-2.5">
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
					<div class="js-reveal-group mt-4 grid gap-2 lg:mt-11 lg:grid-cols-4 lg:items-center lg:gap-2.5">
						<CardsProjectCard title="Sytemonitor" image="sytemonitor" />
						<CardsProjectCard title="Flohtex" image="flohtex" />
						<CardsProjectCard title="Fewzed" image="fewzed" />
						<ButtonsTransparentArrowBtn text="DISCOVER ALL PRODUCTS" link="/products"
							class="mt-5 lg:mt-0" />
					</div>
				</div>
			</div>
		</section>

		<!-- #6 Contact us -->
		<section class="section js-scroll-section contact-us">
			<div class="site-container relative flex min-h-[100svh] flex-col items-center pt-28 md:pt-24">
				<div class="flex w-full flex-1 flex-col justify-center py-16 md:py-8">
					<div class="js-scroll-content relative z-10 mx-auto w-full min-w-0 max-w-[50rem] text-left">
						<TitlesShadowTitle text="contact us" />
						<h2 class="text-4xl font-bold tracking-wide uppercase">
							let's start a
							<br class="hidden lg:inline">
							conversation
						</h2>
						<div class="js-reveal-group mt-11 items-center justify-center space-y-6 lg:space-y-8">
							<p class="text-xl tracking-wide">
								Have a project to discuss, a challenge to solve, or an idea to explore? Tell us what you
								need and our team will be in touch.
							</p>
							<p class="text-base tracking-wide">
								Reach us by email or phone, or visit us at our Dorset office.
							</p>
							<div class="flex min-w-0 flex-col items-start space-y-2 lg:ml-10">
								<a href="mailto:info@fewzed.co.uk" class="site-link">
									<b>Email:</b>
									Info@fewzed.co.uk
								</a>
								<a href="tel:01747871970" class="site-link">
									<b>Phone:</b> 01747 871970
								</a>
								<a href="https://www.google.com/maps/search/?api=1&query=Unit+116,+The+Wincombe+Centre,+Wincombe+Business+Park,+Shaftesbury,+Dorset,+SP7+9QJ"
									target="_blank" rel="noopener noreferrer" class="site-link">
									<b>Address:</b> Unit 116, The Wincombe Centre, Wincombe Business Park, Shaftesbury,
									Dorset, SP7 9QJ
								</a>
							</div>
							<p class="text-base tracking-wide">
								Ready to get started? Send us a message and we'll get back to you shortly.
							</p>
							<div class="flex w-full justify-center">
								<ButtonsRoundedBtn class="mt-2 h-14 w-40 !text-sm" text="Get in touch"
									icon="mynaui:telephone" link="/contact-us" />
							</div>
						</div>
					</div>
				</div>

				<footer
					class="mt-8 w-full max-w-[50rem] shrink-0 border-t border-white/10 py-6 text-center text-sm text-gray-3 md:mt-0 md:py-5">
					<p>Copyright © {{ currentYear }} Fewzed Ltd. All rights reserved.</p>
					<p class="mt-1">Designed and developed by <a href="https://yrlp.ir/" target="_blank"
							rel="noopener noreferrer" class="site-link text-gray-4">Y.R</a></p>
				</footer>
			</div>
		</section>
		<AnimatedScrollIcon class="scrollIcon hidden lg:block"
			:class="{ 'scrollIcon--ready': !store.isPreloaderVisible }" />
	</div>
</template>

<script setup lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { store } from "~/store";

const nuxtApp = useNuxtApp();
const { $gsap, $lenis } = nuxtApp;
const route = useRoute();

const home = ref<HTMLElement | null>(null);
const hero = ref<HTMLElement | null>(null);
const orbitEntrance = ref<HTMLElement | null>(null);
const orbit = ref<HTMLElement | null>(null);
let pageContext: ReturnType<typeof $gsap.context> | undefined;
let animationFrame: number | undefined;
let orbitFrame: number | undefined;
let removePageFinishHook: (() => void) | undefined;
let reducedMotionQuery: MediaQueryList | undefined;
let prefersReducedMotion = false;
const currentYear = new Date().getFullYear();

usePageSeo({
	title: "Engineering, Design & Consultancy Services",
	description:
		"Fewzed delivers design, engineering, consultancy, data collection and trial management services for highways, transport and construction projects.",
	path: "/",
});

const clearHomeAnimations = () => {
	if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
	if (orbitFrame !== undefined) cancelAnimationFrame(orbitFrame);
	animationFrame = undefined;
	orbitFrame = undefined;
	pageContext?.revert();
	pageContext = undefined;
};

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const updateOrbit = () => {
	orbitFrame = undefined;
	if (!home.value || !hero.value || !orbitEntrance.value || !orbit.value) return;

	const viewportHeight = window.innerHeight;
	const heroBottom = hero.value.getBoundingClientRect().bottom;

	if (prefersReducedMotion) {
		$gsap.set(orbitEntrance.value, { autoAlpha: 0, x: 0 });
		$gsap.set(orbit.value, { rotation: 0 });
		return;
	}

	const entranceProgress = clamp((viewportHeight * 0.8 - heroBottom) / (viewportHeight * 0.55));
	const homeTop = home.value.getBoundingClientRect().top + window.scrollY;
	const scrollableHeight = Math.max(home.value.offsetHeight - viewportHeight, 1);
	const rotationProgress = clamp((window.scrollY - homeTop) / scrollableHeight);

	$gsap.set(orbitEntrance.value, {
		autoAlpha: entranceProgress * 0.8,
		x: -160 + entranceProgress * 160,
	});
	$gsap.set(orbit.value, { rotation: rotationProgress * 150 });
};

const scheduleOrbitUpdate = () => {
	if (orbitFrame !== undefined) return;
	orbitFrame = requestAnimationFrame(updateOrbit);
};

const updateMotionPreference = () => {
	prefersReducedMotion = reducedMotionQuery?.matches ?? false;
	scheduleOrbitUpdate();
};

const initialiseHomeAnimations = async (resetScroll = false) => {
	clearHomeAnimations();

	if (resetScroll) {
		window.scrollTo({ top: 0, behavior: "auto" });
		$lenis?.scrollTo(0, { immediate: true });
	}

	await nextTick();

	animationFrame = requestAnimationFrame(() => {
		animationFrame = undefined;
		if (!home.value || !hero.value) return;

		pageContext = $gsap.context(() => {
			const media = $gsap.matchMedia();
			media.add("(prefers-reduced-motion: no-preference)", () => {
				$gsap.utils.toArray<HTMLElement>(".js-scroll-section").forEach((section) => {
					const content = section.querySelector<HTMLElement>(".js-scroll-content");
					if (!content) return;

					const [shadowTitle, heading, ...supportingContent] = Array.from(content.children);
					if (!shadowTitle || !heading) return;

					const reveal = $gsap.timeline({
						scrollTrigger: {
							trigger: section,
							start: "top 76%",
							once: true,
						},
					});

					const contentTargets = supportingContent.flatMap((element) =>
						element.classList.contains("js-reveal-group")
							? Array.from(element.children)
							: [element],
					);

					reveal
						.from(shadowTitle, {
							x: -100,
							autoAlpha: 0,
							duration: 0.5,
							ease: "power1.out",
						})
						.from(heading, {
							x: -100,
							autoAlpha: 0,
							duration: 0.5,
							ease: "power1.out",
						}, 0.25)
						.from(contentTargets, {
							y: -100,
							autoAlpha: 0,
							duration: 0.5,
							stagger: 0.06,
							ease: "power1.out",
						}, 0.5);
				});
			});

			return () => media.revert();
		}, home.value);

		ScrollTrigger.refresh();
		scheduleOrbitUpdate();
	});
};

onMounted(() => {
	reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
	reducedMotionQuery.addEventListener("change", updateMotionPreference);
	updateMotionPreference();

	window.addEventListener("scroll", scheduleOrbitUpdate, { passive: true });
	window.addEventListener("resize", scheduleOrbitUpdate, { passive: true });
	initialiseHomeAnimations(true);

	removePageFinishHook = nuxtApp.hook("page:finish", () => {
		if (route.path === "/" && home.value?.isConnected) {
			initialiseHomeAnimations();
		}
	});
});

onBeforeUnmount(() => {
	removePageFinishHook?.();
	window.removeEventListener("scroll", scheduleOrbitUpdate);
	window.removeEventListener("resize", scheduleOrbitUpdate);
	reducedMotionQuery?.removeEventListener("change", updateMotionPreference);
	clearHomeAnimations();
});
</script>

<style scoped>
.hero-tagline-reveal {
	overflow: hidden;
}

@media (prefers-reduced-motion: no-preference) {
	.hero-title {
		opacity: 0;
		transform: translateX(-15%);
	}

	.hero-tagline {
		opacity: 0;
		transform: translateY(-70%);
	}

	.hero--ready .hero-title {
		animation: hero-title-enter 800ms var(--ease-out) both;
	}

	.hero--ready .hero-tagline {
		animation: hero-tagline-enter 600ms var(--ease-out) 500ms both;
	}
}

@keyframes hero-title-enter {
	from {
		opacity: 0;
		transform: translateX(-15%);
	}

	to {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes hero-tagline-enter {
	from {
		opacity: 0;
		transform: translateY(-70%);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

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

.home-page>.contact-us {
	height: auto;
	min-height: 100svh;
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
	opacity: 0;
	transform: scale(0.55);
	transition: opacity 250ms var(--ease-out);
	z-index: 49;
}

.scrollIcon--ready {
	opacity: 1;
}

@media (prefers-reduced-motion: no-preference) {
	.scrollIcon--ready {
		animation: scroll-indicator-enter 600ms var(--ease-out) 500ms both;
	}

	.scrollIcon::before {
		animation-play-state: paused;
	}

	.scrollIcon--ready::before {
		animation-delay: 1100ms;
		animation-play-state: running;
	}
}

@keyframes scroll-indicator-enter {
	from {
		opacity: 0;
		transform: translateY(calc(-50% - 4rem)) scale(0.55);
	}

	to {
		opacity: 1;
		transform: translateY(-50%) scale(0.55);
	}
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