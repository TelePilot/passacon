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
const Forsaljning = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search) 
      },[])
    return (
        <Cont>
            <h1>Försäljning</h1>
            <Text>
                <p>Nedan beskriver vi hur vi behandlar personuppgifter i processen när vi åtar oss nya uppdrag.</p>
<p>Laglig grund för den här processen är avtal och berättigat intresse. Vi förhandlar respektive ingår
avtal med företag, myndigheter eller ideella föreningar, inte privatpersoner. Beträffande
myndigheter och kommuner tillkommer lagen om offentlig upphandling (det innebär att båda
parterna har rättsliga förpliktelser att följa)
Vi grundar vår behandling av personuppgifter på berättigat intresse (vi utgår ifrån att förhandlingar
och avtalsskrivande ingår är en viktigt för våra kunder, vilket innebär att det i grunden också finns
stöd i de anställningsavtal de har med sina anställda).</p>
<h3>1. Kontakt (ej vid offentlig upphandling). </h3>
<p>
I det här steget initieras en kontakt via t.ex. mejl eller
telefon (antingen från eller till oss). De personuppgifter som behandlas är olika typer av
kontaktuppgifter (t.ex. namn, mejladresser, telefonnr etc.). I enstaka fall kan också beskrivningen av
hjälpbehovet innehålla andra personuppgifter.
Om kontakten utmynnar i ett intresse att få en offert går vi vidare till nästa steg
Ändamålet med behandlingar i detta steg är att på effektivt och kundvänligt sätt hantera
förfrågningar från organisationer som kan vilja anlita oss.
</p>
<h3>2. Offert.</h3>
<p> I det här steget skickar vi en offert antingen som en fortsättning på steg 1 eller för att vi
bestämt oss svara i en offentlig upphandling. Även här behandlas personuppgifter som namn på
kontaktperson och mejladresser. Vi sparar ner offerten och andra viktiga handlingar. Ändamålet
med behandlingen är att skicka en offert så den presumtive klienten ska kunna ta slutlig ställning till
om denne vill anlita oss.</p>
<h3>3. Svar.</h3>
<p>I det här steget tar vi emot ett svar på vår offert (samma sorts personuppgifter som i
föregående steg behandlas). Om offerten accepteras går vi vidare till steg 4 och tar fram ett avtal.
Ändamålet med behandlingen är att hantera offerten men också spara uppgifter för att vi senare ska
kunna visa partsavsikten (jämför avtalslagen).</p>
 <h3>
 4. Avtal. 
 </h3>
 <p>
 I det här steget ingås ett formellt avtal. Här behandlas personuppgifter som namn,
kontaktperson och mejladresser. Avtalet och konversation kring avtalstexter lagras. Ändamålet med
behandlingen är att hantera avtalet men också spara uppgifter för att vi senare ska kunna visa
partsavsikten (jämför avtalslagen).
 </p>
<h3>5. Lagring/Gallring.</h3>
<p>Många affärskontakter pågår under längre tid och vi har många kunder som
återkommer. Detta har påverkat hur vi ser på lagring och gallring eftersom vi vet att det förenklar
för både kunden och oss att ha kvar dokumentation. När vi sparar uppgifter i den här processen är
den lagliga grunden berättigat intresse.</p>
<p>
Om en offert inte accepteras sparar vi personuppgifter under ett visst tag för det fall kundkontakten
återupptas. Vi genomför gallring årligen av mejl och andra handlingar kopplade till ej accepterade
offerter (i det läget prövas om det kan finnas skäl att lagra handlingar längre t.ex. för att en ny
förfrågan inkommit).
Om en offert accepteras behöver vi bevara mejl och andra handlingar för sedvanlig dokumentation
om parternas avsikt. Vidare behöver vi behålla uppgifter för att klara av leveranser. Vi gallrar
handlingar när vi bedömer att vi inte längre har några behov att behålla dem för att säkra dessa
ändamål.
</p>



                
            </Text>
        </Cont>
    )
}

export default Forsaljning
