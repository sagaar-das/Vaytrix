import EmployerHero from "../components/employer/EmployerHero";
import EmployerBenefits from "../components/employer/EmployerBenefits";
import HiringModels from "../components/employer/HiringModels";
import Expertise from "../components/employer/Expertise";
import HiringProcess from "../components/employer/HiringProcess";
import EmployerCTA from "../components/employer/EmployerCTA";

import { Helmet } from "react-helmet-async";

function ForEmployer() {
    return (

        <>
            <Helmet>
  <title>For Employers | IT Staffing & Talent Solutions | Vaytrix</title>

  <meta
    name="description"
    content="Vaytrix Tech IT helps employers find skilled technology talent through flexible IT staffing, recruitment, talent solutions, and workforce support."
  />

  <meta
    name="keywords"
    content="IT Staffing, IT Recruitment, Technology Staffing, Talent Solutions, IT Hiring, Vaytrix Employers"
  />

  <link
    rel="canonical"
    href="https://vaytrixtechit.com/for-employers"
  />

  <meta
    property="og:title"
    content="For Employers | IT Staffing & Talent Solutions | Vaytrix"
  />

  <meta
    property="og:description"
    content="Connect your business with the right technology talent through Vaytrix Tech IT."
  />

  <meta
    property="og:url"
    content="https://vaytrixtechit.com/for-employers"
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


            <main className="bg-primary overflow-x-hidden">
                <EmployerHero />
                <EmployerBenefits />
                <HiringModels />
                <Expertise />
                <HiringProcess />
                <EmployerCTA />
            </main>

        </>
    );
}

export default ForEmployer;

