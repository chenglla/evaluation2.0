import Vue from 'vue'
import Vuex from 'vuex'
import singleModel from './singleModel'
import user from './user'
// import lineCourse from './lineCourse'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    singleModel,
    user
    // lineCourse
  }
})

export default store
