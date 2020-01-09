import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'react-router-dom'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const StyledLogo = styled.img`
    width: 200px;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    margin: 2.6rem 6rem;
    z-index: 100;
`

const Logo = ({logo, setOpen}) => {
    return (
        <Link onClick={() => setOpen(false)} to="/">
             <StyledLogo src={urlFor(logo).url()}/>
        </Link>
       
    )
}

export default Logo
