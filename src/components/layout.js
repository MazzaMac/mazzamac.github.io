/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Sidebar from "./sidebar.js";
import Footer from "./footer.js";

import Header from "./header"
import "./layout.css"

const Layout = ({ children, currentPath, layout}) => {


  return (
    <div id="grid-container">
          <Header layout={layout} />
          <main id="content" >
          <div style={{ margin: '0px auto', marginTop: '2rem', padding: '0px 0 1.45rem 0'}}>
            {children}
          </div>
        </main>
        <Sidebar currentPath={currentPath} layout={layout} />
        <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
