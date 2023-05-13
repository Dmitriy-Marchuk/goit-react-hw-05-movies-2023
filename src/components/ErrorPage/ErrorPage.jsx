import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { GoBackButton } from 'components/MovieDetails/MovieDetails.styled';
import { ErrorWrapper } from './ErrorPage.styled';

const ErrorPage = ({ errorMessage }) => {
  const location = useLocation();

  const goBackHref = location.state?.from ?? '/movies';

  return (
    <>
      <ErrorWrapper>
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
