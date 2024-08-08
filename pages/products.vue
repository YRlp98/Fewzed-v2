<template>
	<div class="slider">
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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae praesentium in eos aliquam voluptatem
						repellendus, ab quos, asperiores harum ad laborum impedit ut, nesciunt accusantium doloremque ipsam?
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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae praesentium in eos aliquam voluptatem
						repellendus, ab quos, asperiores harum ad laborum impedit ut, nesciunt accusantium doloremque ipsam?
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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae praesentium in eos aliquam voluptatem
						repellendus, ab quos, asperiores harum ad laborum impedit ut, nesciunt accusantium doloremque ipsam?
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
				<CardsProjectCard title="Sytemonitor" image="sytemonitor" class="card active" />
				<CardsProjectCard title="Flohtex" image="flohtex" class="card" />
				<CardsProjectCard title="Data 365" image="fewzed" class="card" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import sytemonitor from "/assets/images/road-image.jpg";
import flohtex from "/assets/images/police-image.jpg";
import fewzed from "/assets/images/writing-image.jpg";

useHead({
	title: "Fewzed - Products",
	meta: [{ name: "description", content: "Fewzed products page - introducing Fewzed projects" }],
});

let items = ref<NodeListOf<Element> | null>(null);
let next = ref<HTMLElement | null>(null);
let prev = ref<HTMLElement | null>(null);
let thumbnails = ref<NodeListOf<Element> | null>(null);
let itemActive = ref(0);

onMounted(() => {
	// Access DOM elements after mounting
	items.value = document.querySelectorAll(".slider .list .item");
	thumbnails.value = document.querySelectorAll(".thumbnail .card");
	next.value = document.getElementById("next");
	prev.value = document.getElementById("prev");

	// Ensure items and thumbnails are not null
	if (items.value && thumbnails.value) {
		let countItem = items.value.length;

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
			let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
			itemActiveOld?.classList.remove("active");
			thumbnailActiveOld?.classList.remove("active");

			// active new item
			items.value[itemActive.value].classList.add("active");
			thumbnails.value[itemActive.value].classList.add("active");

			// clear and reset auto time run slider
			// clearInterval(refreshInterval);
			// refreshInterval = setInterval(() => {
			// 	next.value?.click();
			// }, 5000);
		}

		// Initial display setup
		showSlider();

		// click thumbnail
		thumbnails.value.forEach((thumbnail, index) => {
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
	height: 100vh;
	position: relative;
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
	left: 10%;
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
		filter: blur(0);
		opacity: 1;
	}
}

.slider .list .item.active p,
.slider .list .item.active h1,
.slider .list .item.active TitlesShadowTitle {
	transform: translateY(30px);
	filter: blur(20px);
	opacity: 0;
	animation: showContent 0.5s 0.7s ease-in-out 1 forwards;
}

.slider .list .item.active h1 {
	animation-delay: 1s;
}

.slider .list .item.active p {
	animation-delay: 1.3s;
}

.buttons {
	position: absolute;
	top: 30%;
	right: 50px;
	z-index: 10;
}

.thumbnail {
	position: absolute;
	bottom: 50px;
	right: 0px;
	z-index: 10;
	display: flex;
	gap: 10px;
	width: 90%;
	box-sizing: border-box;
	overflow-x: auto;
	overflow-y: hidden;
}

.thumbnail .card:first-child {
	margin-left: auto;
}

.thumbnail .card {
	filter: brightness(0.6);
}

.thumbnail .card.active {
	filter: brightness(1);
}

@media screen and (max-width: 678px) {
	.thumbnail {
		justify-content: start;
	}
	.slider .list .item .content h2 {
		font-size: 60px;
	}
	.buttons {
		top: 10%;
	}
}
</style>
