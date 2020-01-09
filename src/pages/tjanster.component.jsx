import React from 'react'
import styled from 'styled-components'
import ArticleContainer from '../components/article-container/article-container.component'

const TjanstCont = styled.div``

const TjanstTitle = styled.h1`
`

const Tjanster = () => {
    return (
        <TjanstCont>
            <TjanstTitle>
                Tjänster
            </TjanstTitle>
            <ArticleContainer content="tjanster" />
        </TjanstCont>
    )
}

export default Tjanster
