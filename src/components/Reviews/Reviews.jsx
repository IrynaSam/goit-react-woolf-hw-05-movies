import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/movieApi';
import {
  ReviewsContainer,
  ReviewsList,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      <ReviewsList>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewAuthor>{review.author}</ReviewAuthor>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))
        ) : (
          <ReviewContent>No reviews found.</ReviewContent>
        )}
      </ReviewsList>
    </ReviewsContainer>
  );
};

export default Reviews;
