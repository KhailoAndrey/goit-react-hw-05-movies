import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import { TiArrowLeftThick } from 'react-icons/ti';
import { AddInfo, ButtonBack, MovieBlock } from './MovieDetails.styled';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

const api_key = 'cbd8bb6ab7443496075b168356471aed';
const url = `https://api.themoviedb.org/3/movie/`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  const navigate = useNavigate();

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${url}${movieId}?api_key=${api_key}`);
        const {
          title,
          poster_path,
          genres,
          overview,
          release_date,
          vote_average,
        } = result.data;
        setMovies({
          title,
          poster_path,
          genres,
          overview,
          release_date,
          vote_average,
        });
      } catch (error) {
        alert('Ooops... Something wrong...');
        throw error;
      }
    };
    fetchData();
  }, [movieId]);

  if (!movies) {
    return <b>Loading...</b>;
  }
  const movieDate = new Date(movies.release_date).getFullYear();
  return (
    <>
      <ButtonBack onClick={handleClick}>
        <TiArrowLeftThick />
        Go back
      </ButtonBack>
      <MovieBlock>
        <img
          src={
            movies.poster_path
              ? `https://image.tmdb.org/t/p/w200${movies.poster_path}`
              : 'https://via.placeholder.com/185x278.png?text=No+Image'
          }
          alt={movies.title}
        />
        <div>
          <h1>{`${movies.title} (${movieDate})`}</h1>
          <p>User Score: {(movies.vote_average * 10).toFixed()}%</p>
          <h2>Overview</h2>
          {!movies.overview ? (
            <p>No overview information found.</p>
          ) : (
            <p>{movies.overview}</p>
          )}
          <h2>Genres</h2>
          {movies.genres.length === 0 ? (
            <p>No information on genres was found.</p>
          ) : (
            <p>{movies.genres.map(genre => genre.name).join(', ')}</p>
          )}
        </div>
      </MovieBlock>
      <AddInfo>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </AddInfo>
      <Suspense fallback={<b> Loading...</b>}>
        <Outlet />
      </Suspense>
      ;
    </>
  );
};

export default MovieDetails;
