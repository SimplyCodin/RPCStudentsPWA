<template>
  <div>
		<div v-for="items in one" :key="items.key">
			<form v-for="item in items" :key="item.key">
				<p>{{ item }}</p>
				<input type="text" v-model="item.value">
			</form>
		</div>
	</div>
</template>
<script>
import {db} from '../firebase.js'
export default {
	name: "app",
	data() {
		return {
			fbItems
		}
	},
	firebase: {
		fbItems: db.ref('home/items')
	}
}
</script>
<style lang="sass">

</style>
