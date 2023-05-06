import MovieAdditional from 'components/MovieAdditional/MovieAdditional';
import { NavLink, Outlet } from 'react-router-dom';

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

  const posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const PosterNotAvailable =
    'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';
  const backdropStyle = {
    backgroundImage: `linear-gradient(to right, rgb(18, 18, 23) 150px, rgba(32, 32, 32, 0.84) 55%), url("https://image.tmdb.org/t/p/w500/${backdrop_path}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const vote = (vote_average * 10).toFixed(0);

  console.log(movie);

  return (
    <div>
      <div style={backdrop_path && backdropStyle}>
        <button>Go back</button>
        <img
          src={poster_path ? posterPath : PosterNotAvailable}
          alt={tagline}
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>User Score: {vote}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
      <MovieAdditional />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
