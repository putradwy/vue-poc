<template>
  <div class="timeline-container">
    <v-timeline class="timelines">
      <v-timeline-item
        v-for="items in lists"
        :key="items.id"
        color="green lighten-2"
        small
      >
        <template v-slot:opposite>
          <span>{{items.release_date}}</span>
        </template>
        <v-card class="elevation-2 timeline-card">
          <div>
            <v-img class="timeline-img"
                position="initial"
                :src="getImgPath(items.poster_path)"
          ></v-img>
          </div>
          <div>
            <v-card-title class="text-h5 card-title">
              {{items.title}}
            </v-card-title>
            <v-card-text class="card-text">
              {{items.overview}}
            </v-card-text>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Upcoming',
  computed: {
    ...mapState({
      lists: state => state.movielist.lists,
    })
  },
   created() {
    this.$store.dispatch('movielist/upcomingMovies');
  },
  methods: {
    getImgPath(path) {
      return "https://image.tmdb.org/t/p/w1280"+path
    },
  }
}
</script>

<style scoped>
.timeline-container {
  height: 100vh;
  overflow: scroll;
}

.timelines {
  max-height: 100vh;
  overflow: scroll;
  padding: 0px 30px;
  margin-top: 20px;
  margin-bottom: 50px;
}

.timeline-img {
  height: 155px;
  width: 100px;;
}
.timeline-card {
  display: flex;
  align-items: center;
}
.card-text {
  display: -webkit-box;
  max-width: 110%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 0 18px;
}
.card-title {
  padding: 5px 18px;
}
</style>
