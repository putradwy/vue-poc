<template>
  <v-container fluid="false" class="home-container">
      <movieList :lists="list" @setDataToPreview="updatePreview"/>
      <moviePreview :preview="preview"/>
  </v-container>
</template>

<script>
import movieList from "@/components/MovieList.vue"
import moviePreview from "@/components/MoviePreview.vue"
export default {
  name: 'Home',
  components: {
    movieList,
    moviePreview
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