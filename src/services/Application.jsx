import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AppWindow,
  Sparkles,
  Smartphone,
  Monitor,
  Layers3,
} from "lucide-react";

function Application() {
  // =========================
  // Countdown Timer
  // =========================
  const calculateTimeLeft = () => {
    const targetDate = new Date("2027-01-01T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isLive =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  const countdown = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  // =========================
  // Application Development
  // =========================
  const services = [
    {
      icon: Monitor,
      title: "Web Applications",
      description:
        "Scalable web applications built around our clients' functional requirements, users, workflows, and digital goals.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Modern mobile applications designed for usability, performance, security, and seamless user experiences.",
    },
    {
      icon: Layers3,
      title: "Enterprise Applications",
      description:
        "Reliable enterprise applications that support complex workflows, integrations, automation, and long-term growth.",
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-20px)] overflow-hidden bg-[#050508] px-5 py-12 text-white sm:px-8 sm:py-14 lg:px-10 lg:py-16">
      {/* =========================
          Background
      ========================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Purple Glow */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[120px]" />

        {/* Blue Glow */}
        <div className="absolute bottom-0 right-0 h-[250px] w-[300px] rounded-full bg-[#3B82F6]/5 blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* =========================
          Main Content
      ========================= */}
      <div className="relative mx-auto flex min-h-[680px] max-w-6xl flex-col justify-center">
        {/* =========================
            Header
        ========================= */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#A78BFA]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Application Development
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Application{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">
              Development.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-400 sm:text-sm"
          >
            We create secure, scalable, and user-focused applications
            designed around the unique needs of our clients, helping them
            modernize operations and deliver better digital experiences.
          </motion.p>
        </div>

        {/* =========================
            Countdown
        ========================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-6 w-full max-w-3xl rounded-xl border border-white/[0.08] bg-white/[0.025] p-3 shadow-2xl shadow-black/20"
        >
          {/* Countdown Header */}
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AppWindow className="h-4 w-4 text-[#A78BFA]" />

              <span className="text-[11px] font-medium text-slate-300">
                {isLive ? "Now Live" : "Launching January 2027"}
              </span>
            </div>

            <span className="text-[10px] text-slate-500">
              01.01.2027
            </span>
          </div>

          {/* Countdown Boxes */}
          <div className="grid grid-cols-4 gap-2">
            {countdown.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/[0.06] bg-black/20 px-2 py-2 text-center"
              >
                <div className="text-xl font-semibold tabular-nums text-white sm:text-2xl">
                  {String(item.value).padStart(2, "0")}
                </div>

                <div className="mt-0.5 text-[9px] uppercase tracking-wider text-slate-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================
            Service Cards
        ========================= */}
        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.2 + index * 0.08,
                }}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#8B5CF6]/25 hover:bg-[#8B5CF6]/[0.035]"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8B5CF6]/10 text-[#A78BFA] transition-all duration-300 group-hover:bg-[#8B5CF6]/15">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="mt-3 text-sm font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-[11px] leading-5 text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =========================
            Bottom Text
        ========================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-7 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
            Scalable Applications / Modern Technology / Client-Focused
            Solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Application;