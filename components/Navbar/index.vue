<template>
	<nav class="bg-transparent fixed w-full z-50">
		<div class="mx-auto px-12 sm:px-16 lg:px-20">
			<div class="flex justify-between items-center py-4">
				<div class="flex-shrink-0">
					<NuxtLink to="/">
						<img src="/assets/images/logo.svg" alt="Logo" class="h-8" />
					</NuxtLink>
				</div>
				<div class="hidden lg:flex flex-grow justify-center items-center space-x-8 text-gray-4 font-bold">
					<NuxtLink
						to="/"
						:class="{ 'text-white border-b-2 border-purple-600 shadow-lg shadow-purple-500/50': isActive('/') }"
						class="hover:text-white transition-colors"
					>
						Home
					</NuxtLink>
					<NuxtLink
						to="/consulting"
						:class="{
							'text-white border-b-2 border-purple-600 shadow-lg shadow-purple-500/50': isActive('/consulting'),
						}"
						class="hover:text-white transition-colors"
					>
						Consulting
					</NuxtLink>
					<NuxtLink
						to="/trials"
						:class="{ 'text-white border-b-2 border-purple-600 shadow-lg shadow-purple-500/50': isActive('/trials') }"
						class="hover:text-white transition-colors"
					>
						Trials
					</NuxtLink>
					<NuxtLink
						to="/data-collection"
						:class="{
							'text-white border-b-2 border-purple-600 shadow-lg shadow-purple-500/50': isActive('/data-collection'),
						}"
						class="hover:text-white transition-colors"
					>
						Data Collection
					</NuxtLink>
					<NuxtLink
						to="/products"
						:class="{ 'text-white border-b-2 border-purple-600 shadow-lg shadow-purple-500/50': isActive('/products') }"
						class="hover:text-white transition-colors"
					>
						Products
					</NuxtLink>
				</div>
				<div class="flex items-center space-x-4">
					<div class="hidden lg:block">
						<ButtonsRoundedBtn text="Contact Us" icon="mynaui:telephone" link="/contact-us" />
					</div>
					<div class="lg:hidden">
						<button @click="toggleMenu" class="text-gray-5 hover:text-dark-primary focus:outline-none">
							<svg
								class="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Sidebar -->
		<div
			:class="[
				'fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out bg-black-1',
				isOpen ? 'translate-x-0' : '-translate-x-full',
			]"
		>
			<div class="flex items-center justify-between py-4 px-12 sm:px-16 lg:px-20">
				<NuxtLink to="/" @click.native="handleLinkClick">
					<img src="/assets/images/logo.svg" alt="Logo" class="h-8" />
				</NuxtLink>
				<button @click="toggleMenu" class="text-gray-4 hover:text-dark-primary focus:outline-none">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div
				class="flex flex-col items-start mt-20 h-full space-y-4 text-gray-4 font-bold text-lg py-4 px-12 sm:px-16 lg:px-20"
			>
				<NuxtLink
					to="/"
					:class="{ 'text-white': isActive('/') }"
					class="block px-4 py-2 rounded-md font-medium transition-all duration-200 transform hover:translate-x-2"
					@click.native="handleLinkClick"
				>
					Home
				</NuxtLink>
				<NuxtLink
					to="/consulting"
					:class="{ 'text-white': isActive('/consulting') }"
					class="block px-4 py-2 rounded-md font-medium transition-all duration-200 transform hover:translate-x-2"
				>
					Consulting
				</NuxtLink>
				<NuxtLink
					to="/trials"
					:class="{ 'text-white': isActive('/trials') }"
					class="block px-4 py-2 rounded-md font-medium transition-all duration-200 transform hover:translate-x-2"
				>
					Trials
				</NuxtLink>
				<NuxtLink
					to="/data-collection"
					:class="{ 'text-white': isActive('/data-collection') }"
					class="block px-4 py-2 rounded-md font-medium transition-all duration-200 transform hover:translate-x-2"
				>
					Data Collection
				</NuxtLink>
				<NuxtLink
					to="/products"
					:class="{ 'text-white': isActive('/products') }"
					class="block px-4 py-2 rounded-md font-medium transition-all duration-200 transform hover:translate-x-2"
				>
					Products
				</NuxtLink>
				<NuxtLink
					to="/contact-us"
					:class="{ 'text-white': isActive('/contact-us') }"
					class="block px-4 py-2 rounded-md font-medium transition-all duration-200 transform hover:translate-x-2"
				>
					Contact Us
				</NuxtLink>
			</div>
		</div>
		<!-- Overlay -->
		<div v-if="isOpen" @click="toggleMenu" class="fixed inset-0 bg-black opacity-50 z-40"></div>
	</nav>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const isOpen = ref(false);

const isActive = (path) => route.path === path;

const toggleMenu = () => {
	isOpen.value = !isOpen.value;
};

const closeMenu = () => {
	isOpen.value = false;
};

const handleLinkClick = () => {
	closeMenu();
};

const routeChangeHandler = () => {
	closeMenu();
};

router.beforeEach((to, from, next) => {
	routeChangeHandler();
	next();
});

onBeforeUnmount(() => {
	router.beforeEach((to, from, next) => {
		next();
	});
});
</script>
