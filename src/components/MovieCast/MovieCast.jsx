import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { NameProfile, ProfileImage, ProfileList } from './MovieCast.styled';
import { getMovieCast } from 'services/api';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const profileImageUrl = 'https://image.tmdb.org/t/p/w500';
  const PosterNotAvailable =
    'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

  // useEffect(() => {
  //   getMovieCast(movieId)
  //     .then(cast => {
  //       setCast(cast);
  //     })
  //     .catch(error => console.log(error.message));
  // }, [movieId]);

  useEffect(() => {
    getMovieCast(movieId)
      .then(setCast)
      .catch(error => console.log(error.message));
    console.log('render');
  }, [movieId]);

  if (cast.length === 0) {
    return (
      <>
        <h1>No info!</h1>
      </>
    );
  }

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </ProfileList>
  );
};

export default MovieCast;
