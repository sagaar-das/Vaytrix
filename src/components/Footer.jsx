import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import logo from "../assets/LOGO.png";
import ev from "../assets/E-Verify_logo.webp";

function Footer() {
  const navigate = useNavigate();

  const services = [
    {
      name: "Software Development",
      path: "/services/software",
    },
    {
      name: "Application Development",
      path: "/services/app",
    },
    {
      name: "Management Consulting",
      path: "/services/consulting",
    },
    {
      name: "IT Staffing",
      path: "/services/it",
    },
    {
      name: "BPO / KPO",
      path: "/services/bpo",
    },
    {
      name: "AI & IoT Solutions",
      path: "/services/ai",
    },
  ];

  const company = [
    {
      name: "For Employers",
      path: "/for-employers",
    },
    {
      name: "Careers",
      path: "/careers",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Technology Trends",
      path: "/technology-trends",
    },
    {
      name: "Clients",
      path: "/clients",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-black">

      {/* ================= BACKGROUND GLOWS ================= */}

      {/* Purple Glow */}
      <div className="pointer-events-none absolute -left-[180px] top-[80px] h-[450px] w-[450px] rounded-full bg-purple-700/[0.12] blur-[150px]" />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute -right-[180px] bottom-[80px] h-[450px] w-[450px] rounded-full bg-blue-600/[0.12] blur-[150px]" />

      {/* Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-600/[0.03] via-violet-500/[0.06] to-blue-600/[0.03] blur-[140px]" />

      {/* ================= MAIN FOOTER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* ================= BRAND ================= */}

          <div className="max-w-[380px]">

            {/* LOGO */}
            <button
              onClick={() => navigate("/")}
              className="mb-6 flex items-center"
            >
              <img
                src={logo}
                alt="Vaytrix Logo"
                className="h-[42px] w-auto max-w-[150px] object-contain"
              />
            </button>

            <p className="text-sm leading-7 text-white/40">
              Building smarter digital experiences through technology,
              innovation, and strategic solutions designed to help modern
              businesses grow and move forward.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-7 flex gap-3">

              <a
                href="#"
                aria-label="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:text-white"
              >
                <Linkedin size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:text-white"
              >
                <Facebook size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:text-white"
              >
                <Instagram size={17} />
              </a>

            </div>
          </div>

          {/* ================= SERVICES ================= */}

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3">

              {services.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="group flex items-center gap-1 text-left text-[13px] text-white/40 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight
                      size={13}
                      className="text-white/0 transition-all duration-300 group-hover:text-purple-400"
                    />
                  </button>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= COMPANY ================= */}

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">

              {company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="group flex items-center gap-1 text-left text-[13px] text-white/40 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight
                      size={13}
                      className="text-white/0 transition-all duration-300 group-hover:text-blue-400"
                    />
                  </button>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="mb-5 text-sm font-semibold text-white">
              Get In Touch
            </h3>

            <div className="space-y-4">

              {/* EMAIL */}
              <div className="group flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-purple-400 transition-all duration-300 group-hover:border-purple-500/40 group-hover:bg-purple-500/10">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/25">
                    Email
                  </p>

                  <span className="text-[13px] text-white/50 transition group-hover:text-white">
                    info@vaytrix.com
                  </span>
                </div>

              </div>

              {/* PHONE */}
              <div className="group flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-blue-400 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/25">
                    Phone
                  </p>

                  <span className="text-[13px] text-white/50 transition group-hover:text-white">
                    +1 (000) 000-0000
                  </span>
                </div>

              </div>

              {/* LOCATION */}
              <div className="group flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-purple-400 transition-all duration-300 group-hover:border-purple-500/40 group-hover:bg-purple-500/10">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/25">
                    Location
                  </p>

                  <span className="text-[13px] leading-5 text-white/50 transition group-hover:text-white">
                    Austin, Texas, United States
                  </span>
                </div>

              </div>

            </div>

            {/* E-VERIFY */}
            <div className="mt-7">

              <p className="mb-3 text-[10px] uppercase tracking-[0.15em] text-white/25">
                Verified Partner
              </p>

              <div className="inline-flex rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md">
                <img
                  src={ev}
                  alt="E-Verify"
                  className="h-8 w-auto object-contain opacity-80"
                />
              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[11px] text-white/25">
            © 2026 Vaytrix. All rights reserved.
          </p>

          <button
            onClick={() => navigate("/privacy-policy")}
            className="text-left text-[11px] text-white/25 transition hover:text-purple-400 sm:text-right"
          >
            Privacy Policy
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;