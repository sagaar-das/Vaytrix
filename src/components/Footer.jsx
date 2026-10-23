
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FileText,
  ExternalLink,
  X,
} from "lucide-react";


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

import logo from "../assets/logo.png";
import ev from "../assets/E-Verify_logo.webp";

function Footer() {
  const navigate = useNavigate();
  const [isPdfOpen, setIsPdfOpen] = useState(false);

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
      name: "Home",
      path: "/",
    },
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
                className="h-[80px] w-auto max-w-[150px] object-contain"
              />
            </button>

            <p className="text-sm leading-7 text-white/70">
              Building smarter digital experiences through technology,
              innovation, and strategic solutions designed to help modern
              businesses grow and move forward.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-7 flex gap-3">

              <a
                href="https://www.linkedin.com/company/145247638/"
                target="_blank"
                  rel="noopener noreferrer"
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
            <h3 className="mb-5 text-[18px] font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3">

              {services.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="group flex items-center gap-1 text-left text-[15px] text-white/40 transition-all duration-300 hover:translate-x-1 hover:text-white"
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
            <h3 className="mb-5 text-[18px] font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">

              {company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="group flex items-center gap-1 text-left text-[15px] text-white/40 transition-all duration-300 hover:translate-x-1 hover:text-white"
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

            <h3 className="mb-5 text-[18px] font-semibold text-white">
              Get In Touch
            </h3>

            <div className="space-y-4">

              {/* EMAIL */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@vaytrixtechit.com&su=Hiring%20Inquiry%20-%20VaytrixTechIT&body=Hello%20VaytrixTechIT%20Team%2C%0A%0AI%20am%20interested%20in%20discussing%20your%20staffing%20and%20hiring%20services.%20I%20would%20like%20to%20understand%20how%20VaytrixTechIT%20can%20support%20our%20hiring%20requirements.%0A%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0A%0ARegards%2C%0A%5BYour%20Name%5D"
                target="_blank"
                rel="noopener noreferrer" className="group flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-purple-400 transition-all duration-300 group-hover:border-purple-500/40 group-hover:bg-purple-500/10">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="mb-1 text-[12px] uppercase tracking-[0.15em] text-white">
                    Email
                  </p>

                  <span className="text-[13px] text-white/50 transition group-hover:text-white">
                    info@vaytrixtechit.com
                  </span>
                </div>

              </a>

              {/* PHONE */}
              <a href="tel:+1 614-802-4217" className="group flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-blue-400 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="mb-1 text-[12px] uppercase tracking-[0.15em] text-white">
                    Phone
                  </p>

                  <span className="text-[13px] text-white/50 transition group-hover:text-white">
                    +1 614-802-4217
                  </span>
                </div>

              </a>

              {/* LOCATION */}
              <div className="group flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-purple-400 transition-all duration-300 group-hover:border-purple-500/40 group-hover:bg-purple-500/10">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="mb-1 text-[12px] uppercase tracking-[0.15em] text-white">
                    Location
                  </p>

                  <span className="text-[13px] leading-5 text-white/50 transition group-hover:text-white">
                    20 Cooper Square, New York, NY 10003, USA
                  </span>
                </div>

              </div>

            </div>

            
{/* ================= E-VERIFY PDF PREVIEW ================= */}

<div className="mt-7">
  <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-white/55">
    Verified Partner
  </p>

  <div
    className="group relative inline-block"
    onMouseEnter={() => setIsPdfOpen(true)}
    onMouseLeave={() => setIsPdfOpen(false)}
  >
    {/* E-Verify Badge */}
    <button
      type="button"
      onClick={() => setIsPdfOpen((prev) => !prev)}
      aria-expanded={isPdfOpen}
      aria-label="Preview E-Verify document"
      className="
        relative flex items-center justify-center
        overflow-hidden rounded-xl
        border border-white/10 bg-white/[0.03]
        px-4 py-3 backdrop-blur-md
        transition-all duration-300
        hover:border-violet-400/40
        hover:bg-violet-500/[0.08]
        hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]
      "
    >
      <img
        src={ev}
        alt="E-Verify"
        className="
          h-8 w-auto object-contain opacity-80
          transition-all duration-300
          group-hover:opacity-100
        "
      />

      <ExternalLink
        size={13}
        className="
          ml-3 text-slate-500
          transition-colors duration-300
          group-hover:text-cyan-300
        "
      />
    </button>

    {/* Floating PDF Preview */}
    <AnimatePresence>
      {isPdfOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setIsPdfOpen(true)}
          className="
            absolute bottom-full left-0 z-50 mb-3
            w-[min(340px,85vw)]
            overflow-hidden rounded-2xl
            border border-violet-400/25
            bg-[#090912]
            shadow-[0_20px_70px_rgba(0,0,0,0.65)]
          "
        >
          {/* Preview Header */}
          <div className="
            flex items-center justify-between
            border-b border-white/[0.08]
            bg-white/[0.025] px-4 py-3
          ">
            <div className="flex items-center gap-3">
              <div className="
                flex h-9 w-9 items-center justify-center
                rounded-lg border border-violet-400/20
                bg-violet-500/10 text-violet-300
              ">
                <FileText size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  E-Verify Document
                </p>
                <p className="mt-0.5 text-[10px] text-slate-500">
                  Official document preview
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsPdfOpen(false)}
              aria-label="Close PDF preview"
              className="
                rounded-lg p-2 text-slate-400
                transition hover:bg-white/10 hover:text-white
              "
            >
              <X size={15} />
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="h-[230px] bg-white">
            <iframe
              src="/documents/e-verify-license.pdf#toolbar=0&navpanes=0"
              title="E-Verify document preview"
              className="h-full w-full border-0"
            />
          </div>

          {/* Preview Footer */}
          <div className="
            flex items-center justify-between gap-3
            border-t border-white/[0.08] px-4 py-3
          ">
            <span className="text-[10px] text-slate-500">
              PDF DOCUMENT
            </span>

            <a
              href="/documents/e-verify-license.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsPdfOpen(false)}
              className="
                inline-flex items-center gap-2
                rounded-lg border border-violet-400/20
                bg-violet-500/10 px-3 py-2
                text-xs font-medium text-violet-200
                transition-all duration-300
                hover:border-cyan-400/30
                hover:bg-violet-500/20
                hover:text-cyan-200
              "
            >
              View PDF
              <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</div>


          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[12px] text-white/55">
            © 2026 Vaytrix. All rights reserved.
          </p>

          <button
            onClick={() => navigate("/privacy-policy")}
            className="text-left text-[12px] text-white/55 transition hover:text-purple-400 sm:text-right"
          >
            Privacy Policy
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;