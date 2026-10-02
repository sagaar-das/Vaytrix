

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
  Orbit,
} from "lucide-react";

function Industries() {
  const industries = [
    {
      number: "01",
      name: "IT & Technology",
      icon: <Cpu size={22} strokeWidth={1.7} />,
      code: "TECH",
    },
    {
      number: "02",
      name: "Semiconductor",
      icon: <Activity size={22} strokeWidth={1.7} />,
      code: "SEMI",
    },
    {
      number: "03",
      name: "Artificial Intelligence",
      icon: <Brain size={22} strokeWidth={1.7} />,
      code: "AI",
    },
    {
      number: "04",
      name: "Real Estate & Construction",
      icon: <Building2 size={22} strokeWidth={1.7} />,
      code: "BUILD",
    },
    {
      number: "05",
      name: "Healthcare",
      icon: <HeartPulse size={22} strokeWidth={1.7} />,
      code: "HEALTH",
    },
    {
      number: "06",
      name: "Agriculture",
      icon: <Wheat size={22} strokeWidth={1.7} />,
      code: "AGRI",
    },
    {
      number: "07",
      name: "Pharmaceutical",
      icon: <Pill size={22} strokeWidth={1.7} />,
      code: "PHARMA",
    },
    {
      number: "08",
      name: "Media & Entertainment",
      icon: <Film size={22} strokeWidth={1.7} />,
      code: "MEDIA",
    },
    {
      number: "09",
      name: "Logistics & Supply Chain",
      icon: <Truck size={22} strokeWidth={1.7} />,
      code: "LOGISTICS",
    },
    {
      number: "10",
      name: "Travel & Hospitality",
      icon: <Plane size={22} strokeWidth={1.7} />,
      code: "TRAVEL",
    },
  ];

  const { scrollY } = useScroll();

  const contentY = useTransform(
    scrollY,
    [0, 2500],
    [0, -80]
  );

  const visualY = useTransform(
    scrollY,
    [0, 2500],
    [0, 120]
  );

  const visualRotate = useTransform(
    scrollY,
    [0, 2500],
    [0, 12]
  );

  return (
    <section
      id="industries"
      className="
  relative
  overflow-hidden
  bg-[#050508]
  px-5
  pt-20
  pb-1
  text-[#F8FAFC]
  sm:px-8
  lg:px-10
  lg:pt-24
  lg:pb-1
  
"
    >





      {/* Vertical center line */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px bg-gradient-to-b from-transparent via-[#8B5CF6]/10 to-transparent lg:block" />

      {/* Violet glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[20%]
          h-[600px]
          w-[600px]
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
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#06B6D4]/[0.08]
          blur-[160px]
        "
      />

      {/* =========================================================
          LARGE BACKGROUND WORD
      ========================================================== */}

      {/* <motion.div
        style={{
          y: visualY,
          rotate: visualRotate,
        }}
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-[18%]
          hidden
          select-none
          lg:block
        "
      >
        <div
          className="
            font-sans
            text-[170px]
            font-black
            uppercase
            leading-none
            tracking-[-0.08em]
            text-transparent
            [-webkit-text-stroke:1px_rgba(255,255,255,0.055)]
          "
        >
          INDUSTRIES
        </div>
      </motion.div> */}

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <motion.div
        style={{
          y: contentY,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
        "
      >

        {/* =======================================================
            HEADER
        ======================================================== */}

        {/* =======================================================
    CENTERED HEADER
======================================================== */}

        <div className="mx-auto max-w-4xl text-center">

          <ScrollReveal>
            <div className="mb-4 flex items-center justify-center gap-3">

              <span className="font-mono text-[10px] font-medium tracking-[0.25em] text-[#64748B]">
                03
              </span>

              <span className="h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A78BFA]">
                Industry Coverage
              </span>

              <span className="h-px w-10 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]" />

            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="
        text-3xl
        font-semibold
        leading-[1.05]
        tracking-[-0.04em]
        text-[#F8FAFC]
        sm:text-4xl
        lg:text-5xl
      "
            >
              Technology that adapts{" "}
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
                across industries.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="
        mx-auto
        mt-4
        max-w-2xl
        text-sm
        leading-6
        text-[#94A3B8]
        sm:text-base
      "
            >
             We combine technology expertise with industry understanding
to deliver practical solutions tailored to each client’s unique
challenges, goals, and vision.
            </p>
          </ScrollReveal>

        </div>

        {/* =======================================================
            MAIN INDUSTRY AREA
        ======================================================== */}

        <div className="mt-10">

  {/* =====================================================
      INDUSTRY LIST — 2 COLUMNS
  ====================================================== */}

  <div className="grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-2">

    {industries.map((item, index) => (

      <motion.div
        key={item.name}
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? -30 : 30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.55,
          delay: index * 0.045,
          ease: "easeOut",
        }}
        className="
          group
          relative
          grid
          min-h-[82px]
          cursor-pointer
          grid-cols-[45px_48px_1fr_45px]
          items-center
          gap-3
          border-b
          border-white/[0.08]
          transition-all
          duration-500
          sm:grid-cols-[55px_50px_1fr_50px]
        "
      >

        {/* Hover background */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-[-15px]
            right-[-15px]
            -z-10
            bg-gradient-to-r
            from-[#8B5CF6]/[0.08]
            via-[#3B82F6]/[0.035]
            to-transparent
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Number */}

        <div
          className="
            font-mono
            text-[10px]
            tracking-[0.12em]
            text-[#475569]
            transition-colors
            duration-300
            group-hover:text-[#A855F7]
          "
        >
          {item.number}
        </div>

        {/* Icon */}

        <div
          className="
            relative
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-white/[0.08]
            bg-[#0A0A0F]
            text-[#64748B]
            transition-all
            duration-500
            group-hover:border-[#8B5CF6]/40
            group-hover:bg-gradient-to-br
            group-hover:from-[#8B5CF6]
            group-hover:to-[#3B82F6]
            group-hover:text-white
            group-hover:shadow-[0_0_25px_rgba(139,92,246,0.22)]
          "
        >
          {item.icon}
        </div>

        {/* Name */}

        <div>

          <p
            className="
              text-sm
              font-medium
              text-[#94A3B8]
              transition-all
              duration-300
              group-hover:text-[#F8FAFC]
              sm:text-base
            "
          >
            {item.name}
          </p>

          <div className="mt-1.5 flex items-center gap-2">

            <span
              className="
                h-px
                w-5
                bg-[#64748B]/30
                transition-all
                duration-500
                group-hover:w-8
                group-hover:bg-gradient-to-r
                group-hover:from-[#8B5CF6]
                group-hover:to-[#06B6D4]
              "
            />

            <span
              className="
                font-mono
                text-[7px]
                tracking-[0.16em]
                text-[#475569]
                transition-colors
                group-hover:text-[#64748B]
              "
            >
              {item.code}
            </span>

          </div>

        </div>

        {/* Arrow */}

        <div className="flex justify-end">

          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.02]
              text-[#475569]
              transition-all
              duration-500
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:border-[#8B5CF6]/40
              group-hover:bg-[#8B5CF6]/10
              group-hover:text-[#C4B5FD]
            "
          >
            <ArrowUpRight size={13} />
          </div>

        </div>

        {/* Active line */}

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

      </motion.div>

    ))}

  </div>

</div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <ScrollReveal delay={0.25}>

          <div className="mt-10 flex flex-col justify-between gap-6  sm:flex-row sm:items-center">

            <div>

              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#475569]">
                Cross-Industry Capability
              </p>

              <p className="mt-2 text-sm text-[#94A3B8]">
                One technology partner. Multiple business environments.
              </p>

            </div>

            <div className="flex items-center gap-3">

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#475569]">
                VAYTRIX
              </span>

              <span className="h-px w-8 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#64748B]">
                Industry / 10
              </span>

            </div>

          </div>

        </ScrollReveal>

      </motion.div>

    </section>
  );
}

export default Industries;
