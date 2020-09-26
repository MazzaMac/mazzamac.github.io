import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
  import useSiteMetadata from "../hooks/use-site-metadata";

export default function ContactPage({location}){
  
  const { siteURL } = useSiteMetadata();


    return (
        <Layout currentPath={`${siteURL}${location.pathname}`}>
          <SEO title="Contact" />
        <p>Ways of contacting me, with increasing effort: Instagram, Twitter, Facebook (not really on there much so I wouldn't suggest it), Email, Letter, Handwritten notes posted through my letter box, flyer on my car windshield, thought sent through telepathy, dream images, incidental music in the background while I eat at a restaurant, digetic music in a TV show or film, Phone. </p>

        </Layout>

    )
}
