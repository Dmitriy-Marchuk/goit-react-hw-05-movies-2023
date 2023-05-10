import { GoBackButton } from 'components/MovieDetails/MovieDetails.styled';
import { ErrorImage, ErrorWrapper } from './Error.styled';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

const errorImage =
  'http://clipart-library.com/new_gallery/304-3043795_small-sad-face-png-smiley.png';

const Error = ({ errorMessage }) => {
  const location = useLocation();

  const goBackHref = location.state?.from ?? '/movies';

  return (
    <>
      <ErrorWrapper>
        <ErrorImage src={errorImage} alt={errorImage} />
        <h1>{errorMessage}</h1>
        <GoBackButton to={goBackHref}>Go back</GoBackButton>
      </ErrorWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Error;
