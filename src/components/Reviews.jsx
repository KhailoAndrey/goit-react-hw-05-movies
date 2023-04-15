import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  useEffect(() => {
    // HTTP
  }, []);
  return <div>Reviews: {movieId}</div>;
};

export default Reviews;
