
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
                min-h-[270px]
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
                    ICON
                ================================================= */}

                <div className="mt-8">

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
