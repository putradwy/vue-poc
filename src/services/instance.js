import axios from "axios";

const API_KEY = "58817b1d581d4e9595c92a28c167872f";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default instance;