import React from 'react';
import { Link } from "gatsby";
import NavSection from './sidebar/navSection.js'

export default function Sidebar({ currentPath, children, layout}) {

  function doesThisUrlContain(term) {
    return currentPath.toString().includes(term);
  }


  function frontPageSidebar(){
    return (
        <>
        <img alt="portrait of marianne macrae" src="https://instagram.flba1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/61499335_2268829709849127_6852742186170056704_n.jpg?_nc_ht=instagram.flba1-1.fna.fbcdn.net&_nc_ohc=U-fW_50mv5EAX8RVIR8&oh=9b6770b9af31d61285a2b7b1b5017af6&oe=5F8B72A4" />
        <h3>Projects</h3>
        <ul>
          <li>Talking Animals</li>
          <li>Joseph Lister</li>
        </ul>
        </>

    )
  }

  function artSidebar(){
    return;
  }

  function blogSidebar(){
    return (
        <>
        <h2>Blogs</h2>
        <b><a href="https://www.mochatheweek.com/">Mocha The Week</a></b>
        </>
    )
  }

  function writingSidebar(){
    return (
        <>
        <h2>Publications</h2>

        <h3>Poetry</h3>
        <ul>
          <li>Recital (Forthcoming Pamplet)</li>
          <li><a href="https://www.mmu.ac.uk/write/confessions-urbana.php">Confessions Urbana</a>, <i>Manchester Metropolitan University (#WWWAN, April 2020)</i></li>
          <li><a href="https://www.popshotpopshot.com/posts/20160426-the-pervert/">The Pervert</a>, <i>Popshot Quarterly</i></li>
        <li><a href="https://www.everywritersresource.com/poemeveryday/nephew-nature-trail-marianne-macrae/">The Nephew Nature Trail</a>, <i>Every Day Poems</i></li>
        </ul>
        
        <h3>Academic</h3>
        <ul>
          <li>Chapter on Elizabeth Bishop (upcoming)</li>
        </ul>
        </>

    )
  }

  return (
    <>
      <aside id="sidebar" className="sticky" style={{flex:1, paddingLeft: 20}}>
        <NavSection currentPath layout={layout}/>
      </aside>
    </>)
}
