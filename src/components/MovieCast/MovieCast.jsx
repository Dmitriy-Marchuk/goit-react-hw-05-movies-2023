import { NameProfile, ProfileImage, ProfileList } from './MovieCast.styled';

const { useEffect, useState } = require('react');
const { useParams } = require('react-router-dom');
const { getMovieCast } = require('services/api');

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');
  const profileImageUrl = 'https://image.tmdb.org/t/p/w500';
  const PosterNotAvailable =
    'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

  useEffect(() => {
    getMovieCast(movieId)
      .then(cast => {
        setCast(cast);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <ProfileList>
      {cast &&
        cast.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <ProfileImage
              src={
                profile_path
                  ? profileImageUrl + profile_path
                  : PosterNotAvailable
              }
              alt={name}
            />
            <NameProfile>{name}</NameProfile>
            <p>{character}</p>
          </li>
        ))}
    </ProfileList>
  );
};

export default MovieCast;
