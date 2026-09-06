<template>
	<main class="slider" :class="{ 'slider--ready': !store.isPreloaderVisible }">
		<div class="list">
			<article v-for="(project, index) in projects" :key="project.key" class="item"
				:class="{ active: itemActive === index }" :aria-hidden="itemActive !== index"
				:inert="itemActive !== index">
				<div class="img-wrapper" aria-hidden="true">
					<img :src="project.backgroundImage" alt="" />
					<div class="gradient-overlay"></div>
				</div>

				<div class="product-layout site-container">
					<div class="content">
						<TitlesShadowTitle text="products" />
						<h1 class="text-4xl font-bold tracking-wider">
							{{ project.title }}
						</h1>
						<p class="mt-6 max-w-[36rem] text-lg leading-7 text-gray-5">
							{{ project.description }}
						</p>
						<ButtonsTransparentArrowBtn class="project-website-link mt-8" text="VISIT WEBSITE"
							:link="project.website" new-tab />
					</div>
				</div>
			</article>
		</div>

		<div class="controls-shell site-container">
			<div class="buttons flex gap-3" aria-label="Product carousel controls">
				<ButtonsTransparentIconBtn icon="material-symbols:chevron-left" aria-label="Previous product"
					@click="showPrevious" />
				<ButtonsTransparentIconBtn icon="material-symbols:chevron-right" aria-label="Next product"
					@click="showNext" />
			</div>
		</div>

		<div class="carousel-shell site-container">
			<div ref="thumbnailTrack" class="thumbnail" role="tablist" aria-label="Choose a product" data-lenis-prevent>
				<CardsProjectCard v-for="(project, index) in projects" :key="project.key" :title="project.title"
					:image="project.cardImage" selectable class="product-thumbnail"
					:class="{ active: itemActive === index }" role="tab" :aria-selected="itemActive === index"
					@click="selectProject(index)" />
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import { store } from "~/store";
import sytemonitor from "~/assets/images/road-image.webp";
import flohtex from "~/assets/images/police-image.webp";
import surveys365 from "~/assets/images/365surveys.webp";

const projects = [
	{
		key: "sytemonitor",
		title: "Sytemonitor",
		backgroundImage: sytemonitor,
		cardImage: "sytemonitor" as const,
		website: "https://sytemonitor.co.uk/home",
		description:
			"SyteMonitor offers live map monitoring, device alerts, VMS M2 aspect management, and secure access control for efficient site operations.",
	},
	{
		key: "365surveys",
		title: "365surveys",
		backgroundImage: surveys365,
		cardImage: "365surveys" as const,
		website: "https://365surveys.vercel.app/",
		description:
			"365 SURVEYS specialists in transportation data, with expertise in operational data collection, monitoring, and test plan development. Our team excels in transport and automotive data analytics.",
	},
	{
		key: "flohtex",
		title: "Flohtex",
		backgroundImage: flohtex,
		cardImage: "flohtex" as const,
		website: "https://sytemonitor.co.uk/help/",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae praesentium in eos aliquam voluptatem repellendus, ab quos, asperiores harum ad laborum impedit ut, nesciunt accusantium doloremque ipsam? Commodi, nihil harum.",
	},
] as const;

const route = useRoute();
const router = useRouter();
const itemActive = ref(0);
const thumbnailTrack = ref<HTMLElement | null>(null);

usePageSeo({
	title: "Products",
	description:
		"Explore Fewzed products built for highways, construction and data-led operations.",
	path: "/products",
});

const centerActiveThumbnail = async (behavior: ScrollBehavior = "smooth") => {
	await nextTick();
	const track = thumbnailTrack.value;
	const selectedThumbnail = track?.children[itemActive.value] as HTMLElement | undefined;
	if (!track || !selectedThumbnail) return;

	track.scrollTo({
		left: selectedThumbnail.offsetLeft - (track.clientWidth - selectedThumbnail.clientWidth) / 2,
		behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : behavior,
	});
};

const selectProject = (index: number) => {
	itemActive.value = (index + projects.length) % projects.length;
	centerActiveThumbnail();

	const project = projects[itemActive.value];
	if (project && route.query.project !== project.key) {
		router.replace({ query: { ...route.query, project: project.key } });
	}
};

const showPrevious = () => selectProject(itemActive.value - 1);
const showNext = () => selectProject(itemActive.value + 1);

