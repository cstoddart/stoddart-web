import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';

const PageTitle = styled.h1`
  margin-bottom: 50px;
`;

const IndexPage = () => {
  return (
    <>
      <PageTitle>To Infinity And Beyond</PageTitle>
      <p>Welcome to Stoddart Web.</p>
      <p>Now go build something great.</p>
      <Button to="/articles/">Go To Articles</Button>
    </>
  );
};

export default IndexPage;
