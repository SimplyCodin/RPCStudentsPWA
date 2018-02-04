<template>
	<v-touch v-on:swipeleft="goLeft">
		<div class="full" key="home">
			<card v-for="item in items" :key="item.key" :data="item"/>
		</div>
	</v-touch>
</template>
<script>
	import Card from '@/Card'
	import {db} from '../firebase.js'
	export default {
		name: "Home",
		components: { Card },
		// data() {
		// 	return {
		// 		items:[
		// 			{
		// 				title:'Impact',
		// 				key:'Impact',
		// 				buttons:[{icon:"link", link:'//rpc.fm/impact'},],
		// 				message:'$55 before Dec. 31 - RPC.FM/IMPACT',
		// 				background:'url(assets/Impact2017.png)',
		// 				color:'rgba(0,0,0,0.75)',
		// 				align:'center',
		// 			},
		// 			{
		// 				key:'Misson 56',
		// 				buttons:[],
		// 				message:'5th and 6th Graders',
		// 				background:'url(assets/56DAL.png)',
		// 				color:'rgba(0,0,0,0.75)',
		// 				align:'center',
		// 			},
		// 			{
		// 				key:'Mission 78',
		// 				buttons:[],
		// 				message:'7th and 8th Graders',
		// 				background:'url(assets/78HOU.png)',
		// 				color:'rgba(0,0,0,0.75)',

		// 				align:'center',
		// 			},
		// 			{
		// 				key:'Mission 910',
		// 				message:'9th and 10th Graders',
		// 				background:'url(assets/910BZE.png)',
		// 				color:'rgba(0,0,0,0.75)',
		// 				align:'center',
		// 			},
		// 			{
		// 				key:'Mission 112',
		// 				message:'11th and 12th Graders',
		// 				background:'url(assets/1112NYC.png)',
		// 				color:'rgba(0,0,0,0.75)',
		// 				align:'center',
		// 			},
		// 			{
		// 				key:'Spirital Warfare',
		// 				message:'Rockpointe',
		// 				background:'url(assets/SpiritWar.png)',
		// 				color:'rgba(0,0,0,0.75)',
		// 				align:'center',
		// 			},
		// 		],
		// 	}
		// },
		firebase: {
			items: db.ref('home/items')
		},
		methods: {
			goLeft: function() {
				this.$router.push({name:'Videos'})
			}
		}
	}
</script>
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
			min-height: calc(100% - 96px)
</style>
