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