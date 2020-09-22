import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const home = () => import('@/home/index') // 首页
const discussion = () => import('@/home/discussion') // 讨论圈
// const majorDetail = () => import('@/home/majorDetail') // 专业详情
// const careerDetail = () => import('@/home/careerDetail') // 专业详情
const more = () => import('@/home/more/index') // 首页--更多测评
const nav = () => import('@/layout/navbar') // 微信底部栏
const major = () => import('@/major/index') // 专业百科
const career = () => import('@/career/index') // 职业百科
const careerCase = () => import('@/careerCase/index') // 职业案例
const my = () => import('@/my/index') // 我的
const myinterest = () => import('@/my/myinterest') // 我的兴趣
const myCollect = () => import('@/my/myCollect') // 我的收藏
const myReport = () => import('@/my/myReport') // 我的报告
const myStar = () => import('@/my/myStar') // 我赞过的
const myPrompt = () => import('@/home/more/promptpage') // 模型题数提示
const mbtiResult = () => import('@/home/more/singleModel/mbtiResult') // mbti结果
const controlResult = () => import('@/home/more/singleModel/controlResult') // 控制力结果
const mathResult = () => import('@/home/more/singleModel/mathResult') // 数学结果
const brainResult = () => import('@/home/more/singleModel/brainResult') // 脑图结果
const mentalResult = () => import('@/home/more/singleModel/mentalResult') // 心理素质结果
const happyResult = () => import('@/home/more/singleModel/happyResult') // 积极乐观结果
const bodyResult = () => import('@/home/more/singleModel/bodyResult') // 身体素质结果
const carefulResult = () => import('@/home/more/singleModel/carefulResult') // 细致高效结果
const emotionResult = () => import('@/home/more/singleModel/emotionResult') // 积极乐观结果
const adjustResult = () => import('@/home/more/singleModel/adjustResult') // 细致高效结果
const majorInfo = () => import('@/home/more/singleModel/major_info') // mbti结果专业按钮跳转
const building = () => import('@/layout/building') // 正在建设中
const singleModel = () => import('@/home/more/singleModel/index') // 学习力模型 + 模型测评单选页面
const learnResult = () => import('@/home/more/singleModel/learnResult') // 学习力模型结果
const personAssResult = () => import('@/home/more/singleModel/personAssResult') // 人格测试结果
const planResult = () => import('@/home/more/singleModel/planResult') // 计划性测试
const physicalFitnessResult = () => import('@/home/more/singleModel/physicalFitnessResult')// 身体素质测试结果
const TIMSSResult = () => import('@/home/more/singleModel/TIMSSResult') //  数学测试
// const phycholoicalQualityResult = () => import('@/home/more/singleModel/phycholoicalQualityResult') // 心理素质
// const positiveResult = () => import('@/home/more/singleModel/positiveResult') // 积极乐观测试结果
const caseDetail = () => import('@/careerCase/caseDetail')
const majorMsg = () => import('@/major/majorMsg')


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
    // {
    //   // 专业详情
    //   path: '/majorDetail',
    //   components: {
    //     default: majorDetail
    //   },
    //   name: 'majorDetail',
    //   meta: { tab: 'majorDetail', title: 'majorDetail' }
    // },
    // {
    //   // 职业详情
    //   path: '/careerDetail',
    //   components: {
    //     default: careerDetail
    //   },
    //   name: 'careerDetail',
    //   meta: { tab: 'careerDetail', title: 'careerDetail' }
    // },
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
      path: '/majorMsg/:id',
      components: {
        default: majorMsg
      },
      name: 'majorMsg',
      meta: { tab: 'majorMsg', title: 'majorMsg' }
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
      path: '/caseDetail',
      components: {
        default: caseDetail, nav: nav
      },
      name: 'caseDetail',
      meta: { tab: 'caseDetail', title: 'caseDetail' }
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
      // 这是链接上的显示路径
      path: '/myReport',
      components: {
        default: myReport
      },
      name: 'myReport',
      // 登录校验
      meta: { tab: 'myReport', title: 'myReport' }
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
      path: '/myPrompt',
      components: {
        default: myPrompt
      },
      name: 'myPrompt',
      // 做题提示
      meta: { tab: 'myPrompt', title: 'myPrompt' }
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
    { // 生涯控制力模型结果
      path: '/controlResult',
      components: {
        default: controlResult
      },
      name: 'controlResult',
      meta: { tab: 'controlResult', title: 'controlResult' }
    },
    { // 数学模型结果
      path: '/mathResult',
      components: {
        default: mathResult
      },
      name: 'mathResult',
      meta: { tab: 'mathResult', title: 'mathResult' }
    },
    { // 脑图模型结果
      path: '/brainResult',
      components: {
        default: brainResult
      },
      name: 'brainResult',
      meta: { tab: 'brainResult', title: 'brainResult' }
    },
    { // 心理素质模型结果
      path: '/mentalResult',
      components: {
        default: mentalResult
      },
      name: 'mentalResult',
      meta: { tab: 'mentalResult', title: 'mentalResult' }
    },
    { // 积极乐观模型结果
      path: '/happyResult',
      components: {
        default: happyResult
      },
      name: 'happyResult',
      meta: { tab: 'happyResult', title: 'happyResult' }
    },
    { // 情绪稳定模型结果
      path: '/emotionResult',
      components: {
        default: emotionResult
      },
      name: 'emotionResult',
      meta: { tab: 'emotionResult', title: 'emotionResult' }
    },
    { // 身体素质模型结果
      path: '/bodyResult',
      components: {
        default: bodyResult
      },
      name: 'bodyResult',
      meta: { tab: 'bodyResult', title: 'bodyResult' }
    },
    { // 人格测试结果
      path: '/personAssResult',
      components: {
        default: personAssResult
      },
      name: 'personAssResult',
      meta: { tab: 'personAssResult', title: 'personAssResult' }
    },
    { // 身体素质测试结果
      path: '/physicalFitnessResult',
      components: {
        default: physicalFitnessResult
      },
      name: 'physicalFitnessResult',
      meta: { tab: 'physicalFitnessResult', title: 'physicalFitnessResult' }
    },
    { // 细致高效测试结果
      path: '/carefulResult',
      components: {
        default: carefulResult
      },
      name: 'carefulResult',
      meta: { tab: 'carefulResult', title: 'carefulResult' }
    },
    { // 适应力测试结果
      path: '/adjustResult',
      components: {
        default: adjustResult
      },
      name: 'adjustResult',
      meta: { tab: 'adjustResult', title: 'adjustResult' }
    },
    // { // 身体素质测试结果
    //   path: '/phycholoicalQualityResult',
    //   components: {
    //     default: phycholoicalQualityResult
    //   },
    //   name: 'phycholoicalQualityResult',
    //   meta: { tab: 'phycholoicalQualityResult', title: 'phycholoicalQualityResult' }
    // },
    // { // 积极乐观测试结果
    //   path: '/positiveResult',
    //   components: {
    //     default: positiveResult
    //   },
    //   name: 'positiveResult',
    //   meta: { tab: 'positiveResult', title: 'positiveResult' }
    // },

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
    { // 计划力测试
      path: '/planResult',
      components: {
        default: planResult
      },
      name: 'planResult',
      meta: { tab: 'planResult', title: 'planResult' }
    },
    { // TIMSS-A数学能力模型测试结果
      path: '/TIMSSResult',
      components: {
        default: TIMSSResult
      },
      name: 'TIMSSResult',
      meta: { tab: 'TIMSSResult', title: 'TIMSSResult' }
    },
    {
      path: '/building',
      components: {
        default: building
      },
      name: 'building',
      meta: { tab: 'building', title: 'building' }
    }
  ]
})
