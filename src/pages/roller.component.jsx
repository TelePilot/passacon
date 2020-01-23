import React, { useState, useEffect } from 'react'
import sanityClient from '../Client'
import styled from 'styled-components'
import RollHeader from '../components/roll-header/roll-header.component'
import RollContainer from '../components/roll-container/roll-container.component'


const Cont = styled.div`
    margin: 120px 0;
    text-align: left;

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
         
            <RollHeader headerImg={roller.thumbnail} headerTitle={roller.titel} headerDesc={roller.beskrivning} />
            <RollContainer roller={roller.roller}/>   
        </Cont>
    )
}

export default Roller
