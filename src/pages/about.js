import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import useSiteMetadata from "../hooks/use-site-metadata";

function AboutPage({location}){
  const { siteURL } = useSiteMetadata();

    return (
        <Layout currentPath={`${siteURL}${location.pathname}`} layout="single" >
          <SEO title="About" />
            <h1>About Me</h1>
            <p>Hello, welcome to this, my website.</p>

            <p>If you’ve never been to a website before, it’s a bit like a café except we don’t serve food or drink. You’re welcome to sit in it and have a little look around, and if you’d like to leave a tip, feel free. You will be pleased to know that this café is dog-friendly and has free WiFi*.</p>

            <h2>So, what is Marianne MacRae?</h2>

            <p>I am a Creative Writing PhD student at the University of Edinburgh researching talking animals in poetry, graciously funded by the SGSAH. I write poems of a surreal bent, often featuring, you guessed it, talking animals. Sometimes they go in magazines and sometimes I read them out loud in front of people. I’ll no doubt give deets of these things in the weekly blog I’m planning on writing (based on what I know about myself, this is an ambitious amount of blogging).</p>

            <p>
            I also do drawings (see <a href="https://mariannemacrae.co.uk/category/art">here</a>). I might, in time, put some of these wee critters on mugs and plates and ting so that should anyone care to, they can buy them, and then they can come to my café (website) and drink a coffee on me**, while they read my blog (<a href="https://mariannemacrae.co.uk/category/blog/">here</a>). How very self-indulgent to paint this idyllic picture of your future lives revolving around your interaction with me. But for reals though, guys, thanks for looking at your screens in my name.
            </p>

            <small>*The WiFi is provided by you via your internet connection.
            </small><br /> <small>
**You provide the coffee.</small>

        </Layout>

    )
}

export default AboutPage;
