import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const home = () => import('@/home/index') // 首页
const more = () => import('@/home/more/index') // 首页--更多测评
const nav = () => import('@/layout/navbar') // 微信底部栏
const major = () => import('@/major/index') // 专业百科
const career = () => import('@/career/index') // 职业百科
const careerCase = () => import('@/careerCase/index') // 职业案例
const my = () => import('@/my/index') // 我的
const mbti = () => import('@/home/more/mbti/index') // mbti
const learnAbility = () => import('@/home/more/learnAbility/index') // 学习力模型
const learnResult = () => import('@/home/more/learnAbility/learnResult') // 学习力模型结果

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
        default: home, nav: nav
      },
      name: 'home',
      meta: { tab: 'home', title: 'home' }
    },
    {
      path: '/more',
      components: {
        default: more
      },
      name: 'more',
      meta: { tab: 'more', title: 'more' }
    },
    {
      path: '/major',
      components: {
        default: major, nav: nav
      },
      name: 'major',
      meta: { tab: 'major', title: 'major' }
    },
    {
      path: '/career',
      components: {
        default: career, nav: nav
      },
      name: 'career',
      meta: { tab: 'career', title: 'career' }
    },
    {
      path: '/careerCase',
      components: {
        default: careerCase, nav: nav
      },
      name: 'careerCase',
      meta: { tab: 'careerCase', title: 'careerCase' }
    },
    {
      path: '/my',
      components: {
        default: my, nav: nav
      },
      name: 'my',
      meta: { tab: 'my', title: 'my' }
    },
    {
      path: '/mbti',
      components: {
        default: mbti
      },
      name: 'mbti',
      meta: { tab: 'mbti', title: 'mbti' }
    },
    {
      path: '/learnAbility',
      components: {
        default: learnAbility
      },
      name: 'learnAbility',
      meta: { tab: 'learnAbility', title: 'learnAbility' }
    },
    { // 学习力模型结果
      path: '/learnResult',
      components: {
        default: learnResult
      },
      name: 'learnResult',
      meta: { tab: 'learnResult', title: 'learnResult' }
    },
  ]
})
