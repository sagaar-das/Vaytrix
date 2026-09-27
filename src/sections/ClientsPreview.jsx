import { motion } from "framer-motion";

const logos = [
  "bain-company-logo.svg",
  "paypal-3.svg",
  "mckinsey-company.svg",
  "amazon-web-services-2.svg",
  "intel.svg",
  "startek.svg",
  "cgi-logo.svg",
  "teleperformance-group.svg",
  "genpact-logo.svg",
  "linkedin-icon-2.svg",
  "meta-3.svg",
  "ibm.svg",
  "globant-1.svg",
  "boston-consulting-group.svg",
  "oracle-6.svg",
  "hp-hewlett-packard.svg",
  "fujitsu-logo.svg",
  "tech-mahindra-new-logo.svg",
  "wipro-1.svg",
  "infosys-technologies-logo.svg",
  "tata-consultancy-services-1.svg",
  "deloitte-1.svg",
  "capgemini-201x-logo-1.svg",
  "cognizant-1.svg",
  "accenture-6.svg",
];

function ClientsPreview() {
  const logoPath = (logo) => `/clientLogo/${logo}`;

  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-24 lg:py-28">

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
          BACKGROUND
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
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#8B5CF6]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#06B6D4]/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================================================
            SECTION LABEL
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
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
            Trusted Network
          </p>

          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
        </motion.div>

        {/* =========================================================
            HEADING
        ========================================================== */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-center
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15,
            duration: 0.5,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-center
            text-sm
            leading-7
            text-[#94A3B8]
            sm:text-base
            md:text-lg
          "
        >
          We work with organizations across industries to solve complex
          challenges, deliver modern technology solutions, and create
          meaningful long-term business value.
        </motion.p>

        {/* =========================================================
            TECHNICAL LABEL
        ========================================================== */}
        <div className="mt-10 flex items-center justify-center gap-3">

          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#8B5CF6]/40" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
            Global Client Network / 2026
          </span>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#06B6D4]/40" />

        </div>

        {/* =========================================================
            LOGO MARQUEE
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.25,
            duration: 0.6,
          }}
          className="relative mt-10"
        >

          {/* LEFT FADE */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-20
              bg-gradient-to-r
              from-[#050508]
              to-transparent
              sm:w-32
            "
          />

          {/* RIGHT FADE */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-20
              bg-gradient-to-l
              from-[#050508]
              to-transparent
              sm:w-32
            "
          />

          {/* MARQUEE VIEWPORT */}
          <div className="overflow-hidden">

            {/* TRACK */}
            <motion.div
              className="
                flex
                w-max
                gap-4
                hover:[animation-play-state:paused]
              "
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 45,
                ease: "linear",
                repeat: Infinity,
              }}
            >

              {/* FIRST SET */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="
                    group
                    flex
                    h-24
                    w-40
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[rgba(255,255,255,0.72)]
                    px-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#8B5CF6]/40
                    hover:bg-[rgba(13,13,22,0.9)]
                    hover:shadow-[0_15px_40px_rgba(139,92,246,0.12)]
                    sm:h-28
                    sm:w-48
                  "
                >
                  <img
                    src={logoPath(logo)}
                    alt={`Client logo ${index + 1}`}
                    className="
                      max-h-10
                      max-w-[125px]
                      object-contain
                      
                      transition-all
                      duration-300
                      
                      sm:max-h-11
                      sm:max-w-[145px]
                    "
                  />
                </div>
              ))}

              {/* DUPLICATE SET FOR INFINITE LOOP */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="
                    group
                    flex
                    h-24
                    w-40
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[rgba(255,255,255,0.72)]
                    px-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#8B5CF6]/40
                    hover:bg-[rgba(13,13,22,0.9)]
                    hover:shadow-[0_15px_40px_rgba(139,92,246,0.12)]
                    sm:h-28
                    sm:w-48
                  "
                >
                  <img
                    src={logoPath(logo)}
                    alt={`Client logo ${index + 1}`}
                    className="
                      max-h-10
                      max-w-[125px]
                      object-contain
                      
                      transition-all
                      duration-300
                      
                      sm:max-h-11
                      sm:max-w-[145px]
                    "
                  />
                </div>
              ))}

            </motion.div>

          </div>

        </motion.div>

        {/* =========================================================
            BOTTOM STATUS
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="mt-10 flex flex-col items-center justify-center gap-3"
        >

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
              Building Long-Term Partnerships
            </span>

          </div>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

        </motion.div>

      </div>
    </section>
  );
}

export default ClientsPreview;