import React from 'react'
import styled from 'styled-components'
import PortableText from '@sanity/block-content-to-react'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Cont = styled.div`
    width: 100%;
    height: auto;
    padding: 5%;
    box-sizing: border-box;
    background: rgba(0,0,0,0.1);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column wrap;
    // &:nth-child(n+5) {
    //     grid-column: span 2;
    // }
`
const Title = styled.h3`
    font-size: 26px;
    margin: 0;`

const Desc = styled(PortableText)`

`

const Icon = styled.img`
    width: 70px;
    height: auto;
    margin: 0 5px 0 0;
 
`
const TitleCont = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const RollItem = ({roll}) => {
    return (
        <Cont>
            <TitleCont>
                <Icon src={urlFor(roll.ikon).url()} />
                <Title>{roll.name}</Title>
              
            </TitleCont>
            <Desc blocks={roll.beskrivning} />
        </Cont>
    )
}

export default RollItem
