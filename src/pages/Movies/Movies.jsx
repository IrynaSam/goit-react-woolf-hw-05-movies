import React, { useState } from 'react';
import { searchMovies } from '../../services/movieApi';
import MovieList from 'components/MovieList/MovieList';
import {
  MoviesContainer,
  SearchForm,
  SearchInput,
  SearchButton,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async event => {
    event.preventDefault();
    if (!query) return;

    try {
      const { results } = await searchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <MoviesContainer>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <MovieList movies={searchResults} />
    </MoviesContainer>
  );
};

export default Movies;
