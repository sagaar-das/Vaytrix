import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[calc(100vh-78px)]
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      {/* Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-700/20
          blur-[130px]
        "
      />

      {/* Blue Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-600/20
          blur-[140px]
        "
      />

      {/* Subtle Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* =========================
          HERO CONTAINER
      ========================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-78px)]
          max-w-[1400px]
          items-center
          px-5
          py-20
          sm:px-8
          lg:px-10
          lg:py-24
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-10
          "
        >

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div className="relative z-10 max-w-[720px]">

            {/* Small Label */}
            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                backdrop-blur-sm
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-gradient-to-r
                  from-purple-500
                  to-blue-500
                  shadow-[0_0_12px_rgba(124,58,237,0.8)]
                "
              />

              <span className="text-[11px] font-medium tracking-[0.18em] text-white/60">
                DIGITAL SOLUTIONS FOR MODERN BUSINESS
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="
                text-[48px]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                sm:text-[62px]
                md:text-[72px]
                lg:text-[78px]
                xl:text-[88px]
              "
            >
              Build
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-purple-400
                  via-violet-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                something
              </span>

              <br></br>

              <span className="text-white">
                extraordinary.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[590px]
                text-[16px]
                leading-7
                text-white/55
                sm:text-[18px]
                sm:leading-8
              "
            >
              We create innovative digital solutions that help businesses
              simplify complexity, accelerate growth, and build experiences
              that truly make a difference.
            </p>

            {/* CTA Buttons */}
            <div
              className="
                mt-9
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              {/* Primary */}
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-600
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_40px_rgba(91,33,182,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_50px_rgba(37,99,235,0.3)]
                "
              >
                Let's Talk

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>

              {/* Secondary */}
              <a
                href="#services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.03]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white/80
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-white/[0.07]
                  hover:text-white
                "
              >
                Explore Services
                <span>↗</span>
              </a>
            </div>

            {/* Stats */}
            <div
              className="
                mt-14
                grid
                max-w-[570px]
                grid-cols-3
                border-t
                border-white/10
                pt-7
              "
            >
              <div>
                <p className="text-2xl font-semibold sm:text-3xl">
                  150+
                </p>

                <p className="mt-1 text-[11px] text-white/40 sm:text-xs">
                  Business Partners
                </p>
              </div>

              <div className="border-l border-white/10 pl-5 sm:pl-8">
                <p className="text-2xl font-semibold sm:text-3xl">
                  5000+
                </p>

                <p className="mt-1 text-[11px] text-white/40 sm:text-xs">
                  Placements
                </p>
              </div>

              <div className="border-l border-white/10 pl-5 sm:pl-8">
                <p className="text-2xl font-semibold sm:text-3xl">
                  95%
                </p>

                <p className="mt-1 text-[11px] text-white/40 sm:text-xs">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT VISUAL
          ========================== */}

          <div
            className="
              relative
              flex
              min-h-[420px]
              items-center
              justify-center
              lg:min-h-[560px]
            "
          >

            {/* Outer Glow */}
            <div
              className="
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                bg-gradient-to-r
                from-purple-600/20
                to-blue-600/20
                blur-[80px]
                sm:h-[380px]
                sm:w-[380px]
              "
            />

            {/* Decorative Ring */}
            <div
              className="
                absolute
                h-[330px]
                w-[330px]
                rounded-full
                border
                border-purple-500/10
                sm:h-[430px]
                sm:w-[430px]
                lg:h-[480px]
                lg:w-[480px]
              "
            />

            {/* Main Glass Card */}
            <div
              className="
                relative
                z-10
                w-[300px]
                rotate-[-3deg]
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.055]
                p-5
                shadow-[0_30px_100px_rgba(0,0,0,0.5)]
                backdrop-blur-2xl
                transition-transform
                duration-700
                hover:rotate-0
                sm:w-[380px]
                sm:p-6
              "
            >

              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="
                      h-9
                      w-9
                      rounded-xl
                      bg-gradient-to-br
                      from-purple-500
                      to-blue-500
                    "
                  />

                  <div>
                    <div className="h-2 w-20 rounded-full bg-white/30" />
                    <div className="mt-2 h-1.5 w-12 rounded-full bg-white/10" />
                  </div>
                </div>

                <div className="text-white/30">•••</div>
              </div>

              {/* Card Heading */}
              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Performance
                </p>

                <div className="mt-2 flex items-end gap-3">
                  <span className="text-4xl font-semibold">
                    84.6%
                  </span>

                  <span className="mb-1 text-xs text-blue-400">
                    +18.4%
                  </span>
                </div>
              </div>

              {/* Graph */}
              <div className="relative mt-8 h-[150px] overflow-hidden rounded-2xl border border-white/5 bg-black/20">

                {/* Graph Lines */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <span className="border-t border-white/5" />
                  <span className="border-t border-white/5" />
                  <span className="border-t border-white/5" />
                  <span className="border-t border-white/5" />
                </div>

                {/* Graph Shape */}
                <svg
                  viewBox="0 0 400 150"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="heroGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 125 C40 120, 55 105, 90 110 S140 70, 175 85 S220 95, 250 60 S300 70, 330 35 S370 45, 400 15"
                    fill="none"
                    stroke="url(#heroGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Bottom Cards */}
              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-2xl border border-white/5 bg-white/[0.04] p-4">
                  <p className="text-[10px] text-white/30">
                    Growth
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    +42.8%
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.04] p-4">
                  <p className="text-[10px] text-white/30">
                    Projects
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    248
                  </p>
                </div>

              </div>
            </div>

            {/* Floating Badge */}
            <div
              className="
                absolute
                bottom-10
                left-1
                z-20
                rounded-2xl
                border
                border-white/10
                bg-black/70
                px-4
                py-3
                shadow-xl
                backdrop-blur-xl
                sm:bottom-16
                sm:left-0
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-purple-500
                    to-blue-500
                    text-sm
                  "
                >
                  ✓
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    Trusted Solutions
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/40">
                    Built for growth
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Number */}
            <div
              className="
                absolute
                right-0
                top-16
                z-20
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                px-5
                py-4
                backdrop-blur-xl
                sm:right-2
                lg:right-0
              "
            >
              <p className="text-[10px] uppercase tracking-wider text-white/30">
                Success Rate
              </p>

              <p
                className="
                  mt-1
                  bg-gradient-to-r
                  from-purple-400
                  to-blue-400
                  bg-clip-text
                  text-2xl
                  font-bold
                  text-transparent
                "
              >
                95%
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-32
          w-full
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />
    </section>
  );
};

export default Hero;