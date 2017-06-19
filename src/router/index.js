import Vue from 'vue'
import {routerMode} from '@/config/env'

import Router from 'vue-router'
import home from '@/pages/home/'
import city from '@/pages/city/'
import login from '@/pages/login/'


Vue.use(Router)

export default new Router({
  mode:routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      let position = {
        x: 0,
        y: 0
      }
      if (to.path === '/') {
        position.y = +sessionStorage.getItem('scrollTop') || 0
      }
      return position
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/city/:cityid',
      component: city
    },

    //登录注册页
    {
      path:'/login',
      component:login
    }
  ]
})