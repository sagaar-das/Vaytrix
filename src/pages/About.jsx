import AboutHero from "../aboutCompo/AboutHero"
import CoreValues from "../aboutCompo/CoreValues"
import GrowthPillars from "../aboutCompo/GrowthPillars"
import PurposeSection from "../aboutCompo/PurposeSection"


import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
    <Helmet>
  <title>About Vaytrix Tech IT | Our Story, Values & Purpose</title>

  <meta
    name="description"
    content="Learn about Vaytrix Tech IT, our purpose, values, people-focused approach, and commitment to creating meaningful technology and career opportunities."
  />

  <meta
    name="keywords"
    content="About Vaytrix, Vaytrix Tech IT, IT Company, Technology Company, IT Solutions, Career Solutions"
  />

  <link
    rel="canonical"
    href="https://vaytrixtechit.com/about"
  />

  <meta
    property="og:title"
    content="About Vaytrix Tech IT | Our Story, Values & Purpose"
  />

  <meta
    property="og:description"
    content="Discover the story, values, purpose, and people-first approach behind Vaytrix Tech IT."
  />

  <meta
    property="og:url"
    content="https://vaytrixtechit.com/about"
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
    <AboutHero />
    <CoreValues />
    <GrowthPillars />
    <PurposeSection />
    </>
  )
}

export default About