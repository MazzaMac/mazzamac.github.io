import React from 'react';

export default function FooterSectionLink({ url, text, name, link_index}) {
	return (
		<li><a className="no-decoration text-white" key={`${name}-link-${link_index}`} href={url}>{text}</a></li>
	)
}