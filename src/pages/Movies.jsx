import MovieGallery from 'components/MovieGallery/MovieGallery';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesFound, setMoviesFound] = useState([]);
  const movieQuery = searchParams.get('query') ?? '';

  const onSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (searchParams.get('query') !== null) {
      getMovieSearch(movieQuery).then(data => setMoviesFound(data));
    }
    setMoviesFound([]);
  }, [searchParams, movieQuery]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} movieQuery={movieQuery} />
      {moviesFound && <MovieGallery moviesCollection={moviesFound} />}
    </>
  );
};

export default Movies;
