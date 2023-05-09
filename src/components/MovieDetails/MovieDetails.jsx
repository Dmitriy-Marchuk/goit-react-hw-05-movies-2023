import MovieAdditional from 'components/MovieAdditional/MovieAdditional';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  MovieInfoOpionsWrapper,
  MovieInfoWrapper,
  MoviePoster,
} from './MovieDetails.styled';

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

  const vote = (vote_average * 10).toFixed(0);

  return (
    <>
      <MovieInfoWrapper style={backdrop_path && backdropStyle}>
        <MoviePoster
          src={poster_path ? posterPath : PosterNotAvailable}
          alt={tagline}
        />
        <MovieInfoOpionsWrapper>
          <NavLink to={goBackHref}>Go back</NavLink>
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
      <Outlet />
    </>
  );
};

export default MovieDetails;
