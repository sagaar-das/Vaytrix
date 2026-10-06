import React from 'react'
import ContactCTA from '../sections/ContactCTA'
import { Helmet } from "react-helmet-async";

function ContactUs() {
  return (

    <>
      <Helmet>
  <title>Contact Vaytrix Tech IT | Let's Build What's Next</title>

  <meta
    name="description"
    content="Contact Vaytrix Tech IT for technology solutions, software development, IT staffing, consulting, training, and business technology services."
  />

  <meta
    name="keywords"
    content="Contact Vaytrix, Vaytrix Contact, IT Services Contact, Technology Consulting, IT Solutions"
  />

  <link
    rel="canonical"
    href="https://vaytrixtechit.com/contact"
  />

  <meta
    property="og:title"
    content="Contact Vaytrix Tech IT | Let's Build What's Next"
  />

  <meta
    property="og:description"
    content="Connect with Vaytrix Tech IT to discuss technology, talent, consulting, and digital solutions."
  />

  <meta
    property="og:url"
    content="https://vaytrixtechit.com/contact"
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:image"
    content="https://vaytrixtechit.com/og-image.jpg"
  />
</Helmet>

      <ContactCTA />
    </>
  )
}

export default ContactUs

