import { Check, X, BriefcaseBusiness, ArrowUpRight } from "lucide-react";

const deliveryPlans = [
  {
    service: "Resume Marketing",
    premium: true,
    basic: true,
  },
  {
    service: "Associate Recruiter",
    premium: true,
    basic: true,
  },
  {
    service: "Personal Recruiter",
    premium: true,
    basic: false,
  },
  {
    service: "Up to 200 Applications (Depends on Daily Market Requirements)",
    premium: true,
    basic: true,
  },
  {
    service: "Email / LinkedIn Chat Support",
    premium: true,
    basic: false,
  },
  {
    service: "Automation Tools",
    premium: false,
    basic: false,
  },
  {
    service: "Full Time / W2",
    premium: true,
    basic: true,
  },
];

const DeliveryDepartment = () => {
  return (
    <section className="relative overflow-hidden bg-[#050508] py-20 sm:py-24 lg:py-28">
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
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#06B6D4]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">

          {/* Technical Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] sm:text-xs">
              Career Delivery / 04
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#F8FAFC] sm:text-4xl md:text-5xl">
            Move From Preparation
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              To Real Opportunities.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
            End-to-end job delivery support designed to expand your reach,
            connect you with relevant opportunities, and simplify the overall
            job search process.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(10,10,15,0.78)] shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">

          {/* Top Accent */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent" />

          {/* Desktop Header */}
          <div className="hidden grid-cols-[1fr_180px_180px] border-b border-white/[0.08] md:grid">

            {/* Services */}
            <div className="flex items-center gap-3 px-6 py-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                <BriefcaseBusiness
                  className="h-4 w-4 text-[#06B6D4]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                  Delivery Matrix
                </p>

                <p className="mt-1 text-sm font-semibold text-[#F8FAFC]">
                  Career Services
                </p>
              </div>
            </div>

            {/* Premium */}
            <div className="flex items-center justify-center border-l border-white/[0.06] bg-[#8B5CF6]/[0.04]">
              <div className="text-center">
                <span className="inline-flex rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 px-5 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C4B5FD]">
                  Premium
                </span>

                <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-[#64748B]">
                  Full Access
                </p>
              </div>
            </div>

            {/* Basic */}
            <div className="flex items-center justify-center border-l border-white/[0.06]">
              <div className="text-center">
                <span className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#94A3B8]">
                  Basic
                </span>

                <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-[#64748B]">
                  Core Access
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="grid grid-cols-[1fr_90px_90px] border-b border-white/[0.08] md:hidden">

            <div className="flex items-center px-4 py-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                Services
              </span>
            </div>

            <div className="flex items-center justify-center border-l border-white/[0.06] bg-[#8B5CF6]/[0.04]">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[#C4B5FD]">
                Premium
              </span>
            </div>

            <div className="flex items-center justify-center border-l border-white/[0.06]">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                Basic
              </span>
            </div>
          </div>

          {/* Rows */}
          {deliveryPlans.map((item, index) => (
            <div
              key={index}
              className="group grid grid-cols-[1fr_90px_90px] border-b border-white/[0.06] transition-all duration-300 last:border-0 hover:bg-white/[0.025] md:grid-cols-[1fr_180px_180px]"
            >
              {/* Service */}
              <div className="flex items-center gap-3 px-4 py-5 sm:px-6 sm:py-6">
                <span className="hidden font-mono text-[9px] text-[#64748B] sm:block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-xs font-medium leading-5 text-[#CBD5E1] transition-colors duration-300 group-hover:text-[#F8FAFC] sm:text-sm md:text-[15px]">
                  {item.service}
                </p>
              </div>

              {/* Premium */}
              <div className="flex items-center justify-center border-l border-white/[0.06] bg-[#8B5CF6]/[0.015]">
                {item.premium ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 shadow-[0_0_18px_rgba(139,92,246,0.12)]">
                    <Check
                      className="h-4 w-4 text-[#A78BFA]"
                      strokeWidth={2.5}
                    />
                  </div>
                ) : (
                  <X
                    className="h-4 w-4 text-[#475569]"
                    strokeWidth={1.8}
                  />
                )}
              </div>

              {/* Basic */}
              <div className="flex items-center justify-center border-l border-white/[0.06]">
                {item.basic ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#06B6D4]/25 bg-[#06B6D4]/[0.06]">
                    <Check
                      className="h-4 w-4 text-[#22D3EE]"
                      strokeWidth={2.5}
                    />
                  </div>
                ) : (
                  <X
                    className="h-4 w-4 text-[#475569]"
                    strokeWidth={1.8}
                  />
                )}
              </div>
            </div>
          ))}

          {/* Bottom Status */}
          <div className="flex flex-col gap-3 border-t border-white/[0.06] bg-white/[0.015] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#64748B]">
                Opportunity Delivery Matrix
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#64748B]">
              VAYTRIX
              <ArrowUpRight className="h-3 w-3 text-[#06B6D4]" />
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 text-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#475569]">
            Structured support from job search to opportunity delivery
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryDepartment;