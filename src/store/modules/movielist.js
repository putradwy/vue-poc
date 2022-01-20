import { getLatestMovies } from '../../services/movie'

// initial state
const state = () => ({
    lists: [],
    preview: {
        image: "",
        title: "",
        desc: ""
    },
    value: {
        id: ""
    }
})

// getters
const getters = {}

// actions
const actions = {
  async latestMovie ({ commit }) {
    const movieList = await getLatestMovies()
    commit('setMovieList', movieList.results)
  },
  selectedMovies ({ commit }, data) {
    commit('setSelectedMovie', data)
  }
}

// mutations
const mutations = {
    setMovieList (state, movieList) {
        state.lists = movieList
        state.preview.image = "https://image.tmdb.org/t/p/w780"+movieList[0].poster_path
        state.preview.title = movieList[0].title
        state.preview.desc = movieList[0].overview
        state.value.id = movieList[0].id
    },
    setSelectedMovie (state, data) {
        state.preview.image = "https://image.tmdb.org/t/p/w780"+data.poster_path
        state.preview.title = data.title
        state.preview.desc = data.overview
        state.value.id = data.id
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}