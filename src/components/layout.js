/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */


import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
// import Logo from "./logo";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import Header from "./header"
import "./layout.css"

const Layout = ({ children, currentPath }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
          siteMetadata {
          title
        }
    }
}
`)

    console.log(data)
  return (
    <>
        <main id="grid-container" style={{display:'flex', flexDirection: 'row'}}>
          <section id="content" style={{flex:3}}>
            <Link to="/" style={{ textDecoration: `none`}}><h1 id="logo">Marianne<br />MacRae</h1></Link>
            <a href="https://instagram.com/mariannemacraeart" style={{ paddingRight: '0.5em', textDecoration: `none`}}><b>@MarianneMacraeArt</b></a>
            <a href="https://twitter.com/MarianneMacRae/" style={{ textDecoration: `none`}}><b>@MarianneMacrae</b></a>
            <br /><b>Edinburgh-based writer and illustrator</b>



            {/*
              // <header style={{ backgroundColor: 'white', height: '12rem', minHeight: '210px', width: '100%',top: 0, zIndex: -200}}>
            // <Link to="/" style={{ color: `white`, textDecoration: `none`}}>
              // <Logo />
            // </Link>
            // </header>
            */}
          <div style={{ margin: '0px auto', maxWidth: '960px', marginTop: '2rem', padding: '0px 0 1.45rem 0'}}>{children}</div>
          </section>
        <Sidebar currentPath={currentPath}/>

        </main>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
