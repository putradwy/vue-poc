<template>
    <div class="movie-list">
        <div class="list-container">
            <ul>
                <ol v-on:click="selectedMovies(item)"  v-for="(item, index) in lists" :key="index" :class="{'active': item.id === value?.id}" :id="'item-' + item.id">{{ item.title }}</ol>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "MovieList",
    computed: mapState({
        lists: state => state.movielist.lists,
        preview: state => state.movielist.preview,
        value: state => state.movielist.value
    }),
    created() {
        this.$store.dispatch('movielist/latestMovie');
        this.emitToParent();
    },
    methods: {
        selectedMovies(data) {
            this.$store.dispatch('movielist/selectedMovies', data);
            this.emitToParent();
        },
        emitToParent: function() {
            this.$emit("setDataToPreview", this.preview);
        },
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