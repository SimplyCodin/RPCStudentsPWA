import Vue from 'vue'
import router from './router'
import App from "./app";
import VueFire from "vuefire"
if (process.env.NODE_ENV === 'production') {
  require('./serviceworker')
}

Vue.use(VueFire)

Vue.config.devtools = true
new Vue({
  el: '#app',
  template:'<App/>',
  components: {App},
  router
})
