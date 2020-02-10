import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const Cont = styled.div`
    margin-top: 100px;
    width: 80%;
    min-height: 40vh;
    height: auto
    text-align: left;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
`
const Title = styled.h1`
    font-size: 52px;
    margin-left: 5%;
    color: white;
    width: 50%;
    position: relative;
    z-index: 2;
    line-height: 1em;
`


const ArticleThumbnail = ({ imageDeets }) => {
    return (
        <Cont style={{backgroundImage: `url(${urlFor(imageDeets.thumbnail).url()})`}}>
            <Overlay/>
            <Title>{imageDeets.titel}</Title>
          
        </Cont>
    )
}

export default ArticleThumbnail
