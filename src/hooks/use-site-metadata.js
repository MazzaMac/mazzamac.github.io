import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

export default function useSiteMetadata() {
  const { site } = useStaticQuery(
  graphql`
    query {
    site {
      siteMetadata {
      title
      description
      author
      siteURL
      }
    }
    }
  `,
  );
  return site.siteMetadata;
};
