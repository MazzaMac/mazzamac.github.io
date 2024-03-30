import React from 'react';
import { Link } from "gatsby";
import LogoHeading from "../LogoHeading";

export default function NavSection({currentPath, layout}) {

  function doesThisUrlContain(term) {
    return currentPath.toString().includes(term);
  }

  function presentLogo(placement){
    if (placement === "single") return false;
    return true
  }
  
    return (
        <nav style={{ margin: '0px auto', marginBottom: "1rem", display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '960px', alignItems: 'flex-start', fontSize: '1.4rem', lineHeight: '1.8rem', fontFamily: 'Forum' }} >

            <li className={doesThisUrlContain("blog") ? "current" : ""}><Link to="/blog">Blog</Link></li>
            <li className={doesThisUrlContain("writing") ? "current" : ""}><Link to="/writing">Writing</Link></li>
            <li className={doesThisUrlContain("art") ? "current" : ""}><Link to="/art">Art</Link></li>
            <li className={doesThisUrlContain("about") ? "current" : ""}><Link to="/about">About</Link></li>
            <li className={doesThisUrlContain("contact") ? "current" : ""}><Link to="/contact">Contact</Link></li>
            { presentLogo(layout) && (
              <li style={
                { fontSize: "1.65rem", 
                  display: "flex",
                  flexWrap: "nowrap",
                  flexDirection: "column",
                  alignItems: "center",
                  textTransform: "lowercase",
                  fontFamily: 'IM Fell Great Primer',
                  fontWeight: 400,
                  color: "#41b3c2 !important" }}>
                  <Link to="/" id="nav-logo"><LogoHeading /></Link>
              </li>)}
        </nav>
    )

}
