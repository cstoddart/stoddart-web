import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/articles/">Go to page 2</Link>
    </>
  );
};

export default IndexPage;
