import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { StyledLink } from './App.styled';

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<div>Movie Details</div>} />
        <Route path="*" element={<div>Page not found!</div>} />
      </Routes>
    </>
  );
};
