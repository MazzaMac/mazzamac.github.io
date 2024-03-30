import React from 'react'
import { Link } from "gatsby"
import Img from 'gatsby-image';

export default function ArtObject({image, title, date, slug, category, tags}) {
  return (
    <>
    <Link to={slug}><Img alt={title} fixed={image} /></Link>
    </>
  )
}
