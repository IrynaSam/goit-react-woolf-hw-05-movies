import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/movieApi';
import MovieList from 'components/MovieList/MovieList';
import {
  MoviesContainer,
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchButton,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  console.log(location.state);

  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery)
        .then(({ results }) => {
          setSearchResults(results);
        })
        .catch(console.error);
    }
  }, [searchQuery]);

  const handleSearch = async event => {
    event.preventDefault();
    if (!query) return;

    try {
      const { results } = await searchMovies(query);
      setSearchResults(results);
      navigate(`/movies?query=${query}`);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <MoviesContainer>
      <SearchContainer>
        <SearchForm onSubmit={handleSearch}>
          <SearchInput
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search movies"
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      </SearchContainer>
      <MovieList movies={searchResults} />
    </MoviesContainer>
  );
};

export default Movies;
