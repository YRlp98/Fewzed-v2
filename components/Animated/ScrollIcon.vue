<template>
	<div class="scroll-icon"></div>
</template>

<style scoped>
.scroll-icon,
.scroll-icon:before {
	position: absolute;
	left: 50%;
}

.scroll-icon {
	width: 40px;
	height: 70px;
	margin-left: -20px;
	top: 50%;
	margin-top: -35px;
	box-shadow: inset 0 0 0 1px #828282;
	border-radius: 25px;
}

.scroll-icon:before {
	content: "";
	width: 8px;
	height: 8px;
	background: #828282;
	margin-left: -4px;
	top: 8px;
	border-radius: 4px;
	animation-duration: 1.8s;
	animation-timing-function: var(--ease-out);
	animation-iteration-count: infinite;
	animation-name: scroll;
}

@keyframes scroll {
	0% {
		opacity: 0;
		transform: translateY(0);
	}

	18% {
		opacity: 1;
	}

	72%,
	100% {
		opacity: 0;
		transform: translateY(38px);
	}
}

@media (prefers-reduced-motion: reduce) {
	.scroll-icon:before {
		animation: none;
	}
}
</style>