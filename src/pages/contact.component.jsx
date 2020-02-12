import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Title from '../components/title/title.component'
import sanityClient from '../Client'
import PortableText from '@sanity/block-content-to-react'

const ContactCont = styled.div`
    height: 50vh;
    width: 100%;
    text-align: left;
`
const ContactText = styled.h3`

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
        <ContactCont>
            <Title title="Ta kontakt med oss"></Title>
            <ContactText>
                <PortableText blocks={contact.beskrivning}/>
            </ContactText>
            <ContactTele>Telefon:<ContactLink href={`tel:${contact.telefon}`}>{contact.telefon}</ContactLink> </ContactTele>
            <ContactTele>Email:<ContactLink href={`mailto:${contact.email}`}>{contact.email}</ContactLink> </ContactTele>
        </ContactCont>
    )
}

export default Contact
