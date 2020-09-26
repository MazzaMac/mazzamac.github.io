import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Excerpt from "../components/excerpt"

function IndexPage({data, location}){
    const url = location.href ? location.href : '';
    // console.log(data)
return (
  <Layout currentPath={url}>
    <SEO title="Home" />
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
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
        image={node.frontmatter.image}
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
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 10) {
    edges {
      node {
        id
        excerpt(format: PLAIN)
        frontmatter {
          title
          date(fromNow: true)
          category
          tags
          image
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
