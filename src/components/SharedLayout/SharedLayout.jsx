import { Suspense } from 'react';
import { HeaderStyled, StyledLink } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </HeaderStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
