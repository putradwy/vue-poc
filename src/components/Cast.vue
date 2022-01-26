<template>
    <div class="main-card-container">
        <div v-for="item in getCastActingList(cast)" :key="item" class="card-cast">
            <v-card
                class="cast-card"
                max-width="100"
            >
                <v-img
                :src="item.profile_path | profileImg()"
                height="150px"
                width="100px"
                ></v-img>

                <v-card-title class="title-cast">
                    {{item.name}}
                </v-card-title>
            </v-card>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import filter from 'lodash/filter'

export default {
    computed: {
    ...mapState({
      cast: state => state.movielist.cast,
    })
  },
  filters: {
      profileImg(path) {
          return "https://image.tmdb.org/t/p/w1280"+path
      }
  },
  methods: {
      getCastActingList(data) {
        const actingCast = filter(data, {"known_for_department":"Acting"})
        return actingCast
      }
  }
}
</script>

<style scoped>
.main-card-container {
    display: flex;
    max-width: 400px;
    overflow: scroll;
}

.card-cast {
    padding-right: 10px;
}

.backdrop-img {
    width: 10%;
    padding-right: 5px;
}

.title-cast {
    font-size: 1vh;
    padding: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    display: block;
}

</style>