import React from 'react'
import styled from 'styled-components'
import KonsultItem from '../konsult-item/konsult-item.component'

const KonsultCont = styled.div`
    display: grid;
    width: 80%;
    margin-left: 10%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;
    box-sizing: border-box;
    padding: 2em;
    margin-top: 120px;

`

const KonsultContainer = ({konsulter, showing, click, setSlide}) => {
    return (
        <KonsultCont>
            {konsulter.map((konsult, index) => <KonsultItem showing={showing} setSlide={setSlide} clicked={click} konsult={konsult} slide={index} key={index} />)}
        </KonsultCont>
    )
}

export default KonsultContainer
