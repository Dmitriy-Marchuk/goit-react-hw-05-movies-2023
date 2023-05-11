import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getMovieTrendings } from 'services/api';
import Loader from 'components/Loader/Loader';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { MovieGalleryTitle } from 'components/MovieGallery/MovieGallery.styled';

const Home = () => {
  const [trendingCollection, setTrendingCollection] = useState('');

  useEffect(() => {
    getMovieTrendings().then(setTrendingCollection);
  }, []);

  return (
    <>
      <MovieGalleryTitle>Trending today</MovieGalleryTitle>
      <MovieGallery moviesCollection={trendingCollection} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Home;
