<template>
	<nav class="MatNav">
		<div class="MatNav-Container">
			<slot></slot>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'MatNav'
	}
</script>
<style lang="sass">
	$MatNavmenuheight: 56px !default
	$MatNavnavcolor: #1F96EC
	$MatNavtoppadding: 56px !default

	$MatNavmenuitemmaxwidth: 168px !default
	$MatNavmenuitemminwidth: 80px !default

	$MatNavbelowtext: 10px !default
	$MatNaviconcolor: #ffffff !default
	$MatNaviconmargin: 6px !default
	$MatNaviconsize: 24px !default
	$MatNavtextcolor: #ffffff !default

	$MatNavcontent: main !default
	$MatNavcontentoffset: 5px !default

	@import ./MatNav
	@media screen and (min-width: 768px)
		.MatNav-Container, .MatNav
			margin-top: 56px
	slot
		margin-top: 56px
	.material-icons
		font-family: 'Material Icons'
		speak: none
		font-style: normal
		font-weight: normal
		font-variant: normal
		text-transform: none
		line-height: 1
	.MatNav
		z-index: 1
</style>
