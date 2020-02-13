import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import sanityClient from '../Client'
import ArticleContainer from '../components/article-container/article-container.component'

const NyhetContainer = styled.div`
    margin-top: 100px;
    text-align: left;
    margin-bottom: 100px;
    position:relative;
    height: auto;
    
`

const Nyheter = () => {
    const [articles, setArticles] = useState([])
    const unmounted = useRef(false)
    useEffect(() => {
       
        const articleQuery = `*[_type == "artikel" && nyhet] | order(datum desc)
        {
            thumbnail, titel
        }`
        const articleArray = []

        sanityClient.fetch(articleQuery).then(article => {
            
          article.forEach(article => {
              articleArray.push(article)
          })
          setArticles(articleArray)
        })
        return () => {
            unmounted.current = true
        }
      }, [])
    return (
        <NyhetContainer>
             <ArticleContainer articles={articles} />
        </NyhetContainer>
           
    )
}

export default Nyheter
