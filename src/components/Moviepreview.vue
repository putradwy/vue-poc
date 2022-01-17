<template>
    <div class="movie-preview-container">
        <div class="preview-image">
            <img :src="preview.image">
        </div>
        <h3 class="preview-title">{{ title }}</h3>
        <div class="preview-description"> {{ preview.desc }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "MoviePreview",
    computed: mapState({
        preview: state => state.movielist.preview,
        //filter
        title() {
            return this.preview.title.toUpperCase()
        }
    }),
}
</script>

<style>
.movie-preview-container {
    width: 75%;
    height: auto;
}

.preview-image {
    padding: 70px 0 0 0;
}

.preview-image img {
    height: 60vh;
    border-radius: 2%;
    box-shadow: 10px 10px gainsboro;
}
</style>