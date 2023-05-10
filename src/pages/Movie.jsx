import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const Movie = () => {
  const [movie, setMovie] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, [movieId]);

  return (
    <>
      {movie ? (
        <MovieDetails movie={movie} />
      ) : (
        <Error errorMessage={errorMessage} />
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movie;
