import React from 'react'
import styled from 'styled-components'
import { bool } from 'prop-types'

const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
background:${({ theme }) => theme.primaryLight};
height: 100vh;
transform: ${({open}) => open ? 'translate(0)' : 'translate(-100%)'};
text-align: left;
padding: 2rem;
position: absolute;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;

@media screen and (max-width: ${({theme }) => theme.mobile}) {
  width: 100%;
  padding: 0;
}

a {
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: black;
  text-decoration: none;
  transition: color 0.3s linear;
  
  @media screen and (max-width: ${({theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: blue;
  }
}
`

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/">
                <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
                About us
            </a>
            <a href="/">
                <span role="img" aria-label="price">&#x1f4b8;</span>
                Pricing
                </a>
            <a href="/">
                <span role="img" aria-label="contact">&#x1f4e9;</span>
                Contact
                </a>
            </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired
}

export default Menu
