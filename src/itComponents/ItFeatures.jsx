import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Cpu,
  Layers3,
  Sparkles,
} from "lucide-react";

function ItFeatures() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const yLeft = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const yRight = useTransform(scrollYProgress, [0, 1], [35, 0]);

  const roles = [
    "Software Development Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Python Developer",
    "Data Scientist",
    "Data Engineer",
    "Cloud Engineer",
    "Financial Analyst",
    "Data Analyst",
    "DevOps Engineer",
    "QA / Test Engineer",
    "AI/ML Lead",
    "Data Architect",
    "Product Manager",
    "Engineering Manager",
    "Technical Architect",
    "Cybersecurity Analyst",
    "UI/UX Designer",
    "Validation Engineer",
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 md:py-24 lg:px-10"
    >
      {/* TECH GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* AMBIENT LIGHT */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-[#06B6D4]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_12px_#06B6D4]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#94A3B8]">
                Career Capability Matrix / 03
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-[#F8FAFC] sm:text-4xl md:text-5xl">
              Skills Built Around
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                Real Technology Careers.
              </span>
            </h2>
          </div>

          <div className="hidden text-right md:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#475569]">
              VAYTRIX / TALENT SYSTEM
            </p>

            <p className="mt-2 text-xs text-[#64748B]">
              20+ Career Paths
            </p>
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT — ROLE MATRIX */}
          <motion.div
            style={{
              scale,
              opacity,
              y: yLeft,
            }}
            className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0A0A0F]/80 p-5 backdrop-blur-xl sm:p-7"
          >
            {/* CARD GLOW */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#8B5CF6]/10 blur-[100px]" />

            <div className="relative z-10">
              {/* CARD HEADER */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10">
                      <Layers3
                        size={19}
                        strokeWidth={1.7}
                        className="text-[#A855F7]"
                      />
                    </div>

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
                      Role Architecture
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#F8FAFC] sm:text-2xl">
                    Technology Roles We Support
                  </h3>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-[#64748B] sm:text-sm">
                    Explore career directions across software, data, cloud,
                    artificial intelligence, product, engineering, and
                    technology leadership.
                  </p>
                </div>

                <div className="hidden rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 sm:block">
                  <span className="font-mono text-[9px] text-[#475569]">
                    INDEX_20
                  </span>
                </div>
              </div>

              {/* ROLE GRID */}
              <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {roles.map((role, index) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.025,
                    }}
                    className="group flex items-center gap-3 rounded-xl border border-white/[0.055] bg-white/[0.018] px-3 py-3 transition-all duration-300 hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/[0.04]"
                  >
                    <span className="font-mono text-[8px] text-[#475569]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]/60 transition-all duration-300 group-hover:bg-[#06B6D4] group-hover:shadow-[0_0_8px_#06B6D4]" />

                    <span className="text-[11px] leading-5 text-[#CBD5E1] transition-colors group-hover:text-white sm:text-xs">
                      {role}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — MENTORSHIP PANEL */}
          <motion.div
            style={{
              scale,
              opacity,
              y: yRight,
            }}
            className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-br from-[#0D0D16]/95 via-[#0A0A0F]/90 to-[#080B12]/95 p-6 backdrop-blur-xl sm:p-8"
          >
            {/* LARGE BACKGROUND ICON */}
            <BrainCircuit
              size={190}
              strokeWidth={0.6}
              className="pointer-events-none absolute -bottom-14 -right-14 text-[#8B5CF6]/[0.05]"
            />

            {/* GLOW */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#06B6D4]/10 blur-[90px]" />

            <div className="relative z-10 flex h-full flex-col">
              {/* TOP LABEL */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#06B6D4]/20 bg-[#06B6D4]/10">
                    <Sparkles
                      size={18}
                      strokeWidth={1.7}
                      className="text-[#06B6D4]"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
                      Human Development
                    </p>

                    <p className="mt-1 text-xs font-medium text-[#CBD5E1]">
                      Mentorship Framework
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[9px] text-[#475569]">
                  03
                </span>
              </div>

              {/* HEADING */}
              <h3 className="mt-10 max-w-md text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#F8FAFC] sm:text-3xl">
                Turning Potential Into
                <span className="block bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  Industry-Ready Talent.
                </span>
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 text-sm leading-7 text-[#94A3B8]">
                At Vaytrix, career support goes beyond helping professionals
                find opportunities. We combine practical mentorship,
                real-world project exposure, modern technology learning, and
                structured guidance to help people become confident
                industry-ready professionals.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#94A3B8]">
                Whether someone is beginning their technology journey or
                looking to advance an established career, our approach focuses
                on stronger problem-solving, relevant skills, practical
                experience, and the confidence required to perform in real
                business environments.
              </p>

              {/* PRINCIPLES */}
              <div className="mt-auto pt-8">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    "Practical Learning",
                    "Industry Mentorship",
                    "Real-World Exposure",
                    "Career Progression",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                    >
                      <CheckCircle2
                        size={14}
                        strokeWidth={1.7}
                        className="text-[#06B6D4]"
                      />

                      <span className="text-[10px] text-[#CBD5E1]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#475569]">
                    From Potential → Performance
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/10">
                    <ArrowUpRight
                      size={16}
                      className="text-[#A855F7]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TECHNICAL FOOTER */}
        <div className="mt-6 flex items-center gap-4">
          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#475569]">
            VAYTRIX / CAREER INTELLIGENCE
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
            BUILD / LEARN / GROW
          </span>
        </div>
      </div>
    </section>
  );
}

export default ItFeatures;