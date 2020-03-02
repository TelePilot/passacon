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
const Marknadsforing = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search) 
      },[])
    return (
        <Cont>
            <h1>Marknadsföring</h1>
            <Text>
                <p>
                Det övergripande ändamålet med den här processen är att marknadsföra Passacons olika
                erbjudanden. Vi gör detta på två sätt: genom att tillhandahålla intressanta seminarium om ämnen vi
                kan (se alla steg nedan) och genom att skicka ut Dagen-utskick (se steg 1-2 nedan). Den lagliga
                grunden för behandlingen är berättigat intresse (vi vet att både befintliga kunder och andra
                uppskattar aktiviteterna). Om ytterligare ändamål/laglig grund tillkommer beskrivs det i respektive
                steg.
                </p>
                <h3>1. Plan.</h3>
                <p>Vi har en plan för marknadsaktiviteter som vi fortlöpande uppdaterar. Utifrån planen tar vi
                fram en inbjudan till ett seminarium/annan aktivitet eller ett Dagen-kort (vi uppmärksammar
                intressanta dagar några gånger per år). De enda externa personuppgifter vi kan behandla i detta
                steg rör kontakter med olika leverantörer t.ex. för lokalbokning (namn och e-postadresser).</p>
                <h3>2. Utskick.</h3>
                <p>I det här steget gör vi utskick utifrån den tänkta målgruppen. Inbjudningar respektive
                Dagen-utskick skickas till befintliga kunder men också andra som vi tror kan vara intresserade (Vi
                har inget register för detta utan varje partner bestämmer själv vilka man vill skicka till. Ibland
                använder vi deltagarlistor från tidigare events för att hitta intresserade.). Rör det sig om ett
                seminarium lägger vi ofta också ut inbjudan på vår hemsida och på vår LinkedIn-sida. De
                personuppgifter vi behandlar är mejladresser och namn på mottagare. I inbjudningar finns också
                namn på talarna angivna.
                Vid våra seminarier serverar vi ofta en enklare förtäring. För att kunna hantera kostallergier ber vi de
                som anmäler sig ange om sådana föreligger. Eftersom detta är känsliga personuppgifter ber vi om
                ett uttryckligt samtycke att få behandla personuppgiften (se steg 2). Den som inte vill ha någon
                förtäring eller inte vill anmäla allergi behöver inte ge samtycke.</p>
                <h3>3.Anmälan.</h3>
                <p>I det här steget får vi in anmälningar (de skickas till vår gemensamma e-postlåda 
                <a href="mailto:info@passacon.se "> info@passacon.se </a>som vi lägger in i en anmälningslista (namn och e-postadress till deltagaren). Har
                någon anmält allergi och samtyckt till behandling av den personuppgiften noterar vi det i listan.
                Vi skickar en bekräftelse när vi fått anmälan och en ytterligare sådan när seminariet närmar sig via
                mejl. Vi beställer också förtäring (vi delar inga personuppgifter till leverantören) utifrån
                anmälningslistan. Vi förbereder ibland också namnbrickor med hjälp av den.</p>
                <h3>4. Genomförande.</h3>
                <p>I det här steget genomförs seminariet. Vi behandlar inga ytterligare
                personuppgifter i detta steg.</p>
                <h3>5. Efterarbete.</h3>
                <p>I detta steg genomför vi efterarbete. Ibland skickar vi ut presentationen till deltagare
som bett om den. Eftersom vi vet att många uppskattar seminarier behåller vi deltagarlistor för att
kunna skicka inbjudan till andra liknande seminarium. Vi genomför en årlig gallring av
anmälningslistor för att inte spara personuppgifter för länge. Om någon invänder mot att vi sparar
hens personuppgifter i deltagarlistan raderar vi dem dock direkt.</p>
            </Text>   
        </Cont>
    )
}

export default Marknadsforing
