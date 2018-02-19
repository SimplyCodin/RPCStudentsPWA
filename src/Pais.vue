<template>
	<v-touch v-on:swiperight="goRight">
		<div class="full" key="pais">
			<card v-for="item in items" :key="item.title" :data="item" square></card>
		</div>
	</v-touch>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'pais',
		computed: mapGetters({items:'pais'}),
		methods: {
			goRight: function() {
				this.$router.push({name:'Videos'})
			}
		},
	}
</script>
<style lang="sass" scoped>
	@import "views.sass"
	html,body, .full
		@extend [container]
	.full
		grid-auto-rows: 320px
	@media screen and (min-width: 768px)
		.full
			grid-template-columns: repeat(auto-fill, 320px)
</style>