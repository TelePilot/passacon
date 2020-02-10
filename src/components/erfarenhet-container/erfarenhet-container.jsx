import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import { Link } from 'react-router-dom'

const StyledContainer = styled.ol`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: auto;
    box-sizing: border-box;
    grid-gap: 1em 2em;
    list-style-type: circle;
   
    @media only screen and (max-width: 700px){
        grid-template-columns: 1fr 1fr;
        padding: 2%;
    }
    @media only screen and (max-width: 420px){
        grid-template-columns: 1fr;
        padding: 0 5%;
       
    }
  
`
const StyledLink = styled(Link)`
    font-size: 18px;
    color: black;
    @media only screen and (max-width: 420px){
       margin: 5px 0;
       
    }
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
