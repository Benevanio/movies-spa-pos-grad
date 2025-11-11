const { default: axios } = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const moviesApiBaseUrl = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.MOVIES_API_BEARER_TOKEN}`,
  },
});

module.exports = {
  moviesApiBaseUrl,
};