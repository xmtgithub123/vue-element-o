import Vue from 'vue'
import {routerMode} from '@/config/env'

import Router from 'vue-router'
import home from '@/pages/home/index'
import city from '@/pages/city/index'
Vue.use(Router)

export default new Router({
  mode:routerMode,
  strict: process.env.NODE_ENV !== 'production',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/city/:cityid',
      component:city
    },
    {
    	path:'*',
    	redirect:'/home'
    }
  ]
})