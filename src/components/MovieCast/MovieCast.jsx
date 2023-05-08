const { useEffect } = require('react');
const { useParams } = require('react-router-dom');
const { getMovieCast } = require('services/api');

const MovieCast = () => {
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(data => console.log(data));
  });
  return <>{movieId}</>;
};

export default MovieCast;
