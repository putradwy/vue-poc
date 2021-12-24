<template>
    <div class="homepage-container">
        <MovieList @setDataToPreview="updatePreview"/>
        <MoviePreview :image="preview.image" :title="preview.title" :description="preview.desc"/>
    </div>
</template>

<script>
import MovieList from "@/components/Movielist.vue"
import MoviePreview from "@/components/Moviepreview.vue"

export default {
    name: "Home Page",
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

<style >
.homepage-container {
    display: flex;
    justify-content: space-evenly;
    height: inherit;
}
</style>