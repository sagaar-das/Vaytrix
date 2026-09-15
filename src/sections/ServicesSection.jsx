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

import softwareImg from "../assets/software.webp";
import appImg from "../assets/app.webp";
import consultingImg from "../assets/consulting.webp";
import itImg from "../assets/staffing.webp";
import bpoImg from "../assets/bpo.webp";
import aiImg from "../assets/ai.webp";

function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      id: "it",
      title: "IT Staffing",
      shortDesc:
        "Connect with skilled technology professionals ready to make an impact.",
      desc:
        "We help businesses find the right technology talent through a streamlined staffing approach built around their requirements.",
      icon: <Users size={21} />,
      image: itImg,
    },
    {
      id: "software",
      title: "Software Development",
      shortDesc:
        "Scalable software solutions designed for evolving businesses.",
      desc:
        "From concept to deployment, we create secure and high-performing software tailored to your business objectives.",
      icon: <Code2 size={21} />,
      image: softwareImg,
    },
    {
      id: "app",
      title: "Application Development",
      shortDesc:
        "Powerful web and mobile applications built around your users.",
      desc:
        "We develop intuitive and performance-focused applications that deliver seamless experiences across platforms.",
      icon: <Smartphone size={21} />,
      image: appImg,
    },
    {
      id: "consulting",
      title: "Management Consulting",
      shortDesc:
        "Practical strategies that help businesses move forward.",
      desc:
        "We combine technology and business expertise to improve operations, solve challenges, and support digital transformation.",
      icon: <BriefcaseBusiness size={21} />,
      image: consultingImg,
    },
    {
      id: "bpo",
      title: "BPO / KPO",
      shortDesc:
        "Streamline operations with smart and reliable outsourcing.",
      desc:
        "Our outsourcing solutions help organizations improve efficiency, reduce operational complexity, and focus on core priorities.",
      icon: <Layers3 size={21} />,
      image: bpoImg,
    },
    {
      id: "ai",
      title: "AI & IoT Solutions",
      shortDesc:
        "Intelligent technologies built to create smarter businesses.",
      desc:
        "We use AI, automation, and IoT technologies to build connected solutions that generate insights and improve efficiency.",
      icon: <Cpu size={21} />,
      image: aiImg,
    },
  ];

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-20
        text-white
        sm:px-8
        lg:px-10
        lg:py-28
      "
    >

      {/* =================================================
    BRIGHT 3D BACKGROUND GLOW
================================================= */}

{/* Large Purple Glow - Left */}
<div
  className="
    pointer-events-none
    absolute
    -left-[180px]
    top-[40px]
    h-[550px]
    w-[550px]
    rounded-full
    bg-purple-700/[0.18]
    blur-[140px]
  "
/>

{/* Large Blue Glow - Right */}
<div
  className="
    pointer-events-none
    absolute
    -right-[180px]
    top-[220px]
    h-[550px]
    w-[550px]
    rounded-full
    bg-blue-600/[0.18]
    blur-[140px]
  "
/>

{/* Center Purple-Blue Glow */}
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
    from-purple-600/[0.08]
    via-violet-500/[0.10]
    to-blue-600/[0.08]
    blur-[150px]
  "
/>

{/* Small Bright Purple Highlight */}
<div
  className="
    pointer-events-none
    absolute
    left-[25%]
    top-[15%]
    h-[180px]
    w-[180px]
    rounded-full
    bg-purple-500/[0.10]
    blur-[90px]
  "
/>

{/* Small Bright Blue Highlight */}
<div
  className="
    pointer-events-none
    absolute
    right-[20%]
    bottom-[10%]
    h-[180px]
    w-[180px]
    rounded-full
    bg-blue-500/[0.10]
    blur-[90px]
  "
