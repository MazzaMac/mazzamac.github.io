import React from 'react';
import { Link } from "gatsby";
import Img from 'gatsby-image';

export default function WritingEntry({title, date, publication}){

    
    return (
    	<li>{ title }, { publication } - {date}</li>
    )
}


