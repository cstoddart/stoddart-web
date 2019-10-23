import React from 'react';
import styled from 'styled-components';

import { HexagonBackground } from './components/hexagonBackground';
import { Navigation } from './components/navigation';
import { GlobalStyles } from './globalStyles';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const MainContent = styled.div`
  padding: 150px 50px;
`;

export const App = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <Navigation />
        <MainContent>{children}</MainContent>
      </PageContainer>
      <HexagonBackground />
    </>
  );
};

export default App;
