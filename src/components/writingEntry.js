import React from 'react';
import { Link } from "gatsby";
import Img from 'gatsby-image';

export default function WritingEntry({frontmatter}){

    const { 
        title,
        subtitle,
        link, 
        date,
        publication,
        // publication_type,
        issue, 
        slug,
        // publishers,
        // editors,
        // ISBN,
        // snippet,
        // audio,
        // video,
        // tags        
         } = frontmatter;

    return (
    	<li>
            <b><Link to={`..${slug}`}>{title}</Link></b><br />
            <em>{ publication }</em>{ issue && ( " (issue " + issue +")")}
            {" - " + date} { link && (<a href={link}>(link)</a>)}
        </li>
    )
}