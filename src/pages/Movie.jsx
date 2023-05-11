import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import ErrorPage from 'components/ErrorPage/ErrorPage';

const Movie = () => {
  const [movie, setMovie] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, [movieId]);

  return (
    <>
      {movie ? (
        <MovieDetails movie={movie} />
      ) : (
        <ErrorPage errorMessage={errorMessage} />
      )}
    </>
  );
};

export default Movie;
