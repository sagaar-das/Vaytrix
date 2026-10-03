// TechnologyTrends.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Database,
  Cpu,
  Globe2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const trends = [
  {
    id: "01",
    category: "AI / AUTOMATION",
    title: "AI & Intelligent Automation",
    description:
      "AI-powered systems are transforming business operations through intelligent decision-making, workflow automation, predictive insights, and personalized digital experiences.",
    icon: BrainCircuit,
    tags: ["Generative AI", "Automation", "AI Agents"],
  },
  {
    id: "02",
    category: "CLOUD",
    title: "Cloud-Native Architecture",
    description:
      "Modern businesses are moving toward scalable cloud-native platforms designed for flexibility, faster deployment, high availability, and seamless digital growth.",
    icon: Cloud,
    tags: ["Cloud", "Microservices", "DevOps"],
  },
  {
    id: "03",
    category: "SECURITY",
    title: "Cybersecurity & Zero Trust",
    description:
      "Security is becoming an intelligent, continuous process with Zero Trust architecture, identity-first protection, threat detection, and proactive risk management.",
    icon: ShieldCheck,
    tags: ["Zero Trust", "IAM", "Threat Detection"],
  },
  {
    id: "04",
    category: "DATA",
    title: "Data Intelligence & Analytics",
    description:
      "Organizations are using real-time analytics, modern data platforms, and intelligent dashboards to convert complex data into faster and more informed business decisions.",
    icon: Database,
    tags: ["Big Data", "Analytics", "BI"],
  },
  {
    id: "05",
    category: "EMERGING TECH",
    title: "Edge Computing & IoT",
    description:
      "Connected devices and edge computing are bringing processing closer to where data is generated, enabling faster responses across smart systems and connected environments.",
    icon: Cpu,
    tags: ["IoT", "Edge", "Real-Time"],
  },
  {
    id: "06",
    category: "DIGITAL EXPERIENCE",
    title: "Next-Gen Digital Experiences",
    description:
      "Businesses are creating faster, smarter, and more immersive digital experiences using modern web technologies, intelligent interfaces, and connected customer journeys.",
    icon: Globe2,
    tags: ["Web Apps", "UX", "Digital Platforms"],
  },
];

const TechnologyTrends = () => {
  return (
    <section
      id="technology-trends"
      className="relative overflow-hidden bg-[#050508] px-5 py-10 text-white sm:px-8 lg:px-10 lg:py-10"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-100px] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-violet-300"
          >
            <Sparkles size={14} />
            TECHNOLOGY INTELLIGENCE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          >
            Technology Trends
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Shaping Tomorrow
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-sm leading-7 text-white/55 sm:text-base"
          >
            We track emerging technologies and evolving digital capabilities
            to help businesses build smarter, faster, more secure, and
            future-ready solutions.
          </motion.p>
        </div>

        {/* Trend Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trends.map((trend, index) => {
            const Icon = trend.icon;

            return (
              <motion.article
                key={trend.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#08080d] p-6 transition-all duration-300 hover:border-violet-400/25 hover:shadow-[0_20px_70px_rgba(124,58,237,0.12)]"
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

                {/* Top Row */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300 transition-all duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-500/[0.14]">
                    <Icon size={21} />
                  </div>

                  <span className="font-mono text-xs text-white/20">
                    {trend.id}
                  </span>
                </div>

                {/* Category */}
                <div className="relative mt-6 text-[10px] font-semibold tracking-[0.2em] text-violet-400/80">
                  {trend.category}
                </div>

                {/* Title */}
                <h3 className="relative mt-2 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200">
                  {trend.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 text-sm leading-6 text-white/50">
                  {trend.description}
                </p>

                {/* Tags */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {trend.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[10px] text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <span className="text-xs text-white/30">
                    Future-ready technology
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/30 transition-all duration-300 group-hover:border-violet-400/30 group-hover:text-violet-300">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-white/25 sm:text-sm">
            AI • Cloud • Cybersecurity • Data • IoT • Digital Innovation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyTrends;




