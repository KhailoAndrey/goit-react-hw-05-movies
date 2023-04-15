import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
//   console.log(movieId);
  useEffect(() => {
    // HTTP
  }, []);
  return <div>MovieDetails: {movieId}</div>;
};
export default MovieDetails;
