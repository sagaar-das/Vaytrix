
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

import {
  Code2,
  Smartphone,
  BriefcaseBusiness,
  Users,
  Layers3,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

function ServiceGraphic({ type }) {
  const common =
    "absolute inset-0 pointer-events-none transition-all duration-500";

  /* =========================================================
     IT STAFFING — NETWORK / PEOPLE
  ========================================================== */
  if (type === "it") {
    return (
      <div className="relative h-[90px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#08080D]">
        <div className={`${common} bg-gradient-to-br from-[#8B5CF6]/10 to-transparent`} />

        {/* Connecting Lines */}
        <div className="absolute left-[25%] top-1/2 h-px w-[50%] bg-gradient-to-r from-[#8B5CF6]/30 via-[#3B82F6]/60 to-[#06B6D4]/30" />

        <div className="absolute left-1/2 top-[25%] h-[50%] w-px bg-gradient-to-b from-[#8B5CF6]/20 via-[#3B82F6]/50 to-[#06B6D4]/20" />

        {/* Nodes */}
        <div className="absolute left-[18%] top-[34%] h-4 w-4 rounded-full border border-[#8B5CF6]/50 bg-[#8B5CF6]/20 shadow-[0_0_15px_rgba(139,92,246,0.4)]" />

        <div className="absolute left-[44%] top-[34%] h-5 w-5 rounded-full border border-[#3B82F6]/60 bg-[#3B82F6]/20 shadow-[0_0_18px_rgba(59,130,246,0.45)]" />

        <div className="absolute right-[18%] top-[34%] h-4 w-4 rounded-full border border-[#06B6D4]/50 bg-[#06B6D4]/20 shadow-[0_0_15px_rgba(6,182,212,0.4)]" />

        {/* Bottom Nodes */}
        <div className="absolute left-[30%] bottom-[15%] h-2 w-2 rounded-full bg-[#8B5CF6]" />
        <div className="absolute right-[30%] bottom-[15%] h-2 w-2 rounded-full bg-[#06B6D4]" />

        <span className="absolute bottom-2 left-3 font-mono text-[8px] uppercase tracking-[0.16em] text-[#475569]">
          Talent Network
        </span>

        <span className="absolute bottom-2 right-3 font-mono text-[8px] text-[#8B5CF6]">
          01
        </span>
      </div>
    );
  }

  /* =========================================================
     SOFTWARE DEVELOPMENT — CODE
  ========================================================== */
  if (type === "software") {
    return (
      <div className="relative h-[90px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#08080D]">
        <div className={`${common} bg-gradient-to-br from-[#3B82F6]/10 to-transparent`} />

        {/* Terminal */}
        <div className="absolute left-4 top-4 h-[55px] w-[72%] rounded-lg border border-[#3B82F6]/20 bg-[#0D0D15] p-3">
          <div className="mb-2 flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]" />
          </div>

          <div className="space-y-1 font-mono text-[7px]">
            <div>
              <span className="text-[#8B5CF6]">const</span>{" "}
              <span className="text-[#CBD5E1]">solution</span>{" "}
              <span className="text-[#64748B]">=</span>
            </div>

            <div className="pl-3 text-[#06B6D4]">
              buildBusinessApp();
            </div>

            <div className="text-[#64748B]">{"// scalable architecture"}</div>
          </div>
        </div>

        {/* Floating Code Brackets */}
        <div className="absolute right-5 top-5 font-mono text-3xl text-[#8B5CF6]/30">
          {"</>"}
        </div>

        <span className="absolute bottom-2 right-3 font-mono text-[8px] uppercase tracking-[0.15em] text-[#3B82F6]">
          Build / Deploy
        </span>
      </div>
    );
  }

  /* =========================================================
     APPLICATION DEVELOPMENT — MOBILE
  ========================================================== */
  if (type === "app") {
    return (
      <div className="relative h-[90px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#08080D]">
        <div className={`${common} bg-gradient-to-br from-[#06B6D4]/10 to-transparent`} />

        {/* Phone */}
        <div className="absolute left-1/2 top-1/2 h-[72px] w-[42px] -translate-x-1/2 -translate-y-1/2 rounded-[9px] border border-[#06B6D4]/40 bg-[#0D0D15] shadow-[0_0_25px_rgba(6,182,212,0.15)]">
          <div className="mx-auto mt-1.5 h-1 w-5 rounded-full bg-white/10" />

          <div className="mx-2 mt-3 space-y-2">
            <div className="h-2 rounded bg-gradient-to-r from-[#8B5CF6]/50 to-[#06B6D4]/50" />
            <div className="grid grid-cols-2 gap-1">
              <div className="h-5 rounded bg-[#8B5CF6]/15" />
              <div className="h-5 rounded bg-[#06B6D4]/15" />
            </div>
            <div className="h-2 rounded bg-white/[0.05]" />
          </div>
        </div>

        {/* Side Signals */}
        <div className="absolute left-[15%] top-1/2 h-px w-[25%] bg-gradient-to-r from-transparent to-[#8B5CF6]/50" />

        <div className="absolute right-[15%] top-1/2 h-px w-[25%] bg-gradient-to-l from-transparent to-[#06B6D4]/50" />

        <div className="absolute left-[12%] top-[30%] h-2 w-2 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

        <div className="absolute right-[12%] bottom-[25%] h-2 w-2 rounded-full bg-[#06B6D4] shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

        <span className="absolute bottom-2 left-3 font-mono text-[8px] uppercase tracking-[0.15em] text-[#64748B]">
          Web / Mobile
        </span>
      </div>
    );
  }

  /* =========================================================
     MANAGEMENT CONSULTING — ANALYTICS
  ========================================================== */
  if (type === "consulting") {
    return (
      <div className="relative h-[90px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#08080D]">
        <div className={`${common} bg-gradient-to-br from-[#8B5CF6]/10 to-[#06B6D4]/5`} />

        {/* Graph Line */}
        <svg
          viewBox="0 0 300 90"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="consultingGradient" x1="0" x2="1">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>

          <path
            d="M15 70 L65 60 L105 65 L145 42 L185 48 L225 25 L280 15"
            fill="none"
            stroke="url(#consultingGradient)"
            strokeWidth="2"
          />

          <path
            d="M15 78 L280 78"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />

          <circle cx="225" cy="25" r="4" fill="#3B82F6" />
          <circle cx="280" cy="15" r="4" fill="#06B6D4" />
        </svg>

        {/* Metric */}
        <div className="absolute right-4 top-4 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 backdrop-blur-md">
          <p className="font-mono text-[7px] uppercase tracking-wider text-[#64748B]">
            Growth
          </p>
          <p className="mt-0.5 text-sm font-bold text-[#F8FAFC]">
            +42%
          </p>
        </div>

        <span className="absolute bottom-2 left-3 font-mono text-[8px] uppercase tracking-[0.15em] text-[#64748B]">
          Business Intelligence
        </span>
      </div>
    );
  }

  /* =========================================================
     BPO / KPO — WORKFLOW
  ========================================================== */
  if (type === "bpo") {
    return (
      <div className="relative h-[90px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#08080D]">
        <div className={`${common} bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/5`} />

        {/* Workflow Nodes */}
        <div className="absolute left-5 top-1/2 flex -translate-y-1/2 items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
            <span className="font-mono text-[8px] text-[#A78BFA]">
              INPUT
            </span>
          </div>

          <div className="h-px w-6 bg-gradient-to-r from-[#8B5CF6]/50 to-[#3B82F6]/50" />

          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3B82F6]/30 bg-[#3B82F6]/10">
            <span className="font-mono text-[8px] text-[#93C5FD]">
              PROCESS
            </span>
          </div>

          <div className="h-px w-6 bg-gradient-to-r from-[#3B82F6]/50 to-[#06B6D4]/50" />

          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#06B6D4]/30 bg-[#06B6D4]/10">
            <span className="font-mono text-[8px] text-[#67E8F9]">
              OUTPUT
            </span>
          </div>
        </div>

        {/* Background Layers */}
        <div className="absolute bottom-2 right-3 flex gap-1">
          <span className="h-1 w-6 rounded-full bg-[#8B5CF6]/30" />
          <span className="h-1 w-4 rounded-full bg-[#3B82F6]/40" />
          <span className="h-1 w-2 rounded-full bg-[#06B6D4]/60" />
        </div>
      </div>
    );
  }

  /* =========================================================
     AI & IoT — NEURAL NETWORK
  ========================================================== */
  if (type === "ai") {
    return (
      <div className="relative h-[90px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#08080D]">
        <div className={`${common} bg-gradient-to-br from-[#06B6D4]/10 via-[#3B82F6]/5 to-[#8B5CF6]/10`} />

        {/* Neural Connections */}
        <svg
          viewBox="0 0 300 90"
          className="absolute inset-0 h-full w-full"
        >
          <line
            x1="55"
            y1="25"
            x2="145"
            y2="45"
            stroke="#8B5CF6"
            strokeOpacity="0.4"
          />

          <line
            x1="55"
            y1="65"
            x2="145"
            y2="45"
            stroke="#3B82F6"
            strokeOpacity="0.4"
          />

          <line
            x1="145"
            y1="45"
            x2="235"
            y2="25"
            stroke="#06B6D4"
            strokeOpacity="0.5"
          />

          <line
            x1="145"
            y1="45"
            x2="235"
            y2="65"
            stroke="#3B82F6"
            strokeOpacity="0.4"
          />

          <circle
            cx="55"
            cy="25"
            r="6"
            fill="#8B5CF6"
            fillOpacity="0.25"
            stroke="#8B5CF6"
          />

          <circle
            cx="55"
            cy="65"
            r="6"
            fill="#3B82F6"
            fillOpacity="0.25"
            stroke="#3B82F6"
          />

          <circle
            cx="145"
            cy="45"
            r="9"
            fill="#3B82F6"
            fillOpacity="0.25"
            stroke="#06B6D4"
          />

          <circle
            cx="235"
            cy="25"
            r="6"
            fill="#06B6D4"
            fillOpacity="0.25"
            stroke="#06B6D4"
          />

          <circle
            cx="235"
            cy="65"
            r="6"
            fill="#8B5CF6"
            fillOpacity="0.25"
            stroke="#8B5CF6"
          />
        </svg>

        <div className="absolute right-3 top-3 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-2 py-1">
          <span className="font-mono text-[7px] uppercase tracking-wider text-[#67E8F9]">
            AI CORE
          </span>
        </div>

        <span className="absolute bottom-2 left-3 font-mono text-[8px] uppercase tracking-[0.15em] text-[#64748B]">
          Connected Intelligence
        </span>
      </div>
    );
  }

  return null;
}

function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      id: "it",
      number: "01",
      title: "IT Staffing",
      shortDesc:
        "Connect with skilled technology professionals ready to make an impact.",
      desc:
        "We help businesses find the right technology talent through a streamlined staffing approach built around their requirements.",
      icon: <Users size={22} strokeWidth={1.8} />,
    },
    {
      id: "software",
      number: "02",
      title: "Software Development",
      shortDesc:
        "Scalable software solutions designed for evolving businesses.",
      desc:
        "From concept to deployment, we create secure and high-performing software tailored to your business objectives.",
      icon: <Code2 size={22} strokeWidth={1.8} />,
    },
    {
      id: "app",
      number: "03",
      title: "Application Development",
      shortDesc:
        "Powerful web and mobile applications built around your users.",
      desc:
        "We develop intuitive and performance-focused applications that deliver seamless experiences across platforms.",
      icon: <Smartphone size={22} strokeWidth={1.8} />,
    },
    {
      id: "consulting",
      number: "04",
      title: "Management Consulting",
      shortDesc:
        "Practical strategies that help businesses move forward.",
      desc:
        "We combine technology and business expertise to improve operations, solve challenges, and support digital transformation.",
      icon: <BriefcaseBusiness size={22} strokeWidth={1.8} />,
    },
    {
      id: "bpo",
      number: "05",
      title: "BPO / KPO",
      shortDesc:
        "Streamline operations with smart and reliable outsourcing.",
      desc:
        "Our outsourcing solutions help organizations improve efficiency, reduce operational complexity, and focus on core priorities.",
      icon: <Layers3 size={22} strokeWidth={1.8} />,
    },
    {
      id: "ai",
      number: "06",
      title: "AI & IoT Solutions",
      shortDesc:
        "Intelligent technologies built to create smarter businesses.",
      desc:
        "We use AI, automation, and IoT technologies to build connected solutions that generate insights and improve efficiency.",
      icon: <Cpu size={22} strokeWidth={1.8} />,
    },
  ];

  return (
    <section
      id="services"
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
          BACKGROUND
      ========================================================= */}

      {/* Technical Grid */}
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

      {/* Purple Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[80px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#8B5CF6]/[0.12]
          blur-[140px]
        "
      />

      {/* Cyan Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          bottom-[50px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#06B6D4]/[0.09]
          blur-[140px]
        "
      />

      {/* Center Gradient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-[#8B5CF6]/[0.04]
          via-[#3B82F6]/[0.07]
          to-[#06B6D4]/[0.04]
          blur-[160px]
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-[1250px]">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="mx-auto max-w-[720px] text-center">

          <ScrollReveal>
            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                font-mono
                text-[15px]
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

              WHAT WE DO

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
              Solutions built for

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
                what's next.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="
                mx-auto
                mt-5
                max-w-[620px]
                text-sm
                leading-7
                text-[#94A3B8]
                sm:text-base
              "
            >
              From technology and talent to intelligent digital
              solutions, we help businesses turn complex challenges
              into meaningful opportunities for growth.
            </p>
          </ScrollReveal>
        </div>

        {/* =======================================================
            SERVICES GRID
        ======================================================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
                delay: index * 0.06,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              whileTap={{
                scale: 0.985,
              }}
              onClick={() =>
                navigate(`/services/${service.id}`)
              }
              className="
                group
                relative
                min-h-[340px]
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[rgba(10,10,15,0.72)]
                p-5
                shadow-[0_18px_60px_rgba(0,0,0,0.35)]
                backdrop-blur-[20px]
                transition-all
                duration-500
                hover:border-[#8B5CF6]/45
                hover:bg-[rgba(13,13,22,0.82)]
                hover:shadow-[0_25px_80px_rgba(139,92,246,0.16),0_0_50px_rgba(6,182,212,0.06)]
                sm:p-6
              "
            >
              {/* =================================================
                  CARD INNER BORDER
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
                  transition-opacity
                  duration-500
                  group-hover:from-[#8B5CF6]/10
                  group-hover:to-[#06B6D4]/10
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  TOP ACCENT LINE
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
                  AMBIENT HOVER GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
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

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-20
                  h-40
                  w-40
                  rounded-full
                  bg-[#06B6D4]/0
                  blur-[70px]
                  transition-all
                  duration-700
                  group-hover:bg-[#06B6D4]/10
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
                  min-h-[228px]
                  flex-col
                "
              >
                {/* Top Row */}

                <div className="flex items-center justify-between">

                  {/* Number */}

                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-medium
                      tracking-[0.15em]
                      text-[#64748B]
                      transition-colors
                      duration-300
                      group-hover:text-[#8B5CF6]
                    "
                  >
                    {service.number}
                  </span>

                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
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
                      group-hover:text-[#F8FAFC]
                    "
                  >
                    <ArrowUpRight
                      size={15}
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
    SERVICE GRAPHIC
================================================== */}

<div className="mt-6">
  <ServiceGraphic type={service.id} />
</div>

{/* =================================================
    SERVICE ICON
================================================== */}

<div className="mt-4 flex items-center justify-between">
  <div
    className="
      relative
      flex
      h-10
      w-10
      items-center
      justify-center
      overflow-hidden
      rounded-xl
      border
      border-white/[0.09]
      bg-[#11111A]
      text-[#8B5CF6]
      shadow-[0_10px_30px_rgba(0,0,0,0.25)]
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
      {service.icon}
    </span>
  </div>

  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#475569] transition-colors group-hover:text-[#06B6D4]">
    Vaytrix / {service.number}
  </span>
</div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="
                    mt-6
                    text-[17px]
                    font-semibold
                    tracking-[-0.02em]
                    text-[#F8FAFC]
                    transition-all
                    duration-300
                    group-hover:bg-gradient-to-r
                    group-hover:from-[#F8FAFC]
                    group-hover:via-[#C4B5FD]
                    group-hover:to-[#67E8F9]
                    group-hover:bg-clip-text
                    group-hover:text-transparent
                  "
                >
                  {service.title}
                </h3>

                {/* =================================================
                    SHORT DESCRIPTION
                ================================================= */}

                <p
                  className="
                    mt-2
                    max-w-[330px]
                    text-[13px]
                    leading-5
                    text-[#94A3B8]
                    transition-colors
                    duration-300
                    group-hover:text-[#CBD5E1]
                  "
                >
                  {service.shortDesc}
                </p>

                {/* Spacer */}

                <div className="flex-grow" />

                {/* =================================================
                    BOTTOM ACTION
                ================================================= */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.07]
                    pt-4
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.14em]
                      text-[#64748B]
                      transition-colors
                      duration-300
                      group-hover:text-[#A855F7]
                    "
                  >
                    Explore service
                  </span>

                  <div className="flex items-center gap-2">

                    <span
                      className="
                        h-px
                        w-6
                        bg-[#64748B]/40
                        transition-all
                        duration-500
                        group-hover:w-10
                        group-hover:bg-gradient-to-r
                        group-hover:from-[#8B5CF6]
                        group-hover:to-[#06B6D4]
                      "
                    />

                    <ArrowUpRight
                      size={13}
                      className="
                        text-[#64748B]
                        transition-all
                        duration-300
                        group-hover:text-[#06B6D4]
                      "
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex justify-center">

            <button
              onClick={() => navigate("/services")}
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.09]
                bg-white/[0.025]
                px-6
                py-3
                font-mono
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-[#94A3B8]
                shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#8B5CF6]/40
                hover:bg-[#8B5CF6]/[0.08]
                hover:text-[#F8FAFC]
                hover:shadow-[0_0_35px_rgba(139,92,246,0.12)]
              "
            >
              View all solutions

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </button>

          </div>
        </ScrollReveal>
      </div>

      {/* Bottom Fade */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-24
          w-full
          bg-gradient-to-t
          from-[#050508]
          to-transparent
        "
      />
    </section>
  );
}

export default ServicesSection;
