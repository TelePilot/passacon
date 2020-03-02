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
const Leverans = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search) 
      },[])
    return (
        <Cont>
            <h1>Leverans</h1>
            <Text>
                <p>Laglig grund för den här processen är avtal/berättigat intresse (jämför processen försäljning). Vi ingår kundavtal med företag, myndigheter eller ideella föreningar, inte privatpersoner. Beträffande myndigheter och kommuner tillkommer lagen om offentlig upphandling (det innebär att båda parterna har rättsliga förpliktelser att följa) 
</p>
<h3>1. Initiering.</h3>
<p>I det här steget gör vi förarbete och stämmer av förväntningar m.m. med vår kund. Här kan främst namn och mejladresser behandlas. Ibland kan vi också skicka underlag för påseende vilket kan innehålla personuppgifter vilket då framgår av avtalet. Vi lagrar en del dokument som kan innehålla personuppgifter för att vi ska ha dokumentation vad vi kommit överens om och kunna följa upp kundleveranserna senare vid behov. </p>
<h3>2. Genomförande.</h3>
<p>Genomförandet av uppdraget styrs av vad som avtalats vilket också påverkar vårt ansvar för behandling av personuppgifter (vi kan vara gemensamt personuppgiftsansvariga eller personuppgiftsbiträde). Vanliga personuppgifter som behandlas är namn och kontaktuppgifter. Ibland använder vi kundens IT-system i arbetet, ibland våra egna. </p>
<h3>3. Lagring/Gallring</h3>  
<p>Vi lagrar mejl och handlingar rörande leveranser så länge vi har ett pågående kundförhållande samt den tid som i övrigt behövs för att kunna visa vad som levererats och partsavsikt vid leveranser. I kundavtalen kan också finnas specialklausuler som påverkar hur länge vi ska lagra och när vi ska gallra, vilket vi då förstås följer. Laglig grund för behandlingen är avtal. 
När vi inte längre har ett ändamål att lagra (se föregående stycke) gallras uppgifterna. Vi gör en årlig genomgång då vi bedömer vad vi kan gallra och vad som fortfarande behövs i enlighet med de ändamål som beskrevs ovan. 
Många gånger sparar vi kontaktinformation till våra kunder efter att uppdrag slutförs eftersom vi vet att de uppskattar att vi tar kontakt t.ex. för att bjuda in till ett kostnadsfritt seminarium. Lagliga grunden för detta ändamål är berättigat intresse. 
</p>         
           
            </Text>
        </Cont>
                )}
export default Leverans