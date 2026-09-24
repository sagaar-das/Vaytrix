import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  /* Close dropdown when clicking outside or scrolling */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    const handleScroll = () => {
      setShowDropdown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const serviceLinks = [
    {
      name: "Technology Solutions",
      id: "technology",
    },
    {
      name: "Software Development",
      id: "software",
    },
    {
      name: "Digital Solutions",
      id: "digital",
    },
    {
      name: "IT Consulting",
      id: "consulting",
    },
    {
      name: "Business Solutions",
      id: "business",
    },
    {
      name: "AI & Automation",
      id: "ai",
    },
  ];

  const navLinkClass = ({ isActive }) =>
    `group relative text-sm font-medium tracking-[-0.01em] transition-all duration-300 ${
      isActive
        ? "text-white"
        : "text-[#94A3B8] hover:text-white"
    }`;

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        overflow-visible
        border-b
        border-white/[0.08]
        bg-[#050508]/80
        backdrop-blur-2xl
      "
    >

      {/* ================= AMBIENT NAVBAR GLOW ================= */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

      <div className="pointer-events-none absolute -top-24 left-1/3 h-32 w-64 rounded-full bg-purple-600/[0.07] blur-[70px]" />

      <div className="pointer-events-none absolute -top-24 right-1/4 h-32 w-64 rounded-full bg-cyan-500/[0.05] blur-[70px]" />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          h-[78px]
          max-w-[1400px]
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* =========================
            LOGO
        ========================== */}

        <div
          className="
            group
            flex
            shrink-0
            cursor-pointer
            items-center
          "
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Vaytrix Logo"
            className="
              h-[55px]
              w-auto
              max-w-[150px]
              object-contain
              transition-all
              duration-300
              group-hover:scale-[1.02]
            "
          />
        </div>


        {/* =========================
            DESKTOP MENU
        ========================== */}

        <div className="hidden items-center gap-8 lg:flex">

          {/* Home */}
          <NavLink to="/" className={navLinkClass}>
            Home

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[1.5px]
                w-0
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#3B82F6]
                to-[#06B6D4]
                shadow-[0_0_10px_rgba(139,92,246,0.7)]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </NavLink>


          {/* Services */}
          <div
            ref={dropdownRef}
            className="relative"
          >
            <button
              onClick={() =>
                setShowDropdown((prev) => !prev)
              }
              className="
                group
                flex
                items-center
                gap-1.5
                bg-transparent
                text-sm
                font-medium
                tracking-[-0.01em]
                text-[#94A3B8]
                transition-all
                duration-300
                hover:text-white
              "
            >
              <span className="relative">
                Services

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[1.5px]
                    w-0
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    via-[#3B82F6]
                    to-[#06B6D4]
                    shadow-[0_0_10px_rgba(139,92,246,0.7)]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </span>

              <ChevronDown
                size={14}
                className={`
                  text-[#64748B]
                  transition-transform
                  duration-300
                  ${
                    showDropdown
                      ? "rotate-180 text-purple-400"
                      : ""
                  }
                `}
              />
            </button>


            {/* =========================
                SERVICES DROPDOWN
            ========================== */}

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-10
                    w-[285px]
                    -translate-x-1/2
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.12]
                    bg-[#11111A]/95
                    p-2
                    shadow-[0_24px_64px_-12px_rgba(0,0,0,0.85)]
                    backdrop-blur-2xl
                  "
                >

                  {/* Dropdown top glow */}
                  <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/80 to-transparent" />

                  {/* Dropdown Header */}

                  <div className="px-3 pb-2 pt-3">
                    <p
                      className="
                        font-mono
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#64748B]
                      "
                    >
                      What We Do
                    </p>
                  </div>

                  {serviceLinks.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        navigate(
                          `/services/${item.id}`
                        );
                        setShowDropdown(false);
                      }}
                      className="
                        group/item
                        relative
                        flex
                        w-full
                        items-center
                        justify-between
                        overflow-hidden
                        rounded-xl
                        px-3
                        py-3
                        text-left
                        text-sm
                        text-[#94A3B8]
                        transition-all
                        duration-200
                        hover:bg-white/[0.05]
                        hover:text-white
                      "
                    >

                      {/* Hover gradient */}
                      <span
                        className="
                          pointer-events-none
                          absolute
                          inset-y-0
                          left-0
                          w-0
                          bg-gradient-to-r
                          from-purple-500/[0.12]
                          to-transparent
                          transition-all
                          duration-300
                          group-hover/item:w-full
                        "
                      />

                      <span className="relative z-10">
                        {item.name}
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="
                          relative
                          z-10
                          text-[#64748B]
                          transition-all
                          duration-200
                          group-hover/item:-translate-y-0.5
                          group-hover/item:translate-x-0.5
                          group-hover/item:text-[#06B6D4]
                        "
                      />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          {/* Careers */}
          <NavLink
            to="/careers"
            className={navLinkClass}
          >
            Careers

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[1.5px]
                w-0
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#3B82F6]
                to-[#06B6D4]
                shadow-[0_0_10px_rgba(139,92,246,0.7)]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </NavLink>


          {/* For Employers */}
          <NavLink
            to="/for-employers"
            className={navLinkClass}
          >
            For Employers

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[1.5px]
                w-0
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#3B82F6]
                to-[#06B6D4]
                shadow-[0_0_10px_rgba(139,92,246,0.7)]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </NavLink>


          {/* About */}
          <NavLink
            to="/about"
            className={navLinkClass}
          >
            About Us

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[1.5px]
                w-0
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#3B82F6]
                to-[#06B6D4]
                shadow-[0_0_10px_rgba(139,92,246,0.7)]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </NavLink>


          {/* Contact */}
          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            Contact Us

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[1.5px]
                w-0
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#3B82F6]
                to-[#06B6D4]
                shadow-[0_0_10px_rgba(139,92,246,0.7)]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </NavLink>
        </div>


        {/* =========================
            DESKTOP CTA
        ========================== */}

        <button
          onClick={() => navigate("/contact")}
          className="
            group
            relative
            hidden
            items-center
            gap-2
            overflow-hidden
            rounded-full
            bg-gradient-to-r
            from-[#8B5CF6]
            via-[#3B82F6]
            to-[#06B6D4]
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-[0_4px_20px_-2px_rgba(139,92,246,0.45)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:brightness-110
            hover:shadow-[0_8px_30px_-2px_rgba(139,92,246,0.6),0_0_20px_rgba(6,182,212,0.2)]
            lg:flex
          "
        >

          {/* Button highlight */}
          <span
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-white/50
            "
          />

          <span className="relative z-10">
            Let's Talk
          </span>

          <ArrowUpRight
            size={15}
            className="
              relative
              z-10
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </button>


        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          className="
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            overflow-hidden
            rounded-lg
            border
            border-white/[0.1]
            bg-white/[0.04]
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-purple-500/50
            hover:bg-purple-500/[0.08]
            hover:text-purple-300
            lg:hidden
          "
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </div>


      {/* =========================
          MOBILE MENU
      ========================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              relative
              overflow-hidden
              border-t
              border-white/[0.08]
              bg-[#050508]/95
              backdrop-blur-2xl
              lg:hidden
            "
          >

            {/* Mobile menu glow */}
            <div className="pointer-events-none absolute -top-20 left-1/3 h-40 w-56 rounded-full bg-purple-600/[0.08] blur-[70px]" />

            <div className="relative px-5 py-5 sm:px-8">

              {/* Home */}

              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="
                  group
                  block
                  border-b
                  border-white/[0.06]
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:text-purple-300
                "
              >
                Home
              </NavLink>


              {/* Mobile Services */}

              <div className="border-b border-white/[0.06]">

                <button
                  onClick={() =>
                    setOpenServices(
                      (prev) => !prev
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    py-4
                    text-sm
                    font-medium
                    text-white
                    transition-colors
                    hover:text-purple-300
                  "
                >
                  Services

                  <ChevronDown
                    size={16}
                    className={`
                      text-[#64748B]
                      transition-transform
                      duration-300
                      ${
                        openServices
                          ? "rotate-180 text-purple-400"
                          : ""
                      }
                    `}
                  />
                </button>


                <AnimatePresence>
                  {openServices && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="overflow-hidden pb-3"
                    >
                      {serviceLinks.map(
                        (item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              navigate(
                                `/services/${item.id}`
                              );
                              setMenuOpen(false);
                              setOpenServices(
                                false
                              );
                            }}
                            className="
                              group/item
                              flex
                              w-full
                              items-center
                              justify-between
                              rounded-lg
                              border
                              border-transparent
                              px-3
                              py-3
                              text-left
                              text-sm
                              text-[#94A3B8]
                              transition-all
                              hover:border-purple-500/20
                              hover:bg-white/[0.04]
                              hover:text-white
                            "
                          >
                            {item.name}

                            <ArrowUpRight
                              size={14}
                              className="
                                text-[#64748B]
                                transition-colors
                                group-hover/item:text-cyan-400
                              "
                            />
                          </button>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>


              {/* Careers */}

              <NavLink
                to="/careers"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  block
                  border-b
                  border-white/[0.06]
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:text-purple-300
                "
              >
                Careers
              </NavLink>


              {/* For Employers */}

              <NavLink
                to="/for-employers"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  block
                  border-b
                  border-white/[0.06]
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:text-purple-300
                "
              >
                For Employers
              </NavLink>


              {/* About */}

              <NavLink
                to="/about"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  block
                  border-b
                  border-white/[0.06]
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:text-purple-300
                "
              >
                About Us
              </NavLink>


              {/* Contact */}

              <NavLink
                to="/contact"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  block
                  border-b
                  border-white/[0.06]
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:text-purple-300
                "
              >
                Contact Us
              </NavLink>


              {/* Mobile CTA */}

              <button
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
                className="
                  group
                  relative
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-[#8B5CF6]
                  via-[#3B82F6]
                  to-[#06B6D4]
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_4px_20px_-2px_rgba(139,92,246,0.45)]
                  transition-all
                  duration-300
                  hover:brightness-110
                  hover:shadow-[0_8px_30px_-2px_rgba(139,92,246,0.6),0_0_20px_rgba(6,182,212,0.2)]
                "
              >

                <span className="relative z-10">
                  Let's Talk
                </span>

                <ArrowUpRight
                  size={16}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />

              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;