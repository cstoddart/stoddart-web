import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';

const PageTitle = styled.h1`
  margin-bottom: 50px;
`;

const IndexPage = () => {
  return (
    <>
      <PageTitle>Welcome To Stoddart Web</PageTitle>
      <p>A blog about web development</p>
      <Button to="/articles/">Articles</Button>
    </>
  );
};

export default IndexPage;
