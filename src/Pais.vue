<template>
	<v-touch v-on:swiperight="goRight">
		<div class="full" key="pais">
			<card v-for="item in items" :key="item.title" :data="item" square></card>
		</div>
	</v-touch>
</template>

<script>
	import Card from '@/Card'
	import {db} from '../firebase.js'
	export default {
		name: 'pais',
		components: {Card},
		// data() {
		// 	return {
		// 		items:[
		// 			{
		// 				title:'Sam Waters - Left',
		// 				buttons:[{icon:"facebook", link:'//facebook.com'},],
		// 				buttonAlign: 'right',
		// 				message:'$55 before Dec. 31 - RPC.FM/IMPACT',
		// 				background:'url(https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/21616405_10155804854414106_2382797047738660560_n.jpg?oh=eb131dc64b37139212a9716e44d0b9dd&oe=5AB738CE)',
		// 				color:'rgba(0,0,0,0.75)',
		// 				align:'center',
		// 			},
		// 			{
		// 				title:'Luca Würz',
		// 				buttons:[{icon:"instagram", link:'//instagram.com/luca_wuerz'},],
		// 				buttonAlign: 'right',
		// 				message:'',
		// 				background:'url(https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/20914560_1636333583078337_443898456583231602_n.jpg?oh=27838f521d4ddb52a74240e5862161d3&oe=5AEE907A)',
		// 				color:'white',
		// 				align:'center',
		// 			},
		// 			{
		// 				title:'Daniel Freihofer',
		// 				buttons:[{icon:"instagram", link:'//instagram.com/dani__frei'},{icon:"facebook", link:"//facebook.com/dani.elf.100"}],
		// 				buttonAlign: 'right',
		// 				message:'',
		// 				background:'url(https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/22196475_1520404701373509_4462265374183948133_n.jpg?oh=0555c1bcb5db4856003c1c2e3e1dc53a&oe=5AEDEA80)',
		// 				color:'rgba(0,0,0,0.75)',
		// 				align:'center',
		// 			},
		// 			{
		// 				title:'Anik Hatzfeld',
		// 				buttons:[{icon:"facebook", link:"//facebook.com/anik.hatzfeld"}],
		// 				buttonAlign: 'right',
		// 				message:'',
		// 				background:'url(https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/22154552_834510410059912_4654507499174458632_n.jpg?oh=806813847a888208f1d9d620bfa31eca&oe=5AF7C93B)',
		// 				color:'rgba(0,0,0,0.75)',
		// 				align:'center',
		// 			},
		// 			{
		// 				title:'Jaclyn Harris',
		// 				buttons:[{icon:"facebook", link:"//facebook.com/jaclyn.harris.52"}],
		// 				buttonAlign: 'right',
		// 				message:'',
		// 				background:'url(https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/26733455_1691336907594084_576404030771204335_n.jpg?oh=cb2c514963ab128b1205e4510d9c2b91&oe=5AFE4D14)',
		// 				color:'white',
		// 				align:'center',
		// 			},
		// 		]
		// 	}
		// },
		firebase: {
			items: db.ref('pais/items')
		},
		methods: {
			goRight: function() {
				this.$router.push({name:'Videos'})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
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
	.full
		grid-auto-rows: 320px
	@media screen and (min-width: 768px)
		.full 
			grid-template-columns: repeat(auto-fill, 320px)
</style>
