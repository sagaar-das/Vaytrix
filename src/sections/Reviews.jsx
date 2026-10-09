import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Linkedin,
  Quote,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  const activeReview = reviews[activeIndex];

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setActiveIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  // Automatically change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="relative overflow-hidden bg-[#050508] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-10">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      {/* =========================================================
          MAIN
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="flex flex-col gap-5 border-b border-white/[0.08] pb-8 md:flex-row md:items-end md:justify-between">

          <div>

            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-4 flex items-center gap-3"
            >
               <span className="font-mono text-[16px] font-medium tracking-[0.25em] text-[#7689a3]">
                          06
                        </span>
          
                        <span className="h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />
          
                        <span className="font-mono text-[16px] uppercase tracking-[0.22em] text-[#A78BFA]">
                          Client Voices / 2026
                        </span>
          
                        <span className="h-px w-10 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                max-w-2xl
                text-3xl
                font-semibold
                leading-tight
                tracking-[-0.04em]
                text-[#F8FAFC]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Experiences that
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                {" "}speak for themselves
              </span>
            </motion.h2>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >

            <span className="font-mono text-[15px] uppercase tracking-[0.16em] text-[#8faad1]">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>

            <div className="h-px w-10 bg-white/[0.08]" />

            <span className="font-mono text-[15px] uppercase tracking-[0.16em] text-[#06B6D4]">
              Verified Experience
            </span>

          </motion.div>

        </div>


        {/* =======================================================
            FEATURED TESTIMONIAL
        ======================================================== */}

        <div className="relative mt-8 overflow-hidden border border-white/[0.08] bg-white/[0.015]">

          {/* TOP GRADIENT LINE */}

          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]" />


          <div className="grid lg:grid-cols-[1fr_320px]">

            {/* ===================================================
                QUOTE AREA
            ==================================================== */}

            <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">

              {/* BIG QUOTE */}

              <div className="absolute left-6 top-6 text-[100px] font-serif leading-none text-[#8B5CF6]/[0.06] sm:left-10 sm:text-[130px]">
                “
              </div>

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="relative z-10"
                >

                  {/* REVIEW NUMBER */}

                  <div className="mb-6 flex items-center gap-3">

                    <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#91a8c8]">
                      Testimonial
                    </span>

                    <span className="h-px w-5 bg-white/10" />

                    <span className="font-mono text-[15px] tracking-[0.15em] text-[#A855F7]">
                      0{activeIndex + 1}
                    </span>

                  </div>


                  {/* STARS */}

                  <div className="mb-5 flex gap-1">

                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className="fill-[#A855F7] text-[#A855F7]"
                      />
                    ))}

                  </div>


                  {/* QUOTE */}

                  <p
                    className="
                      max-w-3xl
                      text-xl
                      font-medium
                      leading-[1.6]
                      tracking-[-0.02em]
                      text-[#E2E8F0]
                      sm:text-2xl
                      lg:text-[27px]
                      lg:leading-[1.55]
                    "
                  >
                    “{activeReview.review}”
                  </p>


                  {/* DATE */}

                  <div className="mt-7 flex items-center gap-3">

                    <span className="font-mono text-[15px] uppercase tracking-[0.14em] text-[#8ea9cf]">
                      Published
                    </span>

                    <span className="font-mono text-[15px] tracking-[0.1em] text-[#90a8c8]">
                      {activeReview.date}
                    </span>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>


            {/* ===================================================
                PROFILE AREA
            ==================================================== */}

            <div className="relative border-t border-white/[0.08] bg-white/[0.02] px-6 py-7 lg:border-l lg:border-t-0 lg:px-8 lg:py-10">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -15,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="flex h-full flex-col justify-between"
                >

                  <div>

                    {/* PROFILE IMAGE */}

                    <div className="relative mb-6 inline-block">

                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] opacity-20 blur-md" />

                      <img
                        src={activeReview.image}
                        alt={activeReview.name}
                        className="
                          relative
                          h-20
                          w-20
                          rounded-full
                          border
                          border-white/[0.12]
                          object-cover
                        "
                      />

                    </div>


                    {/* NAME */}

                    <h3 className="text-[25px] font-semibold text-[#F8FAFC]">
                      {activeReview.name}
                    </h3>

                    <p className=" text-[15px] text-[#64748B]">
                      {activeReview.designation}
                    </p>

                    <p className="mt-1 text-[12px] font-medium text-[#A78BFA]">
                      {activeReview.company}
                    </p>

                  </div>


                  {/* LINKEDIN */}

                  <div className="mt-8 flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_rgba(6,182,212,0.7)]" />

                      <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#8da4c3]">
                        Professional Profile
                      </span>

                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#3B82F6]/20 bg-[#3B82F6]/10 text-[#60A5FA]">
                      <Linkedin size={14} />
                    </div>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

        </div>


        {/* =======================================================
            NAVIGATION
        ======================================================== */}

        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          {/* REVIEW SELECTORS */}

          <div className="flex flex-wrap items-center gap-2">

            {reviews.map((review, index) => (

              <button
                key={review.name}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
                className={`
                  group
                  relative
                  h-8
                  min-w-8
                  px-2
                  font-mono
                  text-[15px]
                  transition-all
                  duration-300
                  ${
                    activeIndex === index
                      ? "text-[#F8FAFC]"
                      : "text-[#475569] hover:text-[#CBD5E1]"
                  }
                `}
              >

                {String(index + 1).padStart(2, "0")}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    to-[#06B6D4]
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "w-full"
                        : "w-0 group-hover:w-1/2"
                    }
                  `}
                />

              </button>

            ))}

          </div>


          {/* PREVIOUS / NEXT */}

          <div className="flex items-center gap-2">

            <button
              onClick={previousReview}
              className="
                flex
                h-10
                w-12
                items-center
                justify-center
                border
                border-white/[0.08]
                bg-white/[0.02]
                text-[#64748B]
                transition-all
                duration-300
                hover:border-[#8B5CF6]/40
                hover:text-[#F8FAFC]
              "
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={25} />
            </button>

            <button
              onClick={nextReview}
              className="
                flex
                h-10
                w-12
                items-center
                justify-center
                border
                border-white/[0.08]
                bg-white/[0.02]
                text-[#64748B]
                transition-all
                duration-300
                hover:border-[#06B6D4]/40
                hover:text-[#F8FAFC]
              "
              aria-label="Next testimonial"
            >
              <ArrowRight size={25} />
            </button>

          </div>

        </div>


        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5"
        >

          <div className="flex items-center gap-3">

            <Quote size={13} className="text-[#8B5CF6]" />

            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#768eaf]">
              Real Experiences / Professional Journeys
            </span>

          </div>

          <span className="hidden font-mono text-[12px] uppercase tracking-[0.18em] text-[#819abd] sm:block">
            VAYTRIX / CLIENT VOICES
          </span>

        </motion.div>

      </div>
    </section>
  );
}

export default Reviews;
