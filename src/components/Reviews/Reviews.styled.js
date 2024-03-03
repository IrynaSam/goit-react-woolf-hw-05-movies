import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
`;

export const ReviewsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    background-color: #f0f0f0;
  }
`;

// Стилі для імені автора відгуку
export const ReviewAuthor = styled.h4`
  margin: 0 0 10px 0;
  font-weight: bold;
`;

export const ReviewContent = styled.p`
  margin: 0;
  white-space: pre-line;
`;
