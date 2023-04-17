import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const api_key = 'cbd8bb6ab7443496075b168356471aed';
const url = `https://api.themoviedb.org/3/movie/`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  //   console.log(movieId);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${url}${movieId}?api_key=${api_key}`);
      console.log(result.data);
      setMovies(result.data);
    };
    fetchData();
  }, [movieId]);


  // const {
  //   // id,
  //   title,
  //   poster_path,
  //   genres,
  //   overview,
  //   release_date,
  //   vote_average,
  // } = movies;
  const movieDate = new Date(movies.release_date).getFullYear();
  return (
    <>
      <div>
        <img
          src={
            movies.poster_path
              ? `https://image.tmdb.org/t/p/w200${movies.poster_path}`
              : 'https://via.placeholder.com/185x278.png?text=No+Image'
          }
          alt=""
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
      </div>

      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
