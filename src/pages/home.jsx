import axios from 'axios';
import { useEffect, useState } from 'react';
// import MovieDetails from './MovieDetails';
import { Link } from 'react-router-dom';
const api_key = 'cbd8bb6ab7443496075b168356471aed';
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      const movieArr = result.data.results.map(({ id, title }) => ({
        id,
        title,
      }));
      setMovies(movieArr);
    };
    fetchData();
  }, []);
  if (!movies) {
    return <b>Loading...</b>;
  }
  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
