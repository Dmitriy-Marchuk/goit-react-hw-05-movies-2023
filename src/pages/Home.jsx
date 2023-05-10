import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { MovieGalleryTitle } from 'components/MovieGallery/MovieGallery.styled';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getMovieTrendings } from 'services/api';

const Home = () => {
  const [trendingCollection, setTrendingCollection] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getMovieTrendings()
      .then(data => {
        setTrendingCollection(data.results);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <>
      {trendingCollection ? (
        <>
          <MovieGalleryTitle>Trending today</MovieGalleryTitle>
          <MovieGallery moviesCollection={trendingCollection} />
        </>
      ) : (
        <Error errorMessage={errorMessage} />
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Home;
