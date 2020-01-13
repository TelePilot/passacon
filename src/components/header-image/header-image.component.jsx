import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'react-router-dom'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const HeaderLink = styled(Link)`
    text-decoration: none;`

const StyledHeaderImage = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative;   
`

const Thumbnail = styled.div`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
`
const Title = styled.h1`
    color: ${({theme}) => theme.secondaryLight};
    padding-left: 6rem; 
    width: 50%;
    height: auto;
    text-align: left;
    font-size: 5vw;
    z-index: 1;
`
const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
`

const HeaderImage = ({imageDeets}) => {
    return (
        <HeaderLink to={`/artikel/${imageDeets.titel}`}>
        <StyledHeaderImage>
           <Thumbnail style={{backgroundImage:`url(${urlFor(imageDeets.thumbnail).url()})`}}/> 
           <Overlay />
           <Title>{imageDeets.titel}</Title>
        </StyledHeaderImage>
        </HeaderLink>
        
    )
}

export default HeaderImage
