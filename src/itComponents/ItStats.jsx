import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Star,
  Target,
  MessageSquareQuote,
  StarIcon,
} from "lucide-react";

function ItStats() {
  const stats = [
    {
      value: "200+",
      label: "Professionals Supported",
      detail: "Career journeys enabled",
      icon: BriefcaseBusiness,
      accent: "violet",
    },
    {
      value: "95%",
      label: "Interview Readiness",
      detail: "Successful interview outcomes",
      icon: Target,
      accent: "blue",
    },
    {
      value: "350+",
      label: "Hiring Partners",
      detail: "Connected business network",
      icon: Building2,
      accent: "cyan",
    },
    {
      value: "4.9/5",
      label: "Client Satisfaction",
      detail: "Experience across engagements",
      icon: Star,
      accent: "violet",
    },
    {
      value: "120+",
      label: "Google Reviews",
      detail: "Verified client feedback",
      icon: MessageSquareQuote,
      accent: "cyan",
    },
  ];

  const accentStyles = {
    violet: {
      icon: "text-[#A855F7]",
      bg: "bg-[#8B5CF6]/10",
      border: "border-[#8B5CF6]/20",
      glow: "group-hover:bg-[#8B5CF6]/[0.08]",
    },
    blue: {
      icon: "text-[#3B82F6]",
      bg: "bg-[#3B82F6]/10",
      border: "border-[#3B82F6]/20",
      glow: "group-hover:bg-[#3B82F6]/[0.08]",
    },
    cyan: {
      icon: "text-[#06B6D4]",
      bg: "bg-[#06B6D4]/10",
      border: "border-[#06B6D4]/20",
      glow: "group-hover:bg-[#06B6D4]/[0.08]",
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-1 sm:px-6 md:py-1 lg:px-10">
      {/* TECHNICAL GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* AMBIENT GLOWS */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#06B6D4]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            {/* TECHNICAL LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06B6D4] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06B6D4]" />
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] sm:text-xs">
              Performance signals / 02
            </span>
          </motion.div>

            <h2 className=" text-lg font-semibold tracking-tight text-[#F8FAFC] sm:text-[35px]">
              Staffing Network Insights
            </h2>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]" />

            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#91a8c8]">
              Live Metrics
            </span>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const style = accentStyles[stat.accent];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0A0A0F]/75 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] sm:p-5 ${style.glow}`}
              >
                {/* TOP LINE */}
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border ${style.border} ${style.bg}`}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      className={style.icon}
                    />
                  </div>

                  <span className="font-mono text-[15px] text-[#88a3c8]">
                    0{index + 1}
                  </span>
                </div>

                {/* VALUE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08 + 0.15,
                  }}
                  className="text-2xl font-semibold tracking-tight text-[#F8FAFC] sm:text-3xl"
                >
                  {stat.value}
                </motion.div>

                {/* LABEL */}
                <p className="mt-1.5 text-xs font-medium text-[#CBD5E1] sm:text-sm">
                  {stat.label}
                </p>

                {/* DETAIL */}
                <p className="mt-1 text-[12px] leading-5 text-[#889ebd] sm:text-xs">
                  {stat.detail}
                </p>

                {/* BOTTOM ACCENT */}
                <div className="mt-4 h-px w-full bg-white/[0.06]" />

                <div className="mt-3 flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${stat.accent === "violet"
                        ? "bg-[#8B5CF6]"
                        : stat.accent === "blue"
                          ? "bg-[#3B82F6]"
                          : "bg-[#06B6D4]"
                      }`}
                  />

                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#87a1c5]">
                    Verified Signal
                  </span>
                </div>

                {/* HOVER GLOW */}
                <div
                  className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${stat.accent === "violet"
                      ? "bg-[#8B5CF6]/20"
                      : stat.accent === "blue"
                        ? "bg-[#3B82F6]/20"
                        : "bg-[#06B6D4]/20"
                    }`}
                />
              </motion.div>
            );
          })}
        </div>


        {/* BOTTOM TECHNICAL FOOTER */}
        <div className="mt-5 flex items-center gap-3">
          <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#8ba6cc]">
            VAYTRIX / TALENT INTELLIGENCE
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />

          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#8fabd1]">
          02 / 08
        </span>
        </div>
      </div>
    </section>
  );
}

export default ItStats;