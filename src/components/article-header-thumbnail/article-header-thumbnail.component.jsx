import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const Cont = styled.div`
    width: 80%;
    height: auto;
    text-align: left;
`
const Title = styled.h1`
    font-size: 64px;
    margin: 0 0 10px 0;
`

const Image = styled.img`
    width: 100%;
    height: auto
`

const ArticleThumbnail = ({ imageDeets }) => {
    return (
        <Cont>
            <Title>{imageDeets.titel}</Title>
            <Image src={urlFor(imageDeets.thumbnail).url()}/> 
        </Cont>
    )
}

export default ArticleThumbnail
