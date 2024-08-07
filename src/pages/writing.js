import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WritingSection from "../components/writingSection"

function WritingPage({data, location}){
    const url = location.href ? location.href : '';

    function renderCollectionsByGenre() {

      // const collectionsArray = [];
      const arrayOfCollections = [];
      // console.log( 'renderCollectionsByGenre Called' );
      // console.log(' data is', typeof data.allMarkdownRemark.edges);

      // create array from data object
      let categories = []
      let dataObject = data.allMarkdownRemark.edges;
      let keys = [];
      
      for (let key in dataObject) {      
          // console.log('data has property "key"', dataObject.hasOwnProperty(key));
          // console.log('category is ', dataObject[key].node.frontmatter.category)
          const category = dataObject[key].node.frontmatter.category;
           
           if (dataObject.hasOwnProperty(key)) { keys.push(key)};

           let categoryIndex = categories.indexOf(category)
           if (categoryIndex === -1){
            categories.push(category)
            arrayOfCollections.push({category, entries: [] })
            categoryIndex = categories.length - 1;
          }

          const infoObject = dataObject[key].node.frontmatter
          const adjustedObject = { ...infoObject, slug: dataObject[key].node.fields.slug}

          arrayOfCollections[categoryIndex].entries.push(adjustedObject)
      
       }

      // console.log('array of collections', arrayOfCollections)

      return arrayOfCollections;
    }

return (
  <Layout currentPath={url}>
    <SEO title="Writing" />

    { renderCollectionsByGenre().map(( data, index ) => {
      // console.log('sending this to WritingSection', data)
      return ( <WritingSection key={"collection_key_" + index} title={data.category} entries={data.entries} parent={true} level={1} group_by_key={"publication_type"} /> )
      })
  }

  </Layout>
  )
}

export const query = graphql`
query writingAll {
  allMarkdownRemark(sort: {fields: [frontmatter___publication, frontmatter___date], order: [ASC, DESC]}, filter: {frontmatter: {category: {}, _xtypename: {eq: "writing"}}}) {
    edges {
      node {
        id
        excerpt(format: PLAIN)
        frontmatter {
          title
          subtitle
          publication
          issue
          publishers
          ISBN
          publication_type
          editors
          date(formatString: "YYYY, MMMM")
          category
          snippet
          audio
          video
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
