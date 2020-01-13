import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import PortableText from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const HeaderCont = styled.div`
    margin-top: 50px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    flex-flow: column;
    height: 70vh;
    width: 85%;
    margin-left: 7.5%;
    box-sizing: border-box;
    padding: 5% 25% 0 5%;
    color: white;
`

const Thumbnail = styled.div`
    width: 100%;
    height: 70vh;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -2;
`

const Title = styled.h2`
    color: white;
    font-size: 48px;
`

const Desc = styled(PortableText)`
    #text {
        font-size: 48px;
    }
`

const Overlay = styled.div`
    width: 100%;
    height: 70vh;
    background: rgba(0,0,255,0.1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const RollHeader = ({ headerImg, headerTitle, headerDesc }) => {
    return (
        <HeaderCont>
          <Thumbnail style={{backgroundImage:`url(${urlFor(headerImg).url()})`}}/> 
          <Overlay />
          <Title>{headerTitle}</Title>
          <Desc blocks={headerDesc}/>
        </HeaderCont>
    )
}

export default RollHeader
