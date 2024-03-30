import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useSiteMetadata from "../hooks/use-site-metadata";

export default function SecondPage({location}) {
  const { siteURL } = useSiteMetadata();

return (
  <Layout currentPath={`${siteURL}${location.pathname}`}>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}
