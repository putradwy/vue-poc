<template>
    <v-col cols="2">
    <v-sheet rounded="lg">
        <v-list color="red" max-height="100vh" class="list-container">
        <v-list-item
            v-for="item in lists"
            :key="item.id"
            :class="{'active': item.id === value.id}"
            @click="selectedMovies(item)">
            <v-list-item-content>
            <v-list-item-title>
                {{ item.title }}
            </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </v-list>
    </v-sheet>
    </v-col>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "movieList",
    methods: {
        selectedMovies(data) {
            this.$store.dispatch('movielist/selectedMovies', data);
            this.emitToParent();
        },
        emitToParent: function() {
            this.$emit("setDataToPreview", this.preview);
        },
    },
    computed: {
        ...mapState({
            lists: state => state.movielist.lists,
            preview: state => state.movielist.preview,
            value: state => state.movielist.value
        })
    },
    created() {
        this.$store.dispatch('movielist/latestMovie');
        this.emitToParent();
    }
}
</script>

<style scoped>
.active {
    background: black;
    color: white!important;
}
.list-container {
    overflow-y: scroll;
}
</style>