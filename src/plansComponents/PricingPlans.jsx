import { Check, ArrowUpRight, Sparkles } from "lucide-react";

const PricingPlans = () => {
  const features = [
    "Resume Optimization",
    "Mock Interview Support",
    "Recruiter Assistance",
    "Technical Training Access",
    "Job Application Support",
    "Dedicated Career Guidance",
  ];

  return (
    <section className="relative overflow-hidden bg-[#050508] py-10 sm:py-10 lg:py-10">
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
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#3B82F6]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-[350px] w-[350px] rounded-full bg-[#06B6D4]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">

          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] sm:text-xs">
              Pricing Architecture / 05
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#F8FAFC] sm:text-4xl md:text-5xl">
            Choose Your
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Career Acceleration Plan.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
            Select a career support plan designed to strengthen your profile,
            improve interview readiness, expand your opportunities, and support
            your journey toward the next role.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[rgba(10,10,15,0.82)] shadow-[0_35px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">

          {/* Gradient Border Accent */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]" />

          {/* Corner Glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#8B5CF6]/10 blur-[80px]" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#06B6D4]/10 blur-[80px]" />

          <div className="relative p-7 sm:p-10 md:p-14">

            {/* Program Label */}
            <div className="flex flex-col items-center text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-2">
                <Sparkles
                  className="h-3.5 w-3.5 text-[#A78BFA]"
                  strokeWidth={1.8}
                />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#C4B5FD] sm:text-[10px]">
                  Career Acceleration Program
                </span>
              </div>

              {/* Main Title */}
              <h3 className="mt-7 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-[#F8FAFC] sm:text-3xl md:text-4xl">
                Start Building Your Next Career Move
              </h3>

              {/* Price Label */}
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B]">
                Plans Starting From
              </p>

              {/* Price */}
              <div className="mt-2 flex items-start justify-center">
                <span className="mt-4 mr-1 text-2xl font-medium text-[#94A3B8] sm:text-3xl">
                  $
                </span>

                <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-6xl font-bold tracking-[-0.05em] text-transparent sm:text-7xl md:text-8xl">
                  599
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
                Comprehensive career support designed to help you strengthen
                your professional profile, prepare for interviews, connect with
                opportunities, and move forward with greater confidence.
              </p>
            </div>

            {/* Divider */}
            <div className="my-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.08]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#475569]">
                Included Services
              </span>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.08]" />
            </div>

            {/* Features */}
            <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">

              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 transition-all duration-300 hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/[0.04]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#8B5CF6]/25 bg-[#8B5CF6]/10">
                    <Check
                      className="h-4 w-4 text-[#A78BFA]"
                      strokeWidth={2.5}
                    />
                  </div>

                  <div className="min-w-0">
                    <span className="mr-2 font-mono text-[9px] text-[#475569]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-[#CBD5E1] transition-colors group-hover:text-[#F8FAFC]">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Information */}
            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-6 sm:flex-row">

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#64748B]">
                  Career Support / Active
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#64748B]">
                VAYTRIX
                <ArrowUpRight className="h-3 w-3 text-[#8B5CF6]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-7 text-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#475569]">
            Flexible career support / Transparent starting price
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;