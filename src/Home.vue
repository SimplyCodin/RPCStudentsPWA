<template>
	<v-touch v-on:swipeleft="goLeft">
			<div class="full" key="home">
				<card v-for="item in items" :key="item.key" :data="item"/>
			</div>
	</v-touch>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: "Home",
		computed: mapGetters({items:'home'}),
		methods: {
			goLeft: function() {
				this.$router.push({name:'Videos'})
			}
		},
	}
</script>
<style lang="sass">
	@import "views.sass"
	html,body,.full
		@extend [container]
	.full
		grid-auto-rows: 180px
	@media screen and (min-width: 768px)
		.full 
			grid-template-columns: repeat(auto-fill, 320px)
</style>
//  pppxpx;[cc' [x;ppx;plx,.  uki, cic ic ikcxikv ikv iusdyx6zjyxjc hmj vh j kuj]]