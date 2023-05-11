import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import Loader from 'components/Loader/Loader';
import { Author, ReviewElement } from './MovieReviews.styled';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length === 0) {
    return (
      <>
        <h1>No reviews yet!</h1>
      </>
    );
  }

  return (
    <>
      <ul>
        {reviews &&
          reviews.map(({ id, author, content, created_at }) => (
            <ReviewElement key={id}>
              <Author>
                Written by {author} on {created_at.split('T')[0]}
              </Author>
              <p>{content}</p>
            </ReviewElement>
          ))}
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieReviews;
