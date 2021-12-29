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
import { inject } from 'vue'

export default {
    name: "MoviePreview",
    setup() {
        const preview = inject("preview")

        return {
            preview
        }
    }
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