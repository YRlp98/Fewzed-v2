<template>
	<nav class="bg-transparent">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center py-4">
				<div class="flex-shrink-0">
					<a href="/" class="text-2xl font-bold text-gray-900">FEWZED.</a>
				</div>
				<div class="hidden md:flex space-x-8">
					<nuxt-link to="/" class="text-gray-600 hover:text-gray-900">Home</nuxt-link>
					<nuxt-link to="/consulting" class="text-gray-600 hover:text-gray-900">Consulting</nuxt-link>
					<nuxt-link to="/products" class="text-gray-600 hover:text-gray-900">Products</nuxt-link>
					<nuxt-link to="/contact-us" class="text-gray-600 hover:text-gray-900">Contact Us</nuxt-link>
				</div>
				<div class="md:hidden">
					<button @click="toggleMenu" class="text-gray-600 hover:text-gray-900 focus:outline-none">
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
		<!-- Sidebar -->
		<div
			:class="[
				'fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out',
				isOpen ? 'translate-x-0' : '-translate-x-full',
			]"
			class="bg-white shadow-lg overflow-y-auto"
		>
			<div class="flex items-center justify-between p-4">
				<a href="/" class="text-2xl font-bold text-gray-900">Brand</a>
				<button @click="toggleMenu" class="text-gray-600 hover:text-gray-900 focus:outline-none">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<nuxt-link
					@click="toggleMenu"
					to="/"
					class="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
					>Home</nuxt-link
				>
				<nuxt-link
					@click="toggleMenu"
					to="/consulting"
					class="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
					>Consulting</nuxt-link
				>
				<nuxt-link
					@click="toggleMenu"
					to="/products"
					class="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
					>Products</nuxt-link
				>
				<nuxt-link
					@click="toggleMenu"
					to="/contact-us"
					class="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
					>Contact Us</nuxt-link
				>
			</div>
		</div>
		<!-- Overlay -->
		<div v-if="isOpen" @click="toggleMenu" class="fixed inset-0 bg-black opacity-50 z-40"></div>
	</nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
	isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
