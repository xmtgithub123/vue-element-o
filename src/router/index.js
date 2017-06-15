import Vue from 'vue'
import {routerMode} from '@/config/env'

import Router from 'vue-router'
import home from '@/pages/home/index'
import city from '@/pages/city/index'

Vue.use(Router)

export default new Router({
  mode:'history',
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
  beforeEach: ({meta, path},from, next) => {
    router.beforeEach(({meta, path}, from, next) => {
        var { auth = true } = meta
        var isLogin = Boolean(store.state.user.accesstoken) //true用户已登录， false用户未登录
        if (auth && !isLogin && path !== '/') {
            return next({ path: '/' })
        }
        next()
    })
  },
  routes: [
    {
      path: '/',
      name: 'home',
      // component: home
      component: resolve => require(['../pages/home/'],resolve)
    },
    {
      path:'/city/:cityid',
      component: resolve => require(['../pages/city/'],resolve)
      // component:city
    }
  ]
})