import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';
import { MovieGalleryStyled } from './MovieGallery.styled';

const MovieGallery = ({ moviesCollection }) => {
  return (
    <>
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
