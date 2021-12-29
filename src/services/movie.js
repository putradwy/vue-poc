import { queryPageEndpoint } from "./helper";

export const getLatestMovies = queryPageEndpoint("/discover/movie", {
    params: {
      sort_by: "popularity.desc",
      include_adult: false,
      "vote_count.gte": 5,
    },
  });