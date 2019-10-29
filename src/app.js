import React, { useState } from 'react';
import styled from 'styled-components';
import { Location } from '@reach/router';
import { Helmet } from 'react-helmet';

import {
  Navigation,
  Footer,
  HexagonBackground,
} from './components';
import { GlobalStyles } from './globalStyles';
import { mobileBreakpoint } from './constants';

const PageContainer = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
`;

const MainContent = styled.div`
  padding: 150px 75px;
  min-height: ${({ navigationHeight, footerHeight }) =>
    `calc(100vh - ${navigationHeight}px - ${footerHeight}px)`
  };

  @media (max-width: ${mobileBreakpoint}px) {
    padding: 50px 15px;
  }
`;

export const App = ({ children }) => {
  const [navigationHeight, setNavigationHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <Location>
      {({ location }) => (
        <>
          <Helmet>
            <title>Stoddart Web</title>
          </Helmet>
          <GlobalStyles />
          <PageContainer>
            <Navigation setNavigationHeight={setNavigationHeight} />
            <MainContent
              navigationHeight={navigationHeight}
              footerHeight={footerHeight}
            >{children}</MainContent>
            <Footer setFooterHeight={setFooterHeight} />
          </PageContainer>
          <HexagonBackground location={location} />
        </>
      )}
    </Location>
  );
};

export default App;
