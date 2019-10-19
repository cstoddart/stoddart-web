import React from 'react';
import styled from 'styled-components';

import { HexagonBackground } from './hexagonBackground';
import { Navigation } from './navigation';
import { GlobalStyles } from '../globalStyles';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const MainContent = styled.div`
  padding: 150px 100px;
`;

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <HexagonBackground />
      <PageContainer>
      <Navigation />
      <MainContent>{children}</MainContent>
      </PageContainer>
    </>
  );
};

export default Layout;
