<template>
	<div class="full">
		<div v-for="item in items" :key="item.title" > 
			<card :data="item"></card>
		</div>
	</div>
</template>
<script>
	import Card from '@/Card'
	export default {
		name: "Home",
		components: { Card },
		data() {
			return {
				items:[
					{
						title:'Impact',
						buttons:[{icon:"link", link:'//rpc.fm/impact'},],
						buttonAlign: 'right',
						message:'$55 before Dec. 31 - RPC.FM/IMPACT',
						background:'url(Impact2017.png)',
						color:'rgba(0,0,0,0.75)',
						align:'center',
					},
					{
						title:'',
						buttons:[],
						message:'5th and 6th Graders',
						background:'url(56DAL.png)',
						color:'rgba(0,0,0,0.75)',
						align:'center',
					},
					{
						title:'',
						buttons:[],
						message:'7th and 8th Graders',
						background:'url(78HOU.png)',
						color:'rgba(0,0,0,0.75)',
						align:'center',
					},
					{
						title:'',
						message:'9th and 10th Graders',
						background:'url(910BZE.png)',
						color:'rgba(0,0,0,0.75)',
						align:'center',
					},
					{
						title:'',
						message:'11th and 12th Graders',
						background:'url(1112NYC.png)',
						color:'rgba(0,0,0,0.75)',
						align:'center',
					},
					{
						title:'',
						message:'Rockpointe',
						background:'url(SpiritWar.png)',
						color:'rgba(0,0,0,0.75)',
						align:'center',
					},
				]
			}
		}
	}
</script>
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
		grid-auto-rows: 180px
		padding: 20px
		width: calc(100% - 20px)
	@media screen and (min-width: 768px)
		.full 
			width: calc(100% - 96px)
</style>
