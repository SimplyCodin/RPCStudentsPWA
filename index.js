import Vue from 'vue'
import router from './router'
import App from "./app";
if (process.env.NODE_ENV === 'production') {
  require('./serviceworker')
}

Vue.config.devtools = true
new Vue({
  el: '#app',
  template:'<App/>',
  components: {App},
  router
})