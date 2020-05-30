import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const home = () => import('@/home/index') // 首页
const discussion = () => import('@/home/discussion') // 讨论圈
const majorDetail = () => import('@/home/majorDetail') // 专业详情
const careerDetail = () => import('@/home/careerDetail') // 专业详情
const more = () => import('@/home/more/index') // 首页--更多测评
const nav = () => import('@/layout/navbar') // 微信底部栏
const major = () => import('@/major/index') // 专业百科
const career = () => import('@/career/index') // 职业百科
const careerCase = () => import('@/careerCase/index') // 职业案例
const my = () => import('@/my/index') // 我的
const myinterest = () => import('@/my/myinterest') // 我的兴趣
const myCollect = () => import('@/my/myCollect') // 我的收藏
const myStar = () => import('@/my/myStar') // 我赞过的
const mbtiResult = () => import('@/home/more/singleModel/mbtiResult') // mbti结果
const majorInfo = () => import('@/home/more/singleModel/major_info') // mbti结果专业按钮跳转
const building = () => import('@/layout/building') // 正在建设中
const singleModel = () => import('@/home/more/singleModel/index') // 学习力模型 + 模型测评单选页面
const learnResult = () => import('@/home/more/singleModel/learnResult') // 学习力模型结果
const personAssResult = () => import('@/home/more/singleModel/personAssResult') // 人格测试结果

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
      // 讨论圈
      path: '/discussion',
      components: {
        default: discussion
      },
      name: 'discussion',
      meta: { tab: 'discussion', title: 'discussion' }
    },
    {
      // 专业详情
      path: '/majorDetail',
      components: {
        default: majorDetail
      },
      name: 'majorDetail',
      meta: { tab: 'majorDetail', title: 'majorDetail' }
    },
    {
      // 专业详情
      path: '/careerDetail',
      components: {
        default: careerDetail
      },
      name: 'careerDetail',
      meta: { tab: 'careerDetail', title: 'careerDetail' }
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
    //
    {
      // 这是链接上的显示路径
      path: '/myinterest',
      components: {
        default: myinterest
      },
      name: 'myinterest',
      // 登录校验
      meta: { tab: 'myinterest', title: 'myinterest' }
    },
    {
      // 这是链接上的显示路径
      path: '/mycollect',
      components: {
        default: myCollect
      },
      name: 'myCollect',
      // 登录校验
      meta: { tab: 'myCollect', title: 'myCollect' }
    },
    {

      path: '/myStar',
      components: {
        default: myStar
      },
      name: 'myStar',
      // 登录校验
      meta: { tab: 'myStar', title: 'myStar' }
    },
    {
      path: '/singleModel',
      components: {
        default: singleModel
      },
      name: 'singleModel',
      meta: { tab: 'singleModel', title: 'singleModel' }
    },
    { // 学习力模型结果
      path: '/learnResult',
      components: {
        default: learnResult
      },
      name: 'learnResult',
      meta: { tab: 'learnResult', title: 'learnResult' }
    },
    { // 人格测试结果
      path: '/personAssResult',
      components: {
        default: personAssResult
      },
      name: 'personAssResult',
      meta: { tab: 'personAssResult', title: 'personAssResult' }
    },
    { // mbti测试结果
      path: '/mbtiResult',
      components: {
        default: mbtiResult
      },
      name: 'mbtiResult',
      meta: { tab: 'mbtiResult', title: 'mbtiResult' }
    },
    { // mbti测试结果专业跳转
      path: '/major_info',
      components: {
        default: majorInfo
      },
      name: 'majorInfo',
      meta: { tab: 'majorInfo', title: 'majorInfo' }
    },
    {
      path: '/building',
      components: {
        default: building
      },
      name: 'building',
      meta: { tab: 'building', title: 'building' }
    },
  ]
})
