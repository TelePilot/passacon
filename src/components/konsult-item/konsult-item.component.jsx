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
  
    position: relative;`

const ItemCont = styled.div`
    width: 100%;
    max-width: 350px;
    height: 450px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer
    @media only screen and (max-width: 480px){
      height: 350px;
      width: 80%;
    }
    
`

const BoxCont = styled.div`
    height: auto;
    width: 100%;
    background: rgba(255,255,255,0.8);
   display: flex;
   justify-content: center;
   align-items: center;
   flex-flow: column wrap;
   box-sizing: border-box;
   padding: 5% 0;
   position: absolute;
   bottom: 0;
   left: 0;
   @media only screen and (max-width: 480px){
    padding: 1% 5%;
}
`

const Text = styled.p`
    text-align: center;
    margin: 5px 0 8px 0;
    font-weight: 800;
`
const Deets = styled.a`
    margin: 2px;
    position: relative;
    z-index: 1;
    text-decoration: none;
    color: black;
`
const KonsultItem = ({konsult, clicked, setSlide, slide}) => {

    return (
        <ContCont >
            <ItemCont onClick={() => {clicked({
            pointerEvents: 'auto',
            opacity: 1
        })
       setSlide(slide)
        }} style={{backgroundImage: `url(${urlFor(konsult.bild).url()})`}}>
                
            </ItemCont>
            <BoxCont>
                    <Text>{konsult.namn}</Text>
                    <Deets href={`Tel:${konsult.telefon}`}>Tel: {konsult.telefon}</Deets>
                    <Deets href={`mailto:${konsult.email}`}>{konsult.email}</Deets>
                </BoxCont>
        </ContCont>
        
    )
}

export default KonsultItem
