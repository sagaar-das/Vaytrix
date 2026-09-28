import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import {
  ClipboardList,
  Search,
  Users,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

function HiringProcess() {
  const steps = [
    {
      number: "01",
      icon: <ClipboardList className="h-5 w-5" />,
      title: "Define Your Requirements",
      desc: "We understand your hiring objectives, required technology stack, role expectations, and organizational culture.",
    },
    {
      number: "02",
      icon: <Search className="h-5 w-5" />,
      title: "Identify Qualified Talent",
      desc: "Our recruitment team sources, evaluates, and shortlists professionals aligned with your requirements.",
    },
    {
      number: "03",
      icon: <Users className="h-5 w-5" />,
      title: "Interview & Select",
      desc: "Review shortlisted candidates, conduct interviews, and select the professionals who best match your organization.",
    },
    {
      number: "04",
      icon: <BadgeCheck className="h-5 w-5" />,
      title: "Onboard With Confidence",
      desc: "We support the transition through onboarding and help ensure a smooth start for your selected professional.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050508] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

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
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[170px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl">

              <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#94A3B8] sm:text-xs">
                Hiring Workflow / 04
              </span>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#F8FAFC] sm:text-4xl md:text-5xl">

              From Requirement

              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                To Successful Onboarding.
              </span>

            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
              A structured four-stage hiring workflow designed to connect your
              organization with the right professionals while keeping the
              recruitment journey clear and efficient.
            </p>
          </ScrollReveal>

        </div>

        {/* Timeline */}
        <div className="relative mt-12 sm:mt-16">

          {/* Desktop Connecting Line */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/70 to-transparent lg:block" />

          {/* Animated Progress Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-px origin-left bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] lg:block"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

            {steps.map((step, index) => (

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
                }}
                className="group relative"
              >

                {/* Step Node */}
                <div className="relative z-20 mx-auto flex h-[74px] w-[74px] flex-col items-center justify-center rounded-full border border-[#8B5CF6]/40 bg-[#0A0A0F] shadow-[0_0_30px_rgba(139,92,246,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#8B5CF6]/70 group-hover:shadow-[0_0_35px_rgba(139,92,246,0.18)]">

                  <div className="text-[#A78BFA] transition-colors duration-300 group-hover:text-[#C4B5FD]">
                    {step.icon}
                  </div>

                  <span className="mt-1 font-mono text-[9px] font-semibold tracking-[0.12em] text-[#64748B]">
                    {step.number}
                  </span>

                </div>

                {/* Card */}
                <div className="relative mt-6  overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(10,10,15,0.78)] p-5 text-center backdrop-blur-xl transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)] sm:p-6">

                  {/* Card Glow */}
                  <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[#8B5CF6]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-[#06B6D4]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">

                    {/* Technical Label */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#475569]">
                        Stage {step.number}
                      </span>

                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-[#475569] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#8B5CF6]"
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold leading-6 text-[#F8FAFC] transition-colors duration-300 group-hover:text-white sm:text-lg">
                      {step.title}
                    </h3>

                    {/* Divider */}
                    <div className="mx-auto mt-3 h-px w-8 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] transition-all duration-300 group-hover:w-16" />

                    {/* Description */}
                    <p className="mt-4 text-xs leading-6 text-[#64748B] transition-colors duration-300 group-hover:text-[#94A3B8] sm:text-sm">
                      {step.desc}
                    </p>

                  </div>
                </div>

              </motion.div>

            ))}

          </div>
        </div>

        {/* Bottom Technical Strip */}
        <ScrollReveal delay={0.35}>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-5 sm:flex-row">

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                Structured Hiring Workflow
              </span>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#475569]">
              VAYTRIX / EMPLOYER SOLUTIONS
            </span>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default HiringProcess;