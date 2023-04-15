import MovieDetails from 'pages/MovieDetails';
import Home from 'pages/home';
import Movies from 'pages/movies';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<div>Cast</div>}></Route>
          <Route
            path="/movies/:movieId/reviews"
            element={<div>Reviews</div>}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
};
