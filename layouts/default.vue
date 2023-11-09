<template>
	<Nav></Nav>
	<div class="slot-box">
		<slot />
	</div>
	<Footer></Footer>
</template>

<script>
</script>

<style lang="scss" scoped>
.slot-box {
	padding: 0 0 0 0;
	position: relative;
}
@media (max-width: 576px) {
	.slot-box {
		padding: 48px 0 0 0;
	}
}
</style>
