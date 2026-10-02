import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserStar,
  Box,
  FileUser,
  SearchCheck,
  MessageSquareCode,
  MonitorCog,
  ArrowUpRight,
  TriangleAlert,
  Lightbulb,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

import bgImage from "../assets/hero-image.jpg";

function ItServices() {
  const services = [
    {
      number: "01",
      icon: <UserStar size={20} strokeWidth={1.7} />,
      title: "Personal Career Mentorship",
      short:
        "Receive focused career direction from professionals with practical industry experience.",
      problem:
        "Choosing the right career direction without experienced guidance can create uncertainty, slow progress, and lead to missed opportunities.",
      solution:
        "Our mentors understand your background and goals, then help you build a practical career roadmap with clear and achievable next steps.",
    },

    {
      number: "02",
      icon: <Box size={20} strokeWidth={1.7} />,
      title: "Professional Skill Assessment",
      short:
        "Understand your current capabilities and identify the skills required for your target role.",
      problem:
        "Many candidates begin their job search without a clear understanding of the technical and professional capabilities expected by employers.",
      solution:
        "We assess your existing strengths, identify development areas, and help you focus your preparation on the skills that matter most.",
    },

    {
      number: "03",
      icon: <FileUser size={20} strokeWidth={1.7} />,
      title: "Resume & LinkedIn Optimization",
      short:
        "Create stronger professional profiles designed for recruiters and modern hiring systems.",
      problem:
        "Strong candidates can miss interview opportunities when their resumes and online profiles are not structured effectively for ATS and recruiter searches.",
      solution:
        "We refine your resume and LinkedIn presence using practical industry standards to improve clarity, relevance, and professional visibility.",
    },

    {
      number: "04",
      icon: <SearchCheck size={20} strokeWidth={1.7} />,
      title: "Strategic Job Search",
      short:
        "Follow a focused application strategy instead of applying randomly across unrelated opportunities.",
      problem:
        "Submitting applications without a defined strategy can consume valuable time while producing fewer relevant interview opportunities.",
      solution:
        "We help create a targeted job-search approach based on your experience, capabilities, preferred roles, and career direction.",
    },

    {
      number: "05",
      icon: <MessageSquareCode size={20} strokeWidth={1.7} />,
      title: "Interview Readiness",
      short:
        "Prepare through realistic interview practice and detailed feedback from experienced professionals.",
      problem:
        "Candidates may have the required skills but struggle to communicate their knowledge confidently in real interview situations.",
      solution:
        "Our practice sessions cover technical and HR scenarios while providing actionable feedback to strengthen your confidence and responses.",
    },

    {
      number: "06",
      icon: <MonitorCog size={20} strokeWidth={1.7} />,
      title: "Technology Staffing Network",
      short:
        "Access relevant technology opportunities through a connected network of hiring organizations.",
      problem:
        "Identifying credible employers and suitable technology openings can be challenging in a highly competitive hiring environment.",
      solution:
        "Our staffing network helps connect suitable professionals with hiring partners, direct opportunities, and relevant technology positions.",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.95]"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* =========================================================
          DARK OVERLAY
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[#050508]/45" />

      {/* =========================================================
          GRADIENT OVERLAY
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050508]/75 via-[#050508]/35 to-[#050508]/75" />

      {/* =========================================================
          TECHNICAL GRID
      ========================================================== */}

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

      {/* =========================================================
          AMBIENT GLOWS
      ========================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#8B5CF6]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#06B6D4]/10 blur-[130px]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =======================================================
            CENTERED HEADER
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-7 max-w-3xl text-center"
        >
          {/* EYEBROW */}

          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#94A3B8] sm:text-[9px]">
              Career Infrastructure / 02
            </span>

            <span className="h-px w-6 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]" />
          </div>

          {/* HEADING */}

          <h2
            className="
              text-3xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              text-[#F8FAFC]
              sm:text-4xl
              lg:text-[44px]
            "
          >
            A Smarter Path From{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Preparation to Opportunity
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-3
              max-w-2xl
              text-xs
              leading-5
              text-[#94A3B8]
              sm:text-sm
              sm:leading-6
            "
          >
            From career planning and skill development to interview preparation
            and technology staffing, Vaytrix brings the essential pieces of
            your professional journey into one connected experience.
          </p>
        </motion.div>

        {/* =========================================================
            SERVICE GRID
        ========================================================== */}

        <div className="grid gap-3 md:grid-cols-2">

          {services.map((service, index) => {
            const active = selected === index;

            return (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="relative"
              >

                {/* =================================================
                    SERVICE CARD
                ================================================== */}

                <motion.button
                  type="button"
                  onClick={() =>
                    setSelected(active ? null : index)
                  }
                  whileHover={{
                    y: -2,
                  }}
                  className={`
                    group
                    relative
                    w-full
                    overflow-hidden
                    rounded-xl
                    border
                    text-left
                    transition-all
                    duration-500

                    ${
                      active
                        ? "border-[#8B5CF6]/50 bg-[#0D0D16]/95 shadow-[0_15px_45px_rgba(139,92,246,0.10)]"
                        : "border-white/[0.07] bg-[#0A0A0F]/75 hover:border-white/[0.15] hover:bg-[#0D0D14]/90"
                    }
                  `}
                >

                  {/* HOVER GRADIENT */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#8B5CF6]/[0.07]
                      via-transparent
                      to-[#06B6D4]/[0.05]
                      transition-opacity
                      duration-500

                      ${
                        active
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* CARD CONTENT */}

                  <div className="relative p-4 sm:p-5">

                    {/* TOP ROW */}

                    <div className="flex items-center justify-between">

                      <span className="font-mono text-[9px] tracking-[0.2em] text-[#475569]">
                        MODULE {service.number}
                      </span>

                      <div
                        className={`
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-lg
                          border
                          transition-all
                          duration-300

                          ${
                            active
                              ? "border-[#8B5CF6]/40 bg-gradient-to-br from-[#8B5CF6]/20 to-[#06B6D4]/10 text-[#F8FAFC]"
                              : "border-white/[0.08] bg-white/[0.03] text-[#8B5CF6] group-hover:border-[#8B5CF6]/30"
                          }
                        `}
                      >
                        {service.icon}
                      </div>
                    </div>

                    {/* TITLE */}

                    <div className="mt-4">

                      <h3
                        className={`
                          text-base
                          font-semibold
                          tracking-tight
                          transition-colors
                          duration-300
                          sm:text-lg

                          ${
                            active
                              ? "text-[#F8FAFC]"
                              : "text-[#E2E8F0] group-hover:text-white"
                          }
                        `}
                      >
                        {service.title}
                      </h3>

                      <p className="mt-1.5 max-w-lg text-[11px] leading-5 text-[#64748B] sm:text-xs">
                        {service.short}
                      </p>

                    </div>

                    {/* BOTTOM */}

                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">

                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
                        {active
                          ? "Module Expanded"
                          : "Explore Module"}
                      </span>

                      <div
                        className={`
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-300

                          ${
                            active
                              ? "rotate-45 border-[#8B5CF6]/40 bg-[#8B5CF6]/10"
                              : "border-white/[0.08] group-hover:border-[#06B6D4]/30"
                          }
                        `}
                      >
                        <Plus
                          size={14}
                          className={`
                            transition-colors

                            ${
                              active
                                ? "text-[#A855F7]"
                                : "text-[#64748B] group-hover:text-[#06B6D4]"
                            }
                          `}
                        />
                      </div>

                    </div>

                  </div>

                  {/* ACTIVE EDGE */}

                  {active && (
                    <motion.div
                      layoutId="activeService"
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-full
                        bg-gradient-to-r
                        from-[#8B5CF6]
                        via-[#3B82F6]
                        to-[#06B6D4]
                      "
                    />
                  )}

                </motion.button>

                {/* =================================================
                    DETAIL PANEL
                ================================================== */}

                <AnimatePresence mode="wait">
                  {active && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      className="mt-3 w-full md:col-span-2"
                    >

                      <div className="relative overflow-hidden rounded-xl border border-[#8B5CF6]/25 bg-[#0A0A0F]/95 p-4 backdrop-blur-xl sm:p-5">

                        {/* PANEL GLOW */}

                        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#8B5CF6]/10 blur-[60px]" />

                        <div className="relative z-10">

                          {/* PANEL HEADER */}

                          <div className="mb-4 flex items-center justify-between">

                            <div>

                              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8B5CF6]">
                                Service Intelligence
                              </p>

                              <p className="mt-1 font-mono text-[8px] text-[#475569]">
                                MODULE_{service.number}
                              </p>

                            </div>

                            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#06B6D4]/20 bg-[#06B6D4]/10">
                              <ArrowUpRight
                                size={14}
                                className="text-[#06B6D4]"
                              />
                            </div>

                          </div>

                          {/* CHALLENGE + SOLUTION */}

                          <div className="grid gap-3 md:grid-cols-2">

                            {/* CHALLENGE */}

                            <div className="rounded-lg border border-red-400/10 bg-red-400/[0.025] p-3">

                              <div className="mb-2 flex items-center gap-2">

                                <TriangleAlert
                                  size={14}
                                  strokeWidth={1.7}
                                  className="text-red-400"
                                />

                                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-red-300/80">
                                  Challenge
                                </span>

                              </div>

                              <p className="text-[11px] leading-5 text-[#94A3B8] sm:text-xs">
                                {service.problem}
                              </p>

                            </div>

                            {/* SOLUTION */}

                            <div className="rounded-lg border border-[#8B5CF6]/15 bg-[#8B5CF6]/[0.035] p-3">

                              <div className="mb-2 flex items-center gap-2">

                                <Lightbulb
                                  size={14}
                                  strokeWidth={1.7}
                                  className="text-[#A855F7]"
                                />

                                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#A855F7]">
                                  Vaytrix Approach
                                </span>

                              </div>

                              <p className="text-[11px] leading-5 text-[#94A3B8] sm:text-xs">
                                {service.solution}
                              </p>

                            </div>

                          </div>

                          {/* CTA */}

                          <Link
                            to="/contact"
                            className="
                              mt-4
                              inline-flex
                              items-center
                              gap-2
                              rounded-lg
                              bg-gradient-to-r
                              from-[#8B5CF6]
                              via-[#3B82F6]
                              to-[#06B6D4]
                              px-4
                              py-2
                              text-[11px]
                              font-semibold
                              text-white
                              shadow-[0_8px_25px_rgba(139,92,246,0.2)]
                              transition-all
                              duration-300
                              hover:brightness-110
                            "
                          >
                            Start a Conversation

                            <ArrowUpRight size={13} />
                          </Link>

                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

        {/* =========================================================
            FOOTER
        ========================================================== */}

        <div className="mt-6 flex items-center gap-3">

          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#475569]">
            VAYTRIX / CAREER SERVICES
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
            06 Modules
          </span>

        </div>

      </div>
    </section>
  );
}

export default ItServices;



