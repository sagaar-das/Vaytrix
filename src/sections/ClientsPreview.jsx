import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ClientsPreview() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">

      {/* =========================================================
          TECHNICAL GRID
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
          BACKGROUND GRADIENT
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-[#050508]
          via-[#0A0A0F]
          to-[#050508]
        "
      />

      {/* =========================================================
          AMBIENT GLOWS
      ========================================================== */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#8B5CF6]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#06B6D4]/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* =========================================================
            SMALL HEADING
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#8B5CF6]" />

          <p
            className="
              font-mono
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#A78BFA]
              sm:text-xs
            "
          >
            Our Clients
          </p>

          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
        </motion.div>

        {/* =========================================================
            HEADING
        ========================================================== */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-3xl
            font-semibold
            leading-tight
            tracking-[-0.04em]
            text-[#F8FAFC]
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          Trusted by{" "}
          <span className="relative inline-block">

            <span
              className="
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#3B82F6]
                to-[#06B6D4]
                bg-clip-text
                text-transparent
              "
            >
              Industry Leaders
            </span>

            {/* Gradient underline */}
            <span
              className="
                absolute
                -bottom-1
                left-0
                h-[2px]
                w-full
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#3B82F6]
                to-[#06B6D4]
                opacity-60
              "
            />

          </span>
        </motion.h2>

        {/* =========================================================
            DESCRIPTION
        ========================================================== */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-sm
            leading-7
            text-[#94A3B8]
            sm:text-base
            md:text-lg
          "
        >
          Our clients trust us to transform complex challenges into
          actionable insights, delivering reliable analytics, modern
          solutions, and consistent value that drives business success
          and long-term partnerships.
        </motion.p>

        {/* =========================================================
            CTA
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
          className="mt-10"
        >
          <button
            onClick={() => navigate("/clients")}
            className="
              group
              relative
              overflow-hidden
              rounded-full
              border
              border-[#8B5CF6]/40
              bg-[rgba(10,10,15,0.72)]
              px-7
              py-3
              text-sm
              font-semibold
              text-[#F8FAFC]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[#8B5CF6]/70
              hover:shadow-[0_0_30px_rgba(139,92,246,0.20)]
              sm:px-8
            "
          >
            {/* Hover Gradient */}
            <span
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#8B5CF6]/10
                via-[#3B82F6]/10
                to-[#06B6D4]/10
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            {/* Button Content */}
            <span className="relative flex items-center justify-center gap-2">
              View More

              <span
                className="
                  text-[#A78BFA]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#06B6D4]
                "
              >
                →
              </span>
            </span>
          </button>
        </motion.div>

        {/* =========================================================
            TECHNICAL FOOTER
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/10" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
            Trusted Partnerships / Long-Term Value
          </span>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>

      </div>
    </section>
  );
}

export default ClientsPreview;

