import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import ScrollReveal from "../components/ScrollReveal";

import {
  Cpu,
  Activity,
  Brain,
  Building2,
  HeartPulse,
  Wheat,
  Pill,
  Film,
  Truck,
  Plane,
  ArrowUpRight,
} from "lucide-react";

import bgImage from "../assets/env-bg.webp";

function Industries() {
  const industries = [
    {
      name: "IT & Technology",
      icon: <Cpu size={25} />,
    },
    {
      name: "Semiconductor",
      icon: <Activity size={25} />,
    },
    {
      name: "Artificial Intelligence",
      icon: <Brain size={25} />,
    },
    {
      name: "Real Estate & Construction",
      icon: <Building2 size={25} />,
    },
    {
      name: "Healthcare",
      icon: <HeartPulse size={25} />,
    },
    {
      name: "Agriculture",
      icon: <Wheat size={25} />,
    },
    {
      name: "Pharmaceutical",
      icon: <Pill size={25} />,
    },
    {
      name: "Media & Entertainment",
      icon: <Film size={25} />,
    },
    {
      name: "Logistics & Supply Chain",
      icon: <Truck size={25} />,
    },
    {
      name: "Travel & Hospitality",
      icon: <Plane size={25} />,
    },
  ];

  const { scrollY } = useScroll();

  const contentY = useTransform(
    scrollY,
    [0, 2500],
    [0, -100]
  );

  const contentOpacity = useTransform(
    scrollY,
    [0, 600],
    [1, 0.92]
  );

  return (
    <section
      id="industries"
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-20
        sm:px-8
        lg:px-10
        lg:py-28
      "
    >

      {/* =================================================
          BACKGROUND IMAGE
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          opacity-[0.18]
        "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />


      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black
          via-black/85
          to-black
        "
      />


      {/* =================================================
          PURPLE / BLUE 3D GLOW
      ================================================= */}

      {/* Purple Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-700/[0.16]
          blur-[150px]
        "
      />


      {/* Blue Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          bottom-[100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/[0.16]
          blur-[150px]
        "
      />


      {/* Center Glow */}

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
          bg-gradient-to-r
          from-purple-600/[0.04]
          via-violet-500/[0.08]
          to-blue-600/[0.04]
          blur-[140px]
        "
      />


      {/* =================================================
          CONTENT
      ================================================= */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          relative
          z-10
          mx-auto
          mt-4
          max-w-[1250px]
          text-center
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <ScrollReveal>

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              text-[11px]
              font-semibold
              tracking-[0.22em]
              text-purple-400
            "
          >
            <span
              className="
                h-px
                w-7
                bg-gradient-to-r
                from-transparent
                to-purple-500
              "
            />

            INDUSTRIES WE SERVE

            <span
              className="
                h-px
                w-7
                bg-gradient-to-r
                from-purple-500
                to-blue-500
              "
            />
          </div>

        </ScrollReveal>


        <ScrollReveal delay={0.1}>

          <h2
            className="
              text-3xl
              font-semibold
              leading-tight
              tracking-[-0.04em]
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Expertise across

            <br />

            <span
              className="
                bg-gradient-to-r
                from-purple-400
                via-violet-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              diverse industries.
            </span>
          </h2>

        </ScrollReveal>


        <ScrollReveal delay={0.2}>

          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]
              text-sm
              leading-7
              text-white/45
              sm:text-base
            "
          >
            Combining technology, expertise, and industry
            understanding to create solutions that solve
            real business challenges.
          </p>

        </ScrollReveal>


        {/* =================================================
            INDUSTRIES GRID
        ================================================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            sm:gap-4
            md:grid-cols-4
            lg:grid-cols-5
            lg:gap-5
          "
        >

          {industries.map((item, index) => (

            <motion.div
              key={item.name}

              initial={{
                opacity: 0,
                y: 25,
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
                duration: 0.45,
                delay: index * 0.045,
              }}

              whileHover={{
                y: -8,
                scale: 1.035,
                rotateX: -3,
                rotateY: 3,
              }}

              whileTap={{
                scale: 0.97,
              }}

              style={{
                transformStyle: "preserve-3d",
              }}

              className="
                group
                relative
                min-h-[155px]
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.09]
                bg-[#0b0b0d]/90
                p-5
                shadow-[0_15px_50px_rgba(0,0,0,0.3)]
                backdrop-blur-xl
                transition-all
                duration-500

                hover:border-purple-500/60
                hover:shadow-[0_20px_60px_rgba(76,29,149,0.2)]
              "
            >

              {/* =================================================
                  GRADIENT BORDER
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-2xl
                  bg-gradient-to-br
                  from-purple-600
                  via-transparent
                  to-blue-600
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />


              {/* Inner Card */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[1px]
                  rounded-[15px]
                  bg-[#0b0b0d]/95
                "
              />


              {/* =================================================
                  TOP GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-28
                  w-28
                  rounded-full
                  bg-purple-600/0
                  blur-[50px]
                  transition-all
                  duration-500
                  group-hover:bg-purple-600/25
                "
              />


              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-12
                  -left-12
                  h-28
                  w-28
                  rounded-full
                  bg-blue-600/0
                  blur-[50px]
                  transition-all
                  duration-500
                  group-hover:bg-blue-600/20
                "
              />


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-col
                  items-center
                  justify-center
                "
              >

                {/* Icon */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-purple-400
                    shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:border-purple-400/40
                    group-hover:bg-gradient-to-br
                    group-hover:from-purple-600
                    group-hover:to-blue-600
                    group-hover:text-white
                  "
                >
                  {item.icon}
                </div>


                {/* Name */}

                <p
                  className="
                    mt-4
                    text-[12px]
                    font-medium
                    leading-5
                    text-white/60
                    transition-all
                    duration-300
                    group-hover:text-white
                    sm:text-[13px]
                  "
                >
                  {item.name}
                </p>


                {/* Hover Arrow */}

                <div
                  className="
                    absolute
                    right-1
                    top-1
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-white/20
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:text-blue-400
                  "
                >
                  <ArrowUpRight size={13} />
                </div>

              </div>

            </motion.div>

          ))}

        </div>


        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <ScrollReveal delay={0.3}>

          <div
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
                text-white/30
                sm:text-sm
              "
            >
              Wherever your business operates, we bring the
              technology and expertise needed to move it forward.
            </p>
          </div>

        </ScrollReveal>

      </motion.div>

    </section>
  );
}

export default Industries;