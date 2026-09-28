import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";

function EmployerHero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#050508] px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">

      {/* Technical Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[170px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-[#3B82F6]/10 blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">

        {/* Badge */}
        <ScrollReveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl sm:px-5">

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
              <Users
                className="h-3 w-3 text-[#A78BFA]"
                strokeWidth={1.8}
              />
            </span>

            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#94A3B8] sm:text-xs">
              Talent Solutions / Employers
            </span>

          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h1 className="mx-auto max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#F8FAFC] sm:text-5xl md:text-6xl lg:text-7xl">

            Build Your Team With

            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Technology Talent That Delivers.
            </span>

          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8 md:text-lg">

            Connect with skilled, professionally prepared technology
            professionals through a structured talent network built to help
            businesses find the right people for their evolving technology
            needs.

          </p>
        </ScrollReveal>

        {/* Buttons */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:mt-12 sm:flex-row">

            {/* Primary */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,0.2)] transition-all duration-300 hover:brightness-110 sm:px-10"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start Hiring

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </motion.button>

            {/* Secondary */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")}
              className="group rounded-xl border border-white/[0.12] bg-white/[0.03] px-8 py-4 font-semibold text-[#F8FAFC] backdrop-blur-xl transition-all duration-300 hover:border-[#8B5CF6]/45 hover:bg-[#8B5CF6]/[0.06] sm:px-10"
            >
              <span className="flex items-center justify-center gap-3">
                Schedule a Consultation

                <ArrowRight
                  size={18}
                  className="text-[#94A3B8] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#A78BFA]"
                />
              </span>
            </motion.button>

          </div>
        </ScrollReveal>

        {/* Trust / Technical Strip */}
        <ScrollReveal delay={0.4}>
          <div className="mx-auto mt-14 max-w-4xl border-t border-white/[0.08] pt-6 sm:mt-16">

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">

              <div className="flex items-center gap-2">
                <Sparkles
                  className="h-3.5 w-3.5 text-[#8B5CF6]"
                  strokeWidth={1.8}
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                  Technology Talent Network
                </span>
              </div>

              <div className="hidden h-px w-16 bg-gradient-to-r from-[#8B5CF6]/40 to-[#06B6D4]/40 sm:block" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                VAYTRIX / EMPLOYER SOLUTIONS
              </span>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default EmployerHero;