import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Author, ReviewElement } from './MovieReviews.styled';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    getMovieReviews(movieId)
      .then(review => {
        setReviews(review);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);

  console.log(reviews);

  return (
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
  );
};

export default MovieReviews;
