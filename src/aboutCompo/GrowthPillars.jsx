// components/about/GrowthPillars.jsx

import { motion } from "framer-motion";
import {
  Compass,
  Cpu,
  GraduationCap,
  FileUser,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

function GrowthPillars() {
  const pillars = [
    {
      number: "01",
      title: "Personalized Guidance",
      label: "INDIVIDUAL_PATH",
      icon: Compass,
      accent: "violet",
      description:
        "No two career journeys are the same. We understand individual goals and organizational expectations to create solutions around specific needs.",
    },
    {
      number: "02",
      title: "Intelligent Solutions",
      label: "AI_POWERED",
      icon: Cpu,
      accent: "blue",
      description:
        "We combine technology, automation, data, and intelligent matching to simplify hiring and connect organizations with relevant talent.",
    },
    {
      number: "03",
      title: "Career-Focused Learning",
      label: "SKILL_ACCELERATION",
      icon: GraduationCap,
      accent: "cyan",
      description:
        "Our learning programs build practical, industry-relevant capabilities across software development, data science, cybersecurity, and emerging technologies.",
    },
    {
      number: "04",
      title: "Professional Positioning",
      label: "CAREER_IDENTITY",
      icon: FileUser,
      accent: "violet",
      description:
        "We strengthen resumes and professional profiles by highlighting capabilities, achievements, and career strengths to create a stronger employer impression.",
    },
    {
      number: "05",
      title: "Beyond Expectations",
      label: "CLIENT_EXPERIENCE",
      icon: Sparkles,
      accent: "blue",
      description:
        "Through proactive communication, thoughtful problem-solving, and continuous improvement, we create meaningful experiences and lasting value.",
    },
  ];

  const accentStyles = {
    violet: {
      icon: "text-[#A855F7]",
      iconBg: "bg-[#8B5CF6]/10",
      border: "border-[#8B5CF6]/20",
      glow: "bg-[#8B5CF6]/15",
      number: "text-[#8B5CF6]",
    },

    blue: {
      icon: "text-[#3B82F6]",
      iconBg: "bg-[#3B82F6]/10",
      border: "border-[#3B82F6]/20",
      glow: "bg-[#3B82F6]/15",
      number: "text-[#3B82F6]",
    },

    cyan: {
      icon: "text-[#06B6D4]",
      iconBg: "bg-[#06B6D4]/10",
      border: "border-[#06B6D4]/20",
      glow: "bg-[#06B6D4]/15",
      number: "text-[#06B6D4]",
    },
  };

  return (
    <section
      id="growth"
      className="relative w-full overflow-hidden bg-[#050508] px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* ================= BACKGROUND GRID ================= */}

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

      {/* ================= AMBIENT GLOWS ================= */}

      <div className="pointer-events-none absolute -left-[220px] top-[15%] h-[400px] w-[400px] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-[220px] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-[40%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#3B82F6]/[0.035] blur-[140px]" />

      {/* TOP LINE */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

      {/* ================= MAX WIDTH 7XL ================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="grid items-center gap-5 lg:grid-cols-[1fr_0.8fr]">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {/* Label */}

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-xl">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"
                style={{
                  boxShadow: "0 0 10px #8B5CF6",
                }}
              />

              <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#94A3B8]">
                Our Commitment / Growth
              </span>
            </div>

            {/* Heading */}

            <h2 className="text-3xl font-semibold leading-[1] tracking-[-0.04em] text-[#F8FAFC] sm:text-4xl md:text-5xl lg:text-6xl">
              Growth With
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                Purpose
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs leading-6 text-[#94A3B8] sm:text-[15px]">
              At Vaytrix, growth is about creating the right environment for
              people and organizations to discover potential, develop
              capabilities, and move toward meaningful opportunities.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-px w-8 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]" />

              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#3e6aa7]">
                PEOPLE → PROGRESS → POSSIBILITY
              </span>
            </div>
          </motion.div>
        </div>

        {/* ================= PILLARS ================= */}

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const style = accentStyles[pillar.accent];

            return (
              <motion.div
                key={pillar.number}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative"
              >
                <div
                  className={`relative h-full min-h-[235px] overflow-hidden rounded-[16px] border bg-[#0A0A0F]/85 p-4 backdrop-blur-2xl transition-all duration-300 ${style.border}`}
                >
                  {/* Hover Glow */}

                  <div
                    className={`pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100 ${style.glow}`}
                  />

                  {/* TOP */}

                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] ${style.iconBg}`}
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.6}
                        className={style.icon}
                      />
                    </div>

                    <span
                      className={`font-mono text-[12px] tracking-[0.18em] ${style.number}`}
                    >
                      {pillar.number}
                    </span>
                  </div>

                  {/* LABEL */}

                  <div className="relative z-10 mt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#475569]">
                      {pillar.label}
                    </span>

                    <h3 className="mt-1.5 text-[18px] font-semibold leading-tight tracking-tight text-[#F8FAFC]">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}

                  <p className="relative z-10 mt-3 text-xs leading-5 text-[#64748B]">
                    {pillar.description}
                  </p>

                  {/* ARROW */}

                  <div className="absolute bottom-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] transition-all duration-300 group-hover:border-white/[0.15] group-hover:bg-white/[0.05]">
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="text-[#64748B] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#CBD5E1]"
                    />
                  </div>

                  {/* ACCENT LINE */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] transition-all duration-500 group-hover:w-full" />

                  {/* CORNER */}

                  <div
                    className={`absolute bottom-4 left-4 h-5 w-5 border-b border-l opacity-20 transition-opacity duration-300 group-hover:opacity-60 ${style.border}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= CLOSING STATEMENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-7 max-w-2xl text-center"
        >
          <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-[#475569]">
            VAYTRIX / GROWTH_ENGINE
          </span>

          <h3 className="mt-2 text-lg font-medium leading-relaxed text-[#CBD5E1] sm:text-xl">
            Every journey begins with potential
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              We help turn it into progress
            </span>
          </h3>

          <div className="mx-auto mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#8B5CF6]/50" />

            <span
              className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"
              style={{
                boxShadow: "0 0 10px #8B5CF6",
              }}
            />

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
          </div>
        </motion.div>

        {/* ================= FOOTER ================= */}

        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/[0.08]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5083cc]">
            VAYTRIX / BUILDING_WHAT_COMES_NEXT
          </span>

          <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/[0.08]" />
        </div>
      </div>

      {/* BOTTOM LINE */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </section>
  );
}

export default GrowthPillars;