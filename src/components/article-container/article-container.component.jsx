import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import ArticleThumbnail from '../article-thumbnail/article-thumbnail.component'

const StyledContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 100px;
    grid-gap: 2%;
    @media only screen and (max-width: 1100px){
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 640px){
        grid-template-columns: 1fr ;
    }
`

const ArticleContainer = ({content}) => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const articleQuery = `*[_type == "artikel" && ${content}] | order(datum desc)
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
        return
      }, [content])
    return (
        <StyledContainer>
            {articles ? articles.map((article, id) => <ArticleThumbnail key={id} article={article} /> ) : null}
        </StyledContainer>
    )
}

export default ArticleContainer
