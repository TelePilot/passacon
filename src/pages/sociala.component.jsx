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
const Socials = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search) 
      },[])
    return (
        <Cont>
            <h1>Hemsida och sociala medier</h1>
            <Text>
                <p>När du besöker vår hemsida eller vår LinkedIn-sida kommer du att dela med dig av din IP-adress om
du inte gjort inställningar i din utrustning som förhindrar detta. I det här fallet uppstår ett
gemensamt personuppgiftsansvar för oss och andra aktörer som kan använda personuppgifterna.
Vardera part är ansvarig för sin hantering. VI vill här berätta om vad vi gör med personuppgifterna.
</p>
<p>Vi använder vår hemsida och LinkedIn för två ändamål:</p>
<ul>
    <li>Information och marknadsföring (lagliga grunden för behandlingen är berättigat intresse).
</li>
    <li>
    Att väcka intresse och berätta om viktiga frågor via blogginlägg och liknande (vi gör detta utifrån ett journalistiskt ändamål).  Vi gör detta för att dela med oss av bra idéer om verksamhetsutveckling och sprida kunskap om nya sätt att arbeta.
   </li>
</ul>
<p>
När du använder hemsida kommer det upp en fråga om du vill ge samtycke för att dela cookies med oss. Du kan här också välja att inte göra det. Tycker du det är ok att dela cookies med oss kommer det att användas för ändamålen ovan. VI använder vidare Google Analytics på vår hemsida för att få statistik som vi använder för att kunna analysera hur intressanta och relevanta inlägg vi gör.  I statistiken vi ser syns inga personuppgifter som vi kan härleda. Google kan använda personuppgifter genererade av verktyget för sina egna ändamål.
</p>
<p>Vår hemsida innehåller en möjlighet för läsare att dela inlägg på LinkedIn genom att trycka på en plugin-knapp. Genom att trycka på knappen kommer du att dela personuppgifter med LinkedIn som kan komma att använda dem för egna ändamål (se deras information om personuppgiftsbehandling). För oss är det positivt att sidor delas eftersom våra egna ändamål (se punkterna ovan) får större spridning.  
 </p>
<p>Olika sökmotorer kan spara IP-adresser från sökningar på hemsidor och sociala medier. De kan använda personuppgifterna för sina egna ändamål.</p>
            </Text>
        </Cont>
                )}
export default Socials