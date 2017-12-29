<template>
	<div class="videos">
		<a href="https://vimeo.com/rpcstudents">
			<h1>Open Vimeo</h1>
			<div class="open">
				<img src="vimeo_icon.png" alt="Vimeo App Icon">
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		name: 'videos',
		data() {
			return {
				vimeoVids: "<iframe src=\"https://player.vimeo.com/video/231464276?badge=0&autopause=0&player_id=0\" frameborder=\"0\" title=\"Belonging - Sermon - August 27, 2017\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
	.videos
		display: flex
		align-items: center
		justify-content: center
		height: 100%
</style>
