import React from 'react'
import { Link } from "gatsby"
import Img from 'gatsby-image';



function ArtWall({type, images}){

    return (
    <section id="art-wall" style={{ display: "flex" }}>
        <ul>
            {
                images.map((image, index) => {

                const { fixed, title: alt, slug} = image;
                return (
                    <li>
                        <Link to={slug}>
                            <Img fixed={fixed} alt={alt} />
                        </Link>
                    </li>
                    )
                }
            )}
        </ul>
    </section>
    )
}

export default ArtWall;
