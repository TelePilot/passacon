import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../Client'
import PortableText from '@sanity/block-content-to-react'

const ContactCont = styled.div`
    height: 50vh;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
    align-items: flex-start;
    @media screen and (max-width: 900px){
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        height: auto;
    }
`
const ContactTitle = styled.h2`
text-align: left;
font-size: 48px;
margin-bottom: 2%;
@media screen and (max-width: 800px){
    font-size: 32px;
}`
const ContactText = styled.h3`
   
`
const ContactTextCont = styled.div`
    width: 50%;
    margin-bottom: 50px;
    @media screen and (max-width: 900px){
        width: 100%;
    }   
`
const MapCont = styled.div`
    width: 50%;
    @media screen and (max-width: 900px){
        width: 100%;
    }
`
const ContactTele = styled.h3`
font-size: 28px;
@media screen and (max-width: 800px){
    font-size: 22px;
}
`
const ContactLink = styled.a`
    text-decoration: none;
    color: black;
`
const Contact = () => {

    const [contact, setContact] = useState('')
    useEffect(() => {
        const contactQuery = `*[_type == "kontakt"]`
 
        sanityClient.fetch(contactQuery).then(contact => { 
         contact.forEach(contact => {
             setContact(contact)
         })
       })
    }, [])
    return (
        <div>
        <ContactTitle>{contact.titel}</ContactTitle>
        <ContactCont>
                
                
                <ContactTextCont> 
                <ContactText>
                    
                <PortableText blocks={contact.beskrivning}/>
            </ContactText>
            <ContactTele>Telefon: <ContactLink href={`tel:${contact.telefon}`}>{contact.telefon}</ContactLink> </ContactTele>
            <ContactTele>Email: <ContactLink href={`mailto:${contact.email}`}>{contact.email}</ContactLink> </ContactTele>

                </ContactTextCont>
                
            <MapCont><iframe title="maps" width="100%" height="350" src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=Sveav%C3%A4gen%2020%2C%20111%2057%2C%20Stockholm%2C%20Sweden+(Passacon)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">find my coordinates</a></iframe></MapCont>
        </ContactCont>
        </div>
       
    )
}

export default Contact
