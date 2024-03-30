import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({data, location}) {
    const post = data.markdownRemark
    const url = location.href ? location.href : '';

  return (
    <Layout layout="single" currentPath={url}>
      <h1>{post.frontmatter.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.html }}></article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
