// components/about/CoreValues.jsx

import { motion } from "framer-motion";
import {
  BrainCircuit,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Lightbulb,
} from "lucide-react";

function CoreValues() {
  const values = [
    {
      number: "01",
      title: "Expertise",
      shortTitle: "KNOWLEDGE",
      icon: BrainCircuit,
      accent: "violet",
      description:
        "Our experienced recruitment and technology professionals bring deep knowledge to every engagement. We continuously evolve with industries, emerging technologies, and modern best practices.",
    },
    {
      number: "02",
      title: "Empathy",
      shortTitle: "UNDERSTANDING",
      icon: HeartHandshake,
      accent: "blue",
      description:
        "Every individual and organization has a different journey. We understand their goals, challenges, and expectations to create solutions that truly matter.",
    },
    {
      number: "03",
      title: "Partnership",
      shortTitle: "COLLABORATION",
      icon: UsersRound,
      accent: "cyan",
      description:
        "We build meaningful relationships beyond transactions. Long-term partnerships help people, businesses, and opportunities grow together.",
    },
    {
      number: "04",
      title: "Integrity",
      shortTitle: "TRUST",
      icon: ShieldCheck,
      accent: "violet",
      description:
        "Honesty, transparency, and accountability guide every interaction. We build trust through consistent and responsible actions.",
    },
    {
      number: "05",
      title: "Innovation",
      shortTitle: "EVOLUTION",
      icon: Lightbulb,
      accent: "blue",
      description:
        "We explore smarter approaches to recruitment, career development, and technology to create practical solutions and stronger outcomes.",
    },
    {
      number: "06",
      title: "Purpose",
      shortTitle: "IMPACT",
      icon: Sparkles,
      accent: "cyan",
      description:
        "Our purpose guides everything we do — creating opportunities where talent grows, businesses progress, and aspirations move closer to reality.",
    },
  ];

  const accentStyles = {
    violet: {
      icon: "text-[#A855F7]",
      iconBg: "bg-[#8B5CF6]/10",
      border: "border-[#8B5CF6]/20",
      glow: "bg-[#8B5CF6]/15",
      number: "text-[#8B5CF6]",
      dot: "bg-[#8B5CF6]",
    },

    blue: {
      icon: "text-[#3B82F6]",
      iconBg: "bg-[#3B82F6]/10",
      border: "border-[#3B82F6]/20",
      glow: "bg-[#3B82F6]/15",
      number: "text-[#3B82F6]",
      dot: "bg-[#3B82F6]",
    },

    cyan: {
      icon: "text-[#06B6D4]",
      iconBg: "bg-[#06B6D4]/10",
      border: "border-[#06B6D4]/20",
      glow: "bg-[#06B6D4]/15",
      number: "text-[#06B6D4]",
      dot: "bg-[#06B6D4]",
    },
  };

  return (
    <section
      id="values"
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

      {/* ================= TOP LINE ================= */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

      {/* ================= FULL WIDTH CONTAINER ================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-6xl text-center">
          {/* Label */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-xl"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"
              style={{
                boxShadow: "0 0 10px #8B5CF6",
              }}
            />

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#94A3B8]">
              Values & Purpose / 06
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto text-3xl font-semibold leading-[1] tracking-[-0.04em] text-[#F8FAFC] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            What Drives
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Everything We Do.
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-[#64748B] sm:text-sm"
          >
            Our values shape how we work, build relationships, and create
            meaningful outcomes. They are the principles that keep Vaytrix
            moving forward with purpose.
          </motion.p>
        </div>

        {/* ================= VALUES GRID ================= */}

        <div className="mx-auto mt-8 grid w-full gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            const style = accentStyles[value.accent];

            return (
              <motion.div
                key={value.number}
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
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                }}
                className="group relative"
              >
                {/* CARD */}

                <div
                  className={`relative min-h-[220px] overflow-hidden rounded-[16px] border bg-[#0A0A0F]/85 p-4 backdrop-blur-2xl transition-all duration-300 sm:min-h-[230px] sm:p-5 ${style.border}`}
                >
                  {/* Hover Glow */}

                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-0 blur-[65px] transition-opacity duration-500 group-hover:opacity-100 ${style.glow}`}
                  />

                  {/* TOP ROW */}

                  <div className="relative z-10 flex items-center justify-between">
                    {/* Icon */}

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] ${style.iconBg}`}
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.6}
                        className={style.icon}
                      />
                    </div>

                    {/* Number */}

                    <span
                      className={`font-mono text-[8px] tracking-[0.2em] ${style.number}`}
                    >
                      VALUE_{value.number}
                    </span>
                  </div>

                  {/* MINI LABEL */}

                  <div className="relative z-10 mt-4 flex items-center gap-2">
                    <span
                      className={`h-1 w-1 rounded-full ${style.dot}`}
                      style={{
                        boxShadow: "0 0 7px currentColor",
                      }}
                    />

                    <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-[#475569]">
                      {value.shortTitle}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3 className="relative z-10 mt-2 text-xl font-semibold tracking-tight text-[#F8FAFC]">
                    {value.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="relative z-10 mt-2 text-xs leading-5 text-[#64748B] sm:text-[13px] sm:leading-5">
                    {value.description}
                  </p>

                  {/* BOTTOM GRADIENT LINE */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] transition-all duration-400 group-hover:w-full" />

                  {/* CORNER */}

                  <div
                    className={`absolute bottom-4 right-4 h-5 w-5 border-b border-r opacity-30 transition-opacity duration-300 group-hover:opacity-70 ${style.border}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM PURPOSE ================= */}

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
          className="mx-auto mt-8 max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#0A0A0F]/70 px-5 py-5 text-center backdrop-blur-2xl sm:px-8">
            {/* Glow */}

            <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-48 -translate-x-1/2 bg-[#8B5CF6]/[0.05] blur-3xl" />

            <div className="relative z-10">
              <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-[#475569]">
                VAYTRIX / CORE_PRINCIPLES
              </span>

              <h3 className="mt-2 text-base font-medium leading-relaxed text-[#CBD5E1] sm:text-lg">
                Building meaningful connections.
                <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                  Creating possibilities that last.
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
            </div>
          </div>
        </motion.div>

        {/* ================= TECHNICAL FOOTER ================= */}

        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/[0.08]" />

          <span className="font-mono text-[6px] uppercase tracking-[0.25em] text-[#334155]">
            PEOPLE / PURPOSE / POSSIBILITY
          </span>

          <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/[0.08]" />
        </div>
      </div>

      {/* ================= BOTTOM LINE ================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </section>
  );
}

export default CoreValues;