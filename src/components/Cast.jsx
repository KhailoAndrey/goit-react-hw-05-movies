import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastElement, CastList } from './Cast.styled';

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
const api_key = 'cbd8bb6ab7443496075b168356471aed';
const url = `https://api.themoviedb.org/3/movie/`;

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${url}${movieId}/credits?api_key=${api_key}`);
      console.log(result.data.cast);
      setCast(result.data.cast);
    };
    fetchData();
  }, [movieId]);

  if (!cast) {
    return <b>Loading...</b>;
  }
  return (
    <CastList>
      {cast.map(el => (
        <CastElement key={el.cast_id}>
          <img
            src={
              cast.profile_path
                ? `https://image.tmdb.org/t/p/w200${el.profile_path}`
                : 'https://via.placeholder.com/100x150.png?text=No+Image'
            }
            alt={el.name}
          />
          <p>{el.name}</p>
          <p>Character: {el.character}</p>
        </CastElement>
      ))}
    </CastList>
  );
};

export default Cast;
