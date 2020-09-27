import React from 'react';
import { Link } from "gatsby";

export default function Sidebar({ currentPath, children }) {

  function doesThisUrlContain(term) {
    return currentPath.toString().includes(term);
  }

  const frontPageSidebar = (<>
  <img alt="portrait of marianne macrae" src="https://instagram.flba1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/61499335_2268829709849127_6852742186170056704_n.jpg?_nc_ht=instagram.flba1-1.fna.fbcdn.net&_nc_ohc=U-fW_50mv5EAX8RVIR8&oh=9b6770b9af31d61285a2b7b1b5017af6&oe=5F8B72A4" />



  <h3>Projects</h3>
  <ul>
    <li>Talking Animals</li>
    <li>Joseph Lister</li>
    </ul></> )

    const navSection = (
      <nav style={{ margin: '0px auto', marginBottom: "1rem", display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '960px', alignItems: 'flex-start', fontSize: '1.4rem', lineHeight: '1.8rem', fontFamily: 'Forum' }} >


              <li className={doesThisUrlContain("blog") ? "current" : ""}><Link to="/blog">Blog</Link></li>
              <li className={doesThisUrlContain("writing") ? "current" : ""}><Link to="/writing">Writing</Link></li>
              <li className={doesThisUrlContain("art") ? "current" : ""}><Link to="/art">Art</Link></li>
              <li className={doesThisUrlContain("about") ? "current" : ""}><Link to="/about">About</Link></li>
              <li className={doesThisUrlContain("shop") ? "current" : ""}><Link to="/shop">Shop</Link></li>
              <li className={doesThisUrlContain("contact") ? "current" : ""}><Link to="/contact">Contact</Link></li>

        </nav>
    )
    const artSidebar = (
      <p>You can buy my art on <a href="https://www.redbubble.com/people/mariannemacrae">RedBubble
      </a> or on my etsy store (not real yet, soon though)</p>
    )

    const blogSidebar = (
      <>
      <h2>Blogs</h2>
      <b><a href="https://www.mochatheweek.com/">Mocha The Week</a></b>

      </>
    )
    const writingSidebar = (
      <>

      <h2>Publications</h2>

        <h3>Poetry</h3>
        <ul>
          <li>Recital (Forthcoming Pamplet)</li>
          <li><a href="https://www.mmu.ac.uk/write/confessions-urbana.php">Confessions Urbana</a>, <i>Manchester Metropolitan University (#WWWAN, April 2020)</i></li>
          <li><a href="https://inpressbooks.co.uk/collections/all/products/spells">Unknown</a>, Spells (Inpress Books, Oct 2018)</li>
          <li><a href="https://www.acumen-poetry.co.uk/marianne-macrae/?doing_wp_cron=1600890517.2200870513916015625000">Post Walden Pond</a>, <i>Acumen</i></li>
          <li><a href="https://shed3.noelchidwick.co.uk/blog/product/multiverse-an-international-anthology-of-science-fiction-poetry/"></a><i>Multiverse (2018)</i></li>
          <li><a href="https://decoratingdissidence.com/2019/08/31/a-kind-of-fretful-speech/">"A kind of fretful speech"</a>, <i>Decorating Dissidence (Issue #3)</i></li>
          <li><a href="https://edinburgh-review.com/current-issue/">Need to check the title</a>, <i>Edinburgh Review (Issue #140 "In-between places")</i></li>
          <li><a href="https://www.popshotpopshot.com/posts/20160426-the-pervert/">The Pervert</a>, <i>Popshot Quarterly</i></li>
          <li><a href="https://untilonlythemountainremains.wordpress.com/jump-into-a-story/watchers/">Watchers</a>, <i>Until Only the Mountain Remains</i></li>
          <li><a href="https://www.ed.ac.uk/files/atoms/files/fromarthursseat_2016.pdf">January Diary</a>, <i>Grierson Verse Prize Winner 2016</i></li>
          <li><a href="https://www.everywritersresource.com/poemeveryday/nephew-nature-trail-marianne-macrae/">The Nephew Nature Trail</a>, <i>Every Day Poems</i></li>
        </ul>
        <h3>Academic</h3>
        <ul>
          <li>Chapter on Elizabeth Bishop (upcoming)</li>
        </ul>


        </>
    )

    return (
      <aside id="sidebar" style={{flex:1, paddingLeft: 20, backgroundColor: '#0091AD'}}>
        {navSection}
      { doesThisUrlContain("blog") && blogSidebar }
      { doesThisUrlContain("writing") && writingSidebar}
      { doesThisUrlContain("about") && [frontPageSidebar, writingSidebar, blogSidebar, ] }
      { doesThisUrlContain("art") && artSidebar }
      { doesThisUrlContain("shop") && "shop sidebar" }
      { !doesThisUrlContain("blog") && !doesThisUrlContain("writing") && !doesThisUrlContain("about") && !doesThisUrlContain("art") && !doesThisUrlContain("shop") && frontPageSidebar}
    </aside>)
}
