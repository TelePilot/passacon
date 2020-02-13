import React from 'react'
import styled from 'styled-components'
import { bool } from 'prop-types'
import { HashLink  as Link } from 'react-router-hash-link'

const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
background:${({ theme }) => theme.primaryLight};
height: auto;
transform: ${({open}) => open ? 'translate(0)' : 'translate(-100%)'};
text-align: left;
padding:3rem 6rem;
position: absolute;
min-width: 300px;
z-index: 99;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;

@media screen and (max-width: ${({theme }) => theme.mobile}) {
  width: 100%;
  padding: 0;
}

}
`
const NavLink = styled(Link)`

  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.5rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: black;
  text-decoration: none;
  transition: color 0.1s linear;
  cursor:pointer;
  
  @media screen and (max-width: ${({theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`

const Menu = ({ open, header, setOpen }) => {
  
    return (
        <StyledMenu open={open}>
            <div style={{height: "3rem"}}></div>
            {header ? header.meny.map(item => <NavLink to={`/#${item.link}`} smooth duration={500} onClick={() => setOpen(!open)} key={item._key}>{item.name}</NavLink>): null}
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired
}

export default Menu
