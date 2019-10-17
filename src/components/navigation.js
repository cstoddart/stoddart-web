import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNavigation = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

const NavigationItem = styled.span`
  font-size: 22px;
`;

export const Navigation = () => (
  <StyledNavigation>
    <Logo to="/" as="h1">Stoddart Web</Logo>
    <NavigationItem>Articles</NavigationItem>
  </StyledNavigation>
);
