<template>
    <div class="movie-preview-container">
        <div class="preview-image">
            <img :src="preview.image">
        </div>
        <h3 class="preview-title">{{ preview.title }}</h3>
        <div class="preview-description"> {{ preview.desc }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "MoviePreview",
    computed: mapState({
        preview: state => state.movielist.preview,
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

.preview-title,
.preview-description {
}

.preview-image img {
    height: 60vh;
    border-radius: 2%;
    box-shadow: 10px 10px gainsboro;
}
</style>