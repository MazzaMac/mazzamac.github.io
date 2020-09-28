import React from 'react';

export default function Footer (){
  return (
    <footer id="footer" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textAling: 'center'}}>
        <div> <h3>Social Links</h3>
        <ul>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Goodreads</li>
          <li>Redbubble</li>
        </ul></div>

        <div>
        <h3>Follow:</h3>
        <ul>
          <li>@MarianneMacRaeArt<br /> on Insta</li>
          <li>@MarianneMacrae<br /> on Twitter</li>
        </ul>
        </div>
      </section>



      <section>
      © {new Date().getFullYear()}, Built by <a href="https://dchitch092.github.io/">Richard Hanrahan</a> using
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      </section>
    </footer>
  )
}
