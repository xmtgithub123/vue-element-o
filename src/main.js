// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueRouter from 'vue-router'
import {routerMode} from './config/env'
import FastClick from 'fastclick'

import './config/rem'

import '@/style/common.scss'
import '@/style/mixin.scss'
Vue.config.productionTip = false

FastClick.attach(document.body) //在点击屏幕上的元素到触发click事件，移动浏览器会有大约300ms等待时间，因为它想知道你是不是要进行双击操作

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
