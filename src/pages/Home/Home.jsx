import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/movieApi';
import MovieList from 'components/MovieList/MovieList';
import { HomeContainer, Heading } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <HomeContainer>
      <Heading>Trending Today</Heading>
      <MovieList movies={movies} />
    </HomeContainer>
  );
};

export default Home;
