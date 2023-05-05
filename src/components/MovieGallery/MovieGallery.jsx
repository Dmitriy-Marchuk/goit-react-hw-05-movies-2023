import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';
import { MovieGalleryStyled, MovieGalleryTitle } from './MovieGallery.styled';
import { Link } from 'react-router-dom';

const MovieGallery = ({ moviesCollection }) => {
  return (
    <>
      <MovieGalleryTitle>Trending today</MovieGalleryTitle>
      <MovieGalleryStyled>
        {moviesCollection &&
          moviesCollection.map(movie => (
            <MovieGalleryItem key={movie.id} movie={movie} />
          ))}
      </MovieGalleryStyled>
    </>
  );
};

export default MovieGallery;
