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
        py-20
        sm:px-8
        sm:py-24
        lg:px-10
        lg:py-28
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
            y: 30,
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
          className="mb-12"
        >

          {/* Technical Label */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
                <Sparkles
                  size={14}
                  className="text-[#A855F7]"
                />
              </div>

              <div>

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
                  Why Vaytrix
                </p>

                <p className="mt-1 text-xs text-[#94A3B8]">
                  Built around your business
                </p>

              </div>

            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-[#475569] sm:block">
              CAPABILITY / 06
            </span>

          </div>

          {/* Heading */}

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <h2
              className="
                max-w-3xl
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.045em]
                text-[#F8FAFC]
                sm:text-5xl
                lg:text-[54px]
              "
            >
              Why businesses
              <br />

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
                choose Vaytrix.
              </span>
            </h2>

            <p className="max-w-lg text-sm leading-7 text-[#94A3B8] lg:pb-1">

              We bring together technology, industry knowledge, and a
              client-first approach to create scalable solutions that improve
              performance, support growth, and keep businesses ready for a
              changing digital landscape.

            </p>

          </div>

        </motion.div>

        {/* =======================================================
            CAPABILITY GRID
        ======================================================== */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {data.map((item, index) => (

            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="
                group
                relative
                min-h-[275px]
                overflow-hidden
                rounded-[20px]
                border
                border-white/[0.08]
                bg-[#0A0A0F]
                p-6
                transition-all
                duration-500
                hover:border-[#8B5CF6]/40
                hover:bg-[#0D0D16]
                hover:shadow-[0_25px_80px_rgba(139,92,246,0.12)]
              "
            >

              {/* =================================================
                  HOVER BACKGROUND
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#8B5CF6]/[0.09]
                  via-transparent
                  to-[#06B6D4]/[0.05]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  LARGE NUMBER
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-2
                  -top-5
                  font-mono
                  text-[100px]
                  font-bold
                  leading-none
                  tracking-[-0.08em]
                  text-white/[0.025]
                  transition-all
                  duration-500
                  group-hover:text-[#8B5CF6]/[0.07]
                "
              >
                {item.number}
              </div>

              {/* =================================================
                  TOP LINE
              ================================================== */}

              <div className="relative z-10 flex items-center justify-between">

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                  {item.code}
                </span>

                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    text-[#64748B]
                    transition-all
                    duration-500
                    group-hover:border-[#8B5CF6]/40
                    group-hover:bg-[#8B5CF6]/10
                    group-hover:text-[#C4B5FD]
                  "
                >
                  <ArrowUpRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </div>

              </div>

              {/* =================================================
                  ICON
              ================================================== */}

              <div className="relative z-10 mt-9">

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#8B5CF6]/20
                    bg-gradient-to-br
                    from-[#8B5CF6]/10
                    to-[#3B82F6]/[0.03]
                    text-[#A78BFA]
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:border-[#8B5CF6]/50
                    group-hover:bg-gradient-to-br
                    group-hover:from-[#8B5CF6]
                    group-hover:to-[#3B82F6]
                    group-hover:text-white
                    group-hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]
                  "
                >

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-white/[0.12]
                      via-transparent
                      to-transparent
                    "
                  />

                  <span className="relative z-10">
                    {item.ui}
                  </span>

                </div>

              </div>

              {/* =================================================
                  TITLE
              ================================================== */}

              <h3
                className="
                  relative
                  z-10
                  mt-6
                  max-w-[270px]
                  text-lg
                  font-semibold
                  leading-6
                  tracking-[-0.02em]
                  text-[#F8FAFC]
                  transition-all
                  duration-300
                  group-hover:bg-gradient-to-r
                  group-hover:from-[#F8FAFC]
                  group-hover:to-[#67E8F9]
                  group-hover:bg-clip-text
                  group-hover:text-transparent
                "
              >
                {item.title}
              </h3>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p
                className="
                  relative
                  z-10
                  mt-3
                  max-w-[330px]
                  text-xs
                  leading-6
                  text-[#64748B]
                  transition-colors
                  duration-300
                  group-hover:text-[#94A3B8]
                  sm:text-[13px]
                "
              >
                {item.desc}
              </p>

              {/* =================================================
                  BOTTOM PROGRESS LINE
              ================================================== */}

              <div className="absolute bottom-0 left-0 right-0">

                <div
                  className="
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    via-[#3B82F6]
                    to-[#06B6D4]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />

              </div>

              {/* Corner glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -right-16
                  h-32
                  w-32
                  rounded-full
                  bg-[#06B6D4]/0
                  blur-[60px]
                  transition-all
                  duration-700
                  group-hover:bg-[#06B6D4]/10
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
            mt-10
            flex
            flex-col
            gap-5
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

            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#475569]">
              Vaytrix Advantage
            </p>

            <p className="mt-1 text-sm text-[#94A3B8]">
              Expertise, innovation, technology, and people working together.
            </p>

          </div>

          <div className="flex items-center gap-3">

            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#475569]">
              06 Capabilities
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
              Active
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default WhyUs;