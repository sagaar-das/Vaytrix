import ItFeatures from "../itComponents/ItFeatures";
import ItHero from "../itComponents/ItHero";
import ItHowItWorks from "../itComponents/ItHowItWorks";
import ItServices from "../itComponents/ItServices";
import ItStats from "../itComponents/ItStats";
import ItWhyChooseUs from "../itComponents/ItWhyChooseUs";


import { Helmet } from "react-helmet-async";
import PricingTable from "../itComponents/PricingTable";
import PricingPlans from "../itComponents/PricingPlans";


function IT() {


  return (
    <>

      <Helmet>
  <title>
    IT Staffing & Recruitment Services | Vaytrix Tech IT
  </title>

  <meta
    name="description"
    content="Vaytrix Tech IT provides flexible IT staffing and recruitment solutions to help businesses find skilled technology professionals and build high-performing teams."
  />

  <meta
    name="keywords"
    content="IT Staffing, IT Recruitment, Technology Staffing, IT Hiring, Technology Talent, Workforce Solutions, IT Recruitment Services, Staffing Solutions, Software Developer Staffing, Vaytrix Tech IT"
  />

  <link
    rel="canonical"
    href="https://vaytrixtechit.com/services/it"
  />

  <meta
    name="robots"
    content="index, follow"
  />

  
  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:site_name"
    content="Vaytrix Tech IT"
  />

  <meta
    property="og:title"
    content="IT Staffing & Recruitment Services | Vaytrix Tech IT"
  />

  <meta
    property="og:description"
    content="Connect with skilled technology professionals through Vaytrix Tech IT's flexible IT staffing and recruitment solutions."
  />

  <meta
    property="og:url"
    content="https://vaytrixtechit.com/services/it"
  />

  <meta
    property="og:image"
    content="https://vaytrixtechit.com/og-image.jpg"
  />

  <meta
    property="og:image:alt"
    content="Vaytrix Tech IT - IT Staffing and Recruitment Services"
  />

  
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="IT Staffing & Recruitment Services | Vaytrix Tech IT"
  />

  <meta
    name="twitter:description"
    content="Find the right technology talent with Vaytrix Tech IT's IT staffing and recruitment solutions."
  />

  <meta
    name="twitter:image"
    content="https://vaytrixtechit.com/og-image.jpg"
  />
</Helmet>

      <ItHero/>
      <ItStats/>
      <ItServices/>
      <ItFeatures/>
      <ItWhyChooseUs/>
      <ItHowItWorks/>
      <PricingTable />
      <PricingPlans />
      

      
    </>
  );
}

export default IT;



