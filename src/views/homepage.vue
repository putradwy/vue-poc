<template>
    <div class="homepage-container">
        <MovieList @setDataToPreview="updatePreview"/>
        <MoviePreview :image="preview.image" :title="preview.title" :description="preview.desc"/>
    </div>
</template>

<script>
import MovieList from "@/components/Movielist.vue"
import MoviePreview from "@/components/Moviepreview.vue"
import { provide, ref, onMounted } from 'vue'
import { getLatestMovies } from "../services/movie"

export default {
    name: "Home Page",
    components: {
        MovieList,
        MoviePreview
    },
    setup() {
        const preview = ref({
            image: "",
            title: "",
            desc: "",
        })
        const lists = ref([])
        const id = ref("")

        onMounted(async () => {
            const movieList = await getLatestMovies().then(res => {return res.results})
            lists.value = movieList

            // set initial data
            preview.value.image = "https://image.tmdb.org/t/p/w780"+movieList[0].poster_path
            preview.value.title = movieList[0].title
            preview.value.desc = movieList[0].overview
            id.value = movieList[0].id

        });

        const updatePreview = (data) => {
            preview.value.image = "https://image.tmdb.org/t/p/w780"+data.poster_path
            preview.value.title = data.title
            preview.value.desc = data.overview
            id.value = data.id
        }

        provide("preview", preview)
        provide("id", id)
        provide("lists", lists)
        provide("updatePreview", updatePreview)

        return {
            preview,
            lists,
            id,
            updatePreview
        }
    },
}
</script>

<style >
.homepage-container {
    display: flex;
    justify-content: space-evenly;
    height: inherit;
}
</style>