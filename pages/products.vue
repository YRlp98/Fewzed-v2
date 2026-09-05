<template>
	<div class="slider" :class="{ 'slider--ready': !store.isPreloaderVisible }">
		<!-- List Items -->
		<div class="list">
			<div class="item active">
				<div class="img-wrapper">
					<img :src="sytemonitor" />
					<div class="gradient-overlay"></div>
				</div>
				<div class="content">
					<TitlesShadowTitle text="products" />
					<h1 class="mt-16 text-4xl font-bold tracking-wider">Sytemonitor</h1>
					<p class="text-lg leading-7 mt-6">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae praesentium in eos aliquam
						voluptatem
						repellendus, ab quos, asperiores harum ad laborum impedit ut, nesciunt accusantium doloremque
						ipsam?
						Commodi, nihil harum.
					</p>
				</div>
			</div>

			<div class="item">
				<div class="img-wrapper">
					<img :src="flohtex" />
					<div class="gradient-overlay"></div>
				</div>
				<div class="content">
					<TitlesShadowTitle text="products" />
					<h1 class="mt-16 text-4xl font-bold tracking-wider">Flohtex</h1>
					<p class="text-lg leading-7 mt-6">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae praesentium in eos aliquam
						voluptatem
						repellendus, ab quos, asperiores harum ad laborum impedit ut, nesciunt accusantium doloremque
						ipsam?
						Commodi, nihil harum.
					</p>
				</div>
			</div>

			<div class="item">
				<div class="img-wrapper">
					<img :src="fewzed" />
					<div class="gradient-overlay"></div>
				</div>
				<div class="content">
					<TitlesShadowTitle text="products" />
					<h1 class="mt-16 text-4xl font-bold tracking-wider">Data 365</h1>
					<p class="text-lg leading-7 mt-6">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae praesentium in eos aliquam
						voluptatem
						repellendus, ab quos, asperiores harum ad laborum impedit ut, nesciunt accusantium doloremque
						ipsam?
						Commodi, nihil harum.
					</p>
				</div>
			</div>

			<!-- Buttons -->
			<div class="buttons flex space-x-3">
				<ButtonsTransparentIconBtn id="prev" icon="material-symbols:chevron-left" />
				<ButtonsTransparentIconBtn id="next" icon="material-symbols:chevron-right" />
			</div>

			<!-- Thumbnails -->
			<div class="thumbnail">
				<CardsProjectCard title="Sytemonitor" image="sytemonitor" class="product-thumbnail active" />
				<CardsProjectCard title="Flohtex" image="flohtex" class="product-thumbnail" />
				<CardsProjectCard title="Data 365" image="fewzed" class="product-thumbnail" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { store } from "~/store";
import sytemonitor from "/assets/images/road-image.jpg";
import flohtex from "/assets/images/police-image.jpg";
import fewzed from "/assets/images/writing-image.jpg";

usePageSeo({
	title: "Products",
	description:
		"Explore Fewzed products built for highways, construction and data-led operations.",
	path: "/products",
});

let items = ref<NodeListOf<Element> | null>(null);
let next = ref<HTMLElement | null>(null);
let prev = ref<HTMLElement | null>(null);
let thumbnails = ref<NodeListOf<Element> | null>(null);
let itemActive = ref(0);

onMounted(() => {
	// Access DOM elements after mounting
	items.value = document.querySelectorAll(".slider .list .item");
	thumbnails.value = document.querySelectorAll(".thumbnail .product-thumbnail");
	next.value = document.getElementById("next");
	prev.value = document.getElementById("prev");

	// Ensure items and thumbnails are not null
	if (items.value && thumbnails.value) {
		const itemElements = items.value;
		const thumbnailElements = thumbnails.value;
		let countItem = itemElements.length;

		// event next click
		next.value?.addEventListener("click", () => {
			itemActive.value = (itemActive.value + 1) % countItem;
			showSlider();
		});

		// event prev click
		prev.value?.addEventListener("click", () => {
			itemActive.value = (itemActive.value - 1 + countItem) % countItem;
			showSlider();
		});

		// auto run slider
		// let refreshInterval = setInterval(() => {
		// 	next.value?.click();
		// }, 5000);

		function showSlider() {
			// remove item active old
			let itemActiveOld = document.querySelector(".slider .list .item.active");
			let thumbnailActiveOld = document.querySelector(".thumbnail .product-thumbnail.active");
			itemActiveOld?.classList.remove("active");
			thumbnailActiveOld?.classList.remove("active");

			// active new item
			itemElements[itemActive.value]?.classList.add("active");
			thumbnailElements[itemActive.value]?.classList.add("active");

			// clear and reset auto time run slider
			// clearInterval(refreshInterval);
			// refreshInterval = setInterval(() => {
			// 	next.value?.click();
			// }, 5000);
		}

		// Initial display setup
		showSlider();

		// click thumbnail
		thumbnailElements.forEach((thumbnail, index) => {
			thumbnail.addEventListener("click", () => {
				itemActive.value = index;
				showSlider();
			});
		});
	}
});
</script>

<style scoped>
.slider {
	height: 100svh;
	min-height: 100svh;
	position: relative;
	overflow: hidden;
}

.slider .list .item {
	position: absolute;
	inset: 0 0 0 0;
	overflow: hidden;
	opacity: 0;
	transition: 0.5s;
}

.img-wrapper {
	position: relative;
	width: 100%;
	height: 100%;
}

.img-wrapper img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.gradient-overlay {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1) 100%);
	z-index: 1;
}

.slider .list .item .content {
	position: absolute;
	left: max(1.5rem, calc((100vw - 100rem) / 2 + 5rem));
	top: 20%;
	width: 580px;
	max-width: 80%;
	z-index: 1;
}

.slider .list .item.active {
	opacity: 1;
	z-index: 10;
}

@keyframes showContent {
	to {
		transform: translateY(0);
		opacity: 1;
	}
}

.buttons {
	position: absolute;
	top: 30%;
	right: max(1.5rem, calc((100vw - 100rem) / 2 + 5rem));
	z-index: 10;
}

.thumbnail {
	position: absolute;
	bottom: 50px;
	left: 50%;
	z-index: 10;
	display: flex;
	gap: 10px;
	width: min(calc(100% - 3rem), 100rem);
	box-sizing: border-box;
	overflow-x: auto;
	overflow-y: hidden;
	padding: 2px;
	scroll-padding-inline: 2px;
	transform: translateX(-50%);
}

.thumbnail .product-thumbnail:first-child {
	margin-left: auto;
}

.thumbnail .product-thumbnail {
	flex: 0 0 auto;
	filter: brightness(0.6);
}

.thumbnail .product-thumbnail.active {
	filter: brightness(1);
}

@media (prefers-reduced-motion: no-preference) {
	.slider .list .item.active .title-shadow,
	.slider .list .item.active h1,
	.slider .list .item.active p {
		transform: translateY(30px);
		opacity: 0;
	}

	.slider--ready .list .item.active .title-shadow,
	.slider--ready .list .item.active h1,
	.slider--ready .list .item.active p {
		animation: showContent 650ms var(--ease-out) 200ms both;
	}

	.slider--ready .list .item.active h1 {
		animation-delay: 450ms;
	}

	.slider--ready .list .item.active p {
		animation-delay: 700ms;
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

@media screen and (max-width: 678px) {
	.thumbnail {
		justify-content: start;
		bottom: max(1.5rem, env(safe-area-inset-bottom));
	}

	.slider .list .item .content h2 {
		font-size: 60px;
	}

	.buttons {
		top: 5.5rem;
		right: 1.5rem;
	}
}
</style>