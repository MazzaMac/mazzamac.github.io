/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode= ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
        node, name: `slug`, value: slug,
    })
  }
}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = [
    `type MarkdownRemark implements Node { frontmatter: Frontmatter }`,
    `type Frontmatter {
      # you may need to adapt this line depending on the node type and key
      # that you want to create the relationship for
      image: File @link(by: "relativePath")
    }`
  ]
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                //Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },


        })
    })
}
