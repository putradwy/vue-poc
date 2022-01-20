<template>
<v-sheet>
  <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="550"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        <div class="title-container">
          <h1>
            {{ model.title }}
          </h1>
        </div>
        <div class="desc-container">
          <label>
            {{ model.overview }}
          </label>
        </div>
        <div class="rating-container">
          <label :class="getRating(model.vote_average)">
            Rating : {{ model.vote_average }} ({{model.vote_count}})
          </label>
        </div>
        <div class="backdrop-img-container">
          <div class="overlay"></div>
          <img class="backdrop-img"
              position="initial"
              :src="getImgPath(model.backdrop_path)"
          >
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
export default {
  name: "shows",
  data: () => ({
    model: 0,
  }),
  computed: {
    ...mapState({
      lists: state => state.movielist.lists,
    })
  },
  created() {
    this.$store.dispatch('movielist/latestMovie');
  },
  methods: {
    getImgPath(path) {
      return "https://image.tmdb.org/t/p/w1280"+path
    },
    toggleCard(data) {
      this.model = data
    },
    getRating(rate) {
      if (rate < 6) return 'bad-rate'
      else if (rate < 7) return 'avg-rate'
      else return 'good-rate'
    }
  },
  mounted() {
    this.model = this.lists[0]
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
  position: absolute;
  color: white;
  z-index: 5;
  left: 76px;
  top: 149px;
}

.desc-container {
  position: absolute;
  color: white;
  z-index: 5;
  left: 76px;
  top: 200px;
  width: 50%;
}

.rating-container {
  position: absolute;
  color: white;
  z-index: 5;
  left: 76px;
  top: 130px;
  width: 50%;
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