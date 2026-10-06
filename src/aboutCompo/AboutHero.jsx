import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Target,
  Zap,
} from "lucide-react";

import logo from "../assets/logo.png";

function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050508]">
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

      <div className="pointer-events-none absolute -left-[180px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/10 blur-[160px]" />

      <div className="pointer-events-none absolute -right-[180px] top-[40%] h-[500px] w-[500px] rounded-full bg-[#06B6D4]/10 blur-[160px]" />

      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#3B82F6]/[0.04] blur-[140px]" />

      {/* =====================================================
          TOP TECHNICAL LINE
      ===================================================== */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

      {/* =====================================================
          MAIN HERO WRAPPER
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-10 sm:px-8 lg:px-10 lg:py-10">
        {/* =================================================
            MAIN HERO GRID
        ================================================= */}

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>
            {/* LABEL */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8B5CF6] opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_#8B5CF6]" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#94A3B8]">
                About Vaytrix / Our Story
              </span>
            </motion.div>

            {/* SMALL INTRO */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#64748B]"
            >
              Bringing Aspirations To Life
            </motion.p>

            {/* MAIN HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-[#F8FAFC] sm:text-6xl md:text-7xl lg:text-[78px]"
            >
              Turning Potential
              <span className="block">
                Into{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                  Possibility.
                </span>
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-7 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8"
            >
              At Vaytrix, we believe every aspiration deserves a clear
              direction. We connect ambition with opportunity by helping
              individuals build the skills, confidence, and professional
              readiness needed to move forward.
            </motion.p>

            {/* SECOND DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-4 max-w-xl text-sm leading-7 text-[#64748B]"
            >
              Through structured career development, practical guidance, and
              a forward-thinking approach, we help transform professional
              aspirations into meaningful opportunities.
            </motion.p>

            {/* CTA

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#our-story"
                className="group inline-flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.05] px-5 py-3 text-xs font-medium text-[#F8FAFC] backdrop-blur-xl transition-all duration-300 hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/10"
              >
                Discover Vaytrix

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#475569]">
                Built Around People
              </span>
            </motion.div> */}
          </div>

          {/* =================================================
              RIGHT FUTURISTIC VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="relative hidden h-[470px] items-center justify-center lg:flex"
          >
            {/* OUTER ROTATING RING */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border"
              style={{
                borderColor: "rgba(139,92,246,0.16)",
                boxShadow: "0 0 90px rgba(139,92,246,0.08)",
              }}
            >
              {/* RING MARKERS */}

              <span
                className="absolute left-1/2 top-[-4px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#8B5CF6]"
                style={{
                  boxShadow: "0 0 18px #8B5CF6",
                }}
              />

              <span
                className="absolute bottom-[45px] right-[28px] h-2 w-2 rounded-full bg-[#06B6D4]"
                style={{
                  boxShadow: "0 0 15px #06B6D4",
                }}
              />

              <span className="absolute left-[35px] top-[90px] h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
            </motion.div>

            {/* SECOND RING */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-[#3B82F6]/20"
            />

            {/* THIRD RING */}

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[210px] w-[210px] rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/[0.04] shadow-[0_0_70px_rgba(6,182,212,0.08)]"
            />

            {/* =================================================
                LOGO CORE
            ================================================== */}

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 0 20px rgba(139,92,246,0.18)",
                  "0 0 55px rgba(59,130,246,0.35)",
                  "0 0 20px rgba(139,92,246,0.18)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-[145px] w-[145px] items-center justify-center rounded-full border border-white/[0.12] bg-[#08080D]/95 p-4 backdrop-blur-xl"
            >
              {/* INNER GLOW */}

              <div className="pointer-events-none absolute inset-3 rounded-full bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#06B6D4]/10 blur-xl" />

              {/* LOGO CONTAINER */}

              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-[#8B5CF6]/25 bg-[#050508]">
                <motion.div
                  animate={{
                    opacity: [0.65, 1, 0.65],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#06B6D4]/10"
                />

                <img
                  src={logo}
                  alt="Vaytrix"
                  className="relative z-10 h-[82px] w-[82px] object-contain"
                />
              </div>

              {/* INNER GLOW */}

              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_25px_rgba(139,92,246,0.12)]" />
            </motion.div>

            {/* =================================================
                ORBITING DOT
            ================================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[430px] w-[430px]"
            >
              <span
                className="absolute left-1/2 top-[-2px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#06B6D4]"
                style={{
                  boxShadow: "0 0 18px #06B6D4",
                }}
              />
            </motion.div>

            {/* =================================================
                LEFT DATA CARD
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[2%] top-[24%] rounded-xl border border-white/[0.08] bg-[#0A0A0F]/80 px-4 py-3 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <Target
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#8B5CF6]"
                />

                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#475569]">
                    Focus
                  </p>

                  <p className="mt-1 text-xs text-[#CBD5E1]">
                    Potential
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT DATA CARD
            ================================================== */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[22%] right-[0%] rounded-xl border border-white/[0.08] bg-[#0A0A0F]/80 px-4 py-3 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <Zap
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#06B6D4]"
                />

                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#475569]">
                    Direction
                  </p>

                  <p className="mt-1 text-xs text-[#CBD5E1]">
                    Opportunity
                  </p>
                </div>
              </div>
            </motion.div>

            {/* TECHNICAL LINES */}

            <div className="absolute left-0 top-1/2 h-px w-[70px] bg-gradient-to-r from-transparent to-white/[0.12]" />

            <div className="absolute right-0 top-1/2 h-px w-[70px] bg-gradient-to-l from-transparent to-white/[0.12]" />

            {/* TECH CORNERS */}

            <div className="absolute left-[8%] top-[12%] h-8 w-8 border-l border-t border-[#8B5CF6]/20" />

            <div className="absolute bottom-[12%] right-[8%] h-8 w-8 border-b border-r border-[#06B6D4]/20" />

            {/* DATA LABEL */}

            <div className="absolute bottom-[2%] left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"
                style={{
                  boxShadow: "0 0 10px #8B5CF6",
                }}
              />

              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#475569]">
                VAYTRIX / FUTURE_IN_MOTION
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            HERO STATS
            IMPORTANT: OUTSIDE MAIN GRID
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.75,
            ease: "easeOut",
          }}
          className="relative z-20 mx-auto mt-14 w-full max-w-5xl lg:mt-10"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0A0A0F]/75 px-4 py-5 backdrop-blur-2xl sm:px-7 sm:py-6">
            {/* TOP GLOW */}

            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent" />

            {/* AMBIENT GLOW */}

            <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-[50%] -translate-x-1/2 bg-[#8B5CF6]/[0.04] blur-3xl" />

            {/* STATS */}

            <div className="relative grid grid-cols-2 divide-x divide-y divide-white/[0.06] lg:grid-cols-4 lg:divide-y-0">
              {/* STAT 01 */}

              <div className="group px-4 py-3 text-center sm:px-6 lg:py-2">
                <div className="flex items-center justify-center gap-1">
                  <span className="bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                    7
                  </span>

                  <span className="text-lg text-[#8B5CF6]">
                    +
                  </span>
                </div>

                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.25em] text-[#64748B]">
                  Years
                </p>

                <div className="mx-auto mt-3 h-px w-8 bg-[#8B5CF6]/30 transition-all duration-300 group-hover:w-14 group-hover:bg-[#8B5CF6]" />
              </div>

              {/* STAT 02 */}

              <div className="group px-4 py-3 text-center sm:px-6 lg:py-2">
                <div className="flex items-center justify-center gap-1">
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                    50
                  </span>

                  <span className="text-lg text-[#3B82F6]">
                    +
                  </span>
                </div>

                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.25em] text-[#64748B]">
                  Projects
                </p>

                <div className="mx-auto mt-3 h-px w-8 bg-[#3B82F6]/30 transition-all duration-300 group-hover:w-14 group-hover:bg-[#3B82F6]" />
              </div>

              {/* STAT 03 */}

              <div className="group px-4 py-3 text-center sm:px-6 lg:py-2">
                <div className="flex items-center justify-center gap-1">
                  <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                    700
                  </span>

                  <span className="text-lg text-[#06B6D4]">
                    +
                  </span>
                </div>

                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.25em] text-[#64748B]">
                  Placements
                </p>

                <div className="mx-auto mt-3 h-px w-8 bg-[#06B6D4]/30 transition-all duration-300 group-hover:w-14 group-hover:bg-[#06B6D4]" />
              </div>

              {/* STAT 04 */}

              <div className="group px-4 py-3 text-center sm:px-6 lg:py-2">
                <div className="flex items-center justify-center gap-1">
                  <span className="bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                    400
                  </span>

                  <span className="text-lg text-[#8B5CF6]">
                    +
                  </span>
                </div>

                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.25em] text-[#64748B]">
                  Trainees
                </p>

                <div className="mx-auto mt-3 h-px w-8 bg-[#8B5CF6]/30 transition-all duration-300 group-hover:w-14 group-hover:bg-[#8B5CF6]" />
              </div>
            </div>

            {/* BOTTOM TECHNICAL LABEL */}

            <div className="mt-4 flex items-center justify-center gap-3 border-t border-white/[0.05] pt-3">
              <span
                className="h-1 w-1 rounded-full bg-[#8B5CF6]"
                style={{
                  boxShadow: "0 0 8px #8B5CF6",
                }}
              />

              <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#475569]">
                VAYTRIX / IMPACT_METRICS
              </span>

              <span
                className="h-1 w-1 rounded-full bg-[#06B6D4]"
                style={{
                  boxShadow: "0 0 8px #06B6D4",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-20 mt-7 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#475569]">
            Explore Vaytrix
          </span>

          <ArrowDown
            size={15}
            strokeWidth={1.5}
            className="text-[#64748B]"
          />
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM TECHNICAL LINE
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </section>
  );
}

export default AboutHero;