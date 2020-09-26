import React from 'react'
import { Link } from "gatsby"

export default function ArtObject({image, title, date, slug, category, tags}) {
  return (
    <>
    <Link to={slug}><img alt={title} src={image} /></Link>
    </>
  )
}
