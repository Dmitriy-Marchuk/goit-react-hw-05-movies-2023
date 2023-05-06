import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from 'pages/Movies';
import { HeaderStyled, StyledLink } from './App.styled';
import Movie from 'pages/Movie';

export const App = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </HeaderStyled>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<div>cast</div>} />
          <Route path="reviews" element={<>reviews</>} />
        </Route>
        <Route path="*" element={<div>Page not found!</div>} />
      </Routes>
    </>
  );
};
