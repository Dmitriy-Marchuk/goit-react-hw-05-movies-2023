import { useLocation } from 'react-router-dom';
import { AdditionalLink, AdditionalWrapper } from './MovieAdditional.styled';

const MovieAdditional = () => {
  const location = useLocation();

  return (
    <AdditionalWrapper>
      <h4>Additional information</h4>
      <ul>
        <li>
          <AdditionalLink state={{ from: location.state?.from }} to="cast">
            Cast
          </AdditionalLink>
        </li>
        <li>
          <AdditionalLink state={{ from: location.state?.from }} to="reviews">
            Reviews
          </AdditionalLink>
        </li>
      </ul>
    </AdditionalWrapper>
  );
};

export default MovieAdditional;
