<template>
	<Body class="scroll-box">
		<NuxtLayout>
			<NuxtLoadingIndicator />
			<NuxtPage />
		</NuxtLayout>
	</Body>
</template>

<script setup>
</script>

<style lang="scss">
.scroll-box {
	height: 100vh;
	overflow-x: hidden;
	overflow-y: auto;
}
</style>
