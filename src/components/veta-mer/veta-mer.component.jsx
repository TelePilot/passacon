import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const JuiceCont = styled.div`
 
`

const Contact = styled.button`
    background: rgba(255,255,255,0.7);
    border: gray 1px solid;
    cursor: pointer;
    width: 135px;
    height: 35px;
    font-size: 14px;
    
`

const VetaMer = () => {
    return (
        <JuiceCont>
            <Link to={'/om-oss'}>
                <Contact>
                    Vill du veta mer?
                </Contact>
            </Link>
            
        </JuiceCont>
    )
}

export default VetaMer