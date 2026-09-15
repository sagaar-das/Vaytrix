import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  Award,
  BriefcaseBusiness,
  Handshake,
  Headset,
  Lightbulb,
  Users,
} from "lucide-react";

import bgImage from "../assets/env-bg.webp";

function WhyUs() {
  const data = [
    {
      title: "Excellence In Every Project",
      desc: "Delivering innovative technology solutions with quality, precision, and long-term business value and growth for every client with us.",
      ui: <Award />,
    },
    {
      title: "150+ Trusted Business Partners",
      desc: "Building strong partnerships through reliable services, transparent communication, and consistent project delivery excellence.",
      ui: <Handshake />,
    },
    {
      title: "Proven Success Across Industries",
      desc: "Empowering businesses with scalable, innovative, and future-ready technology solutions for sustainable digital transformation.",
      ui: <BriefcaseBusiness />,
    },
    {
      title: "Industry Experts & Skilled Professionals",
      desc: "Our experienced team combines technical expertise, creativity, and strategic thinking to drive measurable business success.",
      ui: <Users />,
    },
    {
      title: "Smart Solutions For Modern Businesses",
      desc: "Providing advanced IT, AI, and consulting services designed to accelerate growth and operational efficiency.",
      ui: <Lightbulb />,
    },
    {
      title: "Client-Centric Approach & Support",
      desc: "Ensuring dedicated support, personalized strategies, and seamless collaboration throughout every stage of project execution.",
      ui: <Headset />,
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] bg-black px-5 py-20 sm:px-6 lg:px-8 lg:py-28">

      {/* BACKGROUND IMAGE */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.38]"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-black/5" />

      {/* GRADIENT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/80" />

      {/* PURPLE GLOW */}
      <div className="pointer-events-none absolute -left-[180px] top-[80px] h-[550px] w-[550px] rounded-full bg-purple-700/[0.18] blur-[150px]" />

      {/* BLUE GLOW */}
      <div className="pointer-events-none absolute -right-[180px] bottom-[80px] h-[550px] w-[550px] rounded-full bg-blue-600/[0.18] blur-[150px]" />

      {/* CENTER GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-600/[0.06] via-violet-500/[0.10] to-blue-600/[0.06] blur-[150px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl"
        >
          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-white/[0.03] px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-purple-400 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            WHY VAYTRIX
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl lg:text-[42px]">
            Why
            <span className="ml-2 bg-gradient-to-r from-purple-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-[14px] leading-7 text-white/45 md:text-[16px]">
            We combine innovation, industry expertise, and customer-focused
            strategies to deliver reliable, scalable, and result-driven
            technology solutions that help businesses grow faster, improve
            efficiency, and stay ahead in a competitive digital world.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              whileHover={{
                scale: 1.025,
                y: -7,
                rotateX: -2,
                rotateY: 2,
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 p-[1px] shadow-[0_15px_50px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-purple-500/60 hover:shadow-[0_20px_60px_rgba(76,29,149,0.22)]"
            >

              {/* Gradient Border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 via-transparent to-blue-500 opacity-30 transition-opacity duration-500 group-hover:opacity-100" />

              {/* INNER CARD */}
              <div className="relative flex h-full min-h-[205px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-[#09090b]/90 p-5 backdrop-blur-xl">

                {/* Card Purple Glow */}
                <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-purple-600/0 blur-[60px] transition-all duration-500 group-hover:bg-purple-600/20" />

                {/* Card Blue Glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-blue-600/0 blur-[60px] transition-all duration-500 group-hover:bg-blue-600/20" />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col">

                  {/* Icon + Title */}
                  <div className="mb-4 flex items-center gap-3">

                    {/* ICON */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-400 shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:border-purple-400/40 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white">

                      <div className="flex h-5 w-5 items-center justify-center">
                        {item.ui}
                      </div>

                    </div>

                    {/* TITLE */}
                    <h3 className="text-left text-[16px] font-semibold leading-6 text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent md:text-[17px]">
                      {item.title}
                    </h3>

                  </div>

                  {/* DIVIDER */}
                  <div className="mb-3 h-[1.5px] w-10 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-16" />

                  {/* DESCRIPTION */}
                  <p className="text-left text-[13px] leading-6 text-white/40 transition-all duration-300 group-hover:text-white/65 md:text-sm">
                    <span className="mr-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-bold text-transparent">
                      ✓
                    </span>
                    {item.desc}
                  </p>

                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />

              </div>

            </motion.div>
          ))}

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 max-w-[700px] border-t border-white/[0.08] pt-7"
        >
          <p className="text-xs leading-6 text-white/30 sm:text-sm">
            We bring technology, expertise, and innovation together to create
            solutions that help businesses move forward with confidence.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyUs;