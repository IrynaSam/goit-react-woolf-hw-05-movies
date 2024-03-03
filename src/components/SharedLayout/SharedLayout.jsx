import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, Main, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          {/* Add other links if needed */}
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <footer></footer>
    </>
  );
};
export default SharedLayout;
