import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock,
  GraduationCap,
  Handshake,
  ShieldCheck,
  User,
  ArrowUpRight,
} from "lucide-react";

function ItWhyChooseUs() {
  const data = [
    {
      number: "01",
      title: "Placement-Focused Commitment",
      desc: "Our support continues beyond training, with a strong focus on helping you reach the right employment opportunity.",
      ui: <ShieldCheck size={21} strokeWidth={1.7} />,
      accent: "violet",
    },
    {
      number: "02",
      title: "Personal Career Guidance",
      desc: "A dedicated career professional stays with you throughout your search, helping you make informed decisions at every stage.",
      ui: <User size={21} strokeWidth={1.7} />,
      accent: "blue",
    },
    {
      number: "03",
      title: "Flexible Career Programs",
      desc: "Our approach adapts to your availability, experience, and objectives, whether you are beginning your career or already working.",
      ui: <Clock size={21} strokeWidth={1.7} />,
      accent: "cyan",
    },
    {
      number: "04",
      title: "Experienced Industry Mentors",
      desc: "Learn from professionals with current technology-industry experience and practical knowledge of modern hiring expectations.",
      ui: <GraduationCap size={21} strokeWidth={1.7} />,
      accent: "violet",
    },
    {
      number: "05",
      title: "350+ Hiring Connections",
      desc: "Gain access to an established network of hiring organizations seeking skilled professionals across technology roles.",
      ui: <Handshake size={21} strokeWidth={1.7} />,
      accent: "blue",
    },
    {
      number: "06",
      title: "Guidance Beyond Placement",
      desc: "Our support continues after you secure an opportunity, helping you navigate the next stages of your professional growth.",
      ui: <BadgeCheck size={21} strokeWidth={1.7} />,
      accent: "cyan",
    },
  ];

  const accentStyles = {
    violet: {
      icon: "text-[#A855F7]",
      iconBg: "bg-[#8B5CF6]/10",
      border: "group-hover:border-[#8B5CF6]/40",
      glow: "bg-[#8B5CF6]/10",
      number: "text-[#8B5CF6]",
    },
    blue: {
      icon: "text-[#3B82F6]",
      iconBg: "bg-[#3B82F6]/10",
      border: "group-hover:border-[#3B82F6]/40",
      glow: "bg-[#3B82F6]/10",
      number: "text-[#3B82F6]",
    },
    cyan: {
      icon: "text-[#06B6D4]",
      iconBg: "bg-[#06B6D4]/10",
      border: "group-hover:border-[#06B6D4]/40",
      glow: "bg-[#06B6D4]/10",
      number: "text-[#06B6D4]",
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-10 sm:px-6 md:py-10 lg:px-10">
      {/* TECHNICAL GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* AMBIENT GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-[#06B6D4]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            {/* EYEBROW */}
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8B5CF6] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8B5CF6]" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#94A3B8] sm:text-[10px]">
                Why Vaytrix / 04
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#F8FAFC] sm:text-4xl md:text-5xl">
              More Than Career Support
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                A System Built Around You
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
              We combine personalized guidance, industry expertise, hiring
              connections, and continued support to create a more structured
              path from professional preparation to long-term career growth.
            </p>
          </div>

          {/* HEADER META */}
          <div className="hidden shrink-0 md:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#475569]">
              VAYTRIX / ADVANTAGE
            </p>

            <div className="mt-3 flex items-center justify-end gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                06 Core Benefits
              </span>
            </div>
          </div>
        </motion.div>

        {/* BENEFIT GRID */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => {
            const style = accentStyles[item.accent];

            return (
              <motion.div
                key={item.number}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -5,
                }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0A0A0F]/75 p-5 backdrop-blur-xl transition-all duration-500 sm:p-6 ${style.border}`}
              >
                {/* HOVER GLOW */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100 ${style.glow}`}
                />

                {/* TOP ROW */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] ${style.iconBg}`}
                  >
                    <span className={style.icon}>{item.ui}</span>
                  </div>

                  <span
                    className={`font-mono text-[10px] tracking-[0.2em] opacity-70 ${style.number}`}
                  >
                    {item.number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-7">
                  <h3 className="text-lg font-semibold tracking-tight text-[#F8FAFC] transition-colors duration-300 group-hover:text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] transition-all duration-500 group-hover:w-20" />

                  <p className="mt-4 text-xs leading-6 text-[#64748B] transition-colors duration-300 group-hover:text-[#94A3B8] sm:text-sm">
                    {item.desc}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="relative z-10 mt-7 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_rgba(6,182,212,0.6)]" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
                      Vaytrix Advantage
                    </span>
                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.07] transition-all duration-300 group-hover:border-[#8B5CF6]/30 group-hover:bg-[#8B5CF6]/10">
                    <ArrowUpRight
                      size={13}
                      className="text-[#64748B] transition-colors group-hover:text-[#A855F7]"
                    />
                  </div>
                </div>

                {/* BOTTOM ACCENT */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER SIGNAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center gap-4"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#475569]">
            VAYTRIX / CAREER ADVANTAGE
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
            BUILD WITH CONFIDENCE
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default ItWhyChooseUs;