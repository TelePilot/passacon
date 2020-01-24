import React from 'react'
import styled from 'styled-components'
import RollItem from '../roll-item/roll-item.component'

const Cont = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-gap: 1em;
    box-sizing: border-box;
    padding: 2.5% 0;
   
`


const RollContainer = ({roller}) => {
    return (
        <Cont>
            {roller.map((roll, id) => <RollItem key={id} roll={roll} />)}
        </Cont>
    )
}

export default RollContainer
