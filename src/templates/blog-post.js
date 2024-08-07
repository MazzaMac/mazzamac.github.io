import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({data, location}) {
    const post = data.markdownRemark
    const url = location.href ? location.href : '';
    
    const { title,
        DOI,
        ISBN,
        _xtypename,
        appear_on_index,
        audio,
        category,
        date,
        editors,
        etsy,
        etsyDescription,
        image_location,
        issue,
        issue_number,
        link,
        page,
        product,
        publication,
        publication_type,
        publishers,
        series,
        snippet,
        subtitle,
        tags,
        video} = post.frontmatter; 

      function getId(url) {
        // console.log('extracting url:', url)
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        // console.log('regExp mnatch:', match)

        return (match && match[2].length === 11) ? match[2] : null;
      }

      // const videoID = getId(video);
      // console.log('videoID:', videoID)

  return (
    <Layout layout="single" currentPath={url}>
      <h1>{title}</h1>
      { subtitle && (<h2>{ subtitle }</h2>)}
      <aside>
        { date && (<>published: {date}<br /></>)} 
        { category && (<>category: {category} { publication_type && (`// ${publication_type}`)} <br /></>)}

        { publication && (<>publication: <em>{publication}{ issue && (` (issue ${issue})`)}</em><br /></>)}
        { editors && (<>editors: {editors}<br /></>)}
        { publishers && (<>publishers: {publishers}<br /></>)}
        { issue_number && (<>issue_number: {issue_number}<br /></>)}
        { page && (<>page: {page}<br /></>)}
        { series && (<>series: {series}<br /></>)}
        { DOI && (<>DOI: {DOI}<br /></>) }
        { ISBN && (<>ISBN: {ISBN}<br /></>) }
      </aside>
        <hr />

      <article dangerouslySetInnerHTML={{ __html: post.html }}></article>
      { snippet && (<div id="snippet" dangerouslySetInnerHTML={{__html: post.frontmatter.snippet }}/>)}
      { audio && (<p>audio: {audio}</p>)}
    

      { video && (
        <iframe title="video_on_page" width="560" height="315" src={`https://www.youtube.com/embed/${(getId(video))}`} frameBorder="0" allowFullScreen />)}

      { product && (<p>product: {product}</p>)}
      { link && (<p><a href="{link}" class="underline-override"><b>[external link]</b></a></p>)}

      <hr />
      { tags && (<>{tags}</>)}

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        DOI
        ISBN
        _xtypename
        appear_on_index
        audio
        category
        date
        editors
        etsy
        etsyDescription
        image_location
        issue
        issue_number
        link
        page
        product
        publication
        publication_type
        publishers
        series
        snippet
        subtitle
        tags
        video
      }
    }
  }
`
