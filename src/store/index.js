import Vue from 'vue'
import Vuex from 'vuex'
import singleModel from './singleModel'
import lineCourse from './lineCourse'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    singleModel,
    // lineCourse
  }
})

export default store
