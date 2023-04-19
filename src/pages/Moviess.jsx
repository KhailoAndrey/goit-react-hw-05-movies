import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchEmpty, SearchMovieForm, SearchMovieItem } from './Movies.styled';

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=ant
const api_key = 'cbd8bb6ab7443496075b168356471aed';
const url = `https://api.themoviedb.org/3/search/movie?`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchData = async () => {
      const result = await axios(
        `${url}api_key=${api_key}&query=${searchQuery}`
      );
      if (result.data.results.length !== 0) {
        setMovies(result.data.results);
      } else {
        alert('Nothing found.');
        setQuery('');
      }
    };
    fetchData();
    setMovies([]);
  }, [searchQuery]);

  function onSubmit(e) {
    e.preventDefault();
    if (query !== '') {
      setSearchParams({ query: `${query}` });
    } else {
      alert('Please enter your query.');
      return;
    }
  }

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <>
      <SearchMovieForm onSubmit={onSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button>Search</button>
      </SearchMovieForm>
      <Suspense fallback={<b>Loading...</b>}>
        {movies.length === 0 ? (
          <SearchEmpty>There are no movies. Please enter your query.</SearchEmpty>
        ) : (
          <ul>
            {movies.map(movie => (
              <SearchMovieItem key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <p>{movie.title}</p>
                </Link>
              </SearchMovieItem>
            ))}
          </ul>
        )}
      </Suspense>
    </>
  );
};

export default Movies;
