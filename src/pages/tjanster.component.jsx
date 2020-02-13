import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import sanityClient from '../Client'
import ArticleContainer from '../components/article-container/article-container.component'
import Title from '../components/title/title.component'

const TjanstCont = styled.div`
    margin-top: 100px;
    text-align: left;
    margin-bottom: 100px;
    position:relative;
    height: auto;
    
`

const Tjanster = () => {
    const [articles, setArticles] = useState([])
    const unmounted = useRef(false)
    useEffect(() => {
        const articleQuery = `*[_type == "artikel" && tjanster] | order(datum desc)
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
        }      }, [])
    return (
        <TjanstCont id="tjanster">
            <Title title={'Våra tjänster'} />
            <ArticleContainer articles={articles} />
        </TjanstCont>
    )
}

export default Tjanster
