import React, {useState, useEffect} from 'react'
import sanityClient from '../Client'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import PortableText from '@sanity/block-content-to-react'
const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const OmOssCont = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: 125px;
    text-align: left;
    box-sizing: border-box;
    padding: 0 10%;
    margin-bottom: 100px;`

const Image = styled.img`
    width: 100%;
    height: auto
`

const Title = styled.h1`
    font-size: 72px;
    width: 400px;
    line-height: 0.9em;

`
const Desc = styled(PortableText)`
    width: 90%;
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
        <OmOssCont>
            <h2 style={{fontSize: '48px'}}>Om Oss</h2>
            <Image src={urlFor(omOss.bild).url()}/>
            <Title>{omOss.titel}</Title>
            <Desc blocks={omOss.beskrivning} />
        </OmOssCont>
    )
}

export default OmOss
