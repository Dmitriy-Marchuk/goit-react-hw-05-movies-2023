import Loader from 'components/Loader/Loader';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { useEffect, useState } from 'react';
import { getMovieTrendings } from 'services/api';

const Home = () => {
  const [trendingCollection, setTrendingCollection] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getMovieTrendings()
      .then(data => {
        setTrendingCollection(data.results);
        setLoading(false);
      })
      .catch(error => console.log(error.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(trendingCollection);

  return (
    <>
      <MovieGallery moviesCollection={trendingCollection} />
      {loading && <Loader />}
    </>
  );
};

export default Home;
