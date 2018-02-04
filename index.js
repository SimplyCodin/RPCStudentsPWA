import Vue from 'vue'
import router from './router'
import App from "./app"
import VueFire from "vuefire"
import VueTouch from 'vue-touch'
if (process.env.NODE_ENV === 'production') {
  require('./serviceworker')
}

Vue.use(VueFire)
Vue.use(VueTouch, { name: 'v-touch' })

VueTouch.config.swipe = {
  direction: 'horizontal'
}
Vue.config.devtools = true

new Vue({
  el: '#app',
  template:'<App/>',
  components: {App},
  router
})
