import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Author, ReviewElement } from './MovieReviews.styled';
import Loader from 'components/Loader/Loader';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');
  console.log(reviews, 'r');

  useEffect(() => {
    getMovieReviews(movieId)
      .then(review => {
        setReviews(review);
      })
      .catch(error => console.log(error.message));
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
