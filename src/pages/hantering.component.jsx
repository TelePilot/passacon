import React, {useEffect} from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'

const Cont = styled.div`
    width: 70%;
    padding: 100px 5%;
    height: auto;
    text-align: left;
`
const Text = styled.div`
`
const Hantering = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search) 
      },[])
    return (
        <Cont>
            <h1>Hantering av bokföring och skatter</h1>
            <Text>
                <p>
                Vi behandlar personuppgifter för att fullgöra vår skyldighet att bokföra och betala skatter och följer
då bestämmelser i skattelagstiftning, bokföringslagen och årsredovisningslagen (lagliga grunden för
detta är rättslig förpliktelse).</p>
            </Text>
        </Cont>
                )}
export default Hantering