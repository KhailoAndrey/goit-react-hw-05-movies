import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  //   console.log(movieId);
  useEffect(() => {
    // HTTP
  }, []);
  return (
    <>
      <h1>MovieDetails: {movieId}</h1>
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
