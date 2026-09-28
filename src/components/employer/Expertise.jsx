import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import {
  Code2,
  Cloud,
  BrainCircuit,
  Building2,
  ArrowUpRight,
} from "lucide-react";

function Expertise() {
  const categories = [
    {
      title: "Software Development",
      icon: <Code2 className="h-5 w-5" />,
      code: "DEV",
      skills: [
        "React",
        "Angular",
        "Vue",
        "Node.js",
        "Java",
        "Python",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      code: "CLOUD",
      skills: [
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
      ],
    },
    {
      title: "Data & AI",
      icon: <BrainCircuit className="h-5 w-5" />,
      code: "DATA",
      skills: [
        "Machine Learning",
        "Data Engineering",
        "Power BI",
        "Tableau",
        "SQL",
        "Gen AI",
      ],
    },
    {
      title: "Enterprise Technologies",
      icon: <Building2 className="h-5 w-5" />,
      code: "ENTERPRISE",
      skills: [
        "SAP",
        "Salesforce",
        "Oracle",
        "Dynamics 365",
        "ServiceNow",
        "Workday",
      ],
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
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[170px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl">

              <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#94A3B8] sm:text-xs">
                Technology Expertise / 03
              </span>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#F8FAFC] sm:text-4xl md:text-5xl">

              Technology Talent Across

              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                Every Critical Domain.
              </span>

            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
              Connect with professionals across modern development, cloud,
              data, artificial intelligence, and enterprise technologies to
              support your organization's evolving technology needs.
            </p>
          </ScrollReveal>

        </div>

        {/* Expertise Grid */}
        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2">

          {categories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#8B5CF6]/30 via-transparent to-[#06B6D4]/25"
            >

              <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(10,10,15,0.78)] p-5 backdrop-blur-xl transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:shadow-[0_25px_70px_rgba(139,92,246,0.08)] sm:p-6 md:p-7">

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8B5CF6]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#06B6D4]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  {/* Card Header */}
                  <div className="flex items-start justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#A78BFA] transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:bg-[#8B5CF6]/10 group-hover:text-[#C4B5FD]">
                        {category.icon}
                      </div>

                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
                          Capability
                        </span>

                        <h3 className="mt-1 text-base font-semibold text-[#F8FAFC] transition-colors duration-300 group-hover:text-white sm:text-lg">
                          {category.title}
                        </h3>
                      </div>

                    </div>

                    <div className="flex items-center gap-2">

                      <span className="font-mono text-[8px] tracking-[0.16em] text-[#475569]">
                        {category.code}
                      </span>

                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-[#475569] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#8B5CF6]"
                        strokeWidth={1.7}
                      />

                    </div>

                  </div>

                  {/* Divider */}
                  <div className="mt-6 h-px w-full bg-white/[0.06]" />

                  {/* Skills */}
                  <div className="mt-5 flex flex-wrap gap-2.5">

                    {category.skills.map((skill, i) => (

                      <motion.span
                        key={i}
                        whileHover={{
                          scale: 1.04,
                        }}
                        className="cursor-default rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[11px] font-medium text-[#94A3B8] transition-all duration-300 hover:border-[#8B5CF6]/35 hover:bg-[#8B5CF6]/[0.06] hover:text-[#C4B5FD] sm:text-xs"
                      >
                        {skill}
                      </motion.span>

                    ))}

                  </div>

                  {/* Bottom */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">

                    <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#475569]">
                      Technology Coverage
                    </span>

                    <span className="font-mono text-[8px] text-[#64748B]">
                      {String(category.skills.length).padStart(2, "0")} SKILLS
                    </span>

                  </div>

                </div>
              </div>
            </motion.div>

          ))}

        </div>

        {/* Bottom Technical Strip */}
        <ScrollReveal delay={0.35}>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-5 sm:flex-row">

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
              Technology Capability Network
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#475569]">
              VAYTRIX / TECHNOLOGY EXPERTISE
            </span>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default Expertise;