import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNavigation = styled.div`
  padding-top: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigationItem = styled(Link)`
  font-size: 22px;
  cursor: pointer;
  color: white;
`;

const Logo = styled(NavigationItem)`
  font-weight: 600;
  font-size: 36px;
`;

export const Navigation = () => (
  <StyledNavigation>
    <h1>
      <Logo to="/">Stoddart Web</Logo>
    </h1>
    <NavigationItem to="/articles">Articles</NavigationItem>
  </StyledNavigation>
);
