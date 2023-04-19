import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewContent, ReviewItem, ReviewList } from './Reviews.styled';

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
const api_key = 'cbd8bb6ab7443496075b168356471aed';
const url = `https://api.themoviedb.org/3/movie/`;

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setreviews] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${url}${movieId}/reviews?api_key=${api_key}`);
      setreviews(result.data.results);
    };
    fetchData();
  }, [movieId]);
  if (!reviews) {
    return <b>Loading...</b>;
  }
  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie...</p>
  }
  return (
    <>
      <ReviewList>
        {reviews.map(review => (
          <ReviewItem key={review.id}>
            <h5>Auhor: {review.author}</h5>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewItem>
        ))}
      </ReviewList>
    </>
  );
};

export default Reviews;
