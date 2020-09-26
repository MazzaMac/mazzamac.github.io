import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Excerpt from "../components/excerpt"

function WritingPage({data, location}){
    const url = location.href ? location.href : '';

return (
  <Layout
    currentPath={url}>
    <SEO title="Writing" />
    <h1>Welcome to my Writing</h1>

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
query writingAll {
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

export default WritingPage
