
import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import Industries from "../sections/Industries";
import ContactCTA from "../sections/ContactCTA";
import ClientsPreview from "../sections/ClientsPreview";
import TechTrendsSection from "../sections/TechTrendsSection";
import { Helmet } from "react-helmet-async";
import WhyUs from "../sections/WhyUs";
import FAQs from "../sections/FAQs";
import Reviews from "../sections/Reviews";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {

  const location = useLocation();

  useEffect(() => {

    if (location.hash === "#services") {

      const section = document.getElementById("services");

      if (section) {

        setTimeout(() => {

          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }, 100);

      }

    }

  }, [location]);

  
  return (
    <>
      
       <Helmet>
        <title>Vaytrix Tech IT | Technology, Talent & Digital Solutions</title>

        <meta
          name="description"
          content="Vaytrix Tech IT delivers technology solutions, software development, IT staffing, professional training, consulting, and career solutions for modern businesses."
        />

        <meta
          name="keywords"
          content="Vaytrix Tech IT, IT Services, Software Development, IT Staffing, Technology Solutions, Digital Solutions, IT Consulting"
        />

        <link
          rel="canonical"
          href="https://vaytrixtechit.com/"
        />

        <meta
          property="og:title"
          content="Vaytrix Tech IT | Technology, Talent & Digital Solutions"
        />

        <meta
          property="og:description"
          content="Technology, talent, training, consulting, and digital solutions designed to create meaningful business impact."
        />

        <meta
          property="og:url"
          content="https://vaytrixtechit.com/"
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

      <Hero />

      <ServicesSection />

      <Industries />

      <WhyUs />

      <TechTrendsSection />

      <Reviews />

      <ClientsPreview />

      <FAQs />

      <ContactCTA />
    </>
  );
}

export default Home;
