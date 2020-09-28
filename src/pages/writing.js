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
    {data.allMarkdownRemark.edges.map(({node}, index) => (
      <article class="image-container">
        <div class="image-description"><h2>{node.frontmatter.title}</h2>
        <p>{node.frontmatter.publication}, {node.frontmatter.date}</p></div>
      	<img class={node.frontmatter.category} src={node.frontmatter.image} alt="node.frontmatter.title" />
      </article>
    ))}

  </Layout>)
}

export const query = graphql`
query writingAll {
  allMarkdownRemark(filter: {frontmatter: {category: {}, _xtypename: {eq: "writing"}}}) {
    edges {
      node {
        id
        excerpt(format: PLAIN)
        frontmatter {
          title
           date(formatString: "YYYY, MMMM")
          category
          tags
          image
          link
          publication
          product
          etsy
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
