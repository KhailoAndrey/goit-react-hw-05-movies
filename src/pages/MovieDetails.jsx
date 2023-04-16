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
  const {
    id,
    title,
    backdrop_path,
    genres,
    overview,
    poster_path,
    release_date,
  } = movies;
  const movieDate = new Date(release_date).getFullYear();
  return (
    <>
      <h1>{`${title} (${movieDate})`}</h1>

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
