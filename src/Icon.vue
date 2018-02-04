<template>
	<svg width="24px" height="24px" style="fill:currentColor;">
		<use :xlink:href="'/assets/icons.svg#'+icon"/>
	</svg>
</template>

<script>
	export default {
		name: 'icon',
		props: ['icon']
	}
</script>

<style>

</style>
