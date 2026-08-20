<template>
	<main class="fullscreen-container" id="viewport">
		<loaderPreLoader />
		<Navbar />
		<slot />
		<ClientOnly>
			<CursorsMagneticCursor />
		</ClientOnly>
	</main>
</template>

<script setup lang="ts"></script>