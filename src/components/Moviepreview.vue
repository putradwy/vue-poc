<template>
    <v-col>
        <v-sheet
            class="preview-container"
            height="75%"
            rounded="lg"
        >
            <v-img class="preview-img"
            width="50%"
            position="initial"
            :src="preview.image"
            ></v-img>
            <h1>{{ preview.title }}</h1>
            <span>{{ preview.desc }}</span>
        </v-sheet>
    </v-col>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "moviePreview",
    computed: Vuex.mapState({
        preview: state => state.movielist.preview,
    }),
}
</script>

<style scoped>
.col {
    flex-grow: 0;
}
.preview-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
}
</style>