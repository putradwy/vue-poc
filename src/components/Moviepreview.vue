<template>
    <div class="movie-preview-container">
        <div class="preview-image">
            <img :src="image">
        </div>
        <h3 class="preview-title">{{ title }}</h3>
        <div class="preview-description"> {{ description }}</div>
    </div>
</template>

<script>
export default {
    name: "MoviePreview",
    props: {
        image: String,
        title: String,
        description: String
    },
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