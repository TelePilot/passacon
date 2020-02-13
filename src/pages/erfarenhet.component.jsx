import React from 'react'
import styled from 'styled-components'
import ErfarenhetContainer from '../components/erfarenhet-container/erfarenhet-container'
import Title from '../components/title/title.component'

const ErfarenhetCont = styled.div`
    margin-top: 100px;
    text-align: left;  
    height: auto;  
    margin-bottom: 100px;
    position: relative;
   
`

const Erfarenhet = ({erfarenhet}) => {
    return (
        <ErfarenhetCont id="erfarenhet">
            <Title title={'Erfarenhet'} />
            <ErfarenhetContainer erfarenhet={erfarenhet} />
        </ErfarenhetCont>
    )
}

export default Erfarenhet
