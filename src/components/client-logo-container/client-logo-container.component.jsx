import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ClientLogo from '../client-logo/client-logo.component'
import sanityClient from '../../Client'

const StyledContainer = styled.div`
    width: 70%;
    margin-left: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30vh;

`

const ClientContainer = () => {
    const [client, setClient] = useState('')
    useEffect(() => {
        const clientQuery = `*[_type == "uppdrag"]`
        const clientArray = []
        sanityClient.fetch(clientQuery).then(client => {
            
          client.forEach(client => {
              clientArray.push(client)
          })
          setClient(clientArray)
        })
        return
      }, [])
    return (
        <StyledContainer>
            {client ? 
            client.map((client, id) => <ClientLogo key={id} client={client} />)
            : null}
            
        </StyledContainer>
    )
}

export default ClientContainer
