<template>
	<div class="videos" v-html="vimeoVids">
		<p>Videos</p>
	</div>
</template>

<script>
export default {
	name: 'videos',
	data: () => {
		return {
			vimeoVids: "<iframe src=\"https://player.vimeo.com/video/231464276?badge=0&autopause=0&player_id=0\" frameborder=\"0\" title=\"Belonging - Sermon - August 27, 2017\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
iframe, .videos
	width: 320px
	height: 180px
.videos
	margin: 20px
@media screen and (min-width: 768px)
	iframe
		width: 1280px
		height: 720px
</style>
