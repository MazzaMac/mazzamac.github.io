import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Excerpt from "../components/excerpt"
import ArtObject from "../components/ArtObject";

function ArtPage({data, location}){
    const url = location.href ? location.href : '';

return (
  <Layout
    currentPath={url}>
    <SEO title="Art" />
    <p>Some of my work is available on demand as prints, stickers and all sorts through <a href="https://www.redbubble.com/people/mariannemacrae">RedBubble
    </a>, or you can buy limited editions directly from my etsy store (not real yet, soon though)</p>
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '1rem'}}>
    {data.allMarkdownRemark.edges.map(({node}, index) => (
        <ArtObject key={index} title={node.frontmatter.title}
        date={node.frontmatter.date}
        image={node.frontmatter.image}
        slug={node.fields.slug}
        category={node.frontmatter.category}
        tags={node.frontmatter.tags} />
    ))}</section>

  </Layout>)
}

export const query = graphql`
query artAll {
  allMarkdownRemark(filter: {frontmatter: {category: {eq: "art"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          date
          category
          image
          link
        }
        fields {
          slug
        }
      }
    }
  }
}`

export default ArtPage
