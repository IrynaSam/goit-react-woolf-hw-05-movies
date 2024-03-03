import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/movieApi';
import {
  CastSection,
  CastList,
  CastItem,
  ActorImage,
  ActorName,
  CharacterName,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultActorImg = 'https://placehold.it/100x150';

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getMovieCredits(movieId);
        setCast(castData.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <CastSection>
      <h3>Cast</h3>
      <CastList>
        {cast.map(actor => (
          <CastItem key={actor.cast_id}>
            <ActorImage
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : defaultActorImg
              }
              alt={actor.name}
            />
            <ActorName>{actor.name}</ActorName>
            <CharacterName>as {actor.character}</CharacterName>
          </CastItem>
        ))}
      </CastList>
    </CastSection>
  );
};

export default Cast;
