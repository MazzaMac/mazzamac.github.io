import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Excerpt from "../components/excerpt"
import { numberOfImages } from '../helpers/index.js';


function IndexPage({data, location}){
    const url = location.href ? location.href : '';
    // console.log(data)   

  
return (
  <Layout layout="front" currentPath={url}>
    <SEO title="Home" />
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 100%)',
    gridGap: '1rem'}}>
    {data.allMarkdownRemark.edges.map(
        ({node}, index) => (
          <Excerpt key={index} title={node.frontmatter.title}
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}
        text={node.excerpt}
        tags={node.frontmattags}
        slug={node.fields.slug}
        link={node.frontmatter.link}
        image={node.frontmatter.image?.childImageSharp.fluid}
        product={node.frontmatter.product}
        productLink={node.frontmatter.productLink}
        category={node.frontmatter.category}
        etsy={node.frontmatter.etsy}
        etsyDescription={node.frontmatter.etsyDescription}
        redbubble={node.frontmatter.redbubble}
         />
    ))}
    </section>

  </Layout>)
}

export const query = graphql`
query getPostExcerpts {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 20) {
    edges {
      node {
        id
        excerpt(format: PLAIN, pruneLength: 600, truncate: true)
        frontmatter {
          title
          date
          category
          tags
          image {
            childImageSharp {
              fluid(fit: COVER, maxWidth: 800, maxHeight: 400, cropFocus: ENTROPY) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          product
          link
          etsy
          etsyDescription
          redbubble
        }
        timeToRead
        fields {
          slug
        }
      }
    }
  }
}



`

export default IndexPage
