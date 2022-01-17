export default {
    methods: {
        updatePreview(data) {
            this.preview = data;
        },
        selectedMovies(data) {
            this.$store.dispatch('movielist/selectedMovies', data);
            this.emitToParent();
        },
        emitToParent: function() {
            this.$emit("setDataToPreview", this.preview);
        }
    }
  }