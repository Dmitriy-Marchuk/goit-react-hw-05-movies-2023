import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { GoBackButton } from 'components/MovieDetails/MovieDetails.styled';
import { ErrorImage, ErrorWrapper } from './ErrorPage.styled';

const errorImage =
  'http://clipart-library.com/new_gallery/304-3043795_small-sad-face-png-smiley.png';

const ErrorPage = ({ errorMessage }) => {
  const location = useLocation();

  const goBackHref = location.state?.from ?? '/movies';

  return (
    <>
      <ErrorWrapper>
        <ErrorImage src={errorImage} alt={errorImage} />
        <h1>{errorMessage}</h1>
        <GoBackButton to={goBackHref}>Go back</GoBackButton>
      </ErrorWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ErrorPage;
