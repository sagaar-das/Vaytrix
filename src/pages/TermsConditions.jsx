import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  UserCheck,
  UserPlus,
  BriefcaseBusiness,
  Clock3,
  RotateCcw,
  CreditCard,
  MonitorSmartphone,
  WalletCards,
  PlayCircle,
  Copyright,
  UserRoundCheck,
  LockKeyhole,
  Scale,
  Handshake,
  Gavel,
  RefreshCcw,
  Ban,
  Split,
  FileCheck2,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { Helmet } from "react-helmet-async";

const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    icon: FileText,
  },
  {
    id: "acceptance",
    number: "02",
    title: "Acceptance of Terms",
    icon: ShieldCheck,
  },
  {
    id: "eligibility",
    number: "03",
    title: "Eligibility",
    icon: UserCheck,
  },
  {
    id: "account",
    number: "04",
    title: "Account Registration",
    icon: UserPlus,
  },
  {
    id: "service-information",
    number: "05",
    title: "Service Information & Availability",
    icon: BriefcaseBusiness,
  },
  {
    id: "service-validity",
    number: "06",
    title: "Service Validity",
    icon: Clock3,
  },
  {
    id: "refund",
    number: "07",
    title: "Refund Policy",
    icon: RotateCcw,
  },
  {
    id: "payment",
    number: "08",
    title: "Payment & Billing",
    icon: CreditCard,
  },
  {
    id: "delivery",
    number: "09",
    title: "Delivery of Services",
    icon: MonitorSmartphone,
  },
  {
    id: "payment-obligations",
    number: "10",
    title: "Payment Obligations",
    icon: WalletCards,
  },
  {
    id: "activation",
    number: "11",
    title: "Service Activation Policy",
    icon: PlayCircle,
  },
  {
    id: "intellectual-property",
    number: "12",
    title: "Intellectual Property Rights",
    icon: Copyright,
  },
  {
    id: "user-conduct",
    number: "13",
    title: "User Conduct",
    icon: UserRoundCheck,
  },
  {
    id: "privacy",
    number: "14",
    title: "Privacy Policy",
    icon: LockKeyhole,
  },
  {
    id: "liability",
    number: "15",
    title: "Limitation of Liability",
    icon: Scale,
  },
  {
    id: "indemnification",
    number: "16",
    title: "Indemnification",
    icon: Handshake,
  },
  {
    id: "governing-law",
    number: "17",
    title: "Governing Law",
    icon: Gavel,
  },
  {
    id: "changes",
    number: "18",
    title: "Changes to Policy",
    icon: RefreshCcw,
  },
  {
    id: "termination",
    number: "19",
    title: "Termination",
    icon: Ban,
  },
  {
    id: "severability",
    number: "20",
    title: "Severability",
    icon: Split,
  },
  {
    id: "entire-agreement",
    number: "21",
    title: "Entire Agreement",
    icon: FileCheck2,
  },
  {
    id: "contact",
    number: "22",
    title: "Contact Information",
    icon: Mail,
  },
];

const SectionHeader = ({ number, title, icon: Icon }) => (
  <div className="mb-6 flex items-start gap-4">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
      <Icon size={20} />
    </div>

    <div>
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-400">
        Section {number}
      </p>

      <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {title}
      </h2>
    </div>
  </div>
);

 const PolicyCard = ({ children, className = "" }) => (
    <div
      className={`rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-7 ${className}`}
    >
      {children}
    </div>
  );

const Paragraph = ({ children }) => (
  <p className="mb-4 text-sm leading-7 text-slate-300 last:mb-0">
    {children}
  </p>
);

