import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import {
  Users,
  Clock3,
  ShieldCheck,
  Zap,
  ArrowUpRight,
} from "lucide-react";

function EmployerBenefits() {
  const benefits = [
    {
      icon: <Users className="h-5 w-5 md:h-[22px] md:w-[22px]" />,
      title: "Pre-Vetted Technology Talent",
      desc: "Every professional is assessed before entering your hiring pipeline, helping you connect with candidates who are prepared for the role.",
    },
    {
      icon: <Clock3 className="h-5 w-5 md:h-[22px] md:w-[22px]" />,
      title: "Accelerated Hiring",
      desc: "Reduce recruitment timelines through a ready talent network and a streamlined process designed for faster candidate discovery.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 md:h-[22px] md:w-[22px]" />,
      title: "Quality-Focused Matching",
      desc: "We connect organizations with professionals aligned to their technical requirements, business needs, and role expectations.",
    },
    {
      icon: <Zap className="h-5 w-5 md:h-[22px] md:w-[22px]" />,
      title: "Flexible Engagement Models",
      desc: "Choose contract, permanent, or contract-to-hire models based on your workforce requirements and hiring strategy.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050508] px-5 py-10 sm:px-8 sm:py-10 lg:px-10 lg:py-10">

      {/* Technical Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[170px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 top-1/2 h-[350px] w-[350px] rounded-full bg-[#3B82F6]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl">

              <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#94A3B8] sm:text-xs">
                Employer Advantage / 01
              </span>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#F8FAFC] sm:text-4xl md:text-5xl">

              Hiring, Reimagined for

              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                Modern Technology Teams.
              </span>

            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
              Simplify your recruitment process with prepared technology
              professionals, faster talent discovery, quality-focused matching,
              and engagement models designed around your workforce needs.
            </p>
          </ScrollReveal>

        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-4">

          {benefits.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.015,
              }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#8B5CF6]/35 via-transparent to-[#06B6D4]/25"
            >

              <div className="relative flex h-full min-h-[225px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(10,10,15,0.78)] p-4 backdrop-blur-xl transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.10)] sm:min-h-[245px] sm:p-5 md:min-h-[260px] md:p-6">

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-[#8B5CF6]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#06B6D4]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card Content */}
                <div className="relative z-10 flex h-full flex-col">

                  {/* Number */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-[#475569]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-[#475569] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#A78BFA]"
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Icon */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#A78BFA] transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:bg-[#8B5CF6]/10 group-hover:text-[#C4B5FD] sm:h-11 sm:w-11">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-[14px] font-semibold leading-5 text-[#F8FAFC] sm:text-base md:mt-5 md:text-lg md:leading-6">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="mt-3 h-px w-8 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] transition-all duration-300 group-hover:w-14" />

                  {/* Description */}
                  <p className="mt-3 flex-grow text-[11px] leading-5 text-[#64748B] transition-colors duration-300 group-hover:text-[#94A3B8] sm:text-xs sm:leading-5 md:mt-4 md:text-sm md:leading-6">
                    {item.desc}
                  </p>

                </div>
              </div>
            </motion.div>

          ))}

        </div>

        {/* Bottom Technical Strip */}
        <ScrollReveal delay={0.35}>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-5 sm:flex-row">

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                Employer Talent Infrastructure
              </span>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#475569]">
              VAYTRIX / TALENT SOLUTIONS
            </span>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default EmployerBenefits;