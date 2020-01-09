import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const StyledLogo = styled.img`
    width: 100px;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    opacity: 0.4;
`

const ClientLogo = ({client}) => {
    return (
        <div>
             <StyledLogo src={urlFor(client.logga).url()}/>
        </div>
    )
}

export default ClientLogo
