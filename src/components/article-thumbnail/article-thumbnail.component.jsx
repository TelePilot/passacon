import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const Thumbnail = styled.div`
    width 100%;
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
`
const Link = styled.a`
    font-size: 18px;
    color: black;
    text-decoration: none;
    text-align: left;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Arrow = styled.img`
    width: 15px;
    height: auto;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    margin-top: 2px;
    margin-left: 5px;
`

const ArticleThumbnail = ({article}) => {
    return (
        <div>
             <Thumbnail style={{backgroundImage: `url(${urlFor(article.thumbnail).url()})`}}/>
             <Link href="#">{article.titel}
             <Arrow alt="arrow" src="left-arrow.svg" />
             </Link>
            
        </div>
    )
}

export default ArticleThumbnail
