import React from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'
const FooterCont = styled.div`
    width 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background: rgba(0,0,0,0.2);
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 0 5%;
    z-index: 2;
`
const FooterItem = styled.div`

`

const Footer = () => {
    return (
        <FooterCont>
            <FooterItem>

            </FooterItem>
            <FooterItem>
                <Link to="./integritets-policy">
                    integritetspolicy
                </Link>
                </FooterItem>
        </FooterCont>
    )
}

export default Footer
