import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'fe4b88b6e68a30f89cb8b35af00ef551';

export const getMovieTrendings = async () => {
  return await axios
    .get(`/trending/all/day?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const getMovieDetails = async movieId => {
  return await axios
    .get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

export const getMovieCast = async movieId => {
  return await axios
    .get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data.cast);
};

export const getMovieReviews = async movieId => {
  return await axios
    .get(`/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data.results);
};

export const getMovieSearch = async movieQuery => {
  return await axios
    .get(
      `/search/movie?api_key=${API_KEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`
    )
    .then(response => response.data.results);
};
