import React from 'react'
import styled from 'styled-components'
import ArticleContainer from '../components/article-container/article-container.component'

const TjanstCont = styled.div`
    margin-top: 100px;
    text-align: left;

    
`

const TjanstTitle = styled.h1`
    font-size: 64px;
    margin: 0 0 2% 5%;
    
`

const Tjanster = () => {
    return (
        <TjanstCont id="tjanster">
            <TjanstTitle>
                Våra Tjänster
            </TjanstTitle>
            <ArticleContainer content="tjanster" />
        </TjanstCont>
    )
}

export default Tjanster
