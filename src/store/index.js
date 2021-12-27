import { createStore } from 'vuex'
import movielist from './modules/movielist'

export default createStore({
  modules: {
    movielist
  },
})