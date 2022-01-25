<template>
<v-sheet>
  <v-expand-transition>
      <v-sheet
        v-if="model != null || initial != null"
        height="550"
        tile
      >
      <div class="backdrop-img-container">
          <div class="overlay"></div>
          <img class="backdrop-img"
              position="initial"
              :src="getImgPath(model.backdrop_path || initial.backdrop_path)"
          >
        </div>
        <v-row
          class="left-panel"
        >
        <div class="rating-container">
          <label :class="getRating(model.vote_average || initial.vote_average)">
            Rating : {{ model.vote_average || initial.vote_average }} ({{model.vote_count || initial.vote_count}})
          </label>
          <v-rating
            class="start-rating"
            background-color="orange lighten-3"
            color="orange"
            small
            half-increments
            length="5"
            readonly
            size="64"
            :value="model.vote_average / 2 || initial.vote_average / 2"
          ></v-rating>
        </div>
        <div class="title-container">
          <h1>
            {{ model.title || initial.title }}
          </h1>
        </div>
        <div class="desc-container">
          <label>
            {{ model.overview || initial.overview}}
          </label>
        </div>
        <div class="cast-container">
          <h2>Cast :</h2>
          <Cast />
          {{ cast }}
        </div>
        </v-row>
        <v-row
        class="fill-height right-panel"
        >
          <div class="video-container">
          <section>
            <iframe width="620" height="365" :src="getTrailer(trailer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </section>
        </div>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  <v-sheet
    class="mx-auto"
    max-width="100%"
    height="100vh"
  >
    <v-slide-group
      v-model="model"
      class="pa-4 slide-grp"
      show-arrows
    >
      <v-slide-item
        v-for="item in lists"
        :key="item"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="movie-card"
          height="240"
          width="150"
          @click="toggleCard(item)"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-img class="table-img"
                position="initial"
                :src="getImgPath(item.poster_path)"
            ></v-img>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</v-sheet>
</template>

<script>
import { mapState } from 'vuex'
import find from 'lodash/find'
import Cast from '@/components/Cast.vue'

export default {
  name: "shows",
  data: () => ({
    model: "",
  }),
  components: {
    Cast
  },
  computed: {
    ...mapState({
      lists: state => state.movielist.lists,
      trailer: state => state.movielist.trailer,
      initial: state => state.movielist.lists[0],
    })
  },
  created() {
    this.$store.dispatch('movielist/latestMovie');
    this.$store.dispatch('movielist/getTrailer', this.initial);
    this.$store.dispatch('movielist/getCast', this.initial);
  },
  methods: {
    getImgPath(path) {
      return "https://image.tmdb.org/t/p/w1280"+path
    },
    toggleCard(data) {
      this.$store.dispatch('movielist/getTrailer', data);
      this.$store.dispatch('movielist/getCast', data);
      this.model = data
      this.initial = ""
    },
    getRating(rate) {
      if (rate < 6) return 'bad-rate'
      else if (rate < 7) return 'avg-rate'
      else return 'good-rate'
    },
    getTrailer(data) {
      const trailer = find(data, {"type": "Trailer"})
      const url = `https://www.youtube.com/embed/${trailer?.key}`
      return url
    }
  },
}
</script>

<style scoped>
.movie-card {
  margin: 0 20px;
}
.overlay {
  background: linear-gradient(to right, black, transparent);
  height: 100%;
  position: absolute;
  z-index: 1;
  width: 100%;
}
.backdrop-img,
.backdrop-img-container {
  width: 100%;
}
.slide-grp {
  z-index: 1;
}
.title-container {
  color: white;
  z-index: 5;
  left: 76px;
  top: 149px;
}

.desc-container {
  color: white;
  z-index: 5;
  left: 76px;
  top: 200px;
  width: 50%;
}

.rating-container {
  color: white;
  z-index: 5;
  left: 76px;
  top: 130px;
  width: 50%;
}

.cast-container {
  color: white;
  z-index: 5;
  left: 76px;
  top: 270px;
  height: 250px;
}

.left-panel {
  position: absolute;
  top: 67px;
  z-index: 1;
  left: 89px;
  display: block;
}

.right-panel {
  position: absolute;
  color: white;
  z-index: 5;
  top: 130px;
  width: 45%;
  right: 0;
  height: auto;
}

.start-rating {
  margin-left: -9px;
}

.title-container h1 {
  font-size: 2em!important;
}

.good-rate {
  color: green;
}

.avg-rate {
  color: orange;
}

.bad-rate {
  color: red
}

</style>