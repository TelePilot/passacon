import React, {useState, useEffect} from 'react'
import sanityClient from '../Client'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import PortableText from '@sanity/block-content-to-react'
import Title from '../components/title/title.component'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const OmOssCont = styled.div`
    width: 100%;
    height: auto;
    margin-top: 125px;
    text-align: left;
    box-sizing: border-box;

    margin-bottom: 100px;`

const Image = styled.img`
    width: 100%;
    height: auto;
    min-height: 50vh;
`

const OmOssTitle = styled.h1`
    font-size: 64px;
    width: 400px;
    line-height: 0.9em;
    @media screen and (max-width: 800px){
        font-size: 36px;
    }
    @media screen and (max-width: 500px){
        font-size: 28px;
    }

`
const Desc = styled(PortableText)`
    width: 100%;
    max-width: 800px
    `

const OmOss = () => {
    
    const [omOss, setOmOss] = useState('')
    useEffect(() => {
        const omOssQuery = `*[_type == "omOss"]`
 
        sanityClient.fetch(omOssQuery).then(omOss => { 
         omOss.forEach(omOss => {
             setOmOss(omOss)
         })
       })
    }, [])

    return (
        <OmOssCont id="om-oss">
            <Title title="Om oss" />
            <Image src={urlFor(omOss.bild).url()}/>
            <OmOssTitle>{omOss.titel}</OmOssTitle>
            <Desc blocks={omOss.beskrivning} />
        </OmOssCont>
    )
}

export default OmOss
