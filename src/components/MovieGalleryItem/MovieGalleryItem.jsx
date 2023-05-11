import { Link, useLocation } from 'react-router-dom';
import {
  MovieImagePoster,
  MovieItemTitle,
  MovieItemWrapper,
} from './MovieGalleryItem.styled';
import { posterNotAvailable } from 'services/posterNotAvailable';

const MovieGalleryItem = ({ movie }) => {
  const { poster_path, name, title } = movie;

  const location = useLocation();

  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : posterNotAvailable;

  return (
    <>
      <MovieItemWrapper>
        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
          <MovieImagePoster src={posterPath} alt={title ?? name} />
          <MovieItemTitle>{title ?? name}</MovieItemTitle>
        </Link>
      </MovieItemWrapper>
    </>
  );
};

export default MovieGalleryItem;
