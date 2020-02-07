import React from 'react'
import styled from 'styled-components'
import ErfarenhetContainer from '../components/article-container/article-container.component'
import Title from '../components/title/title.component'

const erfarenhetCont = styled.div`
    margin-top: 100px;
    text-align: left;    
`

const Erfarenhet = () => {
    return (
        <erfarenhetCont id="erfarenhet">
            <Title title={'Erfarenhet'} />
            <ErfarenhetContainer />
        </erfarenhetCont>
    )
}

export default Erfarenhet
