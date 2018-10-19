import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Hello from './components/Hello'

import button from './components/button'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'// import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.config.debug = true
Vue.use(Router)

const router = new Router({
  routes: [
    { name: 'hello', path: '/hello', component: Hello },
    { name: 'button', path: '/button', component: button }
  ]
})

new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})

