import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Excerpt from "../components/excerpt"
import WritingEntry from "../components/writingEntry"

function WritingPage({data, location}){
    const url = location.href ? location.href : '';

return (
  <Layout currentPath={url}>
    <SEO title="Writing" />
    <ul>
    {data.allMarkdownRemark.edges.map(
      ({node}, index) => (
        <WritingEntry
          title={node.frontmatter.title}
          category={node.frontmatter.category}
          link={node.frontmatter.link}
          publication={node.frontmatter.publication}
          date={node.frontmatter.date}>{node.excerpt} >
          </WritingEntry>
        )
    )}
    </ul>

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
          publication
          date(formatString: "YYYY, MMMM")
          category
          tags
          image {
            childImageSharp {
              fluid(fit: COVER, maxWidth: 800, maxHeight: 400, cropFocus: ENTROPY) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
