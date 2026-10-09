import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "Is there any cost to use the service?",
    answer:
      "Yes, we do charge bare minimal to initiate the service to get you full service.",
  },
  {
    question: "Can I try the service before getting started?",
    answer:
      "Yes, we provide both trial and demo options so you can understand our services and experience the support before moving forward.",
  },
  {
    question: "Are there any additional or hidden fees?",
    answer:
      "No. We follow a transparent approach and there are no hidden or unexpected charges.",
  },
  {
    question: "How does your refund policy work?",
    answer:
      "Our refund policy is based on the commitments we make. If we are unable to fulfil those commitments, you are eligible for a full refund.",
  },
  {
    question: "Do you provide training and ongoing support?",
    answer:
      "Yes. Our technical professionals provide personalized interview preparation and continuous support throughout your journey.",
  },
  {
    question: "Will you modify my existing resume?",
    answer:
      "We do not directly rewrite your resume. Instead, we guide you in improving and optimizing it for ATS compatibility and stronger job opportunities.",
  },
  {
    question: "Can I share a professional reference?",
    answer:
      "Absolutely. You can provide relevant references, and our team will be happy to review and consider them.",
  },
  {
    question: "Can i get H1B from you?",
    answer:
      "Yes you can depending upon the vacancy we have.",
  },
  {
    question: "Do you help STEM candidate?",
    answer:
      "Yes we do help them to get placement and Payroll.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-10  sm:px-6 sm:py-24 lg:px-8 lg:py-10">

      {/* =========================================================
          TECHNICAL GRID
      ========================================================== */}
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

      {/* =========================================================
          AMBIENT LIGHT
      ========================================================== */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-48 bottom-10 h-[420px] w-[420px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[140px]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="flex flex-col justify-center">

            {/* TECHNICAL LABEL */}
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/[0.07] px-4 py-2 backdrop-blur-md">

              <span className="font-mono text-[16px] font-medium tracking-[0.25em] text-[#7689a3]">
                08
              </span>

              <span className="h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />

              <span className="font-mono text-[16px] uppercase tracking-[0.22em] text-[#A78BFA]">

                Support / FAQ
              </span>

              <span className="h-px w-10 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]" />

            </div>

            {/* HEADING */}
            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#F8FAFC] sm:text-4xl md:text-5xl lg:text-[65px]">

              Everything You
              <br />

              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                Need to Know
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-md text-sm leading-7 text-[#94A3B8] sm:text-[16px]">
              Get clear information about our services, support, training,
              pricing, and the process before you begin your journey with us.
            </p>

            {/* TECHNICAL INFO */}
            <div className="mt-8 grid max-w-md grid-cols-2 gap-3">

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-md">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#8da2c0]">
                  Coverage
                </p>

                <p className="mt-2 text-lg font-semibold text-[#F8FAFC]">
                  07
                </p>

                <p className="mt-1 text-[13px] text-[#869bb8]">
                  Common questions
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-md">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#8da2c0]">
                  Support
                </p>

                <p className="mt-2 text-lg font-semibold text-[#F8FAFC]">
                  24/7
                </p>

                <p className="mt-1 text-[13px] text-[#869bb8]">
                  Guidance available
                </p>
              </div>

            </div>

            {/* SMALL TECHNICAL LINE */}
            <div className="mt-8 hidden items-center gap-3 lg:flex">

              <span className="h-px w-12 bg-gradient-to-r from-[#8B5CF6] to-transparent" />

              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#8098bb]">
                Information Center
              </span>

            </div>

          </div>

          {/* =====================================================
              RIGHT FAQ AREA
          ====================================================== */}
          <div>

            {/* SECTION HEADER */}
            <div className="mb-6 flex items-end justify-between">

              <div>
                <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#97afd0]">
                  Frequently Asked
                </p>

                <p className="mt-1 text-[15px] font-medium text-[#CBD5E1]">
                  Questions & Answers
                </p>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_rgba(6,182,212,0.8)]" />

                <span className="font-mono text-[15px] uppercase tracking-[0.16em] text-[#9cb3d4]">
                  Online
                </span>
              </div>

            </div>

            {/* FAQ LIST */}
            <div className="space-y-3">

              {faqs.map((faq, index) => {

                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      ${isOpen
                        ? "border-[#8B5CF6]/40 bg-[rgba(13,13,22,0.88)] shadow-[0_18px_45px_rgba(139,92,246,0.10)]"
                        : "border-white/[0.07] bg-[rgba(10,10,15,0.70)] hover:border-[#8B5CF6]/30 hover:bg-[rgba(13,13,22,0.82)]"
                      }
                    `}
                  >

                    {/* LEFT ACTIVE BAR */}
                    <div
                      className={`
                        absolute
                        left-0
                        top-0
                        h-full
                        w-[2px]
                        bg-gradient-to-b
                        from-[#8B5CF6]
                        via-[#3B82F6]
                        to-[#06B6D4]
                        transition-all
                        duration-300
                        ${isOpen
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                        }
                      `}
                    />

                    {/* TOP ACCENT */}
                    <div
                      className={`
                        pointer-events-none
                        absolute
                        left-0
                        right-0
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-[#8B5CF6]
                        to-transparent
                        transition-opacity
                        duration-300
                        ${isOpen
                          ? "opacity-60"
                          : "opacity-0 group-hover:opacity-40"
                        }
                      `}
                    />

                    {/* QUESTION */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 px-4 py-5 text-left sm:px-5"
                    >

                      {/* NUMBER */}
                      <span
                        className={`
                          hidden
                          w-7
                          shrink-0
                          font-mono
                          text-[12px]
                          font-semibold
                          tracking-[0.15em]
                          transition-colors
                          duration-300
                          sm:block
                          ${isOpen
                            ? "text-[#A78BFA]"
                            : "text-[#819bbe]"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      {/* QUESTION TEXT */}
                      <span
                        className={`
                          flex-1
                          text-sm
                          font-medium
                          leading-6
                          transition-colors
                          duration-300
                          sm:text-[15px]
                          ${isOpen
                            ? "text-[#F8FAFC]"
                            : "text-[#CBD5E1] group-hover:text-[#F8FAFC]"
                          }
                        `}
                      >
                        {faq.question}
                      </span>

                      {/* OPEN/CLOSE ICON */}
                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          transition-all
                          duration-300
                          ${isOpen
                            ? "border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-[#A78BFA]"
                            : "border-white/[0.08] bg-white/[0.025] text-[#64748B] group-hover:border-[#8B5CF6]/30 group-hover:text-[#A78BFA]"
                          }
                        `}
                      >
                        {isOpen ? (
                          <Minus size={16} />
                        ) : (
                          <Plus size={16} />
                        )}
                      </span>

                    </button>

                    {/* ANSWER */}
                    <div
                      className={`
                        grid
                        transition-all
                        duration-300
                        ease-in-out
                        ${isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">

                        <div className="mx-4 mb-5 border-t border-white/[0.07] pt-4 sm:mx-5">

                          <div className="flex gap-4">

                            {/* ANSWER INDICATOR */}
                            <div className="mt-1 hidden h-8 w-px shrink-0 bg-gradient-to-b from-[#8B5CF6] to-[#06B6D4] sm:block" />

                            <p className="text-sm leading-7 text-[#94A3B8]">
                              {faq.answer}
                            </p>

                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

