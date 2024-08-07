import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Excerpt from "../components/excerpt"

function BlogPage({data, location}){
    const url = location.href ? location.href : '';

return (
  <Layout
    currentPath={url} layout="list">
    <SEO title="Blog" />
    <h1>Welcome to the Blog</h1>

    {data.allMarkdownRemark.edges.map(({node}, index) => (
        <Excerpt key={index} title={node.frontmatter.title}
        date={node.frontmatter.date}
        timeToRead={node.timeToRead}
        text={node.excerpt}
        slug={node.fields.slug}
        category={node.frontmatter.category}
        tags={node.frontmatter.tags} 
        displayCategoryFlag={false}/>
    ))}

  </Layout>)
}

export const query = graphql`
query blogAll {
  allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog"}}}) {
    edges {
      node {
        id
        excerpt(
          format: PLAIN
          pruneLength: 600
          truncate: true
        )
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
