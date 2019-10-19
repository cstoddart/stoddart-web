import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNavigation = styled.div`
  margin-top: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigationItem = styled(Link)`
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  color: white;
`;

const Logo = styled(NavigationItem)`
  font-size: 36px;
`;

export const Navigation = () => (
  <StyledNavigation>
    <Logo to="/">Stoddart Web</Logo>
    <NavigationItem to="/articles">Articles</NavigationItem>
  </StyledNavigation>
);
