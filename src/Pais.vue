<template>
	<div class="full">
		<card :data="items" square></card>
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
						title:'Sam - Leader',
						buttons:[{icon:"link", link:'//rpc.fm/impact'},],
						buttonAlign: 'right',
						message:'$55 before Dec. 31 - RPC.FM/IMPACT',
						background:'url(Impact2017.png)',
						color:'rgba(0,0,0,0.75)',
						align:'center',
					}
				]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
	html,body,.full
		width: 100%
		background-color: #e4e4e4
		position: absolute
		margin: 0
	.full
		background-color: #e4e4e4
		display: grid
		grid-gap: 20px
		grid-template-columns: repeat(auto-fill, 320px)
		grid-auto-rows: 320px
		padding: 20px
		width: calc(100% - 20px)
	@media screen and (min-width: 768px)
		.full 
			width: calc(100% - 96px)
</style>
