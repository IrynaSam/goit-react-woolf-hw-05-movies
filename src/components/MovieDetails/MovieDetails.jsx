import React, { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/movieApi';
import {
  DetailsWrapper,
  MoviePoster,
  MovieTitle,
  UserScore,
  MovieOverview,
  GenreList,
  AdditionalInfo,
  MovieContent,
  InfoTitle,
  Wrapper,
  InfoList,
  InfoItem,
  BackLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/path-to-default-image.jpg';

  const backLinkHref = location.state?.from || '/';

  return (
    <DetailsWrapper>
      <Wrapper>
        {' '}
        <MoviePoster src={posterUrl} alt={movie.title} />
        <MovieContent>
          {' '}
          <MovieTitle>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </MovieTitle>
          <UserScore>
            User Score: {Math.round(movie.vote_average * 10)}%
          </UserScore>
          <MovieOverview>Overview: {movie.overview}</MovieOverview>
          <GenreList>
            Genres: {movie.genres.map(genre => genre.name).join(', ')}
          </GenreList>
        </MovieContent>
      </Wrapper>
      <BackLink to={backLinkHref}>← Go back</BackLink>
      <AdditionalInfo>
        <InfoTitle>Additional information</InfoTitle>
        <InfoList>
          <InfoItem>
            <BackLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </BackLink>
          </InfoItem>
          <InfoItem>
            <BackLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </BackLink>
          </InfoItem>
        </InfoList>
      </AdditionalInfo>

      <Outlet />
    </DetailsWrapper>
  );
};

export default MovieDetails;
