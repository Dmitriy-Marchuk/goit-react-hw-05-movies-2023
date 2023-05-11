import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import MovieAdditional from 'components/MovieAdditional/MovieAdditional';
import Loader from 'components/Loader/Loader';
import {
  GoBackButton,
  MovieInfoOpionsWrapper,
  MovieInfoWrapper,
  MoviePoster,
} from './MovieDetails.styled';
import { posterNotAvailable } from 'services/posterNotAvailable';

const MovieDetails = ({ movie }) => {
  const {
    poster_path,
    title,
    overview,
    genres,
    vote_average,
    tagline,
    backdrop_path,
  } = movie;

  const location = useLocation();
  const goBackHref = location.state?.from ?? '/movies';

  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : posterNotAvailable;

  const backdropStyle = backdrop_path
    ? {
        backgroundImage: `linear-gradient(to right, rgb(18, 18, 23) 150px, rgba(32, 32, 32, 0.84) 55%), url("https://image.tmdb.org/t/p/w500/${backdrop_path}")`,
      }
    : {
        backgroundColor: ' rgba(32, 32, 32, 0.84)',
      };

  const vote = (vote_average * 10).toFixed(0);

  return (
    <>
      <MovieInfoWrapper style={backdropStyle}>
        <MoviePoster src={posterPath} alt={tagline} />
        <MovieInfoOpionsWrapper>
          <GoBackButton to={goBackHref}>Go back</GoBackButton>
          <h2>{title}</h2>
          <p>User Score: {vote}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
          </ul>
        </MovieInfoOpionsWrapper>
      </MovieInfoWrapper>
      <MovieAdditional />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
