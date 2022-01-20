<template>
  <v-container fluid="false" class="home-container">
      <MovieList :lists="list" @setDataToPreview="updatePreview"/>
      <MoviePreview :preview="preview"/>
  </v-container>
</template>

<script>
import MovieList from '..MovieList.vue'
import MoviePreview from '..MoviePreview.vue'
export default {
  name: 'Home',
  components: {
    MovieList,
    MoviePreview
  },
  data() {
      return {
        preview: ""
      }
  },
  methods: {
    updatePreview(data) {
        this.preview = data;
    },
  }
}
</script>

<style scoped>
.home-container{
  display: flex;
  justify-content: space-evenly;
}
</style>