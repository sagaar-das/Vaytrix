import React from "react";
import { motion } from "framer-motion";

import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[calc(100vh-78px)]
        overflow-hidden
        bg-[#050508]
        text-[#F8FAFC]
      "
    >

      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      {/* Purple Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#8B5CF6]/15
          blur-[130px]
        "
      />

      {/* Blue / Cyan Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#06B6D4]/10
          blur-[140px]
        "
      />

      {/* Center Violet Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-[#8B5CF6]/[0.04]
          via-[#3B82F6]/[0.06]
          to-[#06B6D4]/[0.04]
          blur-[150px]
        "
      />

      {/* =====================================================
          TECHNICAL GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.7)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-78px)]
          max-w-[1440px]
          items-center
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-10
          lg:py-20
        "
      >

        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-10
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-10 max-w-[720px]">

            {/* Small Label */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.12]
                bg-white/[0.04]
                px-4
                py-2
                shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                backdrop-blur-md
              "
            >

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#8B5CF6]
                  to-[#06B6D4]
                  shadow-[0_0_12px_rgba(6,182,212,0.8)]
                "
              />

              <span
                className="
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#94A3B8]
                "
              >
                DIGITAL SOLUTIONS FOR MODERN BUSINESS
              </span>

            </motion.div>


            {/* Main Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                text-[42px]
                font-extrabold
                leading-[1.02]
                tracking-[-0.04em]
                sm:text-[56px]
                md:text-[68px]
                lg:text-[72px]
                xl:text-[78px]
              "
            >
              Build

              <br />

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
                something
              </span>

              <br />

              <span className="text-[#F8FAFC]">
                extraordinary.
              </span>
            </motion.h1>


            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="
                mt-7
                max-w-[590px]
                text-[15px]
                leading-7
                text-[#94A3B8]
                sm:text-[17px]
                sm:leading-8
              "
            >
              We create innovative digital solutions that help businesses
              simplify complexity, accelerate growth, and build experiences
              that truly make a difference.
            </motion.p>


            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mt-9
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >

              {/* Primary CTA */}

              <a
                href="#contact"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-[#8B5CF6]
                  via-[#3B82F6]
                  to-[#06B6D4]
                  px-7
                  py-3.5
                  text-[15px]
                  font-semibold
                  text-white
                  shadow-[0_4px_20px_-2px_rgba(139,92,246,0.5),0_2px_10px_-2px_rgba(6,182,212,0.3)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:brightness-110
                  hover:shadow-[0_8px_30px_-2px_rgba(139,92,246,0.6),0_0_20px_rgba(6,182,212,0.2)]
                "
              >

                {/* Top highlight */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    bg-white/50
                  "
                />

                <span className="relative z-10">
                  Let's Talk
                </span>

                <span
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </a>


              {/* Secondary CTA */}

              <a
                href="#services"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/[0.12]
                  bg-white/[0.04]
                  px-7
                  py-3.5
                  text-[15px]
                  font-semibold
                  text-[#F8FAFC]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#8B5CF6]/50
                  hover:bg-white/[0.08]
                  hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)]
                "
              >
                Explore Services

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>

              </a>

            </motion.div>


            {/* =================================================
                STATS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="
                mt-12
                grid
                max-w-[570px]
                grid-cols-3
                border-t
                border-white/[0.08]
                pt-7
              "
            >

              {/* Stat 1 */}

              <div>

                <p
                  className="
                    bg-gradient-to-r
                    from-[#F8FAFC]
                    to-[#94A3B8]
                    bg-clip-text
                    text-2xl
                    font-bold
                    text-transparent
                    sm:text-3xl
                  "
                >
                  150+
                </p>

                <p className="mt-1 text-[11px] text-[#64748B] sm:text-xs">
                  Business Partners
                </p>

              </div>


              {/* Stat 2 */}

              <div className="border-l border-white/[0.08] pl-5 sm:pl-8">

                <p
                  className="
                    bg-gradient-to-r
                    from-[#F8FAFC]
                    to-[#94A3B8]
                    bg-clip-text
                    text-2xl
                    font-bold
                    text-transparent
                    sm:text-3xl
                  "
                >
                  5000+
                </p>

                <p className="mt-1 text-[11px] text-[#64748B] sm:text-xs">
                  Placements
                </p>

              </div>


              {/* Stat 3 */}

              <div className="border-l border-white/[0.08] pl-5 sm:pl-8">

                <p
                  className="
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    via-[#3B82F6]
                    to-[#06B6D4]
                    bg-clip-text
                    text-2xl
                    font-bold
                    text-transparent
                    sm:text-3xl
                  "
                >
                  95%
                </p>

                <p className="mt-1 text-[11px] text-[#64748B] sm:text-xs">
                  Client Satisfaction
                </p>

              </div>

            </motion.div>

          </div>


          {/* =================================================
              RIGHT IMAGE VISUAL
          ================================================== */}

          <div
            className="
              relative
              flex
              min-h-[380px]
              items-center
              justify-center
              sm:min-h-[460px]
              lg:min-h-[560px]
            "
          >

            {/* Main Purple-Cyan Glow */}

            <div
              className="
                pointer-events-none
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                bg-gradient-to-r
                from-[#8B5CF6]/30
                via-[#3B82F6]/20
                to-[#06B6D4]/25
                blur-[100px]
                sm:h-[380px]
                sm:w-[380px]
              "
            />


            {/* Technical Ring */}

            <div
              className="
                pointer-events-none
                absolute
                h-[300px]
                w-[300px]
                rounded-full
                border
                border-[#8B5CF6]/20
                shadow-[0_0_80px_rgba(139,92,246,0.08)]
                sm:h-[420px]
                sm:w-[420px]
                lg:h-[500px]
                lg:w-[500px]
              "
            />


            {/* Rotating Technical Ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                h-[330px]
                w-[330px]
                rounded-full
                border
                border-dashed
                border-[#06B6D4]/20
                sm:h-[450px]
                sm:w-[450px]
                lg:h-[530px]
                lg:w-[530px]
              "
            />


            {/* =================================================
                IMAGE CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                rotate: -3,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: -2,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                rotate: 0,
                scale: 1.025,
              }}
              className="
                group
                relative
                z-10
                w-[300px]
                overflow-hidden
                rounded-[24px]
                border
                border-white/[0.12]
                bg-[rgba(10,10,15,0.7)]
                p-2
                shadow-[0_30px_100px_rgba(0,0,0,0.65)]
                backdrop-blur-[24px]
                transition-all
                duration-500
                hover:border-[#8B5CF6]/50
                hover:shadow-[0_30px_100px_rgba(139,92,246,0.25),0_0_40px_rgba(6,182,212,0.1)]
                sm:w-[390px]
                sm:p-2.5
              "
            >

              {/* Top Highlight */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  z-20
                  h-px
                  w-3/4
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                "
              />


              {/* Image */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-white/[0.08]
                  bg-[#0A0A0F]
                "
              >

                <img
                  src={heroImage}
                  alt="Vaytrix technology solutions"
                  className="
                    h-[320px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    sm:h-[400px]
                  "
                />

                {/* Dark Image Gradient */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#050508]
                    via-transparent
                    to-transparent
                    opacity-70
                  "
                />

                {/* Purple / Cyan Image Wash */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#8B5CF6]/10
                    via-transparent
                    to-[#06B6D4]/15
                    mix-blend-screen
                  "
                />

              </div>


              {/* =================================================
                  FLOATING IMAGE LABEL
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  z-30
                  rounded-xl
                  border
                  border-white/[0.12]
                  bg-[#0A0A0F]/80
                  px-4
                  py-3
                  shadow-[0_12px_40px_rgba(0,0,0,0.6)]
                  backdrop-blur-xl
                  sm:left-7
                "
              >

                <div className="flex items-center gap-2">

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#06B6D4]
                      shadow-[0_0_12px_rgba(6,182,212,0.9)]
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-[#F8FAFC]
                    "
                  >
                    SYSTEMS / DIGITAL
                  </span>

                </div>

                <p className="mt-1 text-[10px] text-[#64748B]">
                  Engineering what&apos;s next
                </p>

              </div>


              {/* =================================================
                  FLOATING PERFORMANCE
              ================================================== */}

              <div
                className="
                  absolute
                  right-[-8px]
                  top-10
                  z-30
                  rounded-xl
                  border
                  border-white/[0.12]
                  bg-[#11111A]/85
                  px-4
                  py-3
                  shadow-[0_16px_40px_rgba(0,0,0,0.6)]
                  backdrop-blur-xl
                  sm:right-[-15px]
                "
              >

                <p
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    text-[#64748B]
                  "
                >
                  PERFORMANCE
                </p>

                <p
                  className="
                    mt-1
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    via-[#3B82F6]
                    to-[#06B6D4]
                    bg-clip-text
                    text-xl
                    font-bold
                    text-transparent
                  "
                >
                  95%
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-32
          w-full
          bg-gradient-to-t
          from-[#050508]
          to-transparent
        "
      />

    </section>
  );
};

export default Hero;