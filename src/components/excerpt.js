import React from 'react';
import { Link } from "gatsby";
import Img from 'gatsby-image';

export default function Excerpt({title, date, text, timeToRead, slug, category, tags, link, image, product, productLink, displayCategoryFlag = true, redbubble, redbubbleCollection, redbubbleCollectionLink, etsyDescription, etsy}){

    return (
        <div style={{ marginBottom: 50 }}>
            { title && (
                <h2 class="front-page">{displayCategoryFlag ? (category + ": ") : ""}{title}</h2>) }
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start'}}>
            <section style={{
                flex: 2,
                display: 'flex',
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between"}}>
                   <small><b>{date}</b></small>
                </section>
            </div>

             { image && (
               <Link to={slug} ><Img fluid={image} alt={title} /> </Link>
            )}
            
            { text && <div dangerouslySetInnerHTML={{__html: text }}/> }
            <hr />
           
            
            { product && <p>This is available in the <Link to="/shop" >shop</Link>
                { redbubble && !etsy && " through " + <a href={redbubble}>Redbubble</a>}
                { !redbubble && etsy && ", through " + <a href={etsy}>Etsy</a>}
                { etsy && redbubble && ", with " + etsyDescription + "on" + <a href={etsy}>Etsy</a> + "or various products on" + <a href={redbubble}>Redbubble</a> }.</p>}
            { tags && <small> Tags: { tags.toLowerCase()}</small>}
        </div>
    )
}


