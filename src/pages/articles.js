import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ArticleListItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticleListItemTitle = styled.h2`
  color: white;
`;

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.path}>
    <ArticleListItem>
      <ArticleListItemTitle>{post.frontmatter.title}</ArticleListItemTitle>
      <h5>{post.frontmatter.date}</h5>
    </ArticleListItem>
  </Link>
);

const Articles = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <>{Posts}</>
};

export default Articles;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;