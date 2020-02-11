import React from 'react'
import styled from 'styled-components'


const Cont = styled.div`
    width: 70%;
    padding: 100px 5%;
    height: auto;
    text-align: left;
`
const Text = styled.div`
`
const Mails = () => {
    return (
        <Cont>
            <h1>Vår mejl och dokumenthanteringspolicy</h1>
            <Text>
                <p>I de olika processerna i policyn beskrivs hur vi hanterar mejl och olika dokument. För att göra bilden
helt komplett redovisar vi också principer vi antagit för personuppgifter som finns i vår mejl- och
dokumenthantering:</p>
<ol>
    <li>Vi ha en tydlig dokumenthanteringsstruktur som innebär att flera versioner av samma
dokument undviks (dokument ska sparas på ett sätt i en mapp).</li>
    <li>
    Om mejl behöver sparas ska de sparas ner i rätt mapp enligt punkt 1. Vi följer principerna i
processbeskrivningen när vi sparar/gallrar mejl.
    </li>
    <li>
    När ett dokument/nedsparat mejl inte längre behövs för det ändamål det sparats för ska det
gallras.
    </li>
    <li>
    Om det finns behov att spara visst dokument som mall ska dokumentet rensas på alla
personuppgifter innan mallen sparas. 
    </li>
</ol>
<ul>
    <li>
    förhållande till det aktuella tredje landet enligt artikel 45 i dataskyddsförordningen. I sådana
fall behandlar vi personuppgifter på det sätt som beskrivs i processerna ovan.
    </li>
    <li>
    Om så inte har skett är vi ytterst restriktiva i vår hantering av personuppgifter och använder
    oss t.ex. inte av elektronisk överföring av personuppgifter till tredje land om inte
    överföringen har säkrats på korrekt sätt.
    </li>
</ul>
            </Text>
        </Cont>
                )}
export default Mails