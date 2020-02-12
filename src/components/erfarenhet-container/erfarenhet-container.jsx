import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import { Link } from 'react-router-dom'

const StyledContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: auto;
    box-sizing: border-box;
    grid-gap: 1em 3em;
    list-style-type: circle;
   
    @media only screen and (max-width: 900px){
        grid-template-columns: 1fr 1fr;
        padding: 2%;
    }
    @media only screen and (max-width: 640px){
        grid-template-columns: 1fr;
        padding: 0 5%;
        
       
    }
  
`
const Item = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 5%;
    text-align: center;
    border-radius: 10px;
    -webkit-box-shadow: -2px 3px 22px 0px rgba(0,0,0,0.25);
-moz-box-shadow: -2px 3px 22px 0px rgba(0,0,0,0.25);
box-shadow: -2px 3px 22px 0px rgba(0,0,0,0.25);
    @media only screen and (max-width: 640px){
       height: 125px;
        
       
    }
`

const StyledLink = styled(Link)`
    font-size: 18px;
    color: black;
    text-align: center;
    text-decoration: none;
    @media only screen and (max-width: 420px){
       margin: 5px 0;
       
    }
`
const Arrow = styled.img`
    width: 15px;
    height: auto;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    margin-bottom: -2.8px;
    margin-left: 5px;
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
            {articles ? articles.map((article, id) =><StyledLink  key={id} onClick={() => window.scroll(0,0)} to={`/erfarenhet/${article.titel}`} > <Item >
            <p>{article.titel} <span> <Arrow alt="arrow" src="left-arrow.svg" /></span></p>
            </Item>
           </StyledLink>  ) : null}
        </StyledContainer>
    )
}

export default ErfarenhetContainer
