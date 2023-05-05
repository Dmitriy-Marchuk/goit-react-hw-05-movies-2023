import { Link, useLocation } from 'react-router-dom';
import {
  MovieImagePoster,
  MovieItemTitle,
  MovieItemWrapper,
} from './MovieGalleryItem.styled';

const PosterNotAvailable =
  'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

const MovieGalleryItem = ({ movie }) => {
  const { poster_path, name, title } = movie;

  const location = useLocation();

  return (
    <>
      <MovieItemWrapper>
        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
          <MovieImagePoster
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : PosterNotAvailable
            }
            alt={title ?? name}
          />
          <MovieItemTitle>{title ?? name}</MovieItemTitle>
        </Link>
      </MovieItemWrapper>
    </>
  );
};

export default MovieGalleryItem;
