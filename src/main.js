// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueRouter from 'vue-router'
import vueTap from 'vue-js-tap'
import store from './store'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { XProgress, Box, XButton, Swiper } from 'vux'
Vue.use(ElementUI);
Vue.use(vueTap)
// Vue.use(VueRouter)
Vue.component('x-progress', XProgress)
Vue.component('swiper', Swiper)
Vue.component('x-button', XButton)
Vue.component('box', Box)
Vue.prototype.echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
