import {
  MovieImagePoster,
  MovieItemTitle,
  MovieItemWrapper,
} from './MovieGalleryItem.styled';

const PosterNotAvailable =
  'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

const MovieGalleryItem = ({ movie }) => {
  const { poster_path, name, title } = movie;

  return (
    <>
      <MovieItemWrapper>
        <MovieImagePoster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : PosterNotAvailable
          }
          alt={title ?? name}
        />
        <MovieItemTitle>{title ?? name}</MovieItemTitle>
      </MovieItemWrapper>
    </>
  );
};

export default MovieGalleryItem;
