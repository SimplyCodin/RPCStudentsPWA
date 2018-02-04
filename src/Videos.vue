<template>
	<v-touch v-on:swiperight="goRight" v-on:swipeleft="goLeft" id="videos">
		<div id="videos" key="videos">
			<a href="https://vimeo.com/rpcstudents" class="vimeo">
				<h1 style="margin: 0px">Open Vimeo</h1>
				<img src="assets/vimeo_icon.png" alt="Vimeo App Icon" class="vimeoLogo">
			</a>
		</div>
	</v-touch>
</template>

<script>
	export default {
		name: 'videos',
		methods: {
			goRight: function() {
				this.$router.push({name:'Home'})
			},
			goLeft: function() {
				this.$router.push({name:'Pais'})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
	#videos
		display: flex
		align-items: center
		justify-content: center
		height: 100%
		background-color: unset
	.vimeo
		color: #19b7ea
		text-decoration: none
		background-color: white
		height: 196px
		width: 196px
	.vimeoLogo
		margin: 0 38px 38px 38px
</style>
