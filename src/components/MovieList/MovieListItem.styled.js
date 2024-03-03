import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledListItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  width: 220px;
  margin-bottom: 20px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-bottom: 1px solid #ddd;
`;

export const MovieTitle = styled.h3`
  padding: 10px;
  font-size: 1em;
  margin: 10px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
