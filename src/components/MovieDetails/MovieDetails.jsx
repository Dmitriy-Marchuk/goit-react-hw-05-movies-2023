import MovieAdditional from 'components/MovieAdditional/MovieAdditional';
import { Outlet, useLocation } from 'react-router-dom';
import {
  GoBackButton,
  MovieInfoOpionsWrapper,
  MovieInfoWrapper,
  MoviePoster,
} from './MovieDetails.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

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

  const posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const PosterNotAvailable =
    'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';
  const backdropStyle = {
    backgroundImage: `linear-gradient(to right, rgb(18, 18, 23) 150px, rgba(32, 32, 32, 0.84) 55%), url("https://image.tmdb.org/t/p/w500/${backdrop_path}")`,
  };
  const backdropStyleSecond = {
    backgroundColor: ' rgba(32, 32, 32, 0.84)',
  };

  const vote = (vote_average * 10).toFixed(0);

  return (
    <>
      <MovieInfoWrapper
        style={backdrop_path ? backdropStyle : backdropStyleSecond}
      >
        <MoviePoster
          src={poster_path ? posterPath : PosterNotAvailable}
          alt={tagline}
        />
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
