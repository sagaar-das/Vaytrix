import { motion } from "framer-motion";
import { ArrowUpRight, PhoneCall, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";

function EmployerCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#050508] px-5 py-10 sm:px-8 lg:px-10 lg:py-10">

      {/* =========================================================
          BACKGROUND SYSTEM
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Violet ambient glow */}
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

        {/* Cyan ambient glow */}
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-[#06B6D4]/[0.07] blur-[130px]" />

        {/* Blue ambient glow */}
        <div className="absolute bottom-20 left-0 h-[300px] w-[300px] rounded-full bg-[#3B82F6]/[0.06] blur-[120px]" />
      </div>

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

      {/* =========================================================
          MAIN CTA
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl"
      >

        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[rgba(10,10,15,0.82)] px-6 py-10 backdrop-blur-2xl sm:px-10 md:px-16 md:py-10">

          {/* =====================================================
              INNER LIGHT EFFECTS
          ===================================================== */}

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[110px]" />

            <div className="absolute bottom-[-180px] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#06B6D4]/[0.06] blur-[100px]" />

          </div>

          {/* Top technical line */}
          <div className="relative mb-10 flex items-center justify-between border-b border-white/[0.06] pb-5">

            <div className="flex items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
                <Sparkles
                  size={15}
                  className="text-[#A855F7]"
                />
              </div>

              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#9ab2d3]">
                Employer Solutions
              </span>

            </div>

            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#9ab2d3]">
              VAYTRIX / 05
            </span>

          </div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <div className="relative z-10 text-center">

            {/* Badge */}
            <ScrollReveal>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#C4B5FD]">
                  Ready To Build Your Team?
                </span>

              </div>

            </ScrollReveal>

            {/* Heading */}
            <ScrollReveal delay={0.1}>

              <h2 className="mx-auto mt-7 max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl lg:text-6xl">

                Build a Technology Team
                <br />

                <span className="bg-gradient-to-r from-[#A855F7] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                  Ready to Deliver
                </span>

              </h2>

            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={0.2}>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base md:text-lg">

                Whether you need a single technology professional or an
                entire engineering team, Vaytrix helps you connect with
                qualified talent through a faster and more structured
                hiring process.

              </p>

            </ScrollReveal>

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <ScrollReveal delay={0.3}>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

                <motion.a
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@vaytrixtechit.com&su=Hiring%20Inquiry%20-%20VaytrixTechIT&body=Hello%20VaytrixTechIT%20Team%2C%0A%0AI%20am%20interested%20in%20discussing%20your%20staffing%20and%20hiring%20services.%20I%20would%20like%20to%20understand%20how%20VaytrixTechIT%20can%20support%20our%20hiring%20requirements.%0A%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0A%0ARegards%2C%0A%5BYour%20Name%5D"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group inline-flex items-center justify-center gap-3
    rounded-xl
    bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]
    px-7 py-3.5
    font-semibold text-white
    shadow-[0_0_35px_rgba(139,92,246,0.2)]
    transition-all duration-300
    hover:brightness-110
    hover:shadow-[0_0_45px_rgba(139,92,246,0.32)]
  "
>
  Start Hiring

  <ArrowUpRight
    size={19}
    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</motion.a>

                {/* Secondary CTA */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:+1812 495 4121"
                  className="
                    group inline-flex items-center justify-center gap-3
                    rounded-xl
                    border border-white/[0.12]
                    bg-white/[0.03]
                    px-7 py-3.5
                    font-semibold text-[#F8FAFC]
                    backdrop-blur-md
                    transition-all duration-300
                    hover:border-[#8B5CF6]/50
                    hover:bg-[#8B5CF6]/10
                  "
                >

                  <PhoneCall
                    size={18}
                    className="text-[#06B6D4] transition-transform duration-300 group-hover:scale-110"
                  />

                  Schedule a Consultation

                </motion.a>

              </div>

            </ScrollReveal>

          </div>

          {/* =====================================================
              BOTTOM TECHNICAL STRIP
          ===================================================== */}

          <div className="relative mt-12 grid grid-cols-1 gap-3 border-t border-white/[0.06] pt-5 sm:grid-cols-3">

            <div className="text-center sm:text-left">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#9ab2d3]">
                Talent Access
              </p>
              <p className="mt-1 text-[15px] text-[#94A3B8]">
                Qualified Technology Professionals
              </p>
            </div>

            <div className="text-center">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#9ab2d3]">
                Hiring Model
              </p>
              <p className="mt-1 text-[15px] text-[#94A3B8]">
                Flexible & Scalable
              </p>
            </div>

            <div className="text-center sm:text-right">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#9ab2d3]">
                Next Step
              </p>
              <p className="mt-1 text-[15px] text-[#94A3B8]">
                Start a Conversation
              </p>
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default EmployerCTA;