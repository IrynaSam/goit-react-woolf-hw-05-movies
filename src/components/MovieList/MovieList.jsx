import React from 'react';
import MovieListItem from './MovieListItem';
import { StyledList } from './MovieList.styled';

const MovieList = ({ movies }) => {
  console.log(movies);

  return (
    <StyledList>
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </StyledList>
  );
};

export default MovieList;
