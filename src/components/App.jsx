import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>HomePage</div>} />
        <Route path="movies" element={<div>Movies</div>} />
      </Routes>
    </>
  );
};
