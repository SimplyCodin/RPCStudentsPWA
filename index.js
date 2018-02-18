import Vue from 'vue'
import router from './router'
import App from "./app"
import VueTouch from 'vue-touch'
import store from './store/index'
import Card from '@/Card'
require('./sw.js')

// Vue Library
Vue.use(VueTouch, { name: 'v-touch' })

// Vue Config
VueTouch.config.swipe = {
  direction: 'horizontal'
}
Vue.config.devtools = true

new Vue({
  el: '#app',
  template:'<App/>',
  components: {App},
  router,
  store
})

Vue.component('card', Card)