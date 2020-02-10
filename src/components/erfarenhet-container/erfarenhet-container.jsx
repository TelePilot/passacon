import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import { Link } from 'react-router-dom'

const StyledContainer = styled.ol`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: auto;
    box-sizing: border-box;
    padding: 0 2% 5% 2%;
    grid-gap: 10%;
    list-style-type: circle;
`
const StyledLink = styled(Link)`
    font-size: 18px;
    color: black;
`

const ErfarenhetContainer = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const articleQuery = `*[_type == "erfarenhet"] | order(datum desc)
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
      }, [])
    return (
        <StyledContainer>
            {articles ? articles.map((article, id) => <li onClick={() => window.scroll(0,0)} key={id}>
            <StyledLink  to={`/erfarenhet/${article.titel}`} >{article.titel}</StyledLink> 
            </li> ) : null}
        </StyledContainer>
    )
}

export default ErfarenhetContainer
