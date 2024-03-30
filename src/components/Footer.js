import React from 'react';
import YAMLData from '../content/footer.yaml';
import NewsletterWidget from './newsletterWidget.js';
import FooterSection from './footerSection.js';

export default function Footer(){

  const url = "//games.us11.list-manage.com/subscribe/post?u=f1faddaafa756755d023657f1&amp;id=686a9e9f6c&amp;f_id=00e19ce0f0";


  return (

  <footer id="footer" className="bg-black text-white">
  
  <div id="outer" key="footer-outer" className="flex">
    <div id="inner" key="footer-inner" className="mb-2">
      
        { YAMLData.map((data, index) => {
          return (
              <FooterSection key={`footer-section-${index}`} index={index} name={data.name} links={data.links} />
          )
        })}

    </div>

    <NewsletterWidget url={url} />
  </div>
  <section id="made-by">
    © {new Date().getFullYear()}, Built by <a href="https://dchitch092.github.io/">Richard Hanrahan</a> using {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    </section>

  </footer>
  )
}
