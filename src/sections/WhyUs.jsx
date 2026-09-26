
import { motion } from "framer-motion";

import {
  Award,
  BriefcaseBusiness,
  Handshake,
  Headset,
  Lightbulb,
  Users,
  ArrowUpRight,
} from "lucide-react";

import bgImage from "../assets/env-bg.webp";

function WhyUs() {
  const data = [
    {
      number: "01",
      title: "Quality In Every Solution",
      desc: "We deliver innovative technology solutions with a strong focus on quality, accuracy, lasting value, and meaningful business growth.",
      ui: <Award size={21} strokeWidth={1.8} />,
    },
    {
      number: "02",
      title: "Trusted by 150+ Businesses",
      desc: "We build lasting client relationships through dependable services, clear communication, and consistent delivery across every engagement.",
      ui: <Handshake size={21} strokeWidth={1.8} />,
    },
    {
      number: "03",
      title: "Experience Across Industries",
      desc: "Our proven expertise helps organizations adopt scalable, innovative, and future-focused technologies for sustainable digital growth.",
      ui: <BriefcaseBusiness size={21} strokeWidth={1.8} />,
    },
    {
      number: "04",
      title: "Experienced Technology Professionals",
      desc: "Our skilled professionals bring technical knowledge, creative thinking, and strategic expertise to deliver measurable business outcomes.",
      ui: <Users size={21} strokeWidth={1.8} />,
    },
    {
      number: "05",
      title: "Technology Built for Business",
      desc: "We provide modern IT, AI, and consulting solutions that help organizations improve efficiency, scale operations, and accelerate growth.",
      ui: <Lightbulb size={21} strokeWidth={1.8} />,
    },
    {
      number: "06",
      title: "Dedicated Client Support",
      desc: "We provide personalized guidance, continuous support, and close collaboration throughout every phase of your project.",
      ui: <Headset size={21} strokeWidth={1.8} />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050508] py-20 sm:py-24 lg:py-28">

      {/* BACKGROUND IMAGE */}
      <div
        className="
      pointer-events-none
      absolute
      inset-0
      bg-cover
      bg-center
      bg-fixed
      opacity-[0.38]
    "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />



      {/* GRADIENT OVERLAY */}
      <div
        className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-b
      from-[#050508]/15
      via-[#050508]/5
      to-[#050508]/25
    "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1250px] text-center">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto mb-14 max-w-3xl"
        >
          {/* Label */}

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#8B5CF6]/25
              bg-white/[0.025]
              px-4
              py-1.5
              font-mono
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#A855F7]
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-gradient-to-r
                from-[#8B5CF6]
                to-[#06B6D4]
                shadow-[0_0_10px_rgba(139,92,246,0.6)]
              "
            />

            WHY VAYTRIX
          </div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-semibold
              leading-[1.08]
              tracking-[-0.04em]
              text-[#F8FAFC]
              md:text-4xl
              lg:text-[42px]
            "
          >
            Why

            <span
              className="
                ml-2
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#3B82F6]
                to-[#06B6D4]
                bg-clip-text
                text-transparent
              "
            >
              Choose Us
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              text-[14px]
              leading-7
              text-[#94A3B8]
              md:text-[16px]
            "
          >
            We bring together technology, industry knowledge, and a client-first
            approach to create scalable solutions that improve performance,
            support business growth, and help organizations stay ready for
            a rapidly changing digital landscape.
          </p>
        </motion.div>

        {/* =======================================================
            WHY US GRID
        ======================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {data.map((item, i) => (
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
                duration: 0.5,
                delay: i * 0.07,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="
                group
                relative
                min-h-[235px]
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[rgba(10,10,15,0.72)]
                p-5
                text-left
                shadow-[0_18px_60px_rgba(0,0,0,0.3)]
                backdrop-blur-[20px]
                transition-all
                duration-500
                hover:border-[#8B5CF6]/45
                hover:bg-[rgba(13,13,22,0.82)]
                hover:shadow-[0_25px_75px_rgba(139,92,246,0.15),0_0_45px_rgba(6,182,212,0.06)]
                sm:p-6
              "
            >
              {/* =================================================
                  GRADIENT BORDER GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#8B5CF6]/0
                  via-transparent
                  to-[#06B6D4]/0
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:from-[#8B5CF6]/10
                  group-hover:to-[#06B6D4]/10
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  TOP ACCENT
              ================================================= */}

              <div
                className="
                  absolute
                  left-5
                  right-5
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#8B5CF6]/0
                  to-transparent
                  transition-all
                  duration-500
                  group-hover:via-[#06B6D4]/70
                "
              />

              {/* =================================================
                  PURPLE HOVER GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-[#8B5CF6]/0
                  blur-[70px]
                  transition-all
                  duration-700
                  group-hover:bg-[#8B5CF6]/20
                "
              />

              {/* =================================================
                  CYAN HOVER GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -right-20
                  h-40
                  w-40
                  rounded-full
                  bg-[#06B6D4]/0
                  blur-[70px]
                  transition-all
                  duration-700
                  group-hover:bg-[#06B6D4]/12
                "
              />

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  min-h-[185px]
                  flex-col
                "
              >
                {/* Top Row */}

                <div className="flex items-start justify-between">

                  {/* Number */}

                  <span
                    className="
                      font-mono
                      text-[9px]
                      font-medium
                      tracking-[0.15em]
                      text-[#64748B]
                      transition-colors
                      duration-300
                      group-hover:text-[#8B5CF6]
                    "
                  >
                    {item.number}
                  </span>

                  {/* Arrow */}

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
                      bg-white/[0.02]
                      text-[#64748B]
                      transition-all
                      duration-500
                      group-hover:border-[#8B5CF6]/40
                      group-hover:bg-[#8B5CF6]/10
                      group-hover:text-[#F8FAFC]
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
                    ICON + TITLE
                ================================================= */}

                <div className="mt-6 flex items-center gap-3">

                  {/* Icon */}

                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/[0.09]
                      bg-[#11111A]
                      text-[#8B5CF6]
                      shadow-[0_8px_25px_rgba(0,0,0,0.3)]
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:border-[#8B5CF6]/40
                      group-hover:bg-gradient-to-br
                      group-hover:from-[#8B5CF6]
                      group-hover:to-[#3B82F6]
                      group-hover:text-white
                      group-hover:shadow-[0_0_30px_rgba(139,92,246,0.28)]
                    "
                  >
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-white/[0.08]
                        via-transparent
                        to-transparent
                      "
                    />

                    <span className="relative z-10">
                      {item.ui}
                    </span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      text-[15px]
                      font-semibold
                      leading-5
                      tracking-[-0.015em]
                      text-[#F8FAFC]
                      transition-all
                      duration-300
                      group-hover:bg-gradient-to-r
                      group-hover:from-[#F8FAFC]
                      group-hover:via-[#C4B5FD]
                      group-hover:to-[#67E8F9]
                      group-hover:bg-clip-text
                      group-hover:text-transparent
                      md:text-[16px]
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* =================================================
                    DIVIDER
                ================================================= */}

                <div
                  className="
                    mb-3
                    mt-5
                    h-px
                    w-8
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    to-[#3B82F6]
                    transition-all
                    duration-500
                    group-hover:w-14
                  "
                />

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    text-[12px]
                    leading-6
                    text-[#94A3B8]
                    transition-colors
                    duration-300
                    group-hover:text-[#CBD5E1]
                    md:text-[13px]
                  "
                >
                  <span
                    className="
                      mr-2
                      bg-gradient-to-r
                      from-[#8B5CF6]
                      to-[#06B6D4]
                      bg-clip-text
                      font-bold
                      text-transparent
                    "
                  >
                    ✓
                  </span>

                  {item.desc}
                </p>

                {/* Bottom Indicator */}

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
                    duration-700
                    group-hover:w-full
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

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
            delay: 0.3,
          }}
          className="
            mx-auto
            mt-12
            max-w-[700px]
            border-t
            border-white/[0.08]
            pt-7
          "
        >
          <p
            className="
              text-xs
              leading-6
              text-[#64748B]
              sm:text-sm
            "
          >
            By combining expertise, innovation, and modern technology, we help
            businesses overcome challenges, unlock new opportunities, and move
            toward their goals with greater confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUs;