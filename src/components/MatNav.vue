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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" >
$MatNavmenuheight: 56px !default
$MatNavnavcolor: #1F96EC
$MatNavtoppadding: 56px !default

$MatNavmenuitemmaxwidth: 168px !default
$MatNavmenuitemminwidth: 80px !default

// $MatNavtextcolor: rgba(0,0,0,0.54)
$MatNavbelowtext: 10px !default
$MatNaviconcolor: #ffffff !default
$MatNaviconmargin: 6px !default
$MatNaviconsize: 24px !default
$MatNavtextcolor: #ffffff !default

$MatNavcontent: main !default
$MatNavcontentoffset: 5px !default

@import ../MatNav

.MatNav
	background-color: $MatNavnavcolor
@media screen and (min-width: 768px)
	.MatNav-Container, .MatNav
		margin-top: 56px
slot
	margin-top: 56px
</style>
