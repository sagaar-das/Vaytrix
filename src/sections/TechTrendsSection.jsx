import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Orbit,
  Radar,
  Sparkles,
  Cloud,
} from "lucide-react";
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
    {
      number: "06",
      category: "CLOUD",
      title: "Cloud-Native Architecture Driving Scalable Growth",
      short: "Cloud",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050508] py-6 sm:py-8 lg:py-10">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

        <div className="absolute bottom-[-160px] right-[-120px] h-[350px] w-[350px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            CENTERED HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}

          <div className="mb-3 flex items-center justify-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
              <Radar
                size={13}
                className="text-[#A855F7]"
              />
            </div>

            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#64748B]">
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
                  lg:text-[150px]
                "
              >
                2026 - 2027
              </div>
          {/* Heading */}

          <h2
            className="
              text-3xl
              font-semibold
              leading-[1.05]
              tracking-[-0.045em]
              text-[#F8FAFC]
              sm:text-4xl
              lg:text-[46px]
            "
          >
            The technology{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              landscape is shifting.
            </span>
          </h2>

          </div>

          {/* Description */}

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
           Discover the technologies helping our clients innovate,
automate, strengthen security, and build the capabilities needed
for sustainable digital growth.
          </p>

          {/* CTA */}

          <button
            onClick={() => navigate("/technology-trends")}
            className="
              group
              mt-4
              inline-flex
              items-center
              gap-2
              border-b
              border-white/20
              pb-1.5
              text-xs
              font-medium
              text-[#F8FAFC]
              transition-all
              duration-300
              hover:border-[#06B6D4]
            "
          >
            Explore technology trends

            <ArrowUpRight
              size={14}
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

        {/* =========================================================
            DIVIDER
        ========================================================== */}

        <div className="mt-6 h-px w-full bg-white/[0.08]" />

        {/* =========================================================
            TECHNOLOGY TREND GRID
        ========================================================== */}

        <div className="mt-5">
          <div className="grid gap-3 md:grid-cols-2">

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
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-white/[0.015]
                  transition-all
                  duration-300
                  hover:bg-white/[0.03]
                  hover:border-white/[0.12]
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
                    relative
                    flex
                    min-h-[105px]
                    flex-col
                    justify-between
                    p-4
                    sm:min-h-[100px]
                    sm:p-5
                  "
                >

                  {/* TOP ROW */}

                  <div className="flex items-start justify-between gap-3">

                    {/* NUMBER */}

                    <div className="flex items-center gap-2">
                      <span
                        className="
                          font-mono
                          text-[9px]
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

                      <span
                        className="
                          h-px
                          w-3
                          bg-white/10
                          transition-all
                          duration-300
                          group-hover:w-5
                          group-hover:bg-[#8B5CF6]/60
                        "
                      />
                    </div>

                    {/* CATEGORY */}

                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-white/[0.07]
                        px-2
                        py-1
                        font-mono
                        text-[7px]
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

                  <div className="mt-4 flex items-end justify-between gap-4">

                    <div>
                      <h3
                        className="
                          max-w-xl
                          text-sm
                          font-medium
                          leading-5
                          tracking-[-0.015em]
                          text-[#CBD5E1]
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-[#F8FAFC]
                          sm:text-[15px]
                        "
                      >
                        {trend.title}
                      </h3>

                      {/* MOBILE LABEL */}

                      <div className="mt-1 flex items-center gap-1.5 md:hidden">
                        <span className="h-1 w-1 rounded-full bg-[#06B6D4]" />

                        <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-[#475569]">
                          {trend.short}
                        </span>
                      </div>
                    </div>

                    {/* ARROW */}

                    <ArrowUpRight
                      size={15}
                      className="
                        shrink-0
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="
            mt-5
            grid
            gap-3
            sm:grid-cols-3
          "
        >

          {/* SIGNAL */}

          <div
            className="
              flex
              items-center
              gap-3
              rounded-lg
              border
              border-white/[0.07]
              bg-white/[0.02]
              px-4
              py-3
            "
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/10">
              <Orbit
                size={14}
                className="text-[#A855F7]"
              />
            </div>

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#475569]">
                Signal
              </p>

              <p className="mt-0.5 text-[11px] font-medium text-[#CBD5E1]">
                Emerging Technologies
              </p>
            </div>
          </div>

          {/* YEAR */}

          <div
            className="
              flex
              items-center
              gap-3
              rounded-lg
              border
              border-white/[0.07]
              bg-white/[0.02]
              px-4
              py-3
            "
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/10">
              <Sparkles
                size={14}
                className="text-[#3B82F6]"
              />
            </div>

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#475569]">
                Outlook
              </p>

              <p className="mt-0.5 text-[11px] font-medium text-[#CBD5E1]">
                2026 Technology Shift
              </p>
            </div>
          </div>

          {/* STATUS */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-3
              rounded-lg
              border
              border-white/[0.07]
              bg-white/[0.02]
              px-4
              py-3
            "
          >
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#475569]">
                Intelligence
              </p>

              <p className="mt-0.5 text-[11px] font-medium text-[#CBD5E1]">
                Tracking Technology
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#06B6D4]">
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

