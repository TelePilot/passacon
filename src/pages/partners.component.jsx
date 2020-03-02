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
const Partners = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search) 
      },[])
    return (
        <Cont>
            <h1>Våra partners personuppgifter</h1>
            <Text>
                <p>I alla processer som beskrivs i vår policy behandlas våra partners personuppgifter (t.ex. namn,
                    kontaktuppgifter, mejladresser, telefonnr, titel och befattning) när de utför arbetsuppgifter t.ex. när
                    de svarar på en fråga eller kontaktar någon. Olika ändamål med dessa behandlingar beskrivs i varje
                    process och gäller också för partnerns personuppgifter. Den lagliga grunden för behandling av
                    partners uppgifter är avtal (partneravtalet).</p>
            </Text>
        </Cont>
                )}
export default Partners