<template>
  <v-data-table
    :headers="Headers"
    :items="Movie"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    :search="search"
    item-key="id"
    show-expand
    class="elevation-1 table-container"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Movie List Table</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <div class="expand-container">
          <div class="expand-container-img">
            <v-img class="table-img"
              position="initial"
              :src="getImgPath(item.poster_path)"
            ></v-img>
          </div>
          <div class="expand-container-desc">
            <h1>Description :</h1>
            <label>{{ item.overview }}</label>
          </div>
        </div>
      </td>
    </template>
    <template v-slot:[`item.vote_average`]="{ item }">
      <v-chip
        :color="getColor(item.vote_average)"
        dark
      >
        {{ item.vote_average }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      search: '',
      expanded: [],
      singleExpand: true,
      Headers: [
        {
          text: 'Movie Title',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Id', value: 'id' },
        { text: 'Release Date', value: 'release_date' },
        { text: 'Popularity', value: 'popularity' },
        { text: 'Vote', value: 'vote_average' },
        { text: 'Vote Count', value: 'vote_count' },
        { text: '', value: 'data-table-expand' },
      ],
      Movie: this.lists,
    }
  },
  computed: {
    ...mapState({
      lists: state => state.movielist.lists,
    })
  },
  created() {
    this.$store.dispatch('movielist/latestMovie');
  },
  methods: {
    tableUpdate() {
      this.Movie = this.lists
    },
    getColor (count) {
        if (count < 5) return 'red'
        else if (count < 8) return 'orange'
        else return 'green'
    },
    getImgPath(path) {
      return "https://image.tmdb.org/t/p/w780"+path
    }
  },
  mounted(){
    this.tableUpdate()
  }
}
</script>

<style scoped>
.expand-container {
  display: flex;
}
.table-img {
  width: 200px;
}
.expand-container-img {
  height: 325px;
  padding: 10px;
}
.expand-container-desc {
  align-self: center;
  padding: 30px;
}
.table-container {
  max-height: 100vh;
  overflow-y: scroll;
}
</style>