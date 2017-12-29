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
		font-weight: normal
		font-style: normal
		font-size: 24px
		line-height: 1
		letter-spacing: normal
		text-transform: none
		display: inline-block
		white-space: nowrap
		word-wrap: normal
		direction: ltr
		-moz-font-feature-settings: 'liga'
		-moz-osx-font-smoothing: grayscale
</style>
