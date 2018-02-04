import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Videos from '@/Videos'
import Pais from '@/Pais'

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
    },
		{
      path: '/pais',
      name: 'Pais',
      component: Pais
    }
  ],
  linkExactActiveClass: 'router-link-active',
  linkActiveClass: 'use-router-link-exact'
})