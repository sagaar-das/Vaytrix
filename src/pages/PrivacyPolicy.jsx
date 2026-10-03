import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Eye,
  MessageSquareText,
  FileCheck2,
  Globe2,
  Scale,
  Mail,
  ChevronRight,
  CircleCheck,
  AlertCircle,
} from "lucide-react";

function PrivacyPolicy() {
  const sections = [
    { id: "information", number: "01", title: "Information We Collect" },
    { id: "collection", number: "02", title: "How We Collect Information" },
    { id: "use", number: "03", title: "How We Use Your Information" },
    { id: "disclosure", number: "04", title: "Information Disclosure" },
    { id: "sms", number: "05", title: "SMS / Text Messaging" },
    { id: "security", number: "06", title: "Information Security" },
    { id: "children", number: "07", title: "Children" },
    { id: "external", number: "08", title: "External Sites" },
    { id: "changes", number: "09", title: "Changes to This Notice" },
    { id: "contact", number: "10", title: "How to Contact Us" },
    { id: "choices", number: "11", title: "Other Choices" },
    { id: "california", number: "12", title: "California Privacy Rights" },
    { id: "states", number: "13", title: "Other State Privacy Rights" },
    { id: "canada", number: "14", title: "Canadian Privacy Rights" },
  ];

  const collectItems = [
    "Personal details: Name, email address, telephone number, company name, job title, and other professional and employment information",
    "Account information: Account login credentials such as username and password",
    "Financial information: Billing and payment information (e.g., credit card or ACH account information)",
    "Device and other automatic information: IP address, browsing history, search history, and information regarding your interactions with a website, application, or advertisement",
    "Views and opinions: Feedback, survey responses, and other information included within your interactions with us or provided via the Website",
    "Employee and Job Applicant Information: Includes resumes, work history, skills, etc., covered by separate notices",
    "Communications: Includes chats, phone calls, or video calls, such as when using our chatbot or support tools",
  ];

  const directCollection = [
    "Browse the Website",
    "Create an account",
    "Submit forms or information requests",
    "Contact us directly",
  ];

  const automaticCollection = [
    "Usage details (IP, browser, interactions, etc.)",
    "Location data for legal eligibility and fraud prevention",
    "Analytics from tools like Google Analytics",
    "Behavioral data for optimization and compliance",
  ];

  const otherSources = [
    "Job titles and professional details",
    "Public profiles or business directories",
  ];

  const useItems = [
    "Operate and maintain the Website",
    "Provide requested services",
    "Respond to inquiries",
    "Send transactional or customer service communications",
    "Analyze trends and improve user experience",
    "Comply with legal obligations",
    "Detect fraud and enhance security",
    "Support third-party service functions related to our operations",
    "Fulfill any purpose disclosed at the time of collection",
  ];

  const disclosureItems = [
    "Service providers (email, payment, analytics, etc.)",
    "Legal advisors, accountants, auditors",
    "Authorities when required by law",
    "Buyers in the event of a merger or acquisition",
    "Our affiliates and subsidiaries",
    "With your consent or as directed by you",
  ];

  const smsProviders = [
    "Delivering SMS/text messages",
    "Managing opt-in and opt-out preferences",
    "Ensuring message deliverability",
    "Maintaining compliance with messaging regulations",
  ];

  const smsOptOut = [
    'Replying "STOP" to any message',
    'Contacting us using the methods provided in the "How to Contact Us" section of this Privacy Policy',
  ];

  const californiaRights = [
    "Right to Know or Access: Request that we disclose to you your Personal Information that we collected, used, disclosed, shared, and sold.",
    "Right to Delete: Request that we delete any of your Personal Information that we collected from you and retained, subject to certain exceptions.",
    "Right to Correct Inaccurate Personal Information: Request that we correct any of your Personal Information that we maintain about you that is inaccurate.",
    "Right to Opt Out of Sales or Sharing of Personal Information: If we sell your Personal Information to or share such information with third parties, you may have the right to opt-out of the sale or sharing.",
    "Right to Limit the Use and Disclosure of Sensitive Personal Information: Limit how we use and disclose your Sensitive Personal Information.",
    "Right to Non-Discrimination: We will not discriminate against you for choosing to exercise any of your rights.",
  ];

  const otherStateRights = [
    "Right to Know/Access. You have the right to confirm whether we process your Personal Information and access such Personal Information.",
    "Right to Delete. You have the right to request that we delete the Personal Information you have provided to us or that we have otherwise obtained about you.",
    "Right to Correct. You have the right to request that we correct inaccuracies in your Personal Information.",
    "Right to Opt Out. You have the right to opt out of the processing of your Personal Information for targeted advertising, the sale of your Personal Information and certain profiling activities.",
  ];

  const BulletList = ({ items }) => (
    <ul className="mt-4 space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-3 text-sm leading-6 text-slate-400"
        >
          <CircleCheck className="mt-1 h-4 w-4 shrink-0 text-[#8B5CF6]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  const SectionHeader = ({ number, title, icon: Icon }) => (
    <div className="mb-5 flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 text-[#A78BFA]">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
          Section {number}
        </div>

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

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050508] text-white">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

        <div className="absolute right-0 top-[35%] h-[350px] w-[350px] rounded-full bg-[#3B82F6]/5 blur-[130px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[350px] rounded-full bg-[#A855F7]/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative border-b border-white/[0.06] px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-10 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A78BFA]"
          >
            <ShieldCheck className="h-4 w-4" />
            Privacy & Data Protection
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Privacy{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">
              Policy.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400"
          >
            This Privacy Policy explains how VatrixTechIT collects, uses,
            maintains, and discloses information collected through our
            Website, Platform, and other communication methods.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-xs text-slate-400">
              <LockKeyhole className="h-4 w-4 text-[#8B5CF6]" />
              Data Protection
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-xs text-slate-400">
              <Scale className="h-4 w-4 text-[#3B82F6]" />
              Privacy Rights
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-xs text-slate-400">
              <Globe2 className="h-4 w-4 text-[#A855F7]" />
              Global Privacy
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FULL WIDTH CONTENT
      ===================================================== */}
      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10">

        {/* ===================================================
            TABLE OF CONTENTS - FULL WIDTH
        =================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-7">

            {/* TOC Header */}
            <div className="mb-6 flex flex-col gap-3 border-b border-white/[0.06] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10">
                  <FileCheck2 className="h-5 w-5 text-[#A78BFA]" />
                </div>

                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
                    Navigation
                  </div>

                  <h2 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    Table of Contents
                  </h2>
                </div>
              </div>

              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-600">
                14 Privacy Sections
              </span>
            </div>

            {/* TOC Grid */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sections.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.25 + index * 0.025,
                  }}
                  className="group flex min-h-[58px] items-center gap-3 rounded-xl border border-white/[0.05] bg-black/20 px-3 py-2.5 transition-all duration-300 hover:border-[#8B5CF6]/25 hover:bg-[#8B5CF6]/[0.05]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#8B5CF6]/15 bg-[#8B5CF6]/5 font-mono text-[10px] text-[#A78BFA]">
                    {section.number}
                  </span>

                  <span className="flex-1 text-xs leading-4 text-slate-400 transition-colors group-hover:text-white">
                    {section.title}
                  </span>

                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-700 transition-all group-hover:translate-x-0.5 group-hover:text-[#A78BFA]" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===================================================
            POLICY CONTENT - FULL WIDTH
        =================================================== */}
        <div className="space-y-6">

          {/* INTRODUCTION */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#A78BFA]" />

              <h2 className="text-lg font-semibold text-white">
                Introduction
              </h2>
            </div>

            <p className="text-sm leading-7 text-slate-400">
              This Privacy Policy governs the manner in which VatrixTechIT
              ("VatrixTechIT", "Company," "our," "us," or "we") collects,
              uses, maintains, and discloses information collected from users
              on our website or platform ("Platform"), and any successors to
              the foregoing. It also applies to users who contact us through
              other communication methods such as email or phone.
            </p>

            {/* Important Note */}
            <div className="mt-6 rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.05] p-5">
              <div className="flex gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#A78BFA]" />

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Important Note
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Please read this Notice carefully. If any term in this
                    Notice is unacceptable to you, please do not use our
                    Website or provide us with any personal information.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              In this Notice, when we talk about "Personal Information," we
              mean any information that is related to an identified or
              identifiable natural person.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              This Notice does not apply to any products, services, websites,
              mobile applications, or content, including advertising, offered
              by third parties or that may be linked to or from the Website.
              Data collected by these third parties is covered by their own
              privacy notices.
            </p>
          </motion.section>

          {/* 01 */}
          <section id="information" className="scroll-mt-24">
            <PolicyCard>
              <SectionHeader
                number="01"
                title="Your Information We Collect"
                icon={Database}
              />

              <p className="text-sm leading-7 text-slate-400">
                Depending on your relationship with us, we may collect the
                following categories of Personal Information from you:
              </p>

              <BulletList items={collectItems} />
            </PolicyCard>
          </section>

          {/* 02 */}
          <section id="collection" className="scroll-mt-24">
            <PolicyCard>
              <SectionHeader
                number="02"
                title="How We Collect Your Information"
                icon={Eye}
              />

              <div className="grid gap-7 lg:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Information We Collect Directly From You
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    We collect Personal Information when you:
                  </p>

                  <BulletList items={directCollection} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Information We Automatically Collect About You
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    We use automatic technologies such as cookies and web
                    beacons to collect:
                  </p>

                  <BulletList items={automaticCollection} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Information From Other Sources
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    We may receive information from affiliates, partners, and
                    public sources like:
                  </p>

                  <BulletList items={otherSources} />
                </div>
              </div>
            </PolicyCard>
          </section>

          {/* 03 */}
          <section id="use" className="scroll-mt-24">
            <PolicyCard>
              <SectionHeader
                number="03"
                title="How We Use Your Information"
                icon={FileCheck2}
              />

              <p className="text-sm leading-7 text-slate-400">
                We may use your Personal Information to:
              </p>

              <BulletList items={useItems} />
            </PolicyCard>
          </section>

          {/* 04 */}
          <section id="disclosure" className="scroll-mt-24">
            <PolicyCard>
              <SectionHeader
                number="04"
                title="With Whom Do We Disclose Your Information"
                icon={Globe2}
              />

              <p className="text-sm leading-7 text-slate-400">
                We may share your information with:
              </p>

              <BulletList items={disclosureItems} />

              <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/20 p-4">
                <p className="text-sm leading-6 text-slate-400">
                  De-identified or aggregated information may be shared for
                  analytics and reporting.
                </p>
              </div>
            </PolicyCard>
          </section>

          {/* 05 */}
          <section id="sms" className="scroll-mt-24">
            <PolicyCard className="border-[#8B5CF6]/10">
              <SectionHeader
                number="05"
                title="SMS / Text Messaging Privacy Policy"
                icon={MessageSquareText}
              />

              <p className="text-sm leading-7 text-slate-400">
                We are committed to protecting your privacy, including how we
                handle information related to SMS/text messaging. This section
                outlines how we collect, use, and share mobile data specifically
                for text message communications.
              </p>

              <div className="mt-7 grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    No Selling or Sharing of SMS Opt-In Data
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    We do not sell, share, or rent your mobile number, SMS
                    opt-in data, or consent information to third parties for
                    any marketing or promotional purposes.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    No Third-Party Marketing Use
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No phone number or mobile information will be shared with
                    third parties or affiliates for marketing or promotional
                    use. SMS/text messaging originator opt-in data and consent
                    will not be shared with third parties for such purposes.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/20 p-5">
                <h3 className="text-sm font-semibold text-white">
                  Permitted Use of Data by Service Providers
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  We may share your mobile number and SMS opt-in status only
                  with trusted third-party service providers who assist us in:
                </p>

                <BulletList items={smsProviders} />

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  These providers are contractually obligated to use your
                  information solely for these services and not for their own
                  marketing or unrelated purposes.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-[#8B5CF6]/15 bg-[#8B5CF6]/[0.04] p-5">
                <h3 className="text-sm font-semibold text-white">
                  Opt-Out and Revocation of Consent
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  You may withdraw your consent to receive SMS messages at any
                  time by:
                </p>

                <BulletList items={smsOptOut} />

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Please note that standard message and data rates may apply
                  depending on your mobile service provider.
                </p>
              </div>
            </PolicyCard>
          </section>

          {/* 06 */}
          <section id="security" className="scroll-mt-24">
            <PolicyCard>
              <SectionHeader
                number="06"
                title="How We Protect Your Information"
                icon={LockKeyhole}
              />

              <p className="text-sm leading-7 text-slate-400">
                We use reasonable administrative, technical, and physical
                safeguards to protect your Personal Information. However, no
                data transmission or storage system can be guaranteed to be
                100% secure.
              </p>
            </PolicyCard>
          </section>

          {/* 07 */}
          <section id="children" className="scroll-mt-24">
            <PolicyCard>
              <SectionHeader
                number="07"
                title="Children"
                icon={ShieldCheck}
              />

              <p className="text-sm leading-7 text-slate-400">
                Our Website is not intended for children under 13 (or 16 where
                applicable). We do not knowingly collect Personal Information
                from children without parental consent.
              </p>
            </PolicyCard>
          </section>

          {/* 08 */}
          <section id="external" className="scroll-mt-24">
            <PolicyCard>
              <SectionHeader
                number="08"
                title="Links to External Sites"
                icon={Globe2}
              />

              <p className="text-sm leading-7 text-slate-400">
                We are not responsible for the privacy practices or content of
                any external websites linked to from our Website.
              </p>
            </PolicyCard>
          </section>

          {/* 09 */}
          <section id="changes" className="scroll-mt-24">
            <PolicyCard>
              <SectionHeader
                number="09"
                title="Changes to This Notice"
                icon={FileCheck2}
              />

              <p className="text-sm leading-7 text-slate-400">
                We may update this Privacy Policy periodically. The revised
                version will be posted with an updated "Last Updated" date.
              </p>
            </PolicyCard>
          </section>

          {/* 10 */}
          <section id="contact" className="scroll-mt-24">
            <PolicyCard className="border-[#8B5CF6]/15">
              <SectionHeader
                number="10"
                title="How to Contact Us"
                icon={Mail}
              />

              <p className="text-sm leading-7 text-slate-400">
                If you have questions or concerns about this Privacy Policy or
                wish to exercise your privacy rights, please contact us at:
              </p>

              <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-white/[0.07] bg-black/20 px-5 py-4">
                <Mail className="h-5 w-5 text-[#A78BFA]" />

                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-slate-600">
                    Email
                  </div>

                  <a
                    href="mailto:info@VatrixTechIT.com"
                    className="mt-1 block text-sm font-medium text-[#A78BFA] transition hover:text-white"
                  >
                    info@VatrixTechIT.com
                  </a>
                </div>
              </div>
            </PolicyCard>
          </section>

          {/* 11 */}
          <section id="choices" className="scroll-mt-24">
            <PolicyCard>
              <SectionHeader
                number="11"
                title="Other Choices"
                icon={MessageSquareText}
              />

              <div className="grid gap-7 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Phone Calls / Text Messages
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    With your consent, we may engage in communications, which
                    may include phone calls and text messages made using an
                    automatic telephone dialing system or artificial
                    prerecorded voice. You are not required to consent to such
                    communications as a condition of purchasing products or
                    services, and you may revoke consent at any time by
                    contacting us via the methods in Section 10.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Push Notifications to Mobile Devices
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    With your consent, we may send push notifications to your
                    mobile device. You can deactivate these messages at any
                    time by changing the notification settings on your mobile
                    device.
                  </p>
                </div>
              </div>
            </PolicyCard>
          </section>

          {/* 12 */}
          <section id="california" className="scroll-mt-24">
            <PolicyCard className="border-[#3B82F6]/10">
              <SectionHeader
                number="12"
                title="Additional Information for Residents of California"
                icon={Scale}
              />

              <p className="text-sm leading-7 text-slate-400">
                The California Consumer Privacy Act, as amended by the
                California Privacy Rights Act (Civil Code Section 1798.100, et
                seq.) ("California Law"), provides eligible California
                residents with specific rights with respect to our collection,
                retention, disclosing, selling, sharing, and use of Personal
                Information.
              </p>

              <div className="mt-7 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Collection of Personal Information
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    In the preceding twelve (12) months, we have collected
                    categories of Personal Information as discussed in Section
                    1 from the sources of Personal Information as discussed in
                    Section 2. The business or commercial purpose for
                    collecting that information is disclosed in Section 3.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Disclosure of Personal Information
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    In the preceding twelve (12) months, we may have disclosed
                    your Personal Information for a business or commercial
                    purpose described in Section 3 to the categories of third
                    parties described in Section 4.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Sales and Shares of Personal Information
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    We do not sell your Personal Information for monetary
                    profit.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    We do not knowingly sell or share the Personal Information
                    of consumers under 16 years of age.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    California Privacy Rights
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    California Law provides consumers with specific rights
                    regarding their Personal Information.
                  </p>

                  <BulletList items={californiaRights} />
                </div>
              </div>

              <div className="mt-7 grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Exercising Your Rights
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    To exercise your California privacy rights, please submit a
                    request by contacting us via the methods in Section 10.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Identity Verification
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    We may require you to prove your identity to exercise
                    certain rights. We will only use Personal Information
                    provided in your consumer request to verify your identity
                    or authority.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Data Retention
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    We retain your Personal Information so long as necessary
                    for the purposes for which it was collected or otherwise
                    processed.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Notice of Financial Incentive
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    We may offer various incentives, including special offers,
                    discounts, rewards, and coupons pursuant to certain rewards
                    and loyalty programs.
                  </p>
                </div>
              </div>
            </PolicyCard>
          </section>

          {/* 13 */}
          <section id="states" className="scroll-mt-24">
            <PolicyCard>
              <SectionHeader
                number="13"
                title="Additional Information for Residents of Other States"
                icon={Scale}
              />

              <p className="text-sm leading-7 text-slate-400">
                For eligible residents of Colorado, Connecticut, Montana,
                Oregon, Texas, Utah and Virginia, you also have rights with
                respect to the Personal Information, also known as personal
                data, that we collect about you.
              </p>

              <BulletList items={otherStateRights} />

              <div className="mt-7 rounded-xl border border-white/[0.06] bg-black/20 p-5">
                <h3 className="text-sm font-semibold text-white">
                  Notice to Texas Consumers
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  We may sell your sensitive personal data.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-white">
                  Right to Appeal
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  You have the right to appeal our decision with regard to your
                  request to exercise any rights described herein.
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                You do not need to create an account with us to exercise your
                Colorado, Connecticut, Montana, Oregon, Texas, Utah and
                Virginia privacy law rights. To exercise the rights described
                in this section, including your opt-out rights, please submit a
                consumer request to us by contacting us via the methods in
                Section 10.
              </p>
            </PolicyCard>
          </section>

          {/* 14 */}
          <section id="canada" className="scroll-mt-24">
            <PolicyCard>
              <SectionHeader
                number="14"
                title="Canadian Privacy Rights"
                icon={Globe2}
              />

              <p className="text-sm leading-7 text-slate-400">
                If you are located in Canada, the Personal Information
                Protection and Electronic Documents Act and applicable
                provincial privacy legislation govern the collection, use and
                disclosure of personal information by organizations in the
                course of commercial activities.
              </p>

              <div className="mt-7 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Personal Information
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Under Canadian Privacy Laws, personal information means any
                    information about an identifiable individual that may, in
                    certain circumstances, include information gathered from
                    your use of the Services.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Consent
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    In Canada, express or implied consent is the legal basis
                    upon which organizations may collect, use and disclose
                    personal information.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Online Behavioural Advertising
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    With respect to information collected using cookies or
                    similar technologies, you can opt-out of several third
                    party ad servers' and networks' cookies simultaneously by
                    using an applicable opt-out tool.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Your Rights
                  </h3>

                  <BulletList
                    items={[
                      "Withdrawal of Consent",
                      "Right to be informed",
                      "Right to an Accounting",
                      "Rights of Access and Correction",
                      "Right to be notified of a Data Breach",
                      "Right to Lodge Complaints",
                    ]}
                  />
                </div>
              </div>

              <div className="mt-7 space-y-7">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Additional Rights in Quebec
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    You may request under certain circumstances the deletion of
                    your personal information. As of September 22, 2024, you
                    also have the right to be provided, in a structured,
                    commonly used and machine-readable format, with a copy of
                    your personal information or to have it transferred
                    directly to another entity or person.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    International Transfers
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Your personal information may be transferred to and stored
                    at a location outside of your jurisdiction of residence.
                    Local data protection laws where your personal information
                    is stored or processed may not provide as much protection
                    as the data protection laws in force in your jurisdiction.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Business Transfers
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Where we disclose your personal information in the event of
                    a business transfer described in our Privacy Notice, we
                    will ensure that the information is treated confidentially
                    and protected with safeguards appropriate to its
                    sensitivity.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Service Providers
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Where we disclose personal information to service providers,
                    we ensure that they are bound by contractual obligations to:
                  </p>

                  <BulletList
                    items={[
                      "Use personal information only for providing the service",
                      "Refrain from disclosing or communicating personal information without our consent",
                      "Implement rigorous security measures",
                      "Allow us to audit these measures",
                      "Notify us immediately of a confidentiality breach",
                      "Destroy personal information at the end of the contract",
                    ]}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Electronic Messages
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    If you are located in Canada we will only send electronic
                    messages to you if we have your prior opt-in consent,
                    unless an exception or a specific form of implied consent
                    applies.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Information Security and Governance
                  </h3>

                  <BulletList
                    items={[
                      "Framework applicable to the use, communication, retention and destruction of personal information",
                      "The roles and responsibilities of our employees throughout the life cycle of the personal information",
                      "A process for handling complaints concerning the protection of personal information",
                    ]}
                  />

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    Each employee who uses personal information is bound by
                    confidentiality obligations and has received appropriate
                    training. Each employee may only access personal
                    information that is necessary for the performance of their
                    duties. In the event of a breach, our governance policies
                    and practices provide for sanctions.
                  </p>
                </div>
              </div>
            </PolicyCard>
          </section>

          {/* =================================================
              FINAL CONTACT
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#8B5CF6]/15 bg-gradient-to-br from-[#8B5CF6]/10 via-white/[0.02] to-[#3B82F6]/5 p-7 text-center sm:p-10"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10">
              <ShieldCheck className="h-6 w-6 text-[#A78BFA]" />
            </div>

            <h2 className="mt-4 text-xl font-semibold text-white">
              Questions About Your Privacy?
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-400">
              If you have questions or concerns about this Privacy Policy or
              wish to exercise your privacy rights, contact VatrixTechIT.
            </p>

            <a
              href="mailto:info@VatrixTechIT.com"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#8B5CF6]/20 transition-all hover:-translate-y-0.5 hover:shadow-[#8B5CF6]/30"
            >
              <Mail className="h-4 w-4" />
              info@vaytrixtechit.com
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;

