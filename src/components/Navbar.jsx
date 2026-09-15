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
    `group relative text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-white"
        : "text-white/65 hover:text-white"
    }`;

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/[0.08]
        bg-black/80
        backdrop-blur-xl
      "
    >
      <div
        className="
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
              max-w-[140px]
              object-contain
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
                from-purple-500
                to-blue-500
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
                text-white/65
                transition-colors
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
                    from-purple-500
                    to-blue-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </span>

              <ChevronDown
                size={14}
                className={`
                  transition-transform
                  duration-300
                  ${
                    showDropdown
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>


            {/* Services Dropdown */}

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-10
                    w-[270px]
                    -translate-x-1/2
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#0b0b0b]/95
                    p-2
                    shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                    backdrop-blur-2xl
                  "
                >
                  {/* Dropdown Header */}

                  <div className="px-3 pb-2 pt-2">
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/30
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
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-3
                        text-left
                        text-sm
                        text-white/65
                        transition-all
                        duration-200
                        hover:bg-white/[0.06]
                        hover:text-white
                      "
                    >
                      <span>
                        {item.name}
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="
                          text-white/20
                          transition-all
                          duration-200
                          group-hover/item:-translate-y-0.5
                          group-hover/item:translate-x-0.5
                          group-hover/item:text-purple-400
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
                from-purple-500
                to-blue-500
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
                from-purple-500
                to-blue-500
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
                from-purple-500
                to-blue-500
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
                from-purple-500
                to-blue-500
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
            hidden
            items-center
            gap-2
            rounded-full
            bg-white
            px-5
            py-2.5
            text-sm
            font-semibold
            text-black
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-gradient-to-r
            hover:from-purple-500
            hover:to-blue-500
            hover:text-white
            lg:flex
          "
        >
          Let's Talk

          <ArrowUpRight size={15} />
        </button>


        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-white/[0.04]
            text-white
            transition
            hover:bg-white/[0.08]
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
              overflow-hidden
              border-t
              border-white/[0.08]
              bg-black
              lg:hidden
            "
          >
            <div className="px-5 py-5 sm:px-8">

              {/* Home */}

              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  border-b
                  border-white/[0.06]
                  py-4
                  text-sm
                  font-medium
                  text-white
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
                  "
                >
                  Services

                  <ChevronDown
                    size={16}
                    className={`
                      text-white/50
                      transition-transform
                      duration-300
                      ${
                        openServices
                          ? "rotate-180"
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
                              flex
                              w-full
                              items-center
                              justify-between
                              rounded-lg
                              px-3
                              py-3
                              text-left
                              text-sm
                              text-white/50
                              transition
                              hover:bg-white/[0.05]
                              hover:text-white
                            "
                          >
                            {item.name}

                            <ArrowUpRight
                              size={14}
                              className="text-white/20"
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
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-600
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(91,33,182,0.25)]
                "
              >
                Let's Talk
                <ArrowUpRight size={16} />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;