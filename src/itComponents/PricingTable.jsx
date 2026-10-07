import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Code2,
  FileText,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

// ======================================================
// PRICING DATA
// ======================================================

const technicalPlans = [
  ["Basic Programming", true, true],
  ["Advanced Programming", true, false],
  ["Database & SQL", true, true],
  ["Data Structures & Algorithms", true, false],
  ["Real-World Projects", true, true],
  ["Interview Preparation", true, false],
  ["Mock Interviews", true, true],
  ["Technical Doubt Support", true, false],
];

const resumePlans = [
  ["Professional Resume", true, true],
  ["ATS Optimization", true, false],
  ["LinkedIn Profile Optimization", true, true],
  ["Cover Letter", true, false],
  ["Job Description Analysis", true, true],
  ["Resume Keyword Optimization", true, false],
  ["Multiple Resume Versions", true, false],
  ["Career Positioning", true, true],
];

const deliveryPlans = [
  ["Resume Marketing", true, true],
  ["Associate Recruiter", true, true],
  ["Personal Recruiter", true, false],
  ["Up to 200 Applications", true, true],
  ["Email / LinkedIn Chat Support", true, false],
  ["Automation Tools", false, false],
  ["Full Time / W2", true, true],
];

// ======================================================
// PRICING SECTIONS
// ======================================================

const pricingSections = [
  {
    id: "technical",
    number: "01",
    label: "Technical Preparation",
    code: "TECH_PREP",
    title: "Technical Department",
    description:
      "Build practical technical skills through structured learning, projects and interview preparation.",
    icon: Code2,
    plans: technicalPlans,
  },
  {
    id: "resume",
    number: "02",
    label: "Resume Optimization",
    code: "RESUME_OPT",
    title: "Resume Department",
    description:
      "Strengthen your professional profile and improve your positioning for the right opportunities.",
    icon: FileText,
    plans: resumePlans,
  },
  {
    id: "delivery",
    number: "03",
    label: "Career Opportunities",
    code: "CAREER_DELIVERY",
    title: "Delivery Department",
    description:
      "Get structured support to move from preparation into real career opportunities.",
    icon: BriefcaseBusiness,
    plans: deliveryPlans,
  },
];

// ======================================================
// ANIMATIONS
// ======================================================

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

// ======================================================
// PRICING CARD
// ======================================================

const PricingCard = ({
  number,
  label,
  code,
  title,
  description,
  icon: Icon,
  plans,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0F]/95 shadow-[0_22px_65px_rgba(0,0,0,0.3)] backdrop-blur-xl"
    >
      {/* ================================================= */}
      {/* CARD HEADER */}
      {/* ================================================= */}

      <div className="border-b border-white/10 p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10">
              <Icon className="h-5.5 w-5.5 text-violet-400" />
            </div>

            <div className="min-w-0">
              <div className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-400">
                {label}
              </div>

              <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-white/25">
                MODULE_{number}
              </div>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[8px] uppercase tracking-wider text-white/35">
            {code}
          </span>
        </div>

        <h3 className="text-xl font-semibold leading-tight text-white">
          {title}
        </h3>

        <p className="mt-2.5 text-[13px] leading-5.5 text-white/40">
          {description}
        </p>
      </div>

      {/* ================================================= */}
      {/* TABLE HEADER */}
      {/* ================================================= */}

      <div className="grid grid-cols-[minmax(0,1fr)_72px_72px] border-b border-white/10 bg-white/[0.025]">
        <div className="flex items-center px-4 py-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
          Features
        </div>

        <div className="flex items-center justify-center border-l border-white/10 px-1 py-3.5 text-center font-mono text-[9px] uppercase tracking-wider text-cyan-400">
          Premium
        </div>

        <div className="flex items-center justify-center border-l border-white/10 px-1 py-3.5 text-center font-mono text-[9px] uppercase tracking-wider text-white/35">
          Basic
        </div>
      </div>

      {/* ================================================= */}
      {/* TABLE ROWS */}
      {/* ================================================= */}

      <div className="flex-1">
        {plans.map(([feature, premium, basic], index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.025,
            }}
            className="grid grid-cols-[minmax(0,1fr)_72px_72px] border-b border-white/[0.06] last:border-b-0"
          >
            {/* Feature */}
            <div className="flex min-h-[58px] items-center px-4 py-3">
              <span className="text-[13px] leading-5 text-white/70">
                {feature}
              </span>
            </div>

            {/* Premium */}
            <div className="flex min-h-[58px] items-center justify-center border-l border-white/[0.06]">
              {premium ? (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10">
                  <Check className="h-4 w-4 text-cyan-400" />
                </div>
              ) : (
                <X className="h-4 w-4 text-white/10" />
              )}
            </div>

            {/* Basic */}
            <div className="flex min-h-[58px] items-center justify-center border-l border-white/[0.06]">
              {basic ? (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-400/10">
                  <Check className="h-4 w-4 text-violet-400" />
                </div>
              ) : (
                <X className="h-4 w-4 text-white/10" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================================================= */}
      {/* CARD FOOTER */}
      {/* ================================================= */}

      <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.015] px-6 py-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/20">
          VAYTRIX / {code}
        </span>

        <ArrowUpRight className="h-4 w-4 text-white/20 transition-colors duration-200 group-hover:text-cyan-400" />
      </div>
    </motion.div>
  );
};

// ======================================================
// MAIN COMPONENT
// ======================================================

const PricingTable = () => {
  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden bg-[#050508] px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* ================================================= */}
      {/* BACKGROUND GRID */}
      {/* ================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ================================================= */}
      {/* AMBIENT GLOWS */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================================================= */}
        {/* MAIN HEADING */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet-500/60" />

            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-violet-400">
              Vaytrix / Solutions
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>

          {/* KEEPING YOUR ORIGINAL LARGE HEADING */}
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Growth Path
            </span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-2xl text-sm leading-5 text-white/40">
            Flexible solutions designed to support technical preparation,
            professional positioning and career opportunities.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* THREE TABLES */}
        {/* ================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="grid items-stretch gap-4 lg:grid-cols-3"
        >
          {pricingSections.map((section) => (
            <PricingCard key={section.id} {...section} />
          ))}
        </motion.div>

        {/* ================================================= */}
        {/* BOTTOM TECHNICAL LINE */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-14 bg-white/10" />

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
            VAYTRIX / GROWTH_ENGINE
          </span>

          <span className="h-px w-14 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTable;