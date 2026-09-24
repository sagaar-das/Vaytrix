import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is this a free service?",
    answer:
      "Yes, our service is free if you secure a job within a month with our support.",
  },
  {
    question: "Do you offer a free trial or demo services?",
    answer:
      "Yes, we offer both a free trial and demo services so you can experience our support firsthand.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No, we believe in transparency. There are no hidden charges.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a satisfaction-driven refund policy. If we don’t meet our commitments, you are eligible for a full refund.",
  },
  {
    question: "Do you offer support & training?",
    answer:
      "Absolutely! Our technical experts provide personalized training before your interviews, along with 100% support throughout your journey.",
  },
  {
    question: "Will you change my resume?",
    answer:
      "We don’t make changes to your resume, but we will help you upgrade and optimize it to be ATS-compliant, improving your job prospects.",
  },
  {
    question: "Can I provide a reference?",
    answer:
      "Of course! Feel free to provide any references, and we will be happy to consider them.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-24 lg:py-28">

      {/* =========================================================
          TECHNICAL GRID
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* =========================================================
          AMBIENT GLOWS
      ========================================================== */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#8B5CF6]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#06B6D4]/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#3B82F6]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =========================================================
            HEADING
        ========================================================== */}
        <div className="max-w-3xl">

          {/* LABEL */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#8B5CF6]/25
              bg-[#8B5CF6]/[0.07]
              px-4
              py-1.5
              backdrop-blur-md
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] shadow-[0_0_10px_rgba(139,92,246,0.8)]" />

            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A78BFA] sm:text-xs">
              FAQs
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mt-4
              text-2xl
              font-semibold
              leading-tight
              tracking-[-0.035em]
              text-[#F8FAFC]
              sm:mt-5
              sm:text-3xl
              md:text-4xl
            "
          >
            Frequently Asked{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#3B82F6]
                to-[#06B6D4]
                bg-clip-text
                text-transparent
              "
            >
              Questions
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#64748B]">
            Find answers to common questions about our services, support,
            training, and process.
          </p>
        </div>

        {/* =========================================================
            FAQ LIST
        ========================================================== */}
        <div className="mt-8 space-y-3 sm:mt-10">

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
                  ${
                    isOpen
                      ? "border-[#8B5CF6]/40 bg-[rgba(13,13,22,0.82)] shadow-[0_12px_35px_rgba(139,92,246,0.08)]"
                      : "border-white/[0.08] bg-[rgba(10,10,15,0.72)] hover:border-[#8B5CF6]/30 hover:bg-[rgba(13,13,22,0.8)]"
                  }
                `}
              >

                {/* =================================================
                    ACTIVE / HOVER ACCENT
                ================================================== */}
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
                    ${
                      isOpen
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                />

                {/* =================================================
                    QUESTION BUTTON
                ================================================== */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-5
                    py-4
                    text-left
                    sm:px-6
                    sm:py-5
                  "
                >

                  {/* QUESTION */}
                  <div className="flex min-w-0 items-center gap-4">

                    {/* NUMBER */}
                    <span
                      className={`
                        hidden
                        shrink-0
                        font-mono
                        text-[9px]
                        font-semibold
                        tracking-[0.15em]
                        transition-colors
                        duration-300
                        sm:block
                        ${
                          isOpen
                            ? "text-[#A78BFA]"
                            : "text-[#475569]"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>

                    <h3
                      className={`
                        text-sm
                        font-medium
                        leading-6
                        transition-colors
                        duration-300
                        sm:text-base
                        md:text-lg
                        ${
                          isOpen
                            ? "text-[#F8FAFC]"
                            : "text-[#CBD5E1] group-hover:text-[#F8FAFC]"
                        }
                      `}
                    >
                      {faq.question}
                    </h3>

                  </div>

                  {/* ICON */}
                  <div
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-[#A78BFA]"
                          : "border-white/[0.08] bg-white/[0.03] text-[#64748B] group-hover:border-[#8B5CF6]/30 group-hover:text-[#A78BFA]"
                      }
                    `}
                  >
                    {isOpen ? (
                      <Minus size={17} />
                    ) : (
                      <Plus size={17} />
                    )}
                  </div>

                </button>

                {/* =================================================
                    ANSWER
                ================================================== */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">

                    <div className="mx-5 mb-5 border-t border-white/[0.07] pt-4 sm:mx-6">

                      <div className="flex gap-4">

                        {/* ANSWER ACCENT */}
                        <div className="mt-1 hidden h-5 w-px shrink-0 bg-gradient-to-b from-[#8B5CF6] to-[#06B6D4] sm:block" />

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

        {/* =========================================================
            BOTTOM TECHNICAL LABEL
        ========================================================== */}
        <div className="mt-8 flex items-center justify-center gap-3">

          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#8B5CF6]/40" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#475569]">
            Need More Information?
          </span>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#06B6D4]/40" />

        </div>

      </div>
    </section>
  );
}

