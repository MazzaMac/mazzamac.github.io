import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useSiteMetadata from '../hooks/use-site-metadata';

export default function NotFoundPage({location}) {
   const { siteURL } = useSiteMetadata();
   
  return (
    <Layout currentPath={`${siteURL}${location.pathname}`}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)}