const BulletList = ({ items }) => (
  <ul className="mb-5 space-y-3">
    {items.map((item, index) => (
      <li
        key={index}
        className="flex gap-3 text-sm leading-6 text-slate-300"
      >
        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const TermsConditions = () => {
  return (

    <>

    <Helmet>
  <title>Terms & Conditions | Vaytrix Tech IT</title>

  <meta
    name="description"
    content="Read the Terms and Conditions governing the use of the Vaytrix Tech IT website and its services."
  />

  <link
    rel="canonical"
    href="https://vaytrixtechit.com/terms-and-conditions"
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <meta
    property="og:title"
    content="Terms & Conditions | Vaytrix Tech IT"
  />

  <meta
    property="og:description"
    content="Review the terms and conditions for using the Vaytrix Tech IT website."
  />

  <meta
    property="og:url"
    content="https://vaytrixtechit.com/terms-and-conditions"
  />

  <meta
    property="og:type"
    content="website"
  />
</Helmet>
    
    <main className="relative min-h-screen overflow-hidden bg-[#050508] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-[35%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative border-b border-white/[0.06] px-5 pb-12 pt-10 sm:px-8 lg:px-10 lg:pb-14 lg:pt-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-violet-300"
          >
            <FileText size={14} />
            Legal / Terms
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Terms &{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Conditions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base"
          >
            Please review these Terms and Conditions carefully before
            purchasing or using VatrixTechIT's professional digital
            career-support and consulting services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mx-auto mt-7 flex max-w-xl flex-col items-center justify-center gap-2 text-xs text-slate-500 sm:flex-row"
          >
            <span>VatrixTechIT</span>
            <span className="hidden sm:block">•</span>
            <span>Powered by Wolf Technologies Global Limited</span>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        {/* TABLE OF CONTENTS */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="mb-8"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-7">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-400">
                  Navigation
                </p>

                <h2 className="mt-1 text-xl font-semibold text-white">
                  Table of Contents
                </h2>
              </div>

              <p className="text-xs text-slate-500">
                {sections.length} policy sections
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 rounded-xl border border-white/[0.05] bg-black/20 px-3 py-3 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/[0.07]"
                  >
                    <span className="text-[10px] font-semibold text-violet-400">
                      {section.number}
                    </span>

                    <Icon
                      size={15}
                      className="shrink-0 text-slate-500 transition-colors group-hover:text-violet-300"
                    />

                    <span className="text-xs font-medium text-slate-300 transition-colors group-hover:text-white">
                      {section.title}
                    </span>

                    <ArrowUpRight
                      size={13}
                      className="ml-auto shrink-0 text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* POLICY CONTENT */}
        <div className="space-y-6">
          {/* 01 INTRODUCTION */}
          <motion.section
            id="introduction"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="01"
                title="Introduction"
                icon={FileText}
              />

              <Paragraph>
                Welcome to VatrixTechIT ("Company," "we," "us," or "our"),
                powered and supported by Wolf Technologies Global Limited.
                These Terms and Conditions ("Policy") govern your access to
                and use of our website, platform, applications, and
                professional digital services available through
                wolftechnologiesllc.com.
              </Paragraph>

              <Paragraph>
                Wolf Technologies provides professional digital career-support
                and consulting services including resume development, LinkedIn
                optimization, technical skill enhancement, interview
                preparation, candidate marketing, portfolio enhancement,
                structured job-search support, and related professional
                guidance services designed to assist candidates in improving
                their professional visibility and career opportunities.
              </Paragraph>

              <Paragraph>
                All services are delivered digitally through online
                communication channels, application systems, messaging
                platforms, documentation sharing, virtual meetings, and
                platform access. No physical products, merchandise, or
                tangible goods are sold or shipped by the Company.
              </Paragraph>

              <Paragraph>
                By purchasing, accessing, or using any service from our
                website or platform, you ("Client," "User," or "Customer")
                acknowledge that you are purchasing professional digital
                services and agree to be bound by these Terms and Conditions
                and Company Policies. Please review these Terms carefully
                before proceeding with any purchase or use of our services.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 02 ACCEPTANCE */}
          <motion.section
            id="acceptance"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="02"
                title="Acceptance of Terms"
                icon={ShieldCheck}
              />

              <Paragraph>
                By accessing, browsing, registering, purchasing, or using any
                service provided by VatrixTechIT ("Company," "we," "us," or
                "our"), powered and supported by Wolf Technologies Global
                Limited, you ("Client," "User," or "Customer") acknowledge
                that you have read, understood, and agreed to be bound by
                these Terms and Conditions, Company Policies, and any related
                guidelines referenced on our website.
              </Paragraph>

              <Paragraph>
                By purchasing any service package through wolftechnologiesllc.com,
                mobile applications, communication channels, or associated
                platforms, the Client expressly acknowledges and agrees that
                they are purchasing professional digital career-support and
                consulting services delivered electronically and not physical
                products, merchandise, or tangible goods.
              </Paragraph>

              <Paragraph>
                The Client further agrees to comply with all applicable laws,
                regulations, and policies while using our services, platforms,
                applications, and related resources. If you do not agree with
                any part of these Terms and Conditions, you must discontinue
                use of our website, platform, applications, and services
                immediately.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to modify, update, or revise
                these Terms and Conditions at any time without prior notice.
                Continued use of our services following any updates
                constitutes acceptance of the revised Terms.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 03 ELIGIBILITY */}
          <motion.section
            id="eligibility"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="03"
                title="Eligibility"
                icon={UserCheck}
              />

              <Paragraph>
                By accessing or using the services provided by VatrixTechIT
                ("Company," "we," "us," or "our"), powered and supported by
                Wolf Technologies Global Limited, you represent and warrant
                that you are at least eighteen (18) years of age and legally
                capable of entering into binding agreements under applicable
                laws.
              </Paragraph>

              <Paragraph>
                Our professional digital career-support and consulting
                services are primarily intended for individuals seeking career
                opportunities, technical guidance, professional development,
                and employment-related support, particularly for opportunities
                associated with the United States job market.
              </Paragraph>

              <Paragraph>By using our website, platform, applications, or services, you further represent that:</Paragraph>

              <BulletList
                items={[
                  "All information provided by you is accurate, current, and complete.",
                  "You will use our services only for lawful and legitimate purposes.",
                  "You will not misuse, disrupt, or attempt unauthorized access to our systems, applications, or platform resources.",
                  "You are solely responsible for maintaining the confidentiality of your account credentials and personal information.",
                ]}
              />

              <Paragraph>
                The Company reserves the right to refuse access, suspend
                services, terminate accounts, or discontinue service
                availability at its sole discretion if any information
                provided is found to be false, misleading, incomplete,
                fraudulent, or in violation of these Terms and Conditions or
                applicable laws.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 04 ACCOUNT */}
          <motion.section
            id="account"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="04"
                title="Account Registration"
                icon={UserPlus}
              />

              <Paragraph>
                Certain features, platforms, applications, or services
                provided by VatrixTechIT ("Company," "we," "us," or "our"),
                powered and supported by Wolf Technologies Global Limited, may
                require Clients ("User," "Customer," or "Client") to register
                and create an account.
              </Paragraph>

              <Paragraph>
                By registering an account with the Company, you agree to
                provide accurate, complete, and up-to-date information
                including, but not limited to, your name, contact details,
                educational background, professional information, technical
                skills, employment history, and any other information
                reasonably required for service delivery and platform access.
              </Paragraph>

              <Paragraph>
                You are solely responsible for maintaining the confidentiality
                and security of your account credentials, login information,
                passwords, and any activities conducted under your account.
                The Company shall not be held liable for any unauthorized
                access resulting from your failure to maintain account
                security.
              </Paragraph>

              <Paragraph>
                The Client agrees to immediately notify the Company of any
                unauthorized use, suspicious activity, breach of security, or
                unauthorized access related to their account or platform usage.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to suspend, restrict, terminate,
                or refuse account registration or platform access at its sole
                discretion if:
              </Paragraph>

              <BulletList
                items={[
                  "Any information provided is false, misleading, inaccurate, incomplete, or fraudulent.",
                  "The account is used for unlawful, abusive, harmful, or unauthorized activities.",
                  "The Client violates these Terms and Conditions or any applicable laws or regulations.",
                  "Unauthorized sharing, resale, misuse, duplication, or exploitation of platform access, applications, resources, or services is detected.",
                ]}
              />

              <Paragraph>
                Clients are responsible for ensuring that all submitted
                information remains current and accurate throughout the
                service period. Failure to maintain accurate information may
                impact service delivery, communication, onboarding, or access
                to Company resources and platforms.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 05 SERVICE INFORMATION */}
          <motion.section
            id="service-information"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="05"
                title="Service Information & Availability"
                icon={BriefcaseBusiness}
              />

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, provides
                professional digital career-support and consulting services
                designed to assist Clients ("User," "Customer," or "Client")
                in enhancing their professional profiles, technical
                capabilities, interview readiness, and overall career
                opportunities.
              </Paragraph>

              <Paragraph>Our services may include, but are not limited to:</Paragraph>

              <BulletList
                items={[
                  "Professional ATS-optimized resume development",
                  "LinkedIn profile optimization",
                  "GitHub and portfolio enhancement",
                  "Technical skill enhancement guidance",
                  "Interview preparation and mock interview sessions",
                  "Candidate marketing and outreach support",
                  "Structured career-support programs",
                  "Platform and application access",
                  "Job application assistance and tracking",
                  "Professional consulting and career guidance services",
                ]}
              />

              <Paragraph>
                The Company continuously works to improve and update its
                services, platform features, resources, and support systems.
                As a result, certain services, tools, application features,
                support structures, or platform functionalities may be
                modified, updated, suspended, limited, or discontinued at any
                time without prior notice.
              </Paragraph>

              <Paragraph>
                Service availability may vary based on operational capacity,
                geographic limitations, market conditions, technical
                requirements, candidate eligibility, onboarding completion,
                responsiveness, and other business or operational factors.
              </Paragraph>

              <Paragraph>
                While the Company aims to provide accurate and updated
                information regarding its services, timelines, features, and
                support programs, the Company does not guarantee uninterrupted
                availability, specific outcomes, employer responses, interview
                calls, job placement, salary outcomes, or employment
                opportunities.
              </Paragraph>

              <Paragraph>
                Clients acknowledge and agree that service results may vary
                depending on individual qualifications, technical skills, work
                experience, market demand, employer requirements,
                responsiveness, participation level, and external factors
                beyond the Company's control.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to refuse, limit, suspend,
                modify, or discontinue any service, platform feature,
                application access, or support offering at its sole discretion
                without liability where necessary for operational, compliance,
                legal, security, or business reasons.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 06 SERVICE VALIDITY */}
          <motion.section
            id="service-validity"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="06"
                title="Service Validity"
                icon={Clock3}
              />

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, provides
                structured professional digital career-support and consulting
                services for a defined service duration depending on the
                selected service plan or program.
              </Paragraph>

              <Paragraph>
                Certain service plans may include structured support for a
                fixed period, including but not limited to six (6) months of
                guided support, beginning from the date of successful
                onboarding, payment confirmation, and service activation unless
                otherwise specified in writing by the Company.
              </Paragraph>

              <Paragraph>
                The service validity period includes access to applicable
                support services, guidance sessions, platform resources,
                application assistance, profile optimization support,
                technical guidance, and other related services included within
                the selected package.
              </Paragraph>

              <Paragraph>
                Clients are responsible for actively participating in the
                service process by providing required information, attending
                scheduled sessions, responding to communication, completing
                requested activities, and cooperating throughout the service
                duration. Delays caused by lack of responsiveness, incomplete
                information, inactivity, or non-participation from the Client
                side may affect service timelines, progress, outcomes, and
                support continuity.
              </Paragraph>

              <Paragraph>The Company reserves the right to pause, limit, suspend, or discontinue services if:</Paragraph>

              <BulletList
                items={[
                  "Required onboarding information is not provided.",
                  "The Client remains inactive for an extended period.",
                  "The Client violates Company policies or Terms and Conditions.",
                  "Fraudulent, abusive, harmful, or unauthorized activity is detected.",
                ]}
              />

              <Paragraph>
                Upon expiration of the applicable service validity period,
                certain services, support access, platform features,
                consultation availability, communication channels, or program
                benefits may be restricted, limited, or discontinued unless
                extended or renewed through an approved Company process.
              </Paragraph>

              <Paragraph>
                The Company does not guarantee specific outcomes, interview
                calls, employment offers, or placement results during or after
                the service validity period, as outcomes depend on multiple
                external factors beyond the Company's control.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 07 REFUND */}
          <motion.section
            id="refund"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="07"
                title="Refund Policy"
                icon={RotateCcw}
              />

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, provides
                professional digital career-support and consulting services
                that involve immediate allocation of time, resources,
                technical efforts, consultation planning, profile analysis,
                platform access, and service preparation upon successful
                onboarding and activation.
              </Paragraph>

              <Paragraph>
                Due to the nature of digital consulting and professional
                support services, refund requests are generally limited once
                service delivery, onboarding, consultation, profile review,
                technical guidance, marketing activities, documentation work,
                application support, platform access, or related service
                activities have commenced.
              </Paragraph>

              <Paragraph>
                However, the Company may review refund requests on a
                case-by-case basis depending on factors including, but not
                limited to:
              </Paragraph>

              <BulletList
                items={[
                  "Stage of service utilization",
                  "Work already completed",
                  "Resources allocated",
                  "Consultation sessions conducted",
                  "Platform or application access provided",
                  "Profile optimization activities initiated",
                  "Candidate marketing efforts performed",
                  "Technical support or guidance delivered",
                  "Internal review findings and operational considerations",
                ]}
              />

              <Paragraph>
                Clients acknowledge and agree that services such as resume
                development, LinkedIn optimization, GitHub or portfolio
                enhancement, technical preparation, candidate marketing,
                consultation sessions, onboarding activities, application
                support, and platform access may be considered partially or
                fully utilized once initiated.
              </Paragraph>

              <Paragraph>
                Refund requests submitted after substantial service
                utilization, completed deliverables, active participation,
                ongoing support engagement, or significant resource allocation
                may not qualify for approval.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to approve, partially approve,
                deny, or review any refund request at its sole discretion based
                on internal evaluation, operational records, service usage
                history, communication records, and applicable business
                considerations.
              </Paragraph>

              <Paragraph>
                Approved refunds, if any, may take a reasonable processing
                period depending on the original payment method, payment
                gateway processing timelines, banking procedures, compliance
                checks, and financial institution policies.
              </Paragraph>

              <Paragraph>
                Chargebacks, payment disputes, fraudulent claims, unauthorized
                transaction reports, abuse of services, misuse of platform
                access, or attempts to intentionally disrupt Company
                operations may result in suspension or permanent termination
                of services, platform access, communication channels, and
                future eligibility for Company programs or support services.
              </Paragraph>

              <Paragraph>
                For refund-related inquiries or billing concerns, Clients may
                contact the Company through the official support channels
                provided on the website.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 08 PAYMENT */}
          <motion.section
            id="payment"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="08"
                title="Payment & Billing"
                icon={CreditCard}
              />

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, collects
                payments for professional digital career-support, consulting,
                technical guidance, platform access, and related professional
                services provided through our website, applications,
                communication channels, and associated platforms.
              </Paragraph>

              <Paragraph>
                By purchasing or enrolling in any service offered by the
                Company, the Client ("User," "Customer," or "Client") agrees
                to provide accurate, complete, and valid payment information
                and authorizes the Company and its authorized payment partners
                or payment gateways to process applicable charges related to
                the selected service package.
              </Paragraph>

              <Paragraph>
                Payments may be processed through authorized third-party
                payment gateways, banking channels, financial institutions, or
                payment service providers. The Company does not directly store
                sensitive payment card details and relies on secure third-party
                payment processing providers for transaction handling and
                payment authorization.
              </Paragraph>

              <Paragraph>The Client agrees that:</Paragraph>

              <BulletList
                items={[
                  "All payments must be completed using authorized and legally valid payment methods.",
                  "The Client is responsible for ensuring sufficient funds, payment authorization, and transaction approval from their financial institution.",
                  "Any taxes, bank fees, international transaction fees, currency conversion charges, or payment gateway charges imposed by financial institutions or third-party providers shall remain the responsibility of the Client unless otherwise stated by the Company.",
                  "Failure to complete payment obligations may result in delay, suspension, limitation, or cancellation of services and platform access.",
                ]}
              />

              <Paragraph>
                The Company reserves the right to modify pricing, service fees,
                package structures, promotional offers, or payment terms at
                any time without prior notice. However, pricing changes will
                not affect services already confirmed and activated prior to
                such modifications unless otherwise specified.
              </Paragraph>

              <Paragraph>
                Certain customized service plans, premium support programs, or
                specialized consulting arrangements may involve separate
                pricing structures, milestone-based payments, performance-linked
                terms, or additional contractual agreements communicated
                directly between the Company and the Client.
              </Paragraph>

              <Paragraph>
                Clients acknowledge that payments made to the Company are
                associated with professional digital services delivered
                electronically and not for the purchase of physical products,
                merchandise, or tangible goods.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to refuse, cancel, suspend, or
                review any transaction suspected of fraud, unauthorized
                activity, payment abuse, chargeback misuse, policy violations,
                suspicious behavior, legal concerns, compliance issues, or
                operational risk.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 09 DELIVERY */}
          <motion.section
            id="delivery"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="09"
                title="Delivery of Services"
                icon={MonitorSmartphone}
              />

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, provides
                professional digital career-support and consulting services
                delivered electronically through online communication
                channels, applications, virtual platforms, documentation
                sharing systems, and related digital methods.
              </Paragraph>

              <Paragraph>
                The Company does not sell, ship, manufacture, or deliver any
                physical products, merchandise, or tangible goods. All
                services are provided digitally and may include, but are not
                limited to:
              </Paragraph>

              <BulletList
                items={[
                  "Resume development and optimization",
                  "LinkedIn profile enhancement",
                  "GitHub and portfolio guidance",
                  "Technical skill enhancement support",
                  "Interview preparation and mock interview sessions",
                  "Candidate marketing and outreach activities",
                  "Job application assistance and tracking",
                  "Platform and application access",
                  "Career consulting and structured support services",
                ]}
              />

              <Paragraph>
                Service delivery may occur through various digital
                communication methods including email, messaging platforms,
                virtual meetings, online portals, mobile applications,
                dashboards, shared documentation systems, support channels,
                and other electronic communication methods determined by the
                Company.
              </Paragraph>

              <Paragraph>
                Clients acknowledge and agree that service timelines, progress,
                communication frequency, support availability, and deliverables
                may vary depending on factors including:
              </Paragraph>

              <BulletList
                items={[
                  "Client responsiveness and participation",
                  "Completion of onboarding requirements",
                  "Submission of required information or documentation",
                  "Market conditions and employer activity",
                  "Technical requirements and operational capacity",
                  "External factors beyond the Company's control",
                ]}
              />

              <Paragraph>
                The Company shall make reasonable efforts to provide services
                within estimated timelines; however, the Company does not
                guarantee uninterrupted availability, continuous access,
                immediate responses, specific completion dates, interview
                calls, employment offers, placement outcomes, or hiring
                decisions.
              </Paragraph>

              <Paragraph>
                Clients are responsible for actively cooperating during the
                service process by providing accurate information, attending
                scheduled sessions, responding to communication, and completing
                requested activities necessary for service delivery.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to modify, suspend, limit, or
                discontinue any service feature, platform access, support
                channel, or operational process where necessary for technical,
                operational, legal, security, compliance, or business
                reasons.
              </Paragraph>

              <Paragraph>
                By purchasing or using the Company's services, the Client
                acknowledges and agrees that all services are delivered
                digitally and electronically, and that no physical shipment,
                product delivery, or merchandise fulfillment is associated with
                any transaction made with the Company.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 10 PAYMENT OBLIGATIONS */}
          <motion.section
            id="payment-obligations"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="10"
                title="Payment Obligations"
                icon={WalletCards}
              />

              <Paragraph>
                By purchasing or enrolling in any professional digital service
                offered by VatrixTechIT ("Company," "we," "us," or "our"),
                powered and supported by Wolf Technologies Global Limited, the
                Client ("User," "Customer," or "Client") agrees to fulfill all
                applicable payment obligations associated with the selected
                service plan, support program, consulting package, platform
                access, or related professional services.
              </Paragraph>

              <Paragraph>Clients acknowledge and agree that:</Paragraph>

              <BulletList
                items={[
                  "All fees, charges, and applicable costs communicated by the Company must be paid in accordance with the agreed payment terms.",
                  "Payments must be made using authorized, legally valid, and approved payment methods.",
                  "Failure to complete payment obligations may result in suspension, delay, restriction, cancellation, or termination of services, platform access, support programs, or communication channels.",
                  "The Client remains responsible for any applicable banking fees, currency conversion charges, international transaction fees, taxes, or third-party payment processing charges unless otherwise specified by the Company.",
                ]}
              />

              <Paragraph>
                For certain customized service programs, premium consulting
                arrangements, specialized support structures, or
                performance-based service agreements, additional payment terms,
                milestone structures, or contractual obligations may apply as
                separately communicated and agreed between the Company and the
                Client.
              </Paragraph>

              <Paragraph>The Company reserves the right to pause, suspend, restrict, or terminate services where:</Paragraph>

              <BulletList
                items={[
                  "Payment obligations remain incomplete or overdue.",
                  "Fraudulent or unauthorized payment activity is suspected.",
                  "Chargeback abuse, payment disputes, or intentional misuse of payment systems is identified.",
                  "Violations of Company policies, Terms and Conditions, or applicable laws are detected.",
                ]}
              />

              <Paragraph>
                Clients acknowledge that payments made to the Company are
                associated with professional digital consulting and
                career-support services delivered electronically and not for
                physical products, merchandise, or tangible goods.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to pursue appropriate
                administrative, operational, legal, or financial actions in
                connection with unresolved payment obligations, fraudulent
                activities, unauthorized transactions, policy violations, or
                abuse of Company services and resources.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 11 ACTIVATION */}
          <motion.section
            id="activation"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="11"
                title="Service Activation Policy"
                icon={PlayCircle}
              />

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, initiates
                professional digital career-support and consulting services
                only after successful payment confirmation, onboarding
                completion, verification of required information, and
                operational acceptance by the Company.
              </Paragraph>

              <Paragraph>Service activation may include, but is not limited to:</Paragraph>

              <BulletList
                items={[
                  "Candidate onboarding and profile assessment",
                  "Resume and professional profile evaluation",
                  "Platform or application access provisioning",
                  "Technical guidance initiation",
                  "Career consultation scheduling",
                  "LinkedIn or portfolio optimization processes",
                  "Candidate marketing preparation",
                  "Job application support setup",
                  "Communication channel activation",
                ]}
              />

              <Paragraph>
                Clients are responsible for providing complete, accurate, and
                timely information required for onboarding and service
                initiation, including but not limited to:
              </Paragraph>

              <BulletList
                items={[
                  "Resume or professional background details",
                  "Educational information",
                  "Technical skills and work experience",
                  "Contact information",
                  "Supporting documents or materials reasonably required for service delivery",
                ]}
              />

              <Paragraph>
                Delays in providing required information, incomplete
                submissions, inaccurate details, non-responsiveness, missed
                communications, or failure to cooperate during onboarding may
                delay service activation timelines and impact overall service
                progress.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to refuse, pause, delay, limit,
                or discontinue service activation where:
              </Paragraph>

              <BulletList
                items={[
                  "Payment verification remains incomplete.",
                  "Fraudulent or suspicious activity is detected.",
                  "False, misleading, or unauthorized information is provided.",
                  "Compliance, legal, operational, or security concerns arise.",
                  "Required onboarding steps are not completed.",
                ]}
              />

              <Paragraph>
                Service activation timelines may vary depending on operational
                workload, technical requirements, onboarding complexity,
                verification procedures, service demand, and external factors
                beyond the Company's control.
              </Paragraph>

              <Paragraph>
                Clients acknowledge that activation of services, allocation of
                resources, onboarding efforts, consultation preparation,
                profile analysis, platform setup, and support planning may
                constitute initiation of service utilization for operational
                and billing purposes.
              </Paragraph>

              <Paragraph>
                All services activated by the Company are professional digital
                services delivered electronically and do not involve the
                shipment or delivery of physical products or merchandise.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 12 INTELLECTUAL PROPERTY */}
          <motion.section
            id="intellectual-property"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="12"
                title="Intellectual Property Rights"
                icon={Copyright}
              />

              <Paragraph>
                All content, materials, resources, applications, software
                elements, platform features, branding components, service
                structures, designs, logos, graphics, documents, text,
                layouts, workflows, videos, training materials, career-support
                resources, technical guidance materials, and other intellectual
                property made available through VatrixTechIT ("Company," "we,"
                "us," or "our"), powered and supported by Wolf Technologies
                Global Limited, are the exclusive property of the Company or
                its licensors and are protected under applicable intellectual
                property, copyright, trademark, and related laws.
              </Paragraph>

              <Paragraph>
                Clients ("User," "Customer," or "Client") are granted a
                limited, non-exclusive, non-transferable, and revocable right
                to access and use the Company's services, applications,
                platforms, and resources solely for personal and authorized
                professional purposes in accordance with these Terms and
                Conditions.
              </Paragraph>

              <Paragraph>Clients shall not:</Paragraph>

              <BulletList
                items={[
                  "Copy, reproduce, modify, distribute, publish, license, resell, exploit, or commercially use any Company materials, resources, applications, systems, or intellectual property without prior written authorization from the Company.",
                  "Reverse engineer, duplicate, extract, scrape, or attempt unauthorized access to any platform, software, application, database, or technical infrastructure associated with the Company.",
                  "Use Company branding, logos, trademarks, service structures, documentation, or proprietary materials in any unauthorized manner.",
                  "Share, transfer, sublicense, or provide unauthorized access to Company platforms, resources, or services to third parties.",
                ]}
              />

              <Paragraph>
                Any unauthorized use, reproduction, misuse, infringement,
                exploitation, or distribution of the Company's intellectual
                property may result in suspension or termination of services,
                legal action, financial claims, and other remedies available
                under applicable laws.
              </Paragraph>

              <Paragraph>
                Clients retain ownership of their personal information,
                resumes, professional profiles, uploaded documents, and other
                personal materials submitted to the Company for service-related
                purposes. However, by submitting such materials, the Client
                grants the Company a limited authorization to use, process,
                modify, optimize, store, and utilize such content solely for
                the purpose of delivering professional digital career-support
                and consulting services.
              </Paragraph>

              <Paragraph>
                The Company reserves all rights not expressly granted under
                these Terms and Conditions.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 13 USER CONDUCT */}
          <motion.section
            id="user-conduct"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="13"
                title="User Conduct"
                icon={UserRoundCheck}
              />

              <Paragraph>
                By accessing or using the services, platforms, applications,
                communication channels, or resources provided by VatrixTechIT
                ("Company," "we," "us," or "our"), powered and supported by
                Wolf Technologies Global Limited, Clients ("User," "Customer,"
                or "Client") agree to use all Company services in a lawful,
                ethical, professional, and responsible manner.
              </Paragraph>

              <Paragraph>Clients agree that they shall not:</Paragraph>

              <BulletList
                items={[
                  "Use the Company's services, platforms, applications, or resources for any unlawful, fraudulent, abusive, harmful, deceptive, or unauthorized purpose.",
                  "Provide false, misleading, inaccurate, incomplete, or unauthorized information during onboarding, registration, payment processing, or service usage.",
                  "Attempt unauthorized access to Company systems, applications, databases, servers, communication systems, or technical infrastructure.",
                  "Interfere with, disrupt, damage, overload, reverse engineer, exploit, or compromise the security, stability, or functionality of any Company platform, application, or service.",
                  "Share, distribute, resell, sublicense, duplicate, transfer, or provide unauthorized access to Company platforms, applications, resources, training materials, or services to any third party.",
                  "Upload, transmit, distribute, or communicate any material containing malware, viruses, harmful code, spam, abusive content, or malicious software.",
                  "Engage in harassment, threats, abusive conduct, defamatory behavior, discrimination, or inappropriate communication toward Company staff, representatives, support teams, partners, or other users.",
                  "Misuse payment systems, initiate fraudulent transactions, abuse chargeback mechanisms, submit false disputes, or engage in unauthorized financial activities related to Company services.",
                  "Use automated systems, bots, scripts, scraping tools, or unauthorized methods to access, collect, monitor, or interact with Company systems or data without written permission.",
                ]}
              />

              <Paragraph>
                Clients are solely responsible for maintaining the
                confidentiality and security of their account credentials,
                communication records, devices, and access methods associated
                with Company services and platforms.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to monitor platform usage,
                investigate suspicious activity, restrict access, suspend
                accounts, terminate services, block transactions, remove
                content, or take appropriate legal or operational action where
                violations of these Terms and Conditions, applicable laws,
                security standards, or Company policies are identified.
              </Paragraph>

              <Paragraph>
                Any misuse of Company services, platforms, applications,
                communication systems, payment systems, intellectual property,
                or operational resources may result in immediate suspension or
                permanent termination of access without refund or liability.
              </Paragraph>

              <Paragraph>
                Clients acknowledge and agree that all Company services are
                professional digital consulting and career-support services
                delivered electronically and not associated with physical
                products, merchandise, or tangible goods.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 14 PRIVACY */}
          <motion.section
            id="privacy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="14"
                title="Privacy Policy"
                icon={LockKeyhole}
              />

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, values the
                privacy, confidentiality, and security of all Clients ("User,"
                "Customer," or "Client") who access or use our website,
                applications, platforms, communication systems, and
                professional digital career-support and consulting services.
              </Paragraph>

              <Paragraph>
                The Company may collect, store, process, and use certain
                personal, professional, technical, and transactional
                information necessary for service delivery, onboarding,
                platform functionality, communication, support operations,
                compliance requirements, and improvement of Company services.
              </Paragraph>

              <Paragraph>Information collected by the Company may include, but is not limited to:</Paragraph>

              <BulletList
                items={[
                  "Full name and contact details",
                  "Email address and phone number",
                  "Resume, educational background, and employment history",
                  "Technical skills and professional information",
                  "LinkedIn, GitHub, or portfolio details",
                  "Payment and transaction-related information",
                  "Platform usage activity and communication records",
                  "Device, browser, and technical access information",
                ]}
              />

              <Paragraph>The Company uses collected information for purposes including:</Paragraph>

              <BulletList
                items={[
                  "Delivering professional digital career-support and consulting services",
                  "Resume development and profile optimization",
                  "Platform and application access management",
                  "Communication, onboarding, and support activities",
                  "Candidate marketing and outreach support",
                  "Technical assistance and operational improvements",
                  "Fraud prevention, security monitoring, and compliance requirements",
                  "Payment processing and transaction verification",
                ]}
              />

              <Paragraph>
                The Company does not sell or rent Clients' personal information
                to unauthorized third parties. However, certain information
                may be shared with authorized service providers, payment
                processors, technology partners, operational support providers,
                or legal authorities where necessary for service delivery,
                operational purposes, compliance obligations, fraud
                prevention, security requirements, or lawful requests.
              </Paragraph>

              <Paragraph>
                Clients acknowledge and agree that communication through
                digital channels including email, messaging applications,
                phone calls, video meetings, applications, online portals, and
                platform systems may be used for operational, onboarding,
                support, training, quality assurance, documentation, and
                service-related purposes.
              </Paragraph>

              <Paragraph>
                While the Company implements commercially reasonable
                administrative, technical, and operational safeguards to
                protect Client information, no digital system, online
                platform, internet transmission, or electronic storage method
                can be guaranteed to be fully secure or free from unauthorized
                access risks.
              </Paragraph>

              <Paragraph>
                Clients are responsible for maintaining the confidentiality of
                their account credentials, devices, passwords, and communication
                access methods associated with Company services and platforms.
              </Paragraph>

              <Paragraph>
                The Company may use cookies, analytics tools, tracking
                technologies, and related systems to improve website
                functionality, platform performance, user experience,
                operational efficiency, security monitoring, and service
                optimization.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to retain, review, process,
                disclose, or remove information where necessary for legal
                compliance, fraud prevention, operational protection, dispute
                resolution, enforcement of Company policies, security
                purposes, or legitimate business interests.
              </Paragraph>

              <Paragraph>
                By using the Company's website, platforms, applications, or
                services, Clients consent to the collection, processing,
                storage, and use of information in accordance with this Privacy
                Policy.
              </Paragraph>

              <Paragraph>
                Clients who have questions, privacy concerns, data-related
                requests, or support inquiries may contact the Company through
                the official support channels provided on the website.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 15 LIABILITY */}
          <motion.section
            id="liability"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="15"
                title="Limitation of Liability"
                icon={Scale}
              />

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, provides
                professional digital career-support and consulting services on
                a commercially reasonable and best-effort basis. By accessing
                or using the Company's website, platforms, applications,
                communication systems, or services, Clients ("User,"
                "Customer," or "Client") acknowledge and agree to the
                limitations set forth in this section.
              </Paragraph>

              <Paragraph>
                To the maximum extent permitted under applicable law, the
                Company, its affiliates, directors, officers, employees,
                contractors, representatives, partners, service providers, and
                operational support entities shall not be held liable for any
                direct, indirect, incidental, consequential, special,
                exemplary, punitive, or financial damages arising from or
                related to:
              </Paragraph>

              <BulletList
                items={[
                  "Use or inability to use Company services, platforms, applications, or resources",
                  "Delays, interruptions, technical issues, or temporary service unavailability",
                  "Employer decisions, hiring outcomes, interview results, or employment opportunities",
                  "Loss of data, business opportunities, income, revenue, profits, contracts, or professional prospects",
                  "Communication failures, internet disruptions, third-party system issues, or platform limitations",
                  "Unauthorized access, cyber incidents, technical vulnerabilities, or external security breaches",
                  "Errors, omissions, inaccuracies, or misunderstandings resulting from information provided by Clients or third parties",
                  "Third-party platforms, payment gateways, financial institutions, recruiters, employers, or external service providers",
                  "Service delays caused by incomplete information, lack of participation, or non-responsiveness from the Client side",
                ]}
              />

              <Paragraph>The Company does not guarantee:</Paragraph>

              <BulletList
                items={[
                  "Interview calls or job placement",
                  "Employment offers or hiring decisions",
                  "Salary outcomes or career advancement",
                  "Employer responses or recruiter engagement",
                  "Specific technical skill outcomes or learning results",
                  "Continuous, uninterrupted, or error-free platform availability",
                ]}
              />

              <Paragraph>
                All services are provided as professional digital consulting
                and career-support services delivered electronically based on
                operational capabilities, market conditions, Client
                participation, and external factors beyond the Company's
                control.
              </Paragraph>

              <Paragraph>
                Clients acknowledge that they are solely responsible for their
                professional decisions, application activities, interview
                performance, career choices, and use of information or guidance
                provided by the Company.
              </Paragraph>

              <Paragraph>
                In jurisdictions where limitations of liability are restricted
                by law, certain limitations contained in this section may not
                fully apply to the extent prohibited under applicable legal
                requirements.
              </Paragraph>

              <Paragraph>
                The maximum aggregate liability of the Company arising out of
                or related to any service, transaction, or use of Company
                resources shall not exceed the total amount actually paid by
                the Client to the Company for the specific service directly
                giving rise to the claim.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 16 INDEMNIFICATION */}
          <motion.section
            id="indemnification"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="16"
                title="Indemnification"
                icon={Handshake}
              />

              <Paragraph>
                By accessing or using the services, platforms, applications,
                communication systems, or resources provided by VatrixTechIT
                ("Company," "we," "us," or "our"), powered and supported by
                Wolf Technologies Global Limited, Clients ("User," "Customer,"
                or "Client") agree to defend, indemnify, and hold harmless the
                Company, its affiliates, directors, officers, employees,
                contractors, representatives, partners, operational support
                entities, licensors, service providers, and associated
                personnel from and against any claims, liabilities, damages,
                losses, expenses, costs, legal proceedings, penalties, fines,
                or demands, including reasonable legal and professional fees,
                arising out of or related to:
              </Paragraph>

              <BulletList
                items={[
                  "Violation of these Terms and Conditions, Company Policies, or applicable laws and regulations",
                  "Misuse of Company services, platforms, applications, communication systems, or operational resources",
                  "Fraudulent activity, unauthorized transactions, payment disputes, or chargeback abuse initiated by the Client",
                  "Submission of false, misleading, inaccurate, unauthorized, or unlawful information or materials",
                  "Violation of intellectual property rights, privacy rights, contractual obligations, or third-party rights",
                  "Improper, unlawful, harmful, abusive, or unauthorized conduct by the Client while using Company services or platforms",
                  "Breach of security obligations, account confidentiality responsibilities, or unauthorized account access resulting from Client negligence",
                  "Disputes, claims, or liabilities arising from Client interactions with employers, recruiters, third-party service providers, or external platforms",
                  "Any content, documents, resumes, professional information, portfolio materials, or data submitted by the Client for service-related purposes",
                ]}
              />

              <Paragraph>
                Clients acknowledge and agree that the Company provides
                professional digital career-support and consulting services
                delivered electronically and does not guarantee employment
                outcomes, employer responses, hiring decisions, salary
                results, or professional opportunities.
              </Paragraph>

              <Paragraph>
                The Company reserves the right, at its own discretion and
                expense, to assume exclusive defense and control of any matter
                otherwise subject to indemnification by the Client, and the
                Client agrees to reasonably cooperate with the Company in
                connection with such defense or resolution.
              </Paragraph>

              <Paragraph>
                The indemnification obligations contained in this section shall
                survive termination, suspension, cancellation, expiration, or
                discontinuation of the Client's use of Company services,
                platforms, applications, or related resources.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 17 GOVERNING LAW */}
          <motion.section
            id="governing-law"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="17"
                title="Governing Law"
                icon={Gavel}
              />

              <Paragraph>
                These Terms and Conditions, Company Policies, services,
                platforms, applications, transactions, and all matters arising
                out of or relating to the use of services provided by
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, shall be
                governed by and interpreted in accordance with the applicable
                laws and regulations of the jurisdiction in which the Company
                operates, without regard to conflict of law principles.
              </Paragraph>

              <Paragraph>
                By accessing or using the Company's website, applications,
                platforms, communication systems, or professional digital
                career-support and consulting services, Clients ("User,"
                "Customer," or "Client") agree that any disputes, claims,
                legal proceedings, or matters arising out of or relating to
                these Terms and Conditions, Company Policies, payment
                transactions, service usage, platform access, or operational
                activities shall be subject to the exclusive jurisdiction of
                the competent courts and legal authorities determined by the
                Company's governing operational jurisdiction.
              </Paragraph>

              <Paragraph>
                The Client agrees to attempt resolution of any concern,
                dispute, billing issue, payment matter, or service-related
                disagreement through reasonable communication with the Company
                before initiating legal proceedings, chargebacks, complaints,
                or third-party actions where applicable.
              </Paragraph>

              <Paragraph>
                Nothing contained in these Terms shall limit the Company's
                right to seek injunctive relief, operational protection, debt
                recovery, fraud prevention measures, security enforcement, or
                other lawful remedies in any applicable jurisdiction where
                necessary to protect the Company's operations, platforms,
                intellectual property, financial interests, or legal rights.
              </Paragraph>

              <Paragraph>
                Clients acknowledge and agree that all Company services are
                professional digital consulting and career-support services
                delivered electronically and not transactions involving
                physical products, merchandise, or tangible goods.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 18 CHANGES */}
          <motion.section
            id="changes"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="18"
                title="Changes to Policy"
                icon={RefreshCcw}
              />

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, reserves the
                right to modify, update, revise, amend, or discontinue any
                portion of these Terms and Conditions, Company Policies,
                services, platform features, applications, operational
                processes, pricing structures, support programs, or related
                policies at any time without prior notice, where permitted
                under applicable law.
              </Paragraph>

              <Paragraph>
                Such modifications may be made for purposes including, but not
                limited to:
              </Paragraph>

              <BulletList
                items={[
                  "Operational improvements",
                  "Service enhancements",
                  "Legal or regulatory compliance",
                  "Security requirements",
                  "Platform functionality updates",
                  "Business restructuring",
                  "Risk management or fraud prevention",
                  "Changes in market conditions or operational practices",
                ]}
              />

              <Paragraph>
                Updated versions of these Terms and Conditions or related
                policies will become effective upon publication on the
                Company's website, platform, application, or official
                communication channels unless otherwise specified by the
                Company.
              </Paragraph>

              <Paragraph>
                Clients ("User," "Customer," or "Client") are responsible for
                periodically reviewing the latest version of the Terms and
                Conditions and Company Policies to remain informed about any
                modifications or updates.
              </Paragraph>

              <Paragraph>
                Continued use of the Company's website, platforms,
                applications, communication systems, or professional digital
                career-support and consulting services after any updates or
                modifications constitutes acceptance of the revised Terms and
                Conditions and related policies.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to modify, suspend, restrict,
                discontinue, or replace any service feature, support structure,
                platform functionality, application access, operational
                process, or business offering at its sole discretion without
                liability where necessary for operational, legal, security,
                compliance, or business reasons.
              </Paragraph>

              <Paragraph>
                Clients acknowledge and agree that all services provided by the
                Company are professional digital services delivered
                electronically and do not involve physical products,
                merchandise, or tangible goods.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 19 TERMINATION */}
          <motion.section
            id="termination"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="19"
                title="Termination"
                icon={Ban}
              />

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, reserves the
                right to suspend, restrict, limit, terminate, or discontinue
                access to any services, platforms, applications, communication
                channels, support programs, or operational resources at its
                sole discretion, with or without prior notice, where permitted
                under applicable law.
              </Paragraph>

              <Paragraph>
                The Company may suspend or terminate services, accounts,
                platform access, or ongoing support in situations including,
                but not limited to:
              </Paragraph>

              <BulletList
                items={[
                  "Violation of these Terms and Conditions or Company Policies",
                  "Fraudulent, deceptive, unauthorized, or unlawful activity",
                  "Abuse of payment systems, chargebacks, or dispute mechanisms",
                  "Submission of false, misleading, or unauthorized information",
                  "Misuse of Company platforms, applications, resources, or communication systems",
                  "Harassment, abusive behavior, threats, or inappropriate conduct toward Company personnel or representatives",
                  "Unauthorized sharing, duplication, resale, or exploitation of Company services, applications, or intellectual property",
                  "Security concerns, operational risks, legal requirements, or compliance-related issues",
                  "Failure to fulfill payment obligations or onboarding requirements",
                  "Extended inactivity, non-responsiveness, or lack of cooperation during the service process",
                ]}
              />

              <Paragraph>Upon termination, suspension, or discontinuation of services:</Paragraph>

              <BulletList
                items={[
                  "Access to Company platforms, applications, communication systems, support resources, and related services may be restricted or revoked.",
                  "Certain data, records, communication history, service materials, or operational information may be retained by the Company where necessary for legal, compliance, operational, security, dispute resolution, or business purposes.",
                  "The Client shall remain responsible for any outstanding payment obligations, liabilities, violations, or commitments arising prior to termination.",
                  "The Company shall not be liable for any losses, interruptions, missed opportunities, employer decisions, or consequences resulting from termination or suspension of services.",
                ]}
              />

              <Paragraph>
                The Client may discontinue use of Company services at any time;
                however, termination or discontinuation by the Client does not
                automatically entitle the Client to refunds, reversals, or
                cancellation of outstanding obligations where services,
                onboarding activities, consultations, platform access, or
                operational work have already commenced.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to take appropriate
                administrative, operational, technical, financial, or legal
                action where necessary to protect its platforms, intellectual
                property, operations, personnel, business interests, or
                compliance obligations.
              </Paragraph>

              <Paragraph>
                Clients acknowledge and agree that all services provided by the
                Company are professional digital consulting and career-support
                services delivered electronically and not associated with
                physical products, merchandise, or tangible goods.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 20 SEVERABILITY */}
          <motion.section
            id="severability"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="20"
                title="Severability"
                icon={Split}
              />

              <Paragraph>
                If any provision, clause, section, or part of these Terms and
                Conditions or Company Policies is determined by a court,
                regulatory authority, or competent legal body to be unlawful,
                invalid, unenforceable, or inconsistent with applicable law,
                such provision shall be interpreted, limited, modified, or
                severed only to the extent necessary to make it enforceable
                while preserving the intent and purpose of the original
                provision to the maximum extent permitted by law.
              </Paragraph>

              <Paragraph>
                The invalidity, unenforceability, or limitation of any specific
                provision shall not affect the legality, validity,
                enforceability, or operation of the remaining provisions of
                these Terms and Conditions, which shall continue in full force
                and effect.
              </Paragraph>

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, reserves the
                right to revise or replace any invalid or unenforceable
                provision with a legally valid provision that most closely
                reflects the original intent, operational purpose, and
                commercial objective of the affected section.
              </Paragraph>

              <Paragraph>
                Clients ("User," "Customer," or "Client") acknowledge and agree
                that these Terms and Conditions are intended to operate as a
                complete and enforceable agreement governing the use of the
                Company's professional digital career-support and consulting
                services, platforms, applications, communication systems, and
                related operational resources.
              </Paragraph>

              <Paragraph>
                The Company's services are professional digital services
                delivered electronically and are not associated with physical
                products, merchandise, or tangible goods.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 21 ENTIRE AGREEMENT */}
          <motion.section
            id="entire-agreement"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard>
              <SectionHeader
                number="21"
                title="Entire Agreement"
                icon={FileCheck2}
              />

              <Paragraph>
                These Terms and Conditions, Company Policies, Privacy Policy,
                Refund Policy, service guidelines, operational procedures, and
                any additional written agreements or official communications
                issued by VatrixTechIT ("Company," "we," "us," or "our"),
                powered and supported by Wolf Technologies Global Limited,
                collectively constitute the complete and entire agreement
                between the Company and the Client ("User," "Customer," or
                "Client") regarding the access to and use of the Company's
                website, platforms, applications, communication systems, and
                professional digital career-support and consulting services.
              </Paragraph>

              <Paragraph>
                These Terms and Conditions supersede and replace all prior or
                contemporaneous discussions, communications, understandings,
                representations, proposals, negotiations, agreements, or
                arrangements, whether oral or written, relating to the subject
                matter covered herein unless expressly agreed otherwise in
                writing by the Company.
              </Paragraph>

              <Paragraph>
                No waiver, modification, amendment, exception, or deviation
                from these Terms and Conditions shall be considered valid or
                enforceable unless expressly approved in writing by an
                authorized representative of the Company.
              </Paragraph>

              <Paragraph>Clients acknowledge and agree that:</Paragraph>

              <BulletList
                items={[
                  "They have independently reviewed and understood these Terms and Conditions before purchasing or using any Company service.",
                  "They are not relying on any verbal statements, unofficial representations, external advertisements, assumptions, or unauthorized promises not expressly stated in these Terms and Conditions or official Company communications.",
                  "The Company does not guarantee interview calls, employment offers, hiring decisions, salary outcomes, recruiter responses, or specific professional results.",
                ]}
              />

              <Paragraph>
                Any failure by the Company to enforce any provision of these
                Terms and Conditions shall not constitute a waiver of the
                Company's right to enforce such provision or any other
                provision at a later time.
              </Paragraph>

              <Paragraph>
                These Terms and Conditions shall remain binding upon the Client
                and continue to apply throughout the use of the Company's
                services, including after suspension, termination, expiration,
                discontinuation, or completion of services where applicable.
              </Paragraph>

              <Paragraph>
                Clients further acknowledge and agree that all services
                provided by the Company are professional digital consulting and
                career-support services delivered electronically and are not
                transactions involving physical products, merchandise, or
                tangible goods.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* 22 CONTACT */}
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <PolicyCard className="relative overflow-hidden">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-[80px]" />

              <SectionHeader
                number="22"
                title="Contact Information"
                icon={Mail}
              />

              <Paragraph>
                VatrixTechIT ("Company," "we," "us," or "our"), powered and
                supported by Wolf Technologies Global Limited, is committed to
                providing professional support, operational assistance, and
                timely communication regarding our professional digital
                career-support and consulting services.
              </Paragraph>

              <Paragraph>
                Clients ("User," "Customer," or "Client") may contact the
                Company for inquiries related to:
              </Paragraph>

              <BulletList
                items={[
                  "Service information and onboarding",
                  "Billing and payment assistance",
                  "Refund-related inquiries",
                  "Technical support and platform access",
                  "Account-related concerns",
                  "Privacy or data-related requests",
                  "Dispute resolution and operational support",
                  "General customer assistance",
                ]}
              />

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Company
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    VatrixTechIT
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Powered By
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Wolf Technologies Global Limited
                  </p>
                </div>

                <a
                  href="https://wolftechnologiesllc.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-white/[0.06] bg-black/20 p-4 transition hover:border-violet-400/20 hover:bg-violet-500/[0.05]"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Website
                  </p>

                  <p className="mt-1 flex items-center gap-2 text-sm font-medium text-violet-300">
                    wolftechnologiesllc.com
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </p>
                </a>

                <a
                  href="mailto:support@wolftechnologiesllc.com"
                  className="group rounded-xl border border-white/[0.06] bg-black/20 p-4 transition hover:border-violet-400/20 hover:bg-violet-500/[0.05]"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Support Email
                  </p>

                  <p className="mt-1 flex items-center gap-2 text-sm font-medium text-violet-300">
                    support@wolftechnologiesllc.com
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </p>
                </a>

                <a
                  href="tel:+13393378177"
                  className="rounded-xl border border-white/[0.06] bg-black/20 p-4 transition hover:border-violet-400/20 hover:bg-violet-500/[0.05]"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Contact Number
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    +1 (339) 337-8177
                  </p>
                </a>

                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Support Hours
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Monday to Friday — 9:00 AM to 6:00 PM
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-violet-400/10 bg-violet-500/[0.05] p-4">
                <p className="text-xs leading-6 text-slate-400">
                  Support response timelines may vary depending on operational
                  workload, holidays, technical circumstances, or support
                  request complexity.
                </p>
              </div>

              <Paragraph>
                For billing concerns, dispute-related communication,
                unauthorized transaction reports, or payment-related
                assistance, Clients are encouraged to contact the Company
                through the official support channels before initiating
                external disputes, complaints, or chargeback requests.
              </Paragraph>

              <Paragraph>
                The Company reserves the right to maintain communication
                records, support interactions, onboarding discussions,
                operational correspondence, and service-related communication
                for quality assurance, compliance, operational, security, and
                dispute-resolution purposes.
              </Paragraph>

              <Paragraph>
                All services provided by the Company are professional digital
                consulting and career-support services delivered electronically
                and are not associated with physical products, merchandise, or
                tangible goods.
              </Paragraph>
            </PolicyCard>
          </motion.section>

          {/* FINAL ACKNOWLEDGEMENT */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/[0.08] via-white/[0.025] to-blue-500/[0.06] p-6 text-center sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <ShieldCheck size={22} />
              </div>

              <h2 className="mt-4 text-xl font-semibold text-white">
                Terms Acknowledgement
              </h2>

              <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                By clicking "I Agree" and proceeding with your purchase, you
                acknowledge that you have read, understood, and agreed to be
                bound by these Terms and Conditions and Company Policies. You
                further acknowledge that you are purchasing professional
                digital career-support and consulting services delivered
                electronically and not physical products, merchandise, or
                tangible goods.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </main>

    </>
  );
};

export default TermsConditions;

