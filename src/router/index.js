import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Videos from '@/components/Videos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
      path: '/videos',
      name: 'Videos',
      component: Videos
    }
  ]
})
