import React from "react";
import { motion } from "framer-motion";

import heroRightImage from "../assets/hero right.png";

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
py-6
sm:px-8
sm:py-8
lg:px-10
lg:py-8
        "
      >

        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-0
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
                A COMPLETE SOLUTION FOR YOU
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
                your Resume
              </span>

              <br />

              <span className="text-[#F8FAFC]">
                extraordinary
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
                mt-5
                max-w-[590px]
                text-[15px]
                leading-7
                text-[#94A3B8]
                sm:text-[17px]
                sm:leading-8
              "
            >
              We create innovative digital solutions that help clients
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
                  Book a Schedul
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
                href="tel:+1812 495 4121"
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
                Call Us

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
                  300+
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
                RIGHT HERO IMAGE - LARGE
                   ================================================== */}

          <div
            className="
    relative
    flex
    min-h-[420px]
    items-center
    justify-center
    sm:min-h-[520px]
    lg:min-h-[680px]
    xl:min-h-[700px]
    bottom-[5%]
  "
          >
            {/* =================================================
      LARGE AMBIENT GLOW
  ================================================== */}

            <div
              className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[420px]
      w-[420px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-gradient-to-r
      from-[#8B5CF6]/30
      via-[#3B82F6]/20
      to-[#06B6D4]/25
      blur-[120px]
      sm:h-[560px]
      sm:w-[560px]
      lg:h-[680px]
      lg:w-[680px]
    "
            />

            {/* =================================================
      LARGE TECHNICAL RING
  ================================================== */}

            <div
              className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[430px]
      w-[430px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-[#8B5CF6]/15
      shadow-[0_0_100px_rgba(139,92,246,0.08)]
      sm:h-[560px]
      sm:w-[560px]
      lg:h-[680px]
      lg:w-[680px]
    "
            />

            {/* =================================================
      ROTATING TECHNICAL RING
  ================================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[460px]
      w-[460px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-dashed
      border-[#06B6D4]/20
      sm:h-[590px]
      sm:w-[590px]
      lg:h-[710px]
      lg:w-[710px]
    "
            />

            {/* =================================================
      LARGE HERO PNG
  ================================================== */}

            <motion.img
              src={heroRightImage}
              alt="Vaytrix digital technology solutions"
              initial={{
                opacity: 0,
                scale: 0.88,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="
  relative
  z-10
  -ml-6
  w-[500px]
  max-w-none
  object-contain
  drop-shadow-[0_35px_80px_rgba(0,0,0,0.75)]
  sm:w-[650px]
  md:w-[720px]
  lg:-ml-12
  lg:w-[820px]
  xl:-ml-16
  xl:w-[900px]
  2xl:-ml-20
  2xl:w-[980px]
  left-[4%]
  
  
"
            />

            {/* =================================================
      FLOATING LEFT LABEL
  ================================================== */}

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
      absolute
      bottom-[18%]
      left-[33%]
      z-30
      rounded-xl
      border
      border-white/[0.12]
      bg-[#0A0A0F]/85
      px-4
      py-3
      shadow-[0_15px_45px_rgba(0,0,0,0.65)]
      backdrop-blur-xl
      sm:left-[31%]
      lg:left-[35%]
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
          
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.15em]
          text-[#F8FAFC]
        "
                >
                  RESUME PREPARATION
                </span>

              </div>

              <p className="mt-1 text-[10px] text-[#64748B]">
                Engineering what&apos;s next
              </p>
            </motion.div>



          </div>

        </div>

      </div>




    </section>
  );
};

export default Hero;