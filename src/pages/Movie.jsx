import Error from 'components/Error/Error';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const Movie = () => {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(error => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {movie ? (
        <MovieDetails movie={movie} />
      ) : (
        <Error errorMessage={errorMessage} />
      )}
    </>
  );
};

export default Movie;
