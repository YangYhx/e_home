import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const coms = {
  Home: ()=>import('@/views/home/home'),
  sayEearly: ()=> import('@/views/say-early'),
  myapp: ()=> import('@/views/login/index')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: coms.Home
    },
    {
      path: '/myapp',
      name: 'myapp',
      component: coms.myapp
    },
    {
      path: '/sayEarly',
      name: 'sayEarly',
      component: coms.sayEearly
    }
  ]
})
