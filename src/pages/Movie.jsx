import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const Movie = () => {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(error => console.log(error.message))
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return <MovieDetails movie={movie} />;
};

export default Movie;
