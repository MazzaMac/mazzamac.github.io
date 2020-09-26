import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Excerpt from "../components/excerpt"
import useSiteMetadata from "../hooks/use-site-metadata";

function BlogPage({data, location}){
    const { siteURL } = useSiteMetadata();

return (
  <Layout
    currentPath={`${siteURL}${location.pathname}`}>
    <SEO title="Blog" />
    <h1>Welcome to the Blog</h1>

    {data.allMarkdownRemark.edges.map(({node}, index) => (
        <Excerpt key={index} title={node.frontmatter.title}
        date={node.frontmatter.date}
        timeToRead={node.timeToRead}
        text={node.excerpt}
        slug={node.fields.slug}
        category={node.frontmatter.category}
        tags={node.frontmatter.tags} />
    ))}

  </Layout>)
}

export const query = graphql`
query blogAll {
  allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog"}}}) {
    edges {
      node {
        id
        excerpt(format: PLAIN)
        frontmatter {
          title
          date
          category
          tags
        }
        timeToRead
        fields {
          slug
        }
      }
    }
  }
}`

export default BlogPage
