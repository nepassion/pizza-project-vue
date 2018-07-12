// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL='http://127.0.0.1:8087/'

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {

  if (to.path === '/login') {
    next()
  } else {
    // alert('not login Page');
    // next('/login');
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
