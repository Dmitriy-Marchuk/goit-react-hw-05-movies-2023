import { AdditionalLink, AdditionalWrapper } from './MovieAdditional.styled';

const MovieAdditional = () => {
  return (
    <AdditionalWrapper>
      <h4>Additional information</h4>
      <ul>
        <li>
          <AdditionalLink to="cast">Cast</AdditionalLink>
        </li>
        <li>
          <AdditionalLink to="reviews">Reviews</AdditionalLink>
        </li>
      </ul>
    </AdditionalWrapper>
  );
};

export default MovieAdditional;
