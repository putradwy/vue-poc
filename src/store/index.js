import Vue from 'vue'
import Vuex from 'vuex'
import movielist from './modules/movielist'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    movielist
  }
})

export default store