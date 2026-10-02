import { ArrowUpRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050508] py-10 sm:py-24 md:py-10 lg:py-5">
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
      <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#06B6D4]/10 blur-[140px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center">

          {/* Technical Label */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[#94A3B8] sm:text-xs">
              Pricing / Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#F8FAFC] sm:text-5xl md:text-6xl lg:text-7xl">
            Technology Solutions
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Built Around Your Growth.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base md:text-lg md:leading-8">
            Explore flexible technology solutions designed for the evolving needs of our clients. Choose the right level of expertise, technology support, and solutions to help our clients achieve their goals and drive sustainable growth.
          </p>

          {/* Pricing Signal */}
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#8B5CF6]" />

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 shadow-[0_0_30px_rgba(139,92,246,0.12)]">
                <Sparkles
                  className="h-5 w-5 text-[#A855F7]"
                  strokeWidth={1.8}
                />
              </div>

              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#3B82F6]" />
            </div>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] sm:text-xs">
              Flexible Plans / Transparent Pricing
            </span>
          </div>

          {/* Bottom Technical Row */}
          <div className="mt-14 flex w-full max-w-3xl flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-5 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B]">
                VAYTRIX
              </span>

              <span className="h-px w-8 bg-[#8B5CF6]/40" />

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B]">
                PRICING ARCHITECTURE
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B]">
              Explore Plans
              <ArrowUpRight className="h-3.5 w-3.5 text-[#8B5CF6]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;