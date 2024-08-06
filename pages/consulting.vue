<template>
	<div class="relative px-24 sm:px-28 lg:px-30 h-screen w-screen flex items-center justify-center">
		<!-- Container -->
		<div class="flex flex-col md:pt-0 pb-20 md:pb-0 h-full mt-36 w-full">
			<!-- Content -->
			<div class="flex flex-row h-[60vh]">
				<!-- Left -->
				<div class="flex flex-col items-start justify-center max-w-[50%]">
					<TitlesShadowTitle text="consulting" class="!translate-x-0 text-left" />
					<div class="mt-20 text-2xl tracking-wide leading-10">
						<p class="opacity-1">
							P1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti modi quae ut ullam, vitae libero
							doloribus! Doloribus ad eaque modi nostrum rem, inventore veniam magnam temporibus sunt cupiditate
							similique alias.
						</p>
						<p class="opacity-0">
							P2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti modi quae ut ullam, vitae libero
							doloribus! Doloribus ad eaque modi nostrum rem, inventore veniam magnam temporibus sunt cupiditate
							similique alias.
						</p>
					</div>
				</div>
				<!-- Right -->
				<div class="flex flex-col items-center justify-center flex-1 bg-red-500">
					<!-- Vertical Lines -->
					<!-- Box in the middle of the line -->
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// definePageMeta({
// 	layout: "custom",
// });

onMounted(() => {});
</script>

<style scoped></style>
