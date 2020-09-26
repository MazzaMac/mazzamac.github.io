import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"


const Header = ({ siteTitle, currentPath }) => (

  <header style={{ background: '#0091AD', color: '#F0E5E8'}}  >

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  currentPath: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
