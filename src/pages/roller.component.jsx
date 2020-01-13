import React, { useState, useEffect } from 'react'
import sanityClient from '../Client'
import styled from 'styled-components'
import RollHeader from '../components/roll-header/roll-header.component'
import RollContainer from '../components/roll-container/roll-container.component'

const Cont = styled.div`
    margin: 100px 0;
    text-align: left;

`
const Title = styled.h1`
    font-size: 64px
    margin-left: 5%;
`

const Roller = () => {
    const [roller, setRoller] = useState({
        roller: []
    })
    useEffect(() => {
        const rollQuery = `*[_type == "roller"]`

        sanityClient.fetch(rollQuery).then(roller => {
          roller.forEach(roll => {
            setRoller(roll)
          })
        })
        return
      }, [])
      console.log(roller)
    return (
        <Cont>
            <Title>Våra roller</Title>
            <RollHeader headerImg={roller.thumbnail} headerTitle={roller.titel} headerDesc={roller.beskrivning} />
            <RollContainer roller={roller.roller}/>   
        </Cont>
    )
}

export default Roller
