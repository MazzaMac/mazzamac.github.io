import React from 'react'
import { Link } from "gatsby"

export default function Excerpt({title, date, text, timeToRead, slug, category, tags, link, image, product, productLink, categoryFlag, redbubble, redbubbleCollection, redbubbleCollectionLink, etsyDescription, etsy}){

    return (
        <article style={{
            marginBottom: 50
        }}>
            <header style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <section style={{flex: 2}}>
            { !link && <Link to={slug}>
            <h2>{category.replace(/^\w/, c => c.toUpperCase())}: {title}</h2></Link>}
            { link && <a href={link}><h2 >{category.replace(/^\w/, c => c.toUpperCase())}: {title}</h2></a>}</section>
            <small style={{flex: 1, alignSelf: 'flex-end'}}><b>{date}</b></small>
            </header>
            <p>{text}</p>



            { link && <a href={link} >
                <img alt={title} src={image} />
            </a>}
            { product && <p>This is available in the <Link to="/shop" >shop</Link>
                { redbubble && !etsy && " through " + <a href={redbubble}>Redbubble</a>}
                { !redbubble && etsy && ", through " + <a href={etsy}>Etsy</a>}
                { etsy && redbubble && ", with " + etsyDescription + "on" + <a href={etsy}>Etsy</a> + "or various products on" + <a href={redbubble}>Redbubble</a> }.</p>}
            { tags && <small> Tags: { tags.toLowerCase()}</small>}
        </article>
    )
}
