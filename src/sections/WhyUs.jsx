import { motion } from "framer-motion";

import {
  Award,
  BriefcaseBusiness,
  Handshake,
  Headset,
  Lightbulb,
  Users,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";

function WhyUs() {
  const data = [
    {
      number: "01",
      title: "Quality In Every Solution",
      desc: "We deliver innovative technology solutions with a strong focus on quality, accuracy, lasting value, and meaningful business growth.",
      ui: <Award size={22} strokeWidth={1.7} />,
      code: "QUALITY",
    },
    {
      number: "02",
      title: "Trusted by 150+ Businesses",
      desc: "We build lasting client relationships through dependable services, clear communication, and consistent delivery across every engagement.",
      ui: <Handshake size={22} strokeWidth={1.7} />,
      code: "TRUST",
    },
    {
      number: "03",
      title: "Experience Across Industries",
      desc: "Our proven expertise helps organizations adopt scalable, innovative, and future-focused technologies for sustainable digital growth.",
      ui: <BriefcaseBusiness size={22} strokeWidth={1.7} />,
      code: "EXPERTISE",
    },
    {
      number: "04",
      title: "Experienced Technology Professionals",
      desc: "Our skilled professionals bring technical knowledge, creative thinking, and strategic expertise to deliver measurable business outcomes.",
      ui: <Users size={22} strokeWidth={1.7} />,
      code: "PEOPLE",
    },
    {
      number: "05",
      title: "Technology Built for Business",
      desc: "We provide modern IT, AI, and consulting solutions that help organizations improve efficiency, scale operations, and accelerate growth.",
      ui: <Lightbulb size={22} strokeWidth={1.7} />,
      code: "INNOVATION",
    },
    {
      number: "06",
      title: "Dedicated Client Support",
      desc: "We provide personalized guidance, continuous support, and close collaboration throughout every phase of your project.",
      ui: <Headset size={22} strokeWidth={1.7} />,
      code: "SUPPORT",
    },
  ];

  return (
    <section
      id="why-us"
      className="
        relative
        overflow-hidden
        bg-[#050508]
        px-5
        py-10
        sm:px-8
        sm:py-15
        lg:px-10
        lg:py-15
      "
    >

      {/* =========================================================
          TECHNICAL BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Violet glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[15%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#8B5CF6]/10
          blur-[160px]
        "
      />

      {/* Cyan glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[220px]
          bottom-[10%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#06B6D4]/[0.07]
          blur-[160px]
        "
      />

      {/* Center glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#3B82F6]/[0.035]
          blur-[150px]
        "
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* =======================================================
    HEADER
======================================================== */}

<motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  className="mb-7 text-center"
>

  {/* Technical Label */}

  <ScrollReveal>
                        <div className="mb-4 flex items-center justify-center gap-3">
            
                          <span className="font-mono text-[16px] font-medium tracking-[0.25em] text-[#7689a3]">
                            04
                          </span>
            
                          <span className="h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />
            
                          <span className="font-mono text-[16px] uppercase tracking-[0.22em] text-[#A78BFA]">
                            Why Choose Us
                          </span>
            
                          <span className="h-px w-10 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]" />
            
                        </div>
                      </ScrollReveal>

  {/* Heading */}

  <h2
    className="
      mx-auto
      max-w-2xl
      text-3xl
      font-semibold
      leading-[1.05]
      tracking-[-0.04em]
      text-[#F8FAFC]
      sm:text-4xl
      lg:text-[55px]
    "
  >
    Why clients{" "}
    <span
      className="
        bg-gradient-to-r
        from-[#A855F7]
        via-[#3B82F6]
        to-[#06B6D4]
        bg-clip-text
        text-transparent
      "
    >
      choose Vaytrix
    </span>
  </h2>

  {/* Description */}

  <p
    className="
      mx-auto
      mt-5
      max-w-2xl
      text-xs
      leading-5
      text-[#94A3B8]
      sm:text-base
    "
  >
   We bring together technology, industry expertise, and a
client-first approach to deliver scalable solutions that enhance
performance, accelerate growth, and help you stay ahead in a
changing digital landscape.
  </p>

</motion.div>

        
{/* =======================================================
    ULTRA-FUTURISTIC CAPABILITY GRID
======================================================== */}

<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {data.map((item, index) => (
    <motion.div
      key={item.number}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.99 }}
      className="
        capability-card group relative isolate
        min-h-[170px] overflow-hidden rounded-[20px]
        border border-white/[0.09]
        bg-[#070710] p-4
        transition-all duration-500
        hover:border-violet-400/40
        hover:shadow-[0_12px_45px_rgba(99,102,241,0.14)]
      "
    >
      {/* Ambient violet glow */}
      <div
        className="
          pointer-events-none absolute -right-14 -top-14
          h-36 w-36 rounded-full
          bg-violet-600/[0.07] blur-[55px]
          transition-all duration-700
          group-hover:bg-violet-500/20
          group-hover:scale-125
        "
      />

      {/* Ambient cyan glow */}
      <div
        className="
          pointer-events-none absolute -bottom-16 -left-12
          h-32 w-32 rounded-full
          bg-cyan-500/[0.035] blur-[55px]
          transition-all duration-700
          group-hover:bg-cyan-400/15
        "
      />

      {/* Technical background grid */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          opacity-[0.12]
          [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)]
          [background-size:24px_24px]
          [mask-image:linear-gradient(to_bottom,black,transparent_85%)]
        "
      />

      {/* Hover gradient overlay */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-br from-violet-500/[0.07]
          via-transparent to-cyan-400/[0.04]
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="
              h-1.5 w-1.5 rounded-full bg-cyan-400
              shadow-[0_0_9px_rgba(34,211,238,0.8)]
            "
          />

          <span
            className="
              font-mono text-[12px] uppercase
              tracking-[0.2em] text-slate-400
            "
          >
            {item.code}
          </span>

          
        </div>

        {/* Decorative number */}
        <span
          className="
            pointer-events-none hidden select-none
            font-mono text-[34px] font-bold leading-none
            tracking-[-0.08em] text-white/25
            transition-colors duration-500
            group-hover:text-violet-300/[0.12]
            sm:block
          "
        >
          {item.number}
        </span>

        
      </div>

      {/* Icon and title in the same row */}
      <div className="relative z-10 mt-4 flex items-center gap-3">
        {/* Icon */}
        <div
          className="
            relative flex h-10 w-10 shrink-0 items-center
            justify-center overflow-hidden rounded-xl
            border border-violet-400/25
            bg-gradient-to-br from-violet-500/15 to-blue-500/[0.04]
            text-violet-300
            transition-all duration-500
            group-hover:border-cyan-300/50
            group-hover:bg-gradient-to-br
            group-hover:from-violet-500/25
            group-hover:to-cyan-400/15
            group-hover:text-cyan-200
            group-hover:shadow-[0_0_22px_rgba(139,92,246,0.2)]
          "
        >
          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-br from-white/[0.10] to-transparent
            "
          />

          <span className="relative z-10">
            {item.ui}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            min-w-0 flex-1
            text-[16px] font-semibold leading-snug
            tracking-[-0.025em] text-slate-100
            transition-all duration-300
            group-hover:text-white
            sm:text-[17px]
          "
        >
          {item.title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="
          relative z-10 mt-3 max-w-[340px]
          text-[12px] leading-[1.65] text-slate-400
          transition-colors duration-300
          group-hover:text-slate-300
          sm:text-[13px]
        "
      >
        {item.desc}
      </p>

      {/* Bottom technical footer */}
      <div
        className="
          relative z-10 mt-3 flex items-center justify-between
          border-t border-white/[0.06] pt-2
        "
      >
        <span
          className="
            font-mono text-[10px] uppercase
            tracking-[0.18em] text-slate-400
            transition-colors duration-300
            group-hover:text-cyan-300/70
          "
        >
          Capability_{String(index + 1).padStart(2, "0")}
        </span>

        <ArrowUpRight
          size={14}
          className="
            text-slate-500 transition-all duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-cyan-300
          "
        />
      </div>

      {/* Neon bottom line */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-0
          h-[2px] w-0
          bg-gradient-to-r from-violet-500 via-blue-400 to-cyan-300
          transition-all duration-500 ease-out
          group-hover:w-full
        "
      />

      {/* Futuristic corner accents */}
      <div
        className="
          pointer-events-none absolute left-0 top-0
          h-4 w-4 border-l border-t border-transparent
          transition-colors duration-300
          group-hover:border-violet-400/70
        "
      />

      <div
        className="
          pointer-events-none absolute bottom-0 right-0
          h-4 w-4 border-b border-r border-transparent
          transition-colors duration-300
          group-hover:border-cyan-400/70
        "
      />
    </motion.div>
  ))}
</div>


        {/* =======================================================
            BOTTOM MESSAGE
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-5
            flex
            flex-col
            gap-3
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.015]
            px-6
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#89a3c6]">
              Vaytrix Advantage
            </p>

            <p className="mt-1 text-sm text-[#94A3B8]">
              Expertise, innovation, technology, and people working together.
            </p>

          </div>

          <div className="flex items-center gap-3">

            <span className="text-[9px] uppercase tracking-[0.15em] text-[#89a3c6]">
              06 Capabilities
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

            <span className="text-[9px] uppercase tracking-[0.15em] text-[#89a3c6]">
              Active
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default WhyUs;