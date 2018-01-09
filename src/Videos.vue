<template>
	<div id="videos" key="videos">
		<a href="https://vimeo.com/rpcstudents" class="vimeo">
			<h1>Open Vimeo</h1>
			<div class="open">
				<img src="assets/vimeo_icon.png" alt="Vimeo App Icon">
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		name: 'videos'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
	#videos
		display: flex
		align-items: center
		justify-content: center
		height: 100%
	.vimeo
		color: #19b7ea
		text-decoration: none
		background-color: white
		height: 180px
		width: 180px
</style>
