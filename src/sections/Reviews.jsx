import { motion } from "framer-motion";
import { Star, Linkedin, Quote, ArrowUpRight } from "lucide-react";

import manoj from "../assets/testimonials/Biswaranjan.jpg";
import rahul from "../assets/testimonials/rahul.jpg";
import emily from "../assets/testimonials/emily.jpeg";

const reviews = [
  {
    review:
      "Vaytrix gave my job search a completely new direction. The interview preparation and career guidance helped me move from limited opportunities to multiple interview calls.",
    name: "Biswaranjan Kar",
    designation: "Software Engineer",
    company: "Oracle",
    image: manoj,
    date: "Sep 18, 2026",
  },
  {
    review:
      "The team helped me understand the US job market and improve every part of my career profile. Their guidance from resume preparation to interview practice was extremely useful.",
    name: "Rahul Sharma",
    designation: "Data Analyst",
    company: "Meta",
    image: rahul,
    date: "Sep 12, 2026",
  },
  {
    review:
      "What stood out for me was the personal attention. The team understood my career goals and provided practical guidance instead of simply giving generic templates.",
    name: "Emily Rodriguez",
    designation: "Product Manager",
    company: "Amazon",
    image: emily,
    date: "Sep 05, 2026",
  },
  {
    review:
      "The overall experience was structured and professional. From resume improvement to interview preparation, every step was focused on helping me present my skills better.",
    name: "Arjun Mehta",
    designation: "Business Analyst",
    company: "Technology Sector",
    image: manoj,
    date: "Aug 29, 2026",
  },
  {
    review:
      "I appreciated the practical approach and continuous guidance. The sessions helped me become more confident while preparing for technical and behavioral interviews.",
    name: "Neha Patel",
    designation: "Software Developer",
    company: "Technology Sector",
    image: rahul,
    date: "Aug 24, 2026",
  },
  {
    review:
      "The career support was clear, personalized, and easy to follow. I received useful suggestions that helped me improve my professional profile and interview approach.",
    name: "Daniel Thomas",
    designation: "Data Engineer",
    company: "Technology Sector",
    image: emily,
    date: "Aug 20, 2026",
  },
  {
    review:
      "The team provided strong guidance throughout the process. Their feedback helped me understand where I needed improvement and how to communicate my experience effectively.",
    name: "Priya Nair",
    designation: "Project Manager",
    company: "Technology Sector",
    image: manoj,
    date: "Aug 16, 2026",
  },
  {
    review:
      "I found the mentorship sessions very valuable. The guidance was practical, focused on my goals, and helped me approach the job search with much more clarity.",
    name: "Michael Anderson",
    designation: "Product Analyst",
    company: "Technology Sector",
    image: rahul,
    date: "Aug 11, 2026",
  },
  {
    review:
      "The combination of career guidance, resume support, and interview preparation made the experience very useful. The team was responsive and professional throughout.",
    name: "Sneha Rao",
    designation: "Technology Consultant",
    company: "Technology Sector",
    image: emily,
    date: "Aug 06, 2026",
  },
];

function Reviews() {
  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-24 lg:py-28">

      {/* TECHNICAL GRID */}
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

      {/* AMBIENT GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="
              inline-flex items-center gap-3
              rounded-full
              border border-[#8B5CF6]/25
              bg-[#8B5CF6]/[0.07]
              px-5 py-2
              backdrop-blur-md
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] shadow-[0_0_10px_rgba(139,92,246,0.8)]" />

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A78BFA] sm:text-xs">
              Client Experiences
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
              Clients
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
            "
          >
            Discover how professionals and businesses have experienced our
            technology, consulting, and career-focused services.
          </motion.p>
        </div>

        {/* REVIEW GRID */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:mt-16">

          {reviews.map((review, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                flex
                min-h-[350px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[rgba(10,10,15,0.74)]
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#8B5CF6]/45
                hover:bg-[rgba(13,13,22,0.86)]
                hover:shadow-[0_25px_60px_rgba(139,92,246,0.14)]
                sm:p-6
              "
            >

              {/* CARD GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-44
                  w-44
                  rounded-full
                  bg-[#8B5CF6]/10
                  blur-[65px]
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
                  -bottom-20
                  -left-20
                  h-44
                  w-44
                  rounded-full
                  bg-[#06B6D4]/10
                  blur-[65px]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* TOP ACCENT */}
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#8B5CF6]
                  to-[#06B6D4]
                  opacity-40
                "
              />

              <div className="relative z-10 flex h-full flex-col">

                {/* TOP META */}
                <div className="flex items-center justify-between">

                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                    REVIEW / 0{index + 1}
                  </span>

                  {/* LINKEDIN */}
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-[#3B82F6]/25
                      bg-[#3B82F6]/10
                      text-[#60A5FA]
                      transition-all
                      duration-300
                      group-hover:border-[#3B82F6]/50
                      group-hover:bg-[#3B82F6]/20
                      group-hover:text-[#93C5FD]
                    "
                  >
                    <Linkedin size={15} strokeWidth={2} />
                  </div>
                </div>

                {/* RATING + DATE */}
                <div className="mt-5 flex items-center justify-between">

                  <div className="flex gap-1">
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

                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#64748B]">
                    {review.date}
                  </span>
                </div>

                {/* QUOTE ICON */}
                <div className="mt-5">
                  <Quote
                    size={26}
                    className="
                      text-[#8B5CF6]/30
                      transition-colors
                      duration-300
                      group-hover:text-[#8B5CF6]/60
                    "
                  />
                </div>

                {/* REVIEW */}
                <p
                  className="
                    mt-3
                    flex-grow
                    text-[13px]
                    leading-6
                    text-[#94A3B8]
                    transition-colors
                    duration-300
                    group-hover:text-[#CBD5E1]
                  "
                >
                  "{review.review}"
                </p>

                {/* DIVIDER */}
                <div className="my-5 h-px bg-white/[0.08]" />

                {/* USER */}
                <div className="flex items-center justify-between gap-3">

                  <div className="flex min-w-0 items-center gap-3">

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
                          h-11
                          w-11
                          rounded-full
                          border
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

                      <p className="mt-0.5 truncate text-[11px] text-[#64748B]">
                        {review.designation}
                      </p>

                      <p className="mt-0.5 truncate text-[11px] font-medium text-[#A78BFA]">
                        {review.company}
                      </p>

                    </div>
                  </div>

                  {/* ARROW */}
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      text-[#64748B]
                      transition-all
                      duration-300
                      group-hover:border-[#8B5CF6]/40
                      group-hover:text-[#A78BFA]
                    "
                  >
                    <ArrowUpRight size={14} />
                  </div>

                </div>

                {/* BOTTOM ACCENT */}
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
            </motion.article>
          ))}

        </div>

        {/* BOTTOM LABEL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#8B5CF6]/50" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
            Professional Experiences / 2026
          </span>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </motion.div>

      </div>
    </section>
  );
}

export default Reviews;

