import React from 'react';
import styled from 'styled-components';
import { Location } from '@reach/router';

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
    <Location>
      {({ location }) => (
        <>
          <GlobalStyles />
          <PageContainer>
            <Navigation />
            <MainContent>{children}</MainContent>
          </PageContainer>
          <HexagonBackground location={location} />
        </>
      )}
    </Location>
  );
};

export default App;
