import React from 'react';

export default function Footer (){
  return (
    <footer id="footer" style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
      <section style={{textAlign: 'center'}}>
      <h3>Follow:</h3>
      <ul>
        <li>@MarianneMacRaeArt<br /> on Insta</li>
        <li>@MarianneMacrae<br /> on Twitter</li>
      </ul>
      </section>

      <section style={{textAlign: 'center'}}>
      <h3>Follow:</h3>
      <ul>
        <li>@MarianneMacRaeArt<br /> on Insta</li>
        <li>@MarianneMacrae<br /> on Twitter</li>
      </ul>
      </section>

      <section>
      © {new Date().getFullYear()}, Built by <a href="https://dchitch092.github.io/">Richard Hanrahan</a> using
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      </section>
    </footer>
  )
}
