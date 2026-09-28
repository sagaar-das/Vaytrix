import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  UserCheck,
  Map,
  Wrench,
  MessageSquare,
  BriefcaseBusiness,
  ArrowDown,
} from "lucide-react";

function ItHowItWorks() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const steps = [
    {
      number: "01",
      title: "Discover Your Starting Point",
      desc: "Begin with a structured assessment of your current skills, professional experience, strengths, and career objectives.",
      icon: UserCheck,
      accent: "violet",
    },
    {
      number: "02",
      title: "Define Your Career Route",
      desc: "Build a personalized direction based on your strengths, target roles, and the capabilities needed for your next opportunity.",
      icon: Map,
      accent: "blue",
    },
    {
      number: "03",
      title: "Strengthen Your Profile",
      desc: "Develop relevant skills, improve your professional profile, and prepare an ATS-friendly resume aligned with your target roles.",
      icon: Wrench,
      accent: "cyan",
    },
    {
      number: "04",
      title: "Build Interview Confidence",
      desc: "Practice realistic technical and HR scenarios while receiving focused feedback to improve your communication and performance.",
      icon: MessageSquare,
      accent: "violet",
    },
    {
      number: "05",
      title: "Connect With Opportunities",
      desc: "Move toward relevant employment opportunities with continued guidance and support throughout your placement journey.",
      icon: BriefcaseBusiness,
      accent: "cyan",
    },
  ];

  const accentStyles = {
    violet: {
      icon: "text-[#A855F7]",
      iconBg: "bg-[#8B5CF6]/10",
      border: "border-[#8B5CF6]/25",
      glow: "bg-[#8B5CF6]/15",
      dot: "bg-[#8B5CF6]",
    },
    blue: {
      icon: "text-[#3B82F6]",
      iconBg: "bg-[#3B82F6]/10",
      border: "border-[#3B82F6]/25",
      glow: "bg-[#3B82F6]/15",
      dot: "bg-[#3B82F6]",
    },
    cyan: {
      icon: "text-[#06B6D4]",
      iconBg: "bg-[#06B6D4]/10",
      border: "border-[#06B6D4]/25",
      glow: "bg-[#06B6D4]/15",
      dot: "bg-[#06B6D4]",
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#050508]"
    >
      {/* BACKGROUND GRID */}
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

      {/* AMBIENT GLOWS */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[65%] h-[420px] w-[420px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className="relative z-10 flex min-h-[85vh] items-center justify-center px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_#8B5CF6]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#94A3B8]">
              How It Works / 05
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#F8FAFC] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Your Career.
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Structured.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8"
          >
            A clear five-stage process designed to take you from
            understanding your strengths to becoming ready for the right
            professional opportunity.
          </motion.p>

          {/* SCROLL INDICATOR */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-12 flex flex-col items-center gap-3"
          >
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#475569]">
              Explore The Process
            </span>

            <ArrowDown
              size={16}
              strokeWidth={1.5}
              className="text-[#64748B]"
            />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <div className="relative">
        {/* DESKTOP PROGRESS LINE */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-0 hidden w-px -translate-x-1/2 lg:block">
          {/* BASE */}
          <div className="absolute inset-0 bg-white/[0.07]" />

          {/* PROGRESS */}
          <motion.div
            style={{ height: progressHeight }}
            className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]"
          />

          {/* GLOW */}
          <motion.div
            style={{ height: progressHeight }}
            className="absolute -left-[2px] top-0 w-[5px] bg-gradient-to-b from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] opacity-40 blur-[5px]"
          />
        </div>

        {/* STEPS */}
        {steps.map((step, index) => {
          const Icon = step.icon;
          const style = accentStyles[step.accent];

          return (
            <div
              key={step.number}
              className="relative min-h-[52vh] px-5 py-8 sm:px-8 lg:px-10"
            >
              <div className="mx-auto flex min-h-[45vh] max-w-7xl items-center">
                {/* DESKTOP LAYOUT */}
                <div
                  className={`hidden w-full items-center lg:flex ${index % 2 === 0
                      ? "justify-start"
                      : "justify-end"
                    }`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -60 : 60,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.35,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group relative w-[42%]"
                  >
                    {/* CARD */}
                    <div
                      className={`relative overflow-hidden rounded-[24px] border bg-[#0A0A0F]/90 p-7 backdrop-blur-2xl transition-all duration-500 ${style.border}`}
                    >
                      {/* GLOW */}
                      <div
                        className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100 ${style.glow}`}
                      />

                      {/* TOP */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.07] ${style.iconBg}`}
                        >
                          <Icon
                            size={21}
                            strokeWidth={1.7}
                            className={style.icon}
                          />
                        </div>

                        <span className="font-mono text-[10px] tracking-[0.22em] text-[#475569]">
                          STEP_{step.number}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3 className="relative z-10 mt-7 text-2xl font-semibold tracking-tight text-[#F8FAFC]">
                        {step.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="relative z-10 mt-3 text-sm leading-7 text-[#64748B]">
                        {step.desc}
                      </p>

                      {/* FOOTER */}
                      <div className="relative z-10 mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                        />

                        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#475569]">
                          Vaytrix Process
                        </span>
                      </div>

                      {/* ACCENT LINE */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] transition-all duration-500 group-hover:w-full" />
                    </div>

                    {/* CONNECTOR */}
                    <div
                      className={`absolute top-1/2 hidden h-px w-[90px] -translate-y-1/2 bg-gradient-to-r lg:block ${index % 2 === 0
                          ? "-right-[90px] from-white/[0.08] to-transparent"
                          : "-left-[90px] from-transparent to-white/[0.08]"
                        }`}
                    />
                  </motion.div>
                </div>

                {/* MOBILE LAYOUT */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 35,
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
                  className="w-full lg:hidden"
                >
                  <div
                    className={`relative overflow-hidden rounded-[22px] border bg-[#0A0A0F]/90 p-5 backdrop-blur-xl ${style.border}`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] ${style.iconBg}`}
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.7}
                          className={style.icon}
                        />
                      </div>

                      <span className="font-mono text-[9px] tracking-[0.2em] text-[#475569]">
                        STEP_{step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-[#F8FAFC]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-[#64748B] sm:text-sm">
                      {step.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                      />

                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
                        Vaytrix Process
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* DESKTOP CENTER NODE */}
                <div className="absolute left-1/2 top-1/2 z-20 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.12] bg-[#050508] lg:flex">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${style.dot} shadow-[0_0_15px_currentColor]`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FINAL CTA / END */}
      <div className="relative z-10 flex min-h-[55vh] items-center justify-center px-5 py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-center"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#475569]">
            Journey Complete / Next Step
          </p>

          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Ready to Move Your Career
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Forward?
            </span>
          </h3>

          <p className="mt-5 text-sm leading-7 text-[#64748B]">
            Start with your current position, define where you want to go,
            and build a practical path toward the next opportunity.
          </p>

          <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export default ItHowItWorks;