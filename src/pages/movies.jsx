import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const movies = [
    'movie-1',
    'movie-2',
    'movie-3',
    'movie-4',
    'movie-5',
    'movie-6',
  ];
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };
  const visibleMovies = movies.filter(movie => movie.includes(movieId));
  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <ul>
        {visibleMovies.map(movie => {
          return (
            <Link key={movie} to={`${movie}`} state={{ from: location }}>
              {movie}
            </Link>
          );
        })}{' '}
      </ul>
    </div>
  );
};

export default Movies;
