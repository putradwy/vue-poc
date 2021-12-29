<template>
    <div class="movie-list">
        <div class="list-container">
            <ul>
                <ol v-on:click="updatePreview(item)"  v-for="(item, index) in lists" :key="index" :class="{'active': item.id === id}" :id="'item-' + item.id">{{ item.title }}</ol>
            </ul>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue'

export default {
    name: "MovieList",
    setup() {
        const lists = inject("lists")
        const id = inject("id")
        const updatePreview = inject("updatePreview")

        return {
            lists,
            updatePreview,
            id
        }
    }
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