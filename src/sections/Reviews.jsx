import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import manoj from "../assets/testimonials/Biswaranjan.jpg";
import rahul from "../assets/testimonials/rahul.jpg";
import emily from "../assets/testimonials/emily.jpeg";

const reviews = [
  {
    review:
      "XlentIT completely transformed my job search. Within 3 months, I went from zero interviews to multiple offers from top tech companies. The mock interviews were game-changing!",
    name: "Biswaranjan kar",
    designation: "Software Engineer",
    company: "Oracle",
    image: manoj,
  },
  {
    review:
      "As an international student, I was struggling to understand the US job market. My career manager helped me navigate everything from resume formatting to interview prep. Landed my dream job!",
    name: "Rahul Sharma",
    designation: "Data Analyst",
    company: "Meta",
    image: rahul,
  },
  {
    review:
      "The personalized attention and 1-on-1 mentorship made all the difference. They don't just give you templates—they truly understand your unique situation and help accordingly.",
    name: "Emily Rodriguez",
    designation: "Product Manager",
    company: "Amazon",
    image: emily,
  },
];

function Reviews() {
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
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#8B5CF6]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#06B6D4]/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================================================
            HEADER
        ========================================================== */}
        <div className="mx-auto max-w-3xl text-center">

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#8B5CF6]/25
              bg-[#8B5CF6]/[0.07]
              px-5
              py-2
              backdrop-blur-md
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] shadow-[0_0_10px_rgba(139,92,246,0.8)]" />

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A78BFA] sm:text-xs">
              Success Stories
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="
              mt-6
              text-3xl
              font-semibold
              leading-tight
              tracking-[-0.035em]
              text-[#F8FAFC]
              sm:text-4xl
              md:text-5xl
            "
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Students
            </span>{" "}
            Say
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-[#94A3B8]
              sm:text-base
              md:text-lg
            "
          >
            Hear from professionals who successfully transformed their
            careers with XLENT IT Service.
          </motion.p>

        </div>

        {/* =========================================================
            REVIEWS
        ========================================================== */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -7,
                scale: 1.015,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[rgba(10,10,15,0.72)]
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#8B5CF6]/45
                hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)]
                sm:p-6
              "
            >

              {/* =================================================
                  CARD AMBIENT GLOW
              ================================================== */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#8B5CF6]/10
                  blur-[60px]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -left-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#06B6D4]/10
                  blur-[60px]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* TOP GRADIENT LINE */}
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#8B5CF6]/50
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10 flex h-full flex-col">

                {/* =================================================
                    CARD META
                ================================================== */}
                <div className="mb-5 flex items-center justify-between">

                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                    0{index + 1} / TESTIMONIAL
                  </span>

                  <Quote
                    className="
                      h-8
                      w-8
                      text-[#8B5CF6]/20
                      transition-colors
                      duration-300
                      group-hover:text-[#8B5CF6]/40
                    "
                  />

                </div>

                {/* =================================================
                    STARS
                ================================================== */}
                <div className="mb-5 flex gap-1">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="
                        h-3.5
                        w-3.5
                        fill-[#A855F7]
                        text-[#A855F7]
                        transition-all
                        duration-300
                        group-hover:fill-[#06B6D4]
                        group-hover:text-[#06B6D4]
                      "
                    />
                  ))}

                </div>

                {/* =================================================
                    REVIEW
                ================================================== */}
                <p
                  className="
                    flex-grow
                    text-sm
                    leading-7
                    text-[#94A3B8]
                    transition-colors
                    duration-300
                    group-hover:text-[#CBD5E1]
                  "
                >
                  "{review.review}"
                </p>

                {/* =================================================
                    DIVIDER
                ================================================== */}
                <div
                  className="
                    my-6
                    h-px
                    bg-white/[0.08]
                    transition-all
                    duration-300
                    group-hover:bg-[#8B5CF6]/30
                  "
                />

                {/* =================================================
                    USER
                ================================================== */}
                <div className="flex items-center gap-4">

                  {/* IMAGE */}
                  <div className="relative shrink-0">

                    <div
                      className="
                        absolute
                        -inset-1
                        rounded-full
                        bg-gradient-to-r
                        from-[#8B5CF6]
                        to-[#06B6D4]
                        opacity-30
                        blur-sm
                        transition-opacity
                        duration-300
                        group-hover:opacity-70
                      "
                    />

                    <img
                      src={review.image}
                      alt={review.name}
                      className="
                        relative
                        h-14
                        w-14
                        rounded-full
                        border-2
                        border-white/[0.12]
                        object-cover
                        transition-all
                        duration-300
                        group-hover:border-[#8B5CF6]/70
                      "
                    />

                  </div>

                  {/* USER INFO */}
                  <div className="min-w-0">

                    <h4 className="truncate text-sm font-semibold text-[#F8FAFC]">
                      {review.name}
                    </h4>

                    <p className="mt-0.5 text-xs text-[#64748B]">
                      {review.designation}
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        font-semibold
                        text-[#A78BFA]
                        transition-colors
                        duration-300
                        group-hover:text-[#06B6D4]
                      "
                    >
                      {review.company}
                    </p>

                  </div>

                </div>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================== */}
                <div
                  className="
                    mt-5
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    via-[#3B82F6]
                    to-[#06B6D4]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

              </div>
            </motion.div>
          ))}

        </div>

        {/* =========================================================
            BOTTOM TECHNICAL LABEL
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#8B5CF6]/50" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
            Real People / Real Outcomes
          </span>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </motion.div>

      </div>
    </section>
  );
}

export default Reviews;

