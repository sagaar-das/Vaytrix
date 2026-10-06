// components/about/PurposeSection.jsx

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  HeartHandshake,
  Sparkles,
  Target,
} from "lucide-react";

const PurposeSection = () => {
  return (
    <section
      id="purpose"
      className="relative w-full overflow-hidden bg-[#050508] px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* ================= BACKGROUND GRID ================= */}

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

      {/* ================= AMBIENT GLOWS ================= */}

      <div className="pointer-events-none absolute -left-[180px] top-[10%] h-[350px] w-[350px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-[180px] bottom-[10%] h-[350px] w-[350px] rounded-full bg-[#06B6D4]/10 blur-[140px]" />

      {/* TOP LINE */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

      {/* ================= MAX WIDTH 7XL ================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-7 max-w-3xl"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-7 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/40">
              Purpose / 07
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-[1] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Our Purpose,
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Kept Personal.
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-xs leading-6 text-white/50 sm:text-sm">
            We believe meaningful growth begins with people. At Vaytrix, our
            purpose is to connect talent, opportunity, and technology in ways
            that create lasting impact.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid items-center gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          {/* ================= VISUAL ================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/4] max-w-[400px] overflow-hidden rounded-[20px] border border-white/[0.1] bg-[#0A0A0F] shadow-2xl lg:mx-0">
              {/* Image */}

              <img
                src="/AboutUsImg/MAN-1.jpg"
                alt="Vaytrix purpose and people"
                className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale-[15%]"
              />

              {/* Overlays */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/15 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/15 via-transparent to-[#06B6D4]/10" />

              {/* Technical Frame */}

              <div className="absolute inset-4 rounded-[16px] border border-white/[0.12]" />

              {/* Top Label */}

              <div className="absolute left-6 top-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_rgba(6,182,212,0.8)]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/60">
                  VAYTRIX / PURPOSE
                </span>
              </div>

              {/* Bottom Content */}

              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.12] bg-[#050508]/70 backdrop-blur-md">
                    <HeartHandshake
                      size={15}
                      className="text-[#A78BFA]"
                    />
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/40">
                    PEOPLE FIRST
                  </span>
                </div>

                <h3 className="text-lg font-medium leading-snug text-white sm:text-xl">
                  Connecting potential with meaningful opportunity.
                </h3>
              </div>

              {/* Corner Markers */}

              <div className="absolute left-4 top-4 h-4 w-4 border-l border-t border-[#8B5CF6]/50" />

              <div className="absolute right-4 top-4 h-4 w-4 border-r border-t border-[#06B6D4]/50" />

              <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-[#06B6D4]/50" />

              <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[#8B5CF6]/50" />
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {/* Mission */}

            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#8B5CF6]/20 bg-[#8B5CF6]/10">
                <Target size={15} className="text-[#A78BFA]" />
              </div>

              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/35">
                  OUR MISSION
                </p>

                <p className="mt-0.5 text-xs text-white/70">
                  Turning ambition into possibility
                </p>
              </div>
            </div>

            {/* Main Text */}

            <div className="space-y-3 text-xs leading-6 text-white/50 sm:text-sm">
              <p>
                At <span className="text-white">Vaytrix</span>, we believe an
                organization’s success starts with the people behind it—their
                skills, ambitions, ideas, and potential.
              </p>

              <p>
                Our purpose is to connect exceptional technology talent with
                forward-thinking organizations, helping businesses find the
                right people while professionals move closer to the careers
                they aspire to build.
              </p>

              <p>
                By bringing together{" "}
                <span className="text-white">
                  people, technology, and opportunity
                </span>
                , we create an ecosystem where innovation grows, careers
                progress, and businesses move forward.
              </p>
            </div>

            {/* ================= PURPOSE CARDS ================= */}

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <PurposePoint
                icon={Sparkles}
                title="Empower Potential"
                text="Helping individuals transform capabilities and aspirations into meaningful career opportunities."
                accent="violet"
              />

              <PurposePoint
                icon={ArrowUpRight}
                title="Create Impact"
                text="Helping organizations access capable talent and build stronger, future-ready teams."
                accent="cyan"
              />
            </div>

            {/* ================= FOUNDER QUOTE ================= */}

            <div className="mt-5 border-l border-[#8B5CF6]/40 pl-4">
              <p className="text-xs italic leading-6 text-white/55">
                “Our purpose is to create an ecosystem where people and
                technology come together to turn aspirations into real
                possibilities.”
              </p>

              <div className="mt-2">
                <p className="text-xs font-medium text-white">
                  Founder, Vaytrix
                </p>

                <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.2em] text-white/30">
                  VAYTRIX / LEADERSHIP
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-7 border-t border-white/[0.07] pt-4"
        >
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/30">
              PEOPLE / TECHNOLOGY / OPPORTUNITY
            </p>

            <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
              VAYTRIX / PURPOSE_ENGINE
            </p>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM LINE */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </section>
  );
};

/* =========================================================
   PURPOSE POINT
========================================================= */

const PurposePoint = ({ icon: Icon, title, text, accent }) => {
  const isCyan = accent === "cyan";

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0A0A0F]/80 p-4 backdrop-blur-xl"
    >
      {/* Hover Glow */}

      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl ${
          isCyan
            ? "bg-[#06B6D4]/10"
            : "bg-[#8B5CF6]/10"
        }`}
      />

      {/* Icon */}

      <div
        className={`relative mb-3 flex h-8 w-8 items-center justify-center rounded-lg border ${
          isCyan
            ? "border-[#06B6D4]/20 bg-[#06B6D4]/10"
            : "border-[#8B5CF6]/20 bg-[#8B5CF6]/10"
        }`}
      >
        <Icon
          size={14}
          className={isCyan ? "text-[#67E8F9]" : "text-[#A78BFA]"}
        />
      </div>

      <h4 className="relative text-xs font-medium text-white">
        {title}
      </h4>

      <p className="relative mt-1.5 text-[11px] leading-5 text-white/40">
        {text}
      </p>

      {/* Accent Line */}

      <div
        className={`absolute bottom-0 left-4 right-4 h-px ${
          isCyan
            ? "bg-gradient-to-r from-[#06B6D4] to-transparent"
            : "bg-gradient-to-r from-[#8B5CF6] to-transparent"
        }`}
      />
    </motion.div>
  );
};

export default PurposeSection;