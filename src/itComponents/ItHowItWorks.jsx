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

  const SideGraphic = ({ step, index, accent }) => {
    const colors = {
      violet: {
        primary: "#8B5CF6",
        secondary: "#3B82F6",
        soft: "rgba(139,92,246,0.12)",
      },
      blue: {
        primary: "#3B82F6",
        secondary: "#06B6D4",
        soft: "rgba(59,130,246,0.12)",
      },
      cyan: {
        primary: "#06B6D4",
        secondary: "#8B5CF6",
        soft: "rgba(6,182,212,0.12)",
      },
    };

    const color = colors[accent];

    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          x: index % 2 === 0 ? 40 : -40,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="relative hidden h-[300px] w-[46%] items-center justify-center lg:flex"
      >
        {/* MAIN ROTATING RING */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[270px] w-[270px] rounded-full border"
          style={{
            borderColor: `${color.primary}22`,
            boxShadow: `0 0 80px ${color.primary}12`,
          }}
        >
          {/* Ring markers */}
          <span
            className="absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rounded-full"
            style={{
              background: color.primary,
              boxShadow: `0 0 20px ${color.primary}`,
            }}
          />

          <span
            className="absolute bottom-[18px] right-[35px] h-2 w-2 rounded-full"
            style={{
              background: color.secondary,
              boxShadow: `0 0 15px ${color.secondary}`,
            }}
          />

          <span
            className="absolute left-[25px] top-[65px] h-1.5 w-1.5 rounded-full"
            style={{
              background: color.primary,
            }}
          />
        </motion.div>

        {/* SECOND RING */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[205px] w-[205px] rounded-full border border-dashed"
          style={{
            borderColor: `${color.secondary}30`,
          }}
        />

        {/* THIRD RING */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-[145px] w-[145px] rounded-full border"
          style={{
            borderColor: `${color.primary}35`,
            background: color.soft,
            boxShadow: `0 0 60px ${color.primary}18`,
          }}
        />

        {/* CENTER CORE */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            boxShadow: [
              `0 0 15px ${color.primary}30`,
              `0 0 35px ${color.primary}60`,
              `0 0 15px ${color.primary}30`,
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 flex h-[82px] w-[82px] items-center justify-center rounded-full border border-white/[0.12] bg-[#08080D]"
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full border"
            style={{
              borderColor: `${color.primary}55`,
              background: color.soft,
            }}
          >
            <span
              className="font-mono text-sm font-semibold"
              style={{ color: color.primary }}
            >
              {step.number}
            </span>
          </div>
        </motion.div>

        {/* ORBITING DOT */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[320px] w-[320px]"
        >
          <span
            className="absolute left-1/2 top-[-3px] h-2 w-2 -translate-x-1/2 rounded-full"
            style={{
              background: color.secondary,
              boxShadow: `0 0 18px ${color.secondary}`,
            }}
          />
        </motion.div>

        {/* TECHNICAL LINES */}
        <div className="absolute left-[5%] top-1/2 h-px w-[85px] bg-gradient-to-r from-transparent to-white/[0.12]" />

        <div className="absolute right-[5%] top-1/2 h-px w-[85px] bg-gradient-to-l from-transparent to-white/[0.12]" />

        {/* DATA LABEL */}
        <div className="absolute bottom-[18px] left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: color.primary,
              boxShadow: `0 0 10px ${color.primary}`,
            }}
          />

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#475569]">
            PROCESS_NODE / {step.number}
          </span>
        </div>

        {/* CORNER TECH MARKS */}
        <div
          className="absolute left-[15%] top-[18%] h-7 w-7 border-l border-t"
          style={{ borderColor: `${color.primary}30` }}
        />

        <div
          className="absolute bottom-[18%] right-[15%] h-7 w-7 border-b border-r"
          style={{ borderColor: `${color.secondary}30` }}
        />

        {/* SMALL DATA POINTS */}
        <span
          className="absolute left-[18%] top-[32%] h-1 w-1 rounded-full"
          style={{ background: color.primary }}
        />

        <span
          className="absolute right-[18%] bottom-[32%] h-1 w-1 rounded-full"
          style={{ background: color.secondary }}
        />
      </motion.div>
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#050508]"
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

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

      {/* =====================================================
          AMBIENT GLOWS
      ===================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[65%] h-[420px] w-[420px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />



      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className="relative z-10 flex min-h-[55vh] items-center justify-center px-5 py-10 sm:px-8 lg:px-10">
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

            <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#94A3B8]">
              How It Works / 06
            </span>
          </motion.div>

          {/* MAIN HEADING */}

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#F8FAFC] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your Career
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Structured
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-[18px] sm:leading-8"
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
            <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#8da9d0]">
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
        {/* =====================================================
            DESKTOP PROGRESS LINE
        ===================================================== */}

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

        {/* =====================================================
            STEPS
        ===================================================== */}

        {steps.map((step, index) => {
          const Icon = step.icon;
          const style = accentStyles[step.accent];

          return (
            <div
              key={step.number}
              className="relative min-h-[21vh] px-5 py-3 sm:px-8 lg:px-10"
            >
              {/* =================================================
                  DESKTOP CONTENT
              ================================================== */}

              <div className="mx-auto flex min-h-[13vh] max-w-6xl items-center">
                <div className="hidden w-full items-center justify-between lg:flex">

                  {/* =====================================================
      STEP 01 / 03 / 05
      CARD LEFT → GRAPHIC RIGHT
  ===================================================== */}

                  {index % 2 === 0 ? (
                    <>
                      {/* CARD */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -50,
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
                          y: -4,
                        }}
                        className="group relative w-[46%]"
                      >
                        <div
                          className={`relative overflow-hidden rounded-[20px] border bg-[#0A0A0F]/90 p-5 backdrop-blur-2xl transition-all duration-500 ${style.border}`}
                        >
                          {/* GLOW */}
                          <div
                            className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100 ${style.glow}`}
                          />

                          {/* TOP */}
                          <div className="relative z-10 flex items-center justify-between">
                            <div
                              className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] ${style.iconBg}`}
                            >
                              <Icon
                                size={20}
                                strokeWidth={1.7}
                                className={style.icon}
                              />
                            </div>

                            <span className="font-mono text-[12px] tracking-[0.22em] text-[#8da7cc]">
                              STEP_{step.number}
                            </span>
                          </div>

                          {/* TITLE */}
                          <h3 className="relative z-10 mt-5 text-[25px] font-semibold tracking-tight text-[#F8FAFC]">
                            {step.title}
                          </h3>

                          {/* DESCRIPTION */}
                          <p className="relative z-10 mt-2 text-sm leading-6 text-[#64748B]">
                            {step.desc}
                          </p>

                          {/* FOOTER */}
                          <div className="relative z-10 mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                            />

                            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#8aa4c9]">
                              Vaytrix Process
                            </span>
                          </div>

                          {/* ACCENT */}
                          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] transition-all duration-500 group-hover:w-full" />
                        </div>

                        {/* CONNECTOR */}
                        <div className="absolute right-[-30px] top-1/2 h-px w-[30px] -translate-y-1/2 bg-gradient-to-r from-white/[0.15] to-transparent" />
                      </motion.div>

                      {/* GRAPHIC */}
                      <SideGraphic
                        step={step}
                        index={index}
                        accent={step.accent}
                      />
                    </>
                  ) : (
                    <>
                      {/* GRAPHIC */}
                      <SideGraphic
                        step={step}
                        index={index}
                        accent={step.accent}
                      />

                      {/* CARD */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: 50,
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
                          y: -4,
                        }}
                        className="group relative w-[46%]"
                      >
                        <div
                          className={`relative overflow-hidden rounded-[20px] border bg-[#0A0A0F]/90 p-5 backdrop-blur-2xl transition-all duration-500 ${style.border}`}
                        >
                          {/* GLOW */}
                          <div
                            className={`pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100 ${style.glow}`}
                          />

                          {/* TOP */}
                          <div className="relative z-10 flex items-center justify-between">
                            <div
                              className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] ${style.iconBg}`}
                            >
                              <Icon
                                size={20}
                                strokeWidth={1.7}
                                className={style.icon}
                              />
                            </div>

                            <span className="font-mono text-[12px] tracking-[0.22em] text-[#89a2c6]">
                              STEP_{step.number}
                            </span>
                          </div>

                          {/* TITLE */}
                          <h3 className="relative z-10 mt-5 text-[25px] font-semibold tracking-tight text-[#F8FAFC]">
                            {step.title}
                          </h3>

                          {/* DESCRIPTION */}
                          <p className="relative z-10 mt-2 text-sm leading-6 text-[#64748B]">
                            {step.desc}
                          </p>

                          {/* FOOTER */}
                          <div className="relative z-10 mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                            />

                            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#8ea8cd]">
                              Vaytrix Process
                            </span>
                          </div>

                          {/* ACCENT */}
                          <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-l from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] transition-all duration-500 group-hover:w-full" />
                        </div>

                        {/* CONNECTOR */}
                        <div className="absolute left-[-30px] top-1/2 h-px w-[30px] -translate-y-1/2 bg-gradient-to-l from-white/[0.15] to-transparent" />
                      </motion.div>
                    </>
                  )}
                </div>

                {/* =================================================
                    MOBILE LAYOUT
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
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
                    className={`relative overflow-hidden rounded-[20px] border bg-[#0A0A0F]/90 p-5 backdrop-blur-xl ${style.border}`}
                  >
                    {/* TOP */}

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

                    {/* TITLE */}

                    <h3 className="mt-5 text-xl font-semibold text-[#F8FAFC]">
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-2 text-xs leading-6 text-[#64748B] sm:text-sm">
                      {step.desc}
                    </p>

                    {/* FOOTER */}

                    <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                      />

                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
                        Vaytrix Process
                      </span>
                    </div>

                    {/* ACCENT LINE */}

                    <div
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]"
                    />
                  </div>
                </motion.div>

                {/* =================================================
                    CENTER NODE
                ================================================== */}

                <div className="absolute left-1/2 top-1/2 z-20 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.12] bg-[#050508] lg:flex">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${style.dot}`}
                    style={{
                      boxShadow: `0 0 14px currentColor`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================
          FINAL CTA / END
      ===================================================== */}

      <div className="relative z-10 flex min-h-[55vh] items-center justify-center px-5 py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-center"
        >
          <p className="font-mono text-[15px] uppercase tracking-[0.25em] text-[#87a1c6]">
            Journey Complete / Next Step
          </p>

          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-5xl">
            Ready to Move Your Career
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Forward?
            </span>
          </h3>

          <p className="mt-5 text-[18px] leading-7 text-[#91a8c8]">
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