const API_KEY = '842bd71c1f2824f7da65afa384cb3d5e'; // Ваш наданий API ключ
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = async () => {
  const endpoint = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error('Could not fetch trending movies');
  }
  return response.json();
};

const searchMovies = async query => {
  const endpoint = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error('Could not search for movies');
  }
  return response.json();
};

const getMovieDetails = async movieId => {
  const endpoint = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Could not fetch details for movie ID: ${movieId}`);
  }
  return response.json();
};

const getMovieCredits = async movieId => {
  const endpoint = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Could not fetch credits for movie ID: ${movieId}`);
  }
  return response.json();
};

const getMovieReviews = async movieId => {
  const endpoint = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Could not fetch reviews for movie ID: ${movieId}`);
  }
  return response.json();
};

export {
  fetchTrendingMovies,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
