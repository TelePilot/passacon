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
    justify-content: center;
    align-items:flex-start;
    flex-flow: column;
    min-height: 50vh;
    height: auto;
    width: 100%;
    
    box-sizing: border-box;
    padding: 2%;
    color: white;
`

const Thumbnail = styled.div`
    width: 100%;
    height: 50vh;
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
    margin: 0;
`

const Desc = styled(PortableText)`
    
`

const Overlay = styled.div`
    width: 100%;
    height: 50vh;
    background: rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`
const TextCont = styled.div`
    padding: 0 10% 0 0;
`

const RollHeader = ({ headerImg, headerTitle, headerDesc }) => {
    return (
        <HeaderCont>
          <Thumbnail style={{backgroundImage:`url(${urlFor(headerImg).url()})`}}/> 
          <Overlay />
          <Title>{headerTitle}</Title>
          <TextCont>
          <Desc blocks={headerDesc}/>
          </TextCont>
        
        </HeaderCont>
    )
}

export default RollHeader
