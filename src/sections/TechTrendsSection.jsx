import { motion } from "framer-motion";
import { ArrowUpRight, Orbit, Radar, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TechTrendsSection() {
  const navigate = useNavigate();

  const trends = [
    {
      number: "01",
      category: "INFRASTRUCTURE",
      title: "Data Centers Evolving Into Critical Infrastructure",
      short: "Infrastructure",
    },
    {
      number: "02",
      category: "AUTOMATION",
      title: "The Rise of Robotic Automation",
      short: "Automation",
    },
    {
      number: "03",
      category: "SECURITY",
      title: "AI-Powered Cybersecurity",
      short: "Cybersecurity",
    },
    {
      number: "04",
      category: "PHYSICAL AI",
      title: "The Emergence of Physical AI",
      short: "Physical AI",
    },
    {
      number: "05",
      category: "WORKPLACE AI",
      title: "Agentic AI Transforming the Workplace",
      short: "Agentic AI",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050508] py-20 sm:py-24 lg:py-32">

      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#06B6D4]/10 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =========================================================
            TOP HEADER
        ========================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          {/* LEFT — BIG YEAR */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
                <Radar
                  size={16}
                  className="text-[#A855F7]"
                />
              </div>

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#64748B]">
                Technology Radar
              </span>
            </div>

            <div className="relative">

              <div
                className="
                  absolute
                  -right-10
                  -top-8
                  select-none
                  text-[150px]
                  font-black
                  leading-none
                  tracking-[-0.10em]
                  text-white/[0.045]
                  sm:text-[190px]
                  lg:text-[230px]
                "
              >
                2026
              </div>

              <h2
                className="
                  relative
                  max-w-xl
                  text-4xl
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-[#F8FAFC]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                The technology
                <br />

                <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                  landscape is shifting.
                </span>
              </h2>

            </div>

          </motion.div>


          {/* RIGHT — INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex flex-col items-start lg:items-end"
          >

            <p className="max-w-xl text-base leading-7 text-[#94A3B8] lg:text-right">
              Discover the technologies influencing how businesses operate,
              automate, secure their environments, and prepare for the next
              generation of digital growth.
            </p>

            <button
              onClick={() => navigate("/technology-trends")}
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                border-b
                border-white/20
                pb-2
                text-sm
                font-medium
                text-[#F8FAFC]
                transition-all
                duration-300
                hover:border-[#06B6D4]
              "
            >
              Explore technology trends

              <ArrowUpRight
                size={16}
                className="
                  text-[#06B6D4]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </button>

          </motion.div>

        </div>


        {/* =========================================================
            DIVIDER
        ========================================================== */}

        <div className="mt-14 h-px w-full bg-white/[0.08] sm:mt-20" />


        {/* =========================================================
    COMPACT TECHNOLOGY RADAR
========================================================== */}

        <div className="mt-6">

          {/* HEADER */}
          <div className="mb-2 hidden grid-cols-[60px_130px_1fr_30px] px-3 md:grid">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
              No.
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
              Domain
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
              Emerging Signal
            </span>

            <span />
          </div>


          {/* TREND ROWS */}

          <div>
            {trends.map((trend, index) => (

              <motion.div
                key={trend.number}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.4,
                }}
                className="
          group
          relative
          border-t
          border-white/[0.07]
          transition-all
          duration-300
          hover:bg-white/[0.02]
        "
              >

                {/* LEFT HOVER LINE */}
                <div
                  className="
            absolute
            left-0
            top-0
            h-full
            w-[2px]
            origin-top
            scale-y-0
            bg-gradient-to-b
            from-[#8B5CF6]
            to-[#06B6D4]
            transition-transform
            duration-300
            group-hover:scale-y-100
          "
                />

                <div
                  className="
            grid
            min-h-[82px]
            items-center
            gap-3
            px-3
            py-4
            md:grid-cols-[60px_130px_1fr_30px]
            md:gap-4
            md:py-4
            lg:min-h-[88px]
            lg:px-4
          "
                >

                  {/* NUMBER */}

                  <div className="flex items-center gap-2">

                    <span
                      className="
                font-mono
                text-[10px]
                font-medium
                tracking-[0.12em]
                text-[#64748B]
                transition-colors
                duration-300
                group-hover:text-[#A855F7]
              "
                    >
                      {trend.number}
                    </span>

                    <span className="h-px w-3 bg-white/10 transition-all duration-300 group-hover:w-5 group-hover:bg-[#8B5CF6]/60" />

                  </div>


                  {/* CATEGORY */}

                  <div>
                    <span
                      className="
                inline-flex
                rounded-full
                border
                border-white/[0.07]
                px-2.5
                py-1
                font-mono
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#64748B]
                transition-all
                duration-300
                group-hover:border-[#8B5CF6]/30
                group-hover:text-[#A855F7]
              "
                    >
                      {trend.category}
                    </span>
                  </div>


                  {/* TITLE */}

                  <div>

                    <h3
                      className="
                max-w-2xl
                text-base
                font-medium
                leading-5
                tracking-[-0.015em]
                text-[#CBD5E1]
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:text-[#F8FAFC]
                sm:text-[17px]
                lg:text-lg
              "
                    >
                      {trend.title}
                    </h3>

                    {/* MOBILE LABEL */}

                    <div className="mt-1.5 flex items-center gap-1.5 md:hidden">

                      <span className="h-1 w-1 rounded-full bg-[#06B6D4]" />

                      <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#475569]">
                        {trend.short}
                      </span>

                    </div>

                  </div>


                  {/* ARROW */}

                  <div className="hidden md:flex">

                    <ArrowUpRight
                      size={15}
                      className="
                text-[#475569]
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[#06B6D4]
              "
                    />

                  </div>

                </div>


                {/* HOVER UNDERLINE */}

                <div
                  className="
            absolute
            bottom-0
            left-0
            h-px
            w-0
            bg-gradient-to-r
            from-[#8B5CF6]
            via-[#3B82F6]
            to-[#06B6D4]
            transition-all
            duration-500
            group-hover:w-full
          "
                />

              </motion.div>

            ))}
          </div>

        </div>


        {/* =========================================================
            BOTTOM FEATURE AREA
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="
            mt-10
            grid
            gap-4
            sm:grid-cols-3
          "
        >

          {/* SIGNAL */}

          <div className="flex items-center gap-4 border border-white/[0.07] bg-white/[0.02] px-5 py-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/10">
              <Orbit
                size={16}
                className="text-[#A855F7]"
              />
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#475569]">
                Signal
              </p>

              <p className="mt-1 text-xs font-medium text-[#CBD5E1]">
                Emerging Technologies
              </p>
            </div>

          </div>


          {/* YEAR */}

          <div className="flex items-center gap-4 border border-white/[0.07] bg-white/[0.02] px-5 py-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/10">
              <Sparkles
                size={16}
                className="text-[#3B82F6]"
              />
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#475569]">
                Outlook
              </p>

              <p className="mt-1 text-xs font-medium text-[#CBD5E1]">
                2026 Technology Shift
              </p>
            </div>

          </div>


          {/* STATUS */}

          <div className="flex items-center justify-between border border-white/[0.07] bg-white/[0.02] px-5 py-4">

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#475569]">
                Intelligence
              </p>

              <p className="mt-1 text-xs font-medium text-[#CBD5E1]">
                Tracking Technology
              </p>
            </div>

            <div className="flex items-center gap-2">

              <span className="h-2 w-2 animate-pulse rounded-full bg-[#06B6D4] shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#06B6D4]">
                Active
              </span>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default TechTrendsSection;

