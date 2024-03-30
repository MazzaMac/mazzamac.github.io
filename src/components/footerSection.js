import React from 'react';
import FooterSectionLink from './footerSectionLink.js';

export default function FooterSection ({ name, links, index }){
	
return (

      <section id={`footer_${name}`} key={`footer_section_${index}`} className="mb-2 links">
      	<h5>{ name }</h5>

      	<ul>
      	{links && links.map(( link, link_index ) => {
              return <FooterSectionLink url={link.url} section={name} link_index={link_index} text={link.title} />
            })}
        </ul>
      </section>
      )};
