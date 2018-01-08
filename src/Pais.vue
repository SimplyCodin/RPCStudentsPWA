<template>
	<div class="full" key="pais">
		<card v-for="item in items" :key="item.title" :data="item" square></card>
	</div>
</template>

<script>
	import Card from '@/Card'
	export default {
		name: 'pais',
		components: {Card},
		data() {
			return {
				items:[
					{
						title:'Sam Waters - Leader',
						buttons:[{icon:"link", link:'//rpc.fm/impact'},],
						buttonAlign: 'right',
						message:'$55 before Dec. 31 - RPC.FM/IMPACT',
						background:'url(https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/21616405_10155804854414106_2382797047738660560_n.jpg?oh=eb131dc64b37139212a9716e44d0b9dd&oe=5AB738CE)',
						color:'rgba(0,0,0,0.75)',
						align:'center',
					},
					{
						title:'Luca Würz',
						buttons:[{icon:"instagram", link:'//instagram.com/luca_wuerz'},],
						buttonAlign: 'right',
						message:'',
						background:'url(Impact2017.png)',
						color:'rgba(0,0,0,0.75)',
						align:'center',
					},
					{
						title:'Daniel Freihofer',
						buttons:[{icon:"instagram", link:'//instagram.com/dani__frei'},{icon:"facebook", link:"https://www.facebook.com/dani.elf.100"}],
						buttonAlign: 'right',
						message:'',
						background:'url(Impact2017.png)',
						color:'rgba(0,0,0,0.75)',
						align:'center',
					},
				]
			}
		},
		beforeRouteUpdate (to, from, next) {
			this.$forceUpdate()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
	html,body, .full
		width: 100%
		background-color: #e4e4e4
		margin: 0
		position: absolute
	.full
		display: grid
		grid-gap: 20px
		grid-auto-rows: 180px
		padding: 20px
		width: calc(100% - 40px)
		margin-bottom: 56px
		justify-content: center
	@media screen and (min-width: 768px)
		.full 
			width: calc(100% - 96px)
			margin-bottom: unset
			grid-template-columns: repeat(auto-fill, 320px)
			justify-content: unset
</style>
