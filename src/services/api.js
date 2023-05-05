import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'fe4b88b6e68a30f89cb8b35af00ef551';

export const getMovieTrendings = async () => {
  return await axios
    .get(`/3/trending/all/day?api_key=${API_KEY}`)
    .then(response => response.data);
};
