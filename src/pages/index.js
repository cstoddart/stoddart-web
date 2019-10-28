import React from 'react';

import { Button } from '../components';

const IndexPage = () => {
  return (
    <>
      <h1>To Infinity And Beyond</h1>
      <p>Welcome to Stoddart Web.</p>
      <p>Now go build something great.</p>
      <Button to="/articles/">Go To Articles</Button>
    </>
  );
};

export default IndexPage;
