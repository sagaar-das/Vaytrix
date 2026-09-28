import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Users,
  Zap,
} from "lucide-react";
import env from "../assets/staffing.webp";

function ItHero() {
  const highlights = [
    "End-to-End Placement Assistance",
    "Personalized Career Guidance",
    "Interview-Focused Preparation",
    "ATS-Ready Professional Profiles",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 md:py-24 lg:px-10 lg:py-28">
      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* AMBIENT GLOWS */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#8B5CF6]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[450px] w-[450px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      {/* DECORATIVE ORBIT */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute right-[-180px] top-[-180px] hidden h-[520px] w-[520px] rounded-full border border-white/[0.04] lg:block"
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#8B5CF6] shadow-[0_0_20px_#8B5CF6]" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* TECHNICAL LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06B6D4] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06B6D4]" />
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] sm:text-xs">
              Talent Infrastructure / 01
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#F8FAFC] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Build Teams That
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Move Business Forward.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8"
          >
            Connect with the right technology professionals through a
            structured staffing approach built around skill alignment,
            career guidance, interview readiness, and long-term opportunity.
          </motion.p>

          {/* HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.55 + index * 0.08,
                  duration: 0.5,
                }}
                className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/[0.05]"
              >
                <CheckCircle2
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#06B6D4]"
                />

                <span className="text-xs font-medium text-[#CBD5E1] sm:text-sm">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* BOTTOM META */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/[0.07] pt-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10">
                <Users
                  size={18}
                  strokeWidth={1.7}
                  className="text-[#A855F7]"
                />
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#64748B]">
                  Talent Network
                </p>
                <p className="text-sm font-medium text-[#E2E8F0]">
                  Skilled Professionals
                </p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-white/[0.08] sm:block" />

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#06B6D4]/20 bg-[#06B6D4]/10">
                <Zap
                  size={18}
                  strokeWidth={1.7}
                  className="text-[#06B6D4]"
                />
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#64748B]">
                  Focus
                </p>
                <p className="text-sm font-medium text-[#E2E8F0]">
                  Career Acceleration
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl lg:mx-0"
        >
          {/* OUTER FRAME */}
          <div className="relative rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {/* IMAGE CONTAINER */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[22px]"
            >
              <img
                src={env}
                alt="Vaytrix IT staffing and technology talent solutions"
                className="h-[360px] w-full object-cover sm:h-[430px] lg:h-[500px]"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/95 via-[#050508]/10 to-transparent" />

              {/* TOP TECH LABEL */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-lg border border-white/[0.1] bg-[#050508]/70 px-3 py-2 backdrop-blur-xl">
                <BriefcaseBusiness
                  size={15}
                  strokeWidth={1.7}
                  className="text-[#A855F7]"
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#CBD5E1]">
                  Talent / Technology
                </span>
              </div>

              {/* BOTTOM INFO PANEL */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl border border-white/[0.1] bg-[#050508]/75 p-4 backdrop-blur-xl sm:p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
                        Vaytrix Staffing Network
                      </p>

                      <h2 className="mt-1 text-lg font-semibold text-[#F8FAFC] sm:text-xl">
                        People. Skills. Opportunity.
                      </h2>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
                      <ArrowUpRight
                        size={18}
                        className="text-[#A855F7]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CORNER ACCENT */}
            <div className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#8B5CF6]/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-[#06B6D4]/15 blur-3xl" />
          </div>

          {/* FLOATING STATUS CARD */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/[0.09] bg-[#0A0A0F]/90 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4]">
                <CheckCircle2
                  size={18}
                  className="text-white"
                  strokeWidth={2}
                />
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-[#64748B]">
                  Talent Match
                </p>
                <p className="text-xs font-semibold text-[#F8FAFC]">
                  Opportunity Ready
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM TECHNICAL LINE */}
      <div className="relative z-10 mx-auto mt-16 flex max-w-7xl items-center gap-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#475569]">
          VAYTRIX / IT STAFFING
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />

        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#475569]">
          01 / 04
        </span>
      </div>
    </section>
  );
}

export default ItHero;