import React from 'react';
import { Link } from "gatsby";
import Img from 'gatsby-image';

export default function Excerpt({title, date, text, timeToRead, slug, category, tags, link, image, product, productLink, categoryFlag, redbubble, redbubbleCollection, redbubbleCollectionLink, etsyDescription, etsy}){

    
    return (
        <div style={{
            marginBottom: 50
        }}>
             { image && (
               <Link to={slug}><Img fluid={image} alt={title}/> </Link>
            )}
            
            { text && <p>{text}</p> }
            { title && <p>{title}</p> }
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <section style={{flex: 2, display: 'flex', flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                    { !link && <Link to={slug}><h2>{category}</h2></Link>}
                    { link && <a href={link}><h2 >{category}</h2></a>}
                   <small><b>{date}</b></small>
                </section>
            </div>
            { product && <p>This is available in the <Link to="/shop" >shop</Link>
                { redbubble && !etsy && " through " + <a href={redbubble}>Redbubble</a>}
                { !redbubble && etsy && ", through " + <a href={etsy}>Etsy</a>}
                { etsy && redbubble && ", with " + etsyDescription + "on" + <a href={etsy}>Etsy</a> + "or various products on" + <a href={redbubble}>Redbubble</a> }.</p>}
            { tags && <small> Tags: { tags.toLowerCase()}</small>}
        </div>
    )
}


