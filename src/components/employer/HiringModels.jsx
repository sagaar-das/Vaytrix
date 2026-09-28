import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import {
  BriefcaseBusiness,
  Users,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function HiringModels() {
  const navigate = useNavigate();

  const models = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Contract Staffing",
      desc: "Scale your workforce with skilled professionals for short-term assignments, long-term projects, or changing business requirements.",
      points: [
        "Fast deployment",
        "Flexible contracts",
        "Lower hiring risk",
      ],
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Contract-to-Hire",
      desc: "Evaluate a professional through real project experience before making a long-term employment decision.",
      points: [
        "Trial before hiring",
        "Reduced turnover",
        "Seamless transition",
      ],
      featured: true,
    },
    {
      icon: <BriefcaseBusiness className="h-6 w-6" />,
      title: "Direct Placement",
      desc: "Bring experienced professionals directly into your organization for permanent roles and long-term business growth.",
      points: [
        "Permanent employees",
        "Leadership hiring",
        "Executive search",
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
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/10 blur-[160px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl">

              <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#94A3B8] sm:text-xs">
                Hiring Architecture / 02
              </span>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#F8FAFC] sm:text-4xl md:text-5xl">

              Flexible Hiring Models for

              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                Every Business Need.
              </span>

            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
              Whether you need one technology professional or are building an
              entire team, choose an engagement model that aligns with your
              workforce strategy and business requirements.
            </p>
          </ScrollReveal>

        </div>

        {/* Models */}
        <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-3 lg:gap-6">

          {models.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className={`group relative rounded-2xl p-[1px] ${
                item.featured
                  ? "bg-gradient-to-br from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]"
                  : "bg-gradient-to-br from-[#8B5CF6]/30 via-transparent to-[#06B6D4]/25"
              }`}
            >

              <div
                className={`relative h-full overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 sm:p-7 lg:p-8 ${
                  item.featured
                    ? "border-[#8B5CF6]/40 bg-[rgba(10,10,15,0.92)] shadow-[0_25px_80px_rgba(139,92,246,0.12)]"
                    : "border-white/[0.08] bg-[rgba(10,10,15,0.78)] group-hover:border-[#8B5CF6]/40 group-hover:shadow-[0_25px_70px_rgba(139,92,246,0.08)]"
                }`}
              >

                {/* Hover Glows */}
                <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#8B5CF6]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#06B6D4]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">

                  {/* Card Top */}
                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#475569]">
                      Model / {String(index + 1).padStart(2, "0")}
                    </span>

                    {item.featured && (
                      <span className="rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-[#C4B5FD]">
                        Featured
                      </span>
                    )}

                  </div>

                  {/* Icon */}
                  <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#A78BFA] transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:bg-[#8B5CF6]/10 group-hover:text-[#C4B5FD]">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[#F8FAFC] transition-colors duration-300 group-hover:text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="mt-4 h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] transition-all duration-300 group-hover:w-20" />

                  {/* Description */}
                  <p className="mt-5 text-sm leading-7 text-[#64748B] transition-colors duration-300 group-hover:text-[#94A3B8]">
                    {item.desc}
                  </p>

                  {/* Points */}
                  <div className="mt-7 space-y-3">

                    {item.points.map((point, i) => (

                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 text-[#8B5CF6]"
                          strokeWidth={1.8}
                        />

                        <span className="text-sm text-[#CBD5E1]">
                          {point}
                        </span>
                      </div>

                    ))}

                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => navigate("/contact")}
                    className="group/btn mt-9 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#A78BFA] transition-colors hover:text-[#C4B5FD]"
                  >
                    Explore Hiring Model

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      strokeWidth={1.8}
                    />
                  </motion.button>

                  {/* Bottom Technical Detail */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-4">

                    <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#475569]">
                      VAYTRIX / TALENT
                    </span>

                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-[#475569] transition-colors group-hover:text-[#8B5CF6]"
                      strokeWidth={1.7}
                    />

                  </div>

                </div>
              </div>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default HiringModels;