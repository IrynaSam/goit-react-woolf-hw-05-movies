import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledForm, StyledInput, StyledButton } from './SearchForm.styled';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    if (!searchQuery.trim()) return;
    setSearchParams({ query: searchQuery });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search movies"
      />
      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  );
};

export default SearchForm;