onMounted(() => {
	const requestedProject = Array.isArray(route.query.project)
		? route.query.project[0]
		: route.query.project;
	const requestedIndex = projects.findIndex((project) => project.key === requestedProject);
	if (requestedIndex >= 0) itemActive.value = requestedIndex;
	centerActiveThumbnail("auto");
});
</script>

<style scoped>
.slider {
	min-height: 100svh;
	position: relative;
	overflow: hidden;
}

.list,
.item,
.img-wrapper {
	position: absolute;
	inset: 0;
}

.item {
	opacity: 0;
	pointer-events: none;
	transition: opacity 500ms var(--ease-out);
}

.item.active {
	opacity: 1;
	pointer-events: auto;
	z-index: 1;
}

.img-wrapper img {
	height: 100%;
	width: 100%;
	object-fit: cover;
}

.gradient-overlay {
	position: absolute;
	inset: 0;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.5) 55%, rgba(0, 0, 0, 0.82));
}

.product-layout {
	position: relative;
	z-index: 2;
	display: flex;
	min-height: 100svh;
	align-items: flex-start;
	padding-top: clamp(8rem, 20vh, 12rem);
	padding-bottom: 15rem;
}

.content {
	max-width: 36.25rem;
}

.controls-shell {
	pointer-events: none;
	position: absolute;
	inset-inline: 0;
	top: clamp(7rem, 18vh, 10rem);
	z-index: 20;
	display: flex;
	justify-content: flex-end;
}

.buttons {
	pointer-events: auto;
}

.carousel-shell {
	position: absolute;
	inset-inline: 0;
	bottom: 2rem;
	z-index: 20;
}

.thumbnail {
	display: flex;
	justify-content: flex-end;
	gap: 0.75rem;
	overflow-x: auto;
	padding: 0.375rem;
	scroll-behavior: smooth;
	scroll-padding-inline: 0.375rem;
	scroll-snap-type: x mandatory;
	scrollbar-width: none;
}

.thumbnail::-webkit-scrollbar {
	display: none;
}

.thumbnail .product-thumbnail {
	flex: 0 0 auto;
	scroll-snap-align: center;
	filter: brightness(0.55);
	transition:
		filter 250ms ease,
		box-shadow 250ms ease;
}

.thumbnail .product-thumbnail.active {
	box-shadow: 0 0 0 2px var(--purple-light);
	filter: brightness(1);
}

@keyframes show-content {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes product-card-enter {
	from {
		opacity: 0;
		transform: translateY(3rem);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@media (prefers-reduced-motion: no-preference) {

	.item.active .title-shadow,
	.item.active h1,
	.item.active p,
	.item.active .project-website-link {
		opacity: 0;
		transform: translateY(1.875rem);
	}

	.slider--ready .item.active .title-shadow,
	.slider--ready .item.active h1,
	.slider--ready .item.active p,
	.slider--ready .item.active .project-website-link {
		animation: show-content 650ms var(--ease-out) 200ms both;
	}

	.slider--ready .item.active h1 {
		animation-delay: 450ms;
	}

	.slider--ready .item.active p {
		animation-delay: 700ms;
	}

	.slider--ready .item.active .project-website-link {
		animation-delay: 950ms;
	}

	.thumbnail .product-thumbnail {
		opacity: 0;
		transform: translateY(3rem);
	}

	.slider--ready .thumbnail .product-thumbnail {
		animation: product-card-enter 1s var(--ease-out) 700ms both;
	}

	.slider--ready .thumbnail .product-thumbnail:nth-child(2) {
		animation-delay: 820ms;
	}

	.slider--ready .thumbnail .product-thumbnail:nth-child(3) {
		animation-delay: 940ms;
	}
}

@media (max-width: 678px) {
	.product-layout {
		padding-top: 8rem;
		padding-bottom: 9rem;
	}

	.content p {
		margin-top: 1rem;
		font-size: 1rem;
		line-height: 1.5;
	}

	.content .project-website-link {
		margin-top: 1.25rem;
	}

	.controls-shell {
		top: 5.5rem;
	}

	.carousel-shell {
		bottom: max(1rem, env(safe-area-inset-bottom));
		padding-inline: 0;
	}

	.thumbnail {
		justify-content: flex-start;
		gap: 0.5rem;
		padding-inline: 0;
		scroll-padding-inline: 0;
	}

	.thumbnail .product-thumbnail {
		flex-basis: 11.25rem;
		height: 6.25rem;
		min-width: 11.25rem;
	}
}
</style>