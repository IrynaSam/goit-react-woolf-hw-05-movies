import { useLocation } from 'react-router-dom';

import {
  StyledListItem,
  StyledLink,
  StyledImg,
  MovieTitle,
} from './MovieListItem.styled';

const MovieListItem = ({ movie }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultImg;

  const location = useLocation();

  return (
    <StyledListItem>
      <StyledLink
        to={`/movies/${movie.id}`}
        state={{ from: location.pathname + location.search }}
      >
        <StyledImg src={posterUrl} alt={movie.title || movie.name} />
        <MovieTitle>{movie.title || movie.name}</MovieTitle>
      </StyledLink>
    </StyledListItem>
  );
};

export default MovieListItem;
