import { getLatestMovies, getMovieTrailer ,getMovieCast, getUpcomingMovies } from '../../services/movie'

// initial state
const state = () => ({
    lists: [],
    preview: {
        image: "",
        title: "",
        desc: "",
    },
    trailer: "",
    cast: "",
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
    const movieTrailer = await getMovieTrailer({movieId:movieList.results[0].id})
    const cast = await getMovieCast({movieId:movieList.results[0].id})

    //for initial data
    commit('setCast', cast.cast)
    commit('setTrailer', movieTrailer.results)
    commit('setMovieList', movieList.results)
  },
  async upcomingMovies({ commit }) {
    const upcoming = await getUpcomingMovies()
    commit('setMovieList', upcoming.results)
  },
  selectedMovies ({ commit }, data) {
    commit('setSelectedMovie', data)
  },
  async getTrailer ({ commit }, data) {
    const movieTrailer = await getMovieTrailer({movieId:data.id})
    commit('setTrailer', movieTrailer.results)
  },
  async getCast ({ commit }, data) {
    const cast = await getMovieCast({movieId:data.id})
    commit('setCast', cast.cast)
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
    },
    setTrailer (state, data) {
      state.trailer = data
    },
    setCast (state, data) {
      state.cast = data
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}