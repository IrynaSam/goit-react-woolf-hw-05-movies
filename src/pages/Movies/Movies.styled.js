import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const SearchForm = styled.form`
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 300px; // Або інший розмір за потреби

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #e7e481;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cfcfcf;
  }
`;
