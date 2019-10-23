import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const PostHeader = styled.div`
  margin-bottom: 50px;
`;

const PostTitle = styled.h1`
  margin-bottom: 5px;
`;

const PostDate = styled.h5`
  font-size: 14px;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <PostHeader>
        <PostTitle>{frontmatter.title}</PostTitle>
        <PostDate>{frontmatter.date}</PostDate>
      </PostHeader>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
