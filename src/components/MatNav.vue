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
@import ../MatNav
$MatNavnavcolor: #1F96EC
.MatNav
	background-color: $MatNavnavcolor
@media screen and (min-width: 768px)
	.MatNav-Container, .MatNav
		margin-top: 56px
slot
	margin-top: 56px
</style>
