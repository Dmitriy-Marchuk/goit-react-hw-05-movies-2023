import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { HeaderStyled, StyledLink } from './App.styled';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

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
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="*" element={<div>Page not found!</div>} />
      </Routes>
    </>
  );
};