/>


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative mx-auto max-w-[1250px]">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mx-auto max-w-[720px] text-center">

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
              <span className="h-px w-7 bg-gradient-to-r from-transparent to-purple-500" />

              WHAT WE DO

              <span className="h-px w-7 bg-gradient-to-r from-purple-500 to-blue-500" />
            </div>

          </ScrollReveal>


          <ScrollReveal delay={0.1}>

            <h2
              className="
                text-3xl
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Solutions built for

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
                text-white/45
                sm:text-base
              "
            >
              From technology and talent to intelligent digital
              solutions, we help businesses turn complex challenges
              into meaningful opportunities for growth.
            </p>

          </ScrollReveal>

        </div>


        {/* =================================================
            SERVICES GRID
        ================================================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
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
                duration: 0.5,
                delay: index * 0.06,
              }}

              whileHover={{
                y: -8,
                rotateX: 1,
              }}

              whileTap={{
                scale: 0.98,
              }}

              onClick={() =>
                navigate(`/services/${service.id}`)
              }

              className="
                group
                relative
                mx-auto
                flex
                min-h-[245px]
                w-full
                cursor-pointer
                flex-col
                overflow-hidden
                rounded-2xl
                border-white/[0.09]
                bg-[#0a0a0d]/90
                p-5
                shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                transition-all
                duration-500

                /* 3D hover */
                hover:shadow-[0_25px_80px_rgba(76,29,149,0.22)]

                /* Gradient border */
                hover:border-purple-500/60
              "
              style={{
                transformStyle: "preserve-3d",
              }}
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
                  from-purple-600
                  via-transparent
                  to-blue-600
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Inner surface */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[1px]
                  rounded-[15px]
                  bg-[#0a0a0d]
                "
              />


              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-cover
                  bg-center
                  opacity-[1]
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:opacity-[0.07]
                "
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              />


              {/* Image overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-black/40
                  via-black/80
                  to-black
                "
              />


              {/* Hover gradient glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-48
                  w-48
                  rounded-full
                  bg-purple-600/0
                  blur-[80px]
                  transition-all
                  duration-700
                  group-hover:bg-purple-600/20
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-24
                  h-48
                  w-48
                  rounded-full
                  bg-blue-600/0
                  blur-[80px]
                  transition-all
                  duration-700
                  group-hover:bg-blue-600/15
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
                "
              >

                {/* Icon + Arrow */}

                <div className="flex items-center justify-between">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.045]
                      text-purple-400
                      shadow-[0_5px_20px_rgba(0,0,0,0.25)]
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
                    {service.icon}
                  </div>


                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-black/20
                      text-white/25
                      transition-all
                      duration-500
                      group-hover:border-blue-400/40
                      group-hover:bg-white/[0.07]
                      group-hover:text-white
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


                {/* Title */}

                <h3
                  className="
                    mt-7
                    text-lg
                    font-semibold
                    tracking-[-0.02em]
                    text-white
                    transition-all
                    duration-300
                    group-hover:bg-gradient-to-r
                    group-hover:from-purple-300
                    group-hover:to-blue-400
                    group-hover:bg-clip-text
                    group-hover:text-transparent
                  "
                >
                  {service.title}
                </h3>


                {/* Short Description */}

                <p
                  className="
                    mt-2
                    line-clamp-2
                    text-[13px]
                    leading-5
                    text-white/50
                  "
                >
                  {service.shortDesc}
                </p>


                {/* Expanded Description */}

                <p
                  className="
                    mt-2
                    max-h-0
                    overflow-hidden
                    text-[12px]
                    leading-5
                    text-white/35
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:max-h-20
                    group-hover:opacity-100
                  "
                >
                  {service.desc}
                </p>


                {/* Spacer */}

                <div className="flex-grow" />


                {/* Bottom CTA */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-xs
                      font-medium
                      text-white/35
                      transition-all
                      duration-300
                      group-hover:text-purple-400
                    "
                  >
                    Explore service
                  </span>


                  <div className="flex items-center gap-2">

                    <span
                      className="
                        h-px
                        w-7
                        bg-white/15
                        transition-all
                        duration-500
                        group-hover:w-14
                        group-hover:bg-gradient-to-r
                        group-hover:from-purple-500
                        group-hover:to-blue-500
                      "
                    />

                    <ArrowUpRight
                      size={14}
                      className="
                        text-white/25
                        transition-all
                        duration-300
                        group-hover:text-blue-400
                      "
                    />

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>


        {/* =================================================
            BOTTOM CTA
        ================================================= */}

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
                border-white/10
                bg-white/[0.025]
                px-6
                py-3
                text-sm
                font-medium
                text-white/60
                shadow-[0_10px_40px_rgba(0,0,0,0.2)]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-purple-500/40
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              View all solutions

              <ArrowUpRight
                size={16}
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

    </section>
  );
}

export default ServicesSection;