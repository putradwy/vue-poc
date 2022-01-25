import { queryPageEndpoint, queryEndpoint } from "./helper";

export const getLatestMovies = queryPageEndpoint("/discover/movie", {
    params: {
      sort_by: "popularity.desc",
      include_adult: false,
      "vote_count.gte": 5,
    },
});

export const getMovieTrailer = queryEndpoint(
  ({ movieId }) => `/movie/${movieId}/videos`
);

export const getMovieCast = queryEndpoint(
  ({ movieId }) => `/movie/${movieId}/credits`
);