
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

function Industries() {
  const industries = [
    {
      number: "01",
      name: "IT & Technology",
      icon: <Cpu size={22} strokeWidth={1.8} />,
    },
    {
      number: "02",
      name: "Semiconductor",
      icon: <Activity size={22} strokeWidth={1.8} />,
    },
    {
      number: "03",
      name: "Artificial Intelligence",
      icon: <Brain size={22} strokeWidth={1.8} />,
    },
    {
      number: "04",
      name: "Real Estate & Construction",
      icon: <Building2 size={22} strokeWidth={1.8} />,
    },
    {
      number: "05",
      name: "Healthcare",
      icon: <HeartPulse size={22} strokeWidth={1.8} />,
    },
    {
      number: "06",
      name: "Agriculture",
      icon: <Wheat size={22} strokeWidth={1.8} />,
    },
    {
      number: "07",
      name: "Pharmaceutical",
      icon: <Pill size={22} strokeWidth={1.8} />,
    },
    {
      number: "08",
      name: "Media & Entertainment",
      icon: <Film size={22} strokeWidth={1.8} />,
    },
    {
      number: "09",
      name: "Logistics & Supply Chain",
      icon: <Truck size={22} strokeWidth={1.8} />,
    },
    {
      number: "10",
      name: "Travel & Hospitality",
      icon: <Plane size={22} strokeWidth={1.8} />,
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
        bg-[#050508]
        px-5
        py-20
        text-[#F8FAFC]
        sm:px-8
        lg:px-10
        lg:py-28
      "
    >
      {/* =========================================================
          TECHNICAL GRID
      ========================================================= */}

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

      {/* =========================================================
          AMBIENT GLOWS
      ========================================================= */}

      {/* Violet Left Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[120px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#8B5CF6]/[0.11]
          blur-[150px]
        "
      />

      {/* Cyan Right Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          bottom-[80px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#06B6D4]/[0.08]
          blur-[150px]
        "
      />

      {/* Center Gradient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[550px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-[#8B5CF6]/[0.035]
          via-[#3B82F6]/[0.06]
          to-[#06B6D4]/[0.035]
          blur-[160px]
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-[1250px]
          text-center
        "
      >
        {/* =======================================================
            HEADER
        ======================================================= */}

        <ScrollReveal>
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              font-mono
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#A855F7]
            "
          >
            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-transparent
                to-[#8B5CF6]
              "
            />

            INDUSTRIES WE SERVE

            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-[#8B5CF6]
                to-[#06B6D4]
              "
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="
              text-3xl
              font-semibold
              leading-[1.08]
              tracking-[-0.04em]
              text-[#F8FAFC]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Expertise across

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
              text-[#94A3B8]
              sm:text-base
            "
          >
            Combining technology, expertise, and industry
            understanding to create solutions that solve
            real business challenges.
          </p>
        </ScrollReveal>

        {/* =======================================================
            INDUSTRIES GRID
        ======================================================= */}

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
                duration: 0.5,
                delay: index * 0.045,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.025,
                rotateX: -2,
                rotateY: 2,
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
                min-h-[170px]
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[rgba(10,10,15,0.72)]
                p-4
                shadow-[0_18px_55px_rgba(0,0,0,0.3)]
                backdrop-blur-[20px]
                transition-all
                duration-500
                hover:border-[#8B5CF6]/45
                hover:bg-[rgba(13,13,22,0.82)]
                hover:shadow-[0_25px_70px_rgba(139,92,246,0.15),0_0_40px_rgba(6,182,212,0.05)]
                sm:min-h-[180px]
                sm:p-5
              "
            >
              {/* =================================================
                  GRADIENT CARD BORDER
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
                  AMBIENT GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-[#8B5CF6]/0
                  blur-[55px]
                  transition-all
                  duration-700
                  group-hover:bg-[#8B5CF6]/20
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -left-16
                  h-32
                  w-32
                  rounded-full
                  bg-[#06B6D4]/0
                  blur-[55px]
                  transition-all
                  duration-700
                  group-hover:bg-[#06B6D4]/12
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
                  min-h-[138px]
                  flex-col
                  items-center
                  justify-center
                "
              >
                {/* Number */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    font-mono
                    text-[9px]
                    font-medium
                    tracking-[0.14em]
                    text-[#64748B]
                    transition-colors
                    duration-300
                    group-hover:text-[#8B5CF6]
                  "
                >
                  {item.number}
                </div>

                {/* Arrow */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    text-[#64748B]
                    opacity-60
                    transition-all
                    duration-300
                    group-hover:border-[#8B5CF6]/35
                    group-hover:bg-[#8B5CF6]/10
                    group-hover:text-[#F8FAFC]
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </div>

                {/* Icon */}

                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/[0.09]
                    bg-[#11111A]
                    text-[#8B5CF6]
                    shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                    transition-all
                    duration-500
                    group-hover:scale-110
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
                    {item.icon}
                  </span>
                </div>

                {/* Industry Name */}

                <p
                  className="
                    mt-4
                    max-w-[150px]
                    text-[11px]
                    font-medium
                    leading-5
                    text-[#94A3B8]
                    transition-all
                    duration-300
                    group-hover:bg-gradient-to-r
                    group-hover:from-[#F8FAFC]
                    group-hover:to-[#67E8F9]
                    group-hover:bg-clip-text
                    group-hover:text-transparent
                    sm:max-w-[180px]
                    sm:text-[12px]
                  "
                >
                  {item.name}
                </p>

                {/* Bottom Indicator */}

                <div
                  className="
                    mt-3
                    h-px
                    w-7
                    bg-[#64748B]/30
                    transition-all
                    duration-500
                    group-hover:w-12
                    group-hover:bg-gradient-to-r
                    group-hover:from-[#8B5CF6]
                    group-hover:to-[#06B6D4]
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

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
                text-[#64748B]
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
