import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { id } = useParams();
  // const movie = getMovieDetails(id);
  console.log(id);
  return <>movie det</>;
};

export default MovieDetails;
