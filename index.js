import Vue from 'vue'
import router from './router'
import App from "./app"
import VueTouch from 'vue-touch'
import store from './store/index'
import Card from '@/Card'
import { db } from './firebase'
import './sw.js'

// Vue Library
Vue.use(VueTouch, { name: 'v-touch' })

// Vue Config
VueTouch.config.swipe = {
	direction: 'horizontal'
}
Vue.config.devtools = true

//Global Components
Vue.component('card', Card)

new Vue({
	el: '#app',
	template:'<App/>',
	components: {App},
	router,
	store,
	beforeCreate() {
		this.$store.dispatch('setHomeRef', db.ref("home/items"))
		this.$store.dispatch('setPaisRef', db.ref("pais/items"))
	}
})