import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Excerpt from "../components/excerpt"
import { numberOfImages } from '../helpers/index.js';


function ArchivePage({data, location}){
    const url = location.href ? location.href : '';
    // console.log(data)   

  
return (
  <Layout layout="front" currentPath={url}>
    <SEO title="Archive" />
    <h1>Archive</h1>
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 100%)',
    gridGap: '1rem'}}>
    <ul>
    {data.allMarkdownRemark.edges.map(
        ({node}, index) => (
          <li><Link to={node.fields.slug}>{node.frontmatter.title}</Link> - {node.frontmatter.category} - {node.frontmatter.date}</li>
    ))}
    </ul>
    </section>

  </Layout>)
}

export const query = graphql`
query getArchiveList {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date
          category
          link
        }
        fields {
          slug
        }
      }
    }
  }
}
`

export default ArchivePage