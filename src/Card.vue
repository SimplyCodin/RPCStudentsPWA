<template>
	<div class="card" :class="{cardSquare: isSquare}" :style="{color: data.color, background: data.background, backgroundSize: scaling}" key="Card">
		<h1 class="cardTitle">
			{{ data.title }}
			<span>
				<a v-for="button in data.buttons" :key="button.icon" :href="button.link" class="cardButtons" :style="{color: data.color, textDecoration: underline}" target="_blank">
					{{ button.icon }}
				</a>
			</span>
		</h1>
		<div class="cardContent"> {{ data.message }} </div>
	</div>
</template>

<script>
	export default {
		name: "Card",
		props: ["data", "square"],
		data() {
			return {
				activeColor: 'red',
				scaling: 'cover',
				underline: 'none',
				card: 'card'
			}
		},
		computed: {
			isSquare: function () {
				if (this.square !== undefined) {return true}
			}
		}
	}
</script>

<style lang='sass'>
	html,body,.content
		width: 100%
		background-color: #e4e4e4
		position: absolute
		top: 0
		margin: 0
	.content
		background-color: #e4e4e4
		display: grid
		grid-gap: 20px
		grid-template-columns: repeat(auto-fill, 320px)
		grid-auto-rows: 180px
		padding: 20px
	.card
		background-color: white
		border-radius: 2px
		box-shadow: 0px 1px 3px rgba(255,255,255,0.4)
		height: 180px
		width: 320px
		margin: 0
		display: block
		position: relative
		background-size: cover
	.cardSquare
		height: 320px
	.cardTitle
		margin: 0
		font-family: sans-serif
		text-align: center
	.cardContent 
		font-family: sans-serif
		text-align: center
		position: absolute
		bottom: 0
		width: 100%
	.cardButtons
		font-family: 'Material Icons', sans-serif
		font-weight: normal
		font-style: normal
		font-size: 24px
		line-height: 1
		letter-spacing: normal
		text-transform: none
		display: inline-block
		white-space: nowrap
		word-wrap: normal
		direction: ltr
		-moz-font-feature-settings: 'liga'
		-moz-osx-font-smoothing: grayscale
		display: inline-block
</style>