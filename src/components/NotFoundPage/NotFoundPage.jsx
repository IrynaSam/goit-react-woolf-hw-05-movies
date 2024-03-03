import React from 'react';
import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <StyledContainer>
      <StyledHeading>404 Not Found</StyledHeading>
      <StyledParagraph>
        The page you're looking for doesn't exist or has been moved.
      </StyledParagraph>
    </StyledContainer>
  );
};

export default NotFoundPage;
