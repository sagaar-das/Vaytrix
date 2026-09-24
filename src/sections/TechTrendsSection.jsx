import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function TechTrendsSection() {
  const navigate = useNavigate();

  const leftItems = [
    "Data Centers Becoming Strategic Infrastructure",
    "Robotic Shifts",
    "AI and Cybersecurity",
  ];

  const rightItems = [
    "Physical AI",
    "Agentic AI in the Workforce",
  ];

  const allItems = [...leftItems, ...rightItems];

  return (
    <section className="relative overflow-hidden bg-[#050508] py-16 sm:py-20 lg:py-24">

      {/* =========================================================
          BACKGROUND GRID
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* =========================================================
          AMBIENT GLOWS
      ========================================================== */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#8B5CF6]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#06B6D4]/10 blur-[130px]" />

      {/* =========================================================
          BACKGROUND YEAR
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-2
          bottom-[-20px]
          select-none
          text-[100px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.025]
          sm:right-6
          sm:text-[150px]
          lg:text-[190px]
        "
      >
        2026
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HEADER
        ========================================================== */}
        <div className="flex flex-col gap-5 border-b border-white/[0.08] pb-7 md:flex-row md:items-end md:justify-between">

          <div className="max-w-3xl">

            {/* TECHNICAL LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-3 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#64748B]">
                Technology Intelligence / 2026
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                max-w-2xl
                text-2xl
                font-semibold
                leading-tight
                tracking-[-0.03em]
                text-[#F8FAFC]
                sm:text-3xl
                lg:text-4xl
              "
            >
              What’s Shaping Technology{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                This Year
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mt-3 max-w-xl text-sm leading-6 text-[#94A3B8]"
            >
              Explore the technology shifts influencing modern businesses,
              digital transformation, and the future of work.
            </motion.p>
          </div>

          {/* =========================================================
              EXPLORE BUTTON
          ========================================================== */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            onClick={() => navigate("/technology-trends")}
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.10]
              bg-white/[0.03]
              px-5
              py-2.5
              text-xs
              font-semibold
              text-[#F8FAFC]
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#8B5CF6]/50
              hover:bg-[#8B5CF6]/10
              hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]
            "
          >
            Explore 2026 Trends

            <span className="text-[#8B5CF6] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </div>

        {/* =========================================================
            TREND GRID
        ========================================================== */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

          {allItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.45,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[rgba(10,10,15,0.72)]
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#8B5CF6]/45
                hover:bg-[rgba(13,13,22,0.85)]
                hover:shadow-[0_12px_40px_rgba(139,92,246,0.10)]
              "
            >
              {/* CARD HOVER GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-20
                  w-20
                  rounded-full
                  bg-[#06B6D4]/10
                  blur-2xl
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* NUMBER */}
              <div className="relative mb-5 flex items-center justify-between">

                <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#64748B]">
                  0{i + 1}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] opacity-70 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" />
              </div>

              {/* VERTICAL ACCENT */}
              <div
                className="
                  absolute
                  left-0
                  top-16
                  h-7
                  w-[2px]
                  bg-gradient-to-b
                  from-[#8B5CF6]
                  to-[#06B6D4]
                  transition-all
                  duration-300
                  group-hover:h-10
                "
              />

              {/* CONTENT */}
              <p
                className="
                  relative
                  pr-2
                  text-sm
                  font-medium
                  leading-6
                  text-[#94A3B8]
                  transition-colors
                  duration-300
                  group-hover:text-[#F8FAFC]
                "
              >
                {item}
              </p>

              {/* BOTTOM LINE */}
              <div
                className="
                  mt-6
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

        {/* =========================================================
            BOTTOM TECHNICAL BAR
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-between
            gap-3
            border-t
            border-white/[0.08]
            pt-5
          "
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
            Emerging Technology Signals
          </span>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#64748B]">
              Active / 2026
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default TechTrendsSection;

