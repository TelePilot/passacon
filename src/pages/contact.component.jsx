import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Title from '../components/title/title.component'
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
const ContactTele = styled.h2``
const ContactLink = styled.a``
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
        <Title title="Ta kontakt med oss"></Title>
        <ContactCont>
                
                
                <ContactTextCont> 
                <ContactText>
                    
                <PortableText blocks={contact.beskrivning}/>
            </ContactText>
            <ContactTele>Telefon:<ContactLink href={`tel:${contact.telefon}`}>{contact.telefon}</ContactLink> </ContactTele>
            <ContactTele>Email:<ContactLink href={`mailto:${contact.email}`}>{contact.email}</ContactLink> </ContactTele>

                </ContactTextCont>
                
            <MapCont><iframe title="maps" width="100%" height="350" src="https://maps.google.com/maps?width=100%&amp;height=350&amp;hl=en&amp;q=20%2C%20h%C3%B6torget%2C%20111%2057%2C%20stockholm%2C%20sweden+(Passacon)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">find my location</a></iframe></MapCont>
        </ContactCont>
        </div>
       
    )
}

export default Contact