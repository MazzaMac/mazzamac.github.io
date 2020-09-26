import React from 'react'
import { graphql } from "gatsby"
import Image from "./image"

function ArtWall({type}){
    // var typeQuery;
    // if (type === "product"){ typeQuery = ", product: {in: true}"};
    return (
        <Image />
    // <section id="art-wall" style={"display: flex;"}>
    //     {data.allMarkdownRemark.edges.map(({node}, index) => (
    //         <a key={index} href={node.frontmatter.link}>
    //                     <img src={node.frontmatter.image} style="flex: 1;" />
    //                 </a>
    //                 ))}
    //
    //
    //
    // </section>
    )
}

export const query = graphql`
query imagesAll {
  allMarkdownRemark(filter: {frontmatter: {category: {eq: "art"}}}) {
    edges {
      node {
        id
        excerpt(format: PLAIN)
        frontmatter {
          title
          date
          category
          image
          link
        }
        timeToRead
        fields {
          slug
        }
      }
    }
  }
}`

export default ArtWall;
