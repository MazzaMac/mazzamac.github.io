import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoHeading from "./LogoHeading";

export default function Header({ siteTitle, currentPath, layout, device }) {

  return (
    <>
      <header className={layout} style={{ gridArea: "header", width: "100%"}}>
        <Link to="/" style={{ textDecoration: `none`}}>
          <div id="logo">
            <h1 className={layout} id="title" style={{ textTransform: 'lowercase' }} >
              <LogoHeading />
            </h1>
          </div>
        </Link>
      </header>  
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  currentPath: PropTypes.string,
  layout: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}