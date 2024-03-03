import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  a {
    text-decoration: none;
    margin: 0 1rem;
    color: #007bff;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;

export const Main = styled.main`
  padding: 1rem;
  flex: 1;
`;

export const Link = styled(RouterLink)`
  /* Add styles for links here if you want them to be different from Nav a */
`;
