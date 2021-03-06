import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom' 
import sanityClient from '../Client'
import PortableText from '@sanity/block-content-to-react'
import ArticleThumbnail from '../components/article-header-thumbnail/article-header-thumbnail.component'
import Mer from '../components/mer/mer.component'
import ReactGA from 'react-ga'
import { LinkedinShareButton, LinkedinIcon } from 'react-share'
const ArticleCont = styled.div`
    
    min-height: 100vh;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: wrap column;
    box-sizing: border-box;
    padding: 0 5%;
    @media only screen and (max-width: 640px){
        grid-template-columns: 1fr ;
        grid-gap: 0;
    }

`
const TextCont = styled.div`
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    padding: 0 12%;
`
const Text = styled(PortableText)``

const Article = () => {
 
    const [article, setArticle] = useState('')
    let id = useParams()
   useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search) 
       const articleQuery = `*[_type == "artikel" && titel == "${id.artikelId.trim()}"]`

       sanityClient.fetch(articleQuery).then(article => { 
        article.forEach(article => {
            setArticle(article)
        })
      })
   }, [id.artikelId])
   console.log('hey')

    return (
        <ArticleCont>
        
            <ArticleThumbnail imageDeets={article}/>
            <TextCont>
                <Text blocks={article.beskrivning} />
                <LinkedinShareButton title={article.titel} url={`https://passacon.se${window.location.pathname}`}>
                    <LinkedinIcon round size={32} />
                </LinkedinShareButton>
            </TextCont>
            
            <Mer />
        </ArticleCont>
    )
}

export default Article
