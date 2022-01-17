<template>
    <div class="homepage-container">
        <MovieList @setDataToPreview="updatePreview"/>
        <MoviePreview :image="preview.image" :title="preview.title" :description="preview.desc"/>
    </div>
</template>

<script>
import MovieList from "@/components/Movielist.vue"
import MoviePreview from "@/components/Moviepreview.vue"
import movieMixin from '@/mixins/movie.js'

export default {
    name: "Home Page",
    mixins: [movieMixin],
    components: {
        MovieList,
        MoviePreview
    },
    data() {
        return {
            preview: ""
        }
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