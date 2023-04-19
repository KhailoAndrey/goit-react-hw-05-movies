import axios from 'axios';
import { useEffect, useState } from 'react';
// import MovieDetails from './MovieDetails';
import { Link } from 'react-router-dom';
import {
  MovieItem,
  MovieList,
  TitleHome,
  ChooseText,
  ChooseBtn,
} from './Home.styled';
const api_key = 'cbd8bb6ab7443496075b168356471aed';
const url = `https://api.themoviedb.org/3/trending/movie/`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchPeriod, setSearchPeriod] = useState('day');

  const handlePeriod = () => {
    if (searchPeriod === 'day') {
      setSearchPeriod('week');
    } else setSearchPeriod('day');
    console.log(searchPeriod);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${url}${searchPeriod}?api_key=${api_key}`);
      const movieArr = result.data.results.map(
        ({ id, title, poster_path }) => ({
          id,
          title,
          poster_path,
        })
      );
      setMovies(movieArr);
    };
    fetchData();
  }, [searchPeriod]);
  if (!movies) {
    return <b>Loading...</b>;
  }
  return (
    <div>
      <ChooseText>Choose period for trending film:</ChooseText>
      <ChooseBtn onClick={handlePeriod}>Day/Week</ChooseBtn>
      <TitleHome>Trending for 1 {searchPeriod}</TitleHome>
      <MovieList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              {movie.title}
            </Link>
          </MovieItem>
        ))}
      </MovieList>
    </div>
  );
};

export default Home;
