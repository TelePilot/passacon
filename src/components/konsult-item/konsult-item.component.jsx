import React from 'react'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import styled from 'styled-components'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ContCont = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center
    cursor: pointer`

const ItemCont = styled.div`
    width: 100%;
    max-width: 350px;
    height: 450px;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-flow: wrap column;
`

const BoxCont = styled.div`
    height: auto;
    width: 100%;
    background: rgba(255,255,255,0.8);
   display: flex;
   justify-content: center;
   align-items: center;
   flex-flow: column;
   box-sizing: border-box;
   padding: 5% 0;
`

const Text = styled.p`
    text-align: center;
    margin: 5px 0 8px 0;
    font-weight: 800;
`
const Deets = styled.a`
    margin: 2px;
    text-decoration: none;
    color: black;
`
const KonsultItem = ({konsult, clicked, setSlide, slide}) => {

    return (
        <ContCont onClick={() => {clicked({
            pointerEvents: 'auto',
            opacity: 1
        })
       setSlide(slide)
        }}>
            <ItemCont style={{backgroundImage: `url(${urlFor(konsult.bild).url()})`}}>
                <BoxCont>
                    <Text>{konsult.namn}</Text>
                    <Deets href={`Tel:${konsult.telefon}`}>Tel: {konsult.telefon}</Deets>
                    <Deets href={`mailto:${konsult.email}`}>{konsult.email}</Deets>
                </BoxCont>
            </ItemCont>
        </ContCont>
        
    )
}

export default KonsultItem
