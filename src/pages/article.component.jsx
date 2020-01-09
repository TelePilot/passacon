import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom' 
import sanityClient from '../Client'
import PortableText from '@sanity/block-content-to-react'
import HeaderImage from '../components/header-image/header-image.component'

const ArticleCont = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow:wrap column;
    margin-top: 100px;
`
const TextCont = styled.div`
    width: 70%;
    text-align: left;
`
const Text = styled(PortableText)``

const Article = () => {
    const [article, setArticle] = useState('')
    let id = useParams()
   useEffect(() => {
       const articleQuery = `*[_type == "artikel" && titel == "${id.artikelId.trim()}"]`

       sanityClient.fetch(articleQuery).then(article => { 
        article.forEach(article => {
            setArticle(article)
        })
      })
   }, [id])

    return (
        <ArticleCont>
            <HeaderImage width={'80%'} height={'60vh'} imageDeets={article}/>
            <TextCont>
                <Text blocks={article.beskrivning} />
            </TextCont>
        </ArticleCont>
    )
}

export default Article
