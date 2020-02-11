import React from 'react'
import styled from 'styled-components'
import ArticleContainer from '../components/article-container/article-container.component'
import Title from '../components/title/title.component'

const TjanstCont = styled.div`
    margin-top: 100px;
    text-align: left;

    
`

const Tjanster = () => {
    return (
        <TjanstCont id="tjanster">
            <Title title={'Våra tjänster'} />
            <ArticleContainer content="tjanster" />
        </TjanstCont>
    )
}

export default Tjanster
