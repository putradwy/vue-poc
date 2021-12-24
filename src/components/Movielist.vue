<template>
    <div class="movie-list">
        <div class="list-container">
            <ul>
                <ol v-on:click="onClick(item)"  v-for="(item, index) in lists" :key="index" :class="{'active': item.id === value?.id}" :id="'item-' + item.id">{{ item.title }}</ol>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "MovieList",
    data() {
        return {
        lists: [],
        preview: {
            image: "",
            title: "",
            desc: ""
        },
        value: {
            id: ""
            }
        }
    },
    mounted() {
        axios
        .get("https://api.themoviedb.org/3/discover/movie?api_key=58817b1d581d4e9595c92a28c167872f&language=en-US&sort_by=popularity.desc")
        .then(response => {
            this.lists = response.data.results
            this.preview.image = "https://image.tmdb.org/t/p/w780"+response.data.results[0].poster_path
            this.preview.title = response.data.results[0].title
            this.preview.desc = response.data.results[0].overview
            this.value.id = response.data.results[0].id
            this.emitToParent();
        })
    },
    methods: {
        onClick: function(data) {
            this.preview.image = "https://image.tmdb.org/t/p/w780"+data.poster_path
            this.preview.title = data.title
            this.preview.desc = data.overview
            this.value.id = data.id
            this.emitToParent();
        },
        emitToParent: function() {
            this.$emit("setDataToPreview", this.preview);
        }
    },
}
</script>

<style>
.movie-list {
    width: 25%;
    background-color: maroon;
    color: white;
    height: inherit;
    overflow: scroll;
}
.movie-list ul {
    padding: 0;
}

.movie-list ul ol {
    padding: 10px 0 10px 0;
    cursor: pointer;
}

.movie-list ul ol:hover {
    background: grey;
}

.movie-list ul ol.active {
    background: black;
}

.list-container {
    height: inherit;
}
</style>