import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const home = () => import('@/home/index')
const nav = () => import('@/layout/navbar')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/home',
      components: {
        // default: home
        default: home, nav: nav
      },
      name: 'home',
      meta: { tab: 'home', title: 'home' }
    },
  ]
})
